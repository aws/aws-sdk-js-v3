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
} from "@smithy/types";

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import {
  BatchStartViewerSessionRevocationRequest,
  BatchStartViewerSessionRevocationResponse,
} from "../models/models_0";
import {
  de_BatchStartViewerSessionRevocationCommand,
  se_BatchStartViewerSessionRevocationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchStartViewerSessionRevocationCommand}.
 */
export interface BatchStartViewerSessionRevocationCommandInput extends BatchStartViewerSessionRevocationRequest {}
/**
 * @public
 *
 * The output of {@link BatchStartViewerSessionRevocationCommand}.
 */
export interface BatchStartViewerSessionRevocationCommandOutput
  extends BatchStartViewerSessionRevocationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Performs <a>StartViewerSessionRevocation</a> on multiple channel ARN and viewer
 *       ID pairs simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, BatchStartViewerSessionRevocationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, BatchStartViewerSessionRevocationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // BatchStartViewerSessionRevocationRequest
 *   viewerSessions: [ // BatchStartViewerSessionRevocationViewerSessionList // required
 *     { // BatchStartViewerSessionRevocationViewerSession
 *       channelArn: "STRING_VALUE", // required
 *       viewerId: "STRING_VALUE", // required
 *       viewerSessionVersionsLessThanOrEqualTo: Number("int"),
 *     },
 *   ],
 * };
 * const command = new BatchStartViewerSessionRevocationCommand(input);
 * const response = await client.send(command);
 * // { // BatchStartViewerSessionRevocationResponse
 * //   errors: [ // BatchStartViewerSessionRevocationErrors
 * //     { // BatchStartViewerSessionRevocationError
 * //       channelArn: "STRING_VALUE", // required
 * //       viewerId: "STRING_VALUE", // required
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchStartViewerSessionRevocationCommandInput - {@link BatchStartViewerSessionRevocationCommandInput}
 * @returns {@link BatchStartViewerSessionRevocationCommandOutput}
 * @see {@link BatchStartViewerSessionRevocationCommandInput} for command's `input` shape.
 * @see {@link BatchStartViewerSessionRevocationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
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
export class BatchStartViewerSessionRevocationCommand extends $Command<
  BatchStartViewerSessionRevocationCommandInput,
  BatchStartViewerSessionRevocationCommandOutput,
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
  constructor(readonly input: BatchStartViewerSessionRevocationCommandInput) {
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
  ): Handler<BatchStartViewerSessionRevocationCommandInput, BatchStartViewerSessionRevocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchStartViewerSessionRevocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "BatchStartViewerSessionRevocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: BatchStartViewerSessionRevocationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchStartViewerSessionRevocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchStartViewerSessionRevocationCommandOutput> {
    return de_BatchStartViewerSessionRevocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
