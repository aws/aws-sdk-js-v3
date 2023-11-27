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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { StartInvestigationRequest, StartInvestigationResponse } from "../models/models_0";
import { de_StartInvestigationCommand, se_StartInvestigationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartInvestigationCommand}.
 */
export interface StartInvestigationCommandInput extends StartInvestigationRequest {}
/**
 * @public
 *
 * The output of {@link StartInvestigationCommand}.
 */
export interface StartInvestigationCommandOutput extends StartInvestigationResponse, __MetadataBearer {}

/**
 * @public
 * <p>initiate an investigation on an entity in a graph</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartInvestigationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartInvestigationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // StartInvestigationRequest
 *   GraphArn: "STRING_VALUE", // required
 *   EntityArn: "STRING_VALUE", // required
 *   ScopeStartTime: new Date("TIMESTAMP"), // required
 *   ScopeEndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new StartInvestigationCommand(input);
 * const response = await client.send(command);
 * // { // StartInvestigationResponse
 * //   InvestigationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartInvestigationCommandInput - {@link StartInvestigationCommandInput}
 * @returns {@link StartInvestigationCommandOutput}
 * @see {@link StartInvestigationCommandInput} for command's `input` shape.
 * @see {@link StartInvestigationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class StartInvestigationCommand extends $Command<
  StartInvestigationCommandInput,
  StartInvestigationCommandOutput,
  DetectiveClientResolvedConfig
> {
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
  constructor(readonly input: StartInvestigationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartInvestigationCommandInput, StartInvestigationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartInvestigationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "StartInvestigationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDetective",
        operation: "StartInvestigation",
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
  private serialize(input: StartInvestigationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartInvestigationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartInvestigationCommandOutput> {
    return de_StartInvestigationCommand(output, context);
  }
}
