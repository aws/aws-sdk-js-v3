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

import { SetActiveReceiptRuleSetRequest, SetActiveReceiptRuleSetResponse } from "../models/models_0";
import { de_SetActiveReceiptRuleSetCommand, se_SetActiveReceiptRuleSetCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetActiveReceiptRuleSetCommand}.
 */
export interface SetActiveReceiptRuleSetCommandInput extends SetActiveReceiptRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link SetActiveReceiptRuleSetCommand}.
 */
export interface SetActiveReceiptRuleSetCommandOutput extends SetActiveReceiptRuleSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sets the specified receipt rule set as the active receipt rule set.</p>
 *          <note>
 *             <p>To disable your email-receiving through Amazon SES completely, you can call this
 *                 operation with <code>RuleSetName</code> set to null.</p>
 *          </note>
 *          <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetActiveReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetActiveReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SetActiveReceiptRuleSetRequest
 *   RuleSetName: "STRING_VALUE",
 * };
 * const command = new SetActiveReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetActiveReceiptRuleSetCommandInput - {@link SetActiveReceiptRuleSetCommandInput}
 * @returns {@link SetActiveReceiptRuleSetCommandOutput}
 * @see {@link SetActiveReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link SetActiveReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example SetActiveReceiptRuleSet
 * ```javascript
 * // The following example sets the active receipt rule set:
 * const input = {
 *   "RuleSetName": "RuleSetToActivate"
 * };
 * const command = new SetActiveReceiptRuleSetCommand(input);
 * await client.send(command);
 * // example id: setactivereceiptruleset-1469058391329
 * ```
 *
 */
export class SetActiveReceiptRuleSetCommand extends $Command<
  SetActiveReceiptRuleSetCommandInput,
  SetActiveReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: SetActiveReceiptRuleSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetActiveReceiptRuleSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetActiveReceiptRuleSetCommand";
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
  private serialize(input: SetActiveReceiptRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetActiveReceiptRuleSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetActiveReceiptRuleSetCommandOutput> {
    return de_SetActiveReceiptRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
