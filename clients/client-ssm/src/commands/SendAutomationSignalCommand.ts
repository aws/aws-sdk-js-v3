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

import { SendAutomationSignalRequest, SendAutomationSignalResult } from "../models/models_1";
import { de_SendAutomationSignalCommand, se_SendAutomationSignalCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendAutomationSignalCommand}.
 */
export interface SendAutomationSignalCommandInput extends SendAutomationSignalRequest {}
/**
 * @public
 *
 * The output of {@link SendAutomationSignalCommand}.
 */
export interface SendAutomationSignalCommandOutput extends SendAutomationSignalResult, __MetadataBearer {}

/**
 * @public
 * <p>Sends a signal to an Automation execution to change the current behavior or status of the
 *    execution. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, SendAutomationSignalCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, SendAutomationSignalCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // SendAutomationSignalRequest
 *   AutomationExecutionId: "STRING_VALUE", // required
 *   SignalType: "Approve" || "Reject" || "StartStep" || "StopStep" || "Resume", // required
 *   Payload: { // AutomationParameterMap
 *     "<keys>": [ // AutomationParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SendAutomationSignalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendAutomationSignalCommandInput - {@link SendAutomationSignalCommandInput}
 * @returns {@link SendAutomationSignalCommandOutput}
 * @see {@link SendAutomationSignalCommandInput} for command's `input` shape.
 * @see {@link SendAutomationSignalCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AutomationExecutionNotFoundException} (client fault)
 *  <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 *
 * @throws {@link AutomationStepNotFoundException} (client fault)
 *  <p>The specified step name and execution ID don't exist. Verify the information and try
 *    again.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAutomationSignalException} (client fault)
 *  <p>The signal isn't valid for the current Automation execution.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class SendAutomationSignalCommand extends $Command<
  SendAutomationSignalCommandInput,
  SendAutomationSignalCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: SendAutomationSignalCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendAutomationSignalCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "SendAutomationSignalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "SendAutomationSignal",
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
  private serialize(input: SendAutomationSignalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendAutomationSignalCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAutomationSignalCommandOutput> {
    return de_SendAutomationSignalCommand(output, context);
  }
}
