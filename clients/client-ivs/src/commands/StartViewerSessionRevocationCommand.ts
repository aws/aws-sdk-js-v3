// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { StartViewerSessionRevocationRequest, StartViewerSessionRevocationResponse } from "../models/models_0";
import {
  de_StartViewerSessionRevocationCommand,
  se_StartViewerSessionRevocationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartViewerSessionRevocationCommand}.
 */
export interface StartViewerSessionRevocationCommandInput extends StartViewerSessionRevocationRequest {}
/**
 * @public
 *
 * The output of {@link StartViewerSessionRevocationCommand}.
 */
export interface StartViewerSessionRevocationCommandOutput
  extends StartViewerSessionRevocationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts the process of revoking the viewer session associated with a specified channel ARN
 *       and viewer ID. Optionally, you can provide a version to revoke viewer sessions less than and
 *       including that version. For instructions on associating a viewer ID with a viewer session, see
 *         <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up
 *         Private Channels</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, StartViewerSessionRevocationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, StartViewerSessionRevocationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // StartViewerSessionRevocationRequest
 *   channelArn: "STRING_VALUE", // required
 *   viewerId: "STRING_VALUE", // required
 *   viewerSessionVersionsLessThanOrEqualTo: Number("int"),
 * };
 * const command = new StartViewerSessionRevocationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartViewerSessionRevocationCommandInput - {@link StartViewerSessionRevocationCommandInput}
 * @returns {@link StartViewerSessionRevocationCommandOutput}
 * @see {@link StartViewerSessionRevocationCommandInput} for command's `input` shape.
 * @see {@link StartViewerSessionRevocationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 */
export class StartViewerSessionRevocationCommand extends $Command<
  StartViewerSessionRevocationCommandInput,
  StartViewerSessionRevocationCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartViewerSessionRevocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartViewerSessionRevocationCommandInput, StartViewerSessionRevocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartViewerSessionRevocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "StartViewerSessionRevocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonInteractiveVideoService",
        operation: "StartViewerSessionRevocation",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartViewerSessionRevocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartViewerSessionRevocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartViewerSessionRevocationCommandOutput> {
    return de_StartViewerSessionRevocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
