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

import { CreateReceiptRuleRequest, CreateReceiptRuleResponse } from "../models/models_0";
import { de_CreateReceiptRuleCommand, se_CreateReceiptRuleCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReceiptRuleCommand}.
 */
export interface CreateReceiptRuleCommandInput extends CreateReceiptRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateReceiptRuleCommand}.
 */
export interface CreateReceiptRuleCommandOutput extends CreateReceiptRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a receipt rule.</p>
 *          <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateReceiptRuleCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateReceiptRuleCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // CreateReceiptRuleRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   After: "STRING_VALUE",
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
 * const command = new CreateReceiptRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateReceiptRuleCommandInput - {@link CreateReceiptRuleCommandInput}
 * @returns {@link CreateReceiptRuleCommandOutput}
 * @see {@link CreateReceiptRuleCommandInput} for command's `input` shape.
 * @see {@link CreateReceiptRuleCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>Indicates that a resource could not be created because of a naming conflict.</p>
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
 * @example CreateReceiptRule
 * ```javascript
 * // The following example creates a new receipt rule:
 * const input = {
 *   "After": "",
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
 * const command = new CreateReceiptRuleCommand(input);
 * await client.send(command);
 * // example id: createreceiptrule-1469122946515
 * ```
 *
 */
export class CreateReceiptRuleCommand extends $Command<
  CreateReceiptRuleCommandInput,
  CreateReceiptRuleCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: CreateReceiptRuleCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReceiptRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "CreateReceiptRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "CreateReceiptRule",
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
  private serialize(input: CreateReceiptRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReceiptRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReceiptRuleCommandOutput> {
    return de_CreateReceiptRuleCommand(output, context);
  }
}
