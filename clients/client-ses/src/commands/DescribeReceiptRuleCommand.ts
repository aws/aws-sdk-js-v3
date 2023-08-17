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

import { DescribeReceiptRuleRequest, DescribeReceiptRuleResponse } from "../models/models_0";
import { de_DescribeReceiptRuleCommand, se_DescribeReceiptRuleCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReceiptRuleCommand}.
 */
export interface DescribeReceiptRuleCommandInput extends DescribeReceiptRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReceiptRuleCommand}.
 */
export interface DescribeReceiptRuleCommandOutput extends DescribeReceiptRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of the specified receipt rule.</p>
 *          <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DescribeReceiptRuleCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DescribeReceiptRuleCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DescribeReceiptRuleRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   RuleName: "STRING_VALUE", // required
 * };
 * const command = new DescribeReceiptRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReceiptRuleResponse
 * //   Rule: { // ReceiptRule
 * //     Name: "STRING_VALUE", // required
 * //     Enabled: true || false,
 * //     TlsPolicy: "Require" || "Optional",
 * //     Recipients: [ // RecipientsList
 * //       "STRING_VALUE",
 * //     ],
 * //     Actions: [ // ReceiptActionsList
 * //       { // ReceiptAction
 * //         S3Action: { // S3Action
 * //           TopicArn: "STRING_VALUE",
 * //           BucketName: "STRING_VALUE", // required
 * //           ObjectKeyPrefix: "STRING_VALUE",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //         BounceAction: { // BounceAction
 * //           TopicArn: "STRING_VALUE",
 * //           SmtpReplyCode: "STRING_VALUE", // required
 * //           StatusCode: "STRING_VALUE",
 * //           Message: "STRING_VALUE", // required
 * //           Sender: "STRING_VALUE", // required
 * //         },
 * //         WorkmailAction: { // WorkmailAction
 * //           TopicArn: "STRING_VALUE",
 * //           OrganizationArn: "STRING_VALUE", // required
 * //         },
 * //         LambdaAction: { // LambdaAction
 * //           TopicArn: "STRING_VALUE",
 * //           FunctionArn: "STRING_VALUE", // required
 * //           InvocationType: "Event" || "RequestResponse",
 * //         },
 * //         StopAction: { // StopAction
 * //           Scope: "RuleSet", // required
 * //           TopicArn: "STRING_VALUE",
 * //         },
 * //         AddHeaderAction: { // AddHeaderAction
 * //           HeaderName: "STRING_VALUE", // required
 * //           HeaderValue: "STRING_VALUE", // required
 * //         },
 * //         SNSAction: { // SNSAction
 * //           TopicArn: "STRING_VALUE", // required
 * //           Encoding: "UTF-8" || "Base64",
 * //         },
 * //       },
 * //     ],
 * //     ScanEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeReceiptRuleCommandInput - {@link DescribeReceiptRuleCommandInput}
 * @returns {@link DescribeReceiptRuleCommandOutput}
 * @see {@link DescribeReceiptRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeReceiptRuleCommandOutput} for command's `response` shape.
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
 * @example DescribeReceiptRule
 * ```javascript
 * // The following example returns the details of a receipt rule:
 * const input = {
 *   "RuleName": "MyRule",
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new DescribeReceiptRuleCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Rule": {
 *     "Actions": [
 *       {
 *         "S3Action": {
 *           "BucketName": "MyBucket",
 *           "ObjectKeyPrefix": "email"
 *         }
 *       }
 *     ],
 *     "Enabled": true,
 *     "Name": "MyRule",
 *     "ScanEnabled": true,
 *     "TlsPolicy": "Optional"
 *   }
 * }
 * *\/
 * // example id: describereceiptrule-1469055813118
 * ```
 *
 */
export class DescribeReceiptRuleCommand extends $Command<
  DescribeReceiptRuleCommandInput,
  DescribeReceiptRuleCommandOutput,
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
  constructor(readonly input: DescribeReceiptRuleCommandInput) {
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
  ): Handler<DescribeReceiptRuleCommandInput, DescribeReceiptRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReceiptRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DescribeReceiptRuleCommand";
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
  private serialize(input: DescribeReceiptRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReceiptRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReceiptRuleCommandOutput> {
    return de_DescribeReceiptRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
