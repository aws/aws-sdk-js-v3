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

import { SetReceiptRulePositionRequest, SetReceiptRulePositionResponse } from "../models/models_0";
import { de_SetReceiptRulePositionCommand, se_SetReceiptRulePositionCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetReceiptRulePositionCommand}.
 */
export interface SetReceiptRulePositionCommandInput extends SetReceiptRulePositionRequest {}
/**
 * @public
 *
 * The output of {@link SetReceiptRulePositionCommand}.
 */
export interface SetReceiptRulePositionCommandOutput extends SetReceiptRulePositionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sets the position of the specified receipt rule in the receipt rule set.</p>
 *          <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetReceiptRulePositionCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetReceiptRulePositionCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SetReceiptRulePositionRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   RuleName: "STRING_VALUE", // required
 *   After: "STRING_VALUE",
 * };
 * const command = new SetReceiptRulePositionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetReceiptRulePositionCommandInput - {@link SetReceiptRulePositionCommandInput}
 * @returns {@link SetReceiptRulePositionCommandOutput}
 * @see {@link SetReceiptRulePositionCommandInput} for command's `input` shape.
 * @see {@link SetReceiptRulePositionCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link RuleDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule does not exist.</p>
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example SetReceiptRulePosition
 * ```javascript
 * // The following example sets the position of a receipt rule in a receipt rule set:
 * const input = {
 *   "After": "PutRuleAfterThisRule",
 *   "RuleName": "RuleToReposition",
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new SetReceiptRulePositionCommand(input);
 * await client.send(command);
 * // example id: setreceiptruleposition-1469058530550
 * ```
 *
 */
export class SetReceiptRulePositionCommand extends $Command<
  SetReceiptRulePositionCommandInput,
  SetReceiptRulePositionCommandOutput,
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
  constructor(readonly input: SetReceiptRulePositionCommandInput) {
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
  ): Handler<SetReceiptRulePositionCommandInput, SetReceiptRulePositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetReceiptRulePositionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetReceiptRulePositionCommand";
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
  private serialize(input: SetReceiptRulePositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetReceiptRulePositionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetReceiptRulePositionCommandOutput> {
    return de_SetReceiptRulePositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
