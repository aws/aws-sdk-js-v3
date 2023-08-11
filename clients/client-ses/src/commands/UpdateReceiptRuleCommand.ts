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

import { UpdateReceiptRuleRequest, UpdateReceiptRuleResponse } from "../models/models_0";
import { de_UpdateReceiptRuleCommand, se_UpdateReceiptRuleCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateReceiptRuleCommand}.
 */
export interface UpdateReceiptRuleCommandInput extends UpdateReceiptRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateReceiptRuleCommand}.
 */
export interface UpdateReceiptRuleCommandOutput extends UpdateReceiptRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a receipt rule.</p>
 *          <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateReceiptRuleCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateReceiptRuleCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateReceiptRuleRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   Rule: { // ReceiptRule
 *     Name: "STRING_VALUE", // required
 *     Enabled: true || false,
 *     TlsPolicy: "Require" || "Optional",
 *     Recipients: [ // RecipientsList
 *       "STRING_VALUE",
 *     ],
 *     Actions: [ // ReceiptActionsList
 *       { // ReceiptAction
 *         S3Action: { // S3Action
 *           TopicArn: "STRING_VALUE",
 *           BucketName: "STRING_VALUE", // required
 *           ObjectKeyPrefix: "STRING_VALUE",
 *           KmsKeyArn: "STRING_VALUE",
 *         },
 *         BounceAction: { // BounceAction
 *           TopicArn: "STRING_VALUE",
 *           SmtpReplyCode: "STRING_VALUE", // required
 *           StatusCode: "STRING_VALUE",
 *           Message: "STRING_VALUE", // required
 *           Sender: "STRING_VALUE", // required
 *         },
 *         WorkmailAction: { // WorkmailAction
 *           TopicArn: "STRING_VALUE",
 *           OrganizationArn: "STRING_VALUE", // required
 *         },
 *         LambdaAction: { // LambdaAction
 *           TopicArn: "STRING_VALUE",
 *           FunctionArn: "STRING_VALUE", // required
 *           InvocationType: "Event" || "RequestResponse",
 *         },
 *         StopAction: { // StopAction
 *           Scope: "RuleSet", // required
 *           TopicArn: "STRING_VALUE",
 *         },
 *         AddHeaderAction: { // AddHeaderAction
 *           HeaderName: "STRING_VALUE", // required
 *           HeaderValue: "STRING_VALUE", // required
 *         },
 *         SNSAction: { // SNSAction
 *           TopicArn: "STRING_VALUE", // required
 *           Encoding: "UTF-8" || "Base64",
 *         },
 *       },
 *     ],
 *     ScanEnabled: true || false,
 *   },
 * };
 * const command = new UpdateReceiptRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateReceiptRuleCommandInput - {@link UpdateReceiptRuleCommandInput}
 * @returns {@link UpdateReceiptRuleCommandOutput}
 * @see {@link UpdateReceiptRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateReceiptRuleCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link InvalidLambdaFunctionException} (client fault)
 *  <p>Indicates that the provided Amazon Web Services Lambda function is invalid, or that Amazon SES could
 *             not execute the provided function, possibly due to permissions issues. For information
 *             about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *
 * @throws {@link InvalidS3ConfigurationException} (client fault)
 *  <p>Indicates that the provided Amazon S3 bucket or Amazon Web Services KMS encryption key is invalid,
 *             or that Amazon SES could not publish to the bucket, possibly due to permissions issues.
 *             For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *
 * @throws {@link InvalidSnsTopicException} (client fault)
 *  <p>Indicates that the provided Amazon SNS topic is invalid, or that Amazon SES could not
 *             publish to the topic, possibly due to permissions issues. For information about giving
 *             permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
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
 * @example UpdateReceiptRule
 * ```javascript
 * // The following example updates a receipt rule to use an Amazon S3 action:
 * const input = {
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
 *   },
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new UpdateReceiptRuleCommand(input);
 * await client.send(command);
 * // example id: updatereceiptrule-1469051756940
 * ```
 *
 */
export class UpdateReceiptRuleCommand extends $Command<
  UpdateReceiptRuleCommandInput,
  UpdateReceiptRuleCommandOutput,
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
  constructor(readonly input: UpdateReceiptRuleCommandInput) {
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
  ): Handler<UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateReceiptRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateReceiptRuleCommand";
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
  private serialize(input: UpdateReceiptRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateReceiptRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReceiptRuleCommandOutput> {
    return de_UpdateReceiptRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
