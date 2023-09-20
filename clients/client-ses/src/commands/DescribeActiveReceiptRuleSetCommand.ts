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

import { DescribeActiveReceiptRuleSetRequest, DescribeActiveReceiptRuleSetResponse } from "../models/models_0";
import { de_DescribeActiveReceiptRuleSetCommand, se_DescribeActiveReceiptRuleSetCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeActiveReceiptRuleSetCommand}.
 */
export interface DescribeActiveReceiptRuleSetCommandInput extends DescribeActiveReceiptRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActiveReceiptRuleSetCommand}.
 */
export interface DescribeActiveReceiptRuleSetCommandOutput
  extends DescribeActiveReceiptRuleSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the metadata and receipt rules for the receipt rule set that is currently
 *             active.</p>
 *          <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html#receiving-email-concepts-rules">Amazon SES Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DescribeActiveReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DescribeActiveReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new DescribeActiveReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActiveReceiptRuleSetResponse
 * //   Metadata: { // ReceiptRuleSetMetadata
 * //     Name: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * //   Rules: [ // ReceiptRulesList
 * //     { // ReceiptRule
 * //       Name: "STRING_VALUE", // required
 * //       Enabled: true || false,
 * //       TlsPolicy: "Require" || "Optional",
 * //       Recipients: [ // RecipientsList
 * //         "STRING_VALUE",
 * //       ],
 * //       Actions: [ // ReceiptActionsList
 * //         { // ReceiptAction
 * //           S3Action: { // S3Action
 * //             TopicArn: "STRING_VALUE",
 * //             BucketName: "STRING_VALUE", // required
 * //             ObjectKeyPrefix: "STRING_VALUE",
 * //             KmsKeyArn: "STRING_VALUE",
 * //           },
 * //           BounceAction: { // BounceAction
 * //             TopicArn: "STRING_VALUE",
 * //             SmtpReplyCode: "STRING_VALUE", // required
 * //             StatusCode: "STRING_VALUE",
 * //             Message: "STRING_VALUE", // required
 * //             Sender: "STRING_VALUE", // required
 * //           },
 * //           WorkmailAction: { // WorkmailAction
 * //             TopicArn: "STRING_VALUE",
 * //             OrganizationArn: "STRING_VALUE", // required
 * //           },
 * //           LambdaAction: { // LambdaAction
 * //             TopicArn: "STRING_VALUE",
 * //             FunctionArn: "STRING_VALUE", // required
 * //             InvocationType: "Event" || "RequestResponse",
 * //           },
 * //           StopAction: { // StopAction
 * //             Scope: "RuleSet", // required
 * //             TopicArn: "STRING_VALUE",
 * //           },
 * //           AddHeaderAction: { // AddHeaderAction
 * //             HeaderName: "STRING_VALUE", // required
 * //             HeaderValue: "STRING_VALUE", // required
 * //           },
 * //           SNSAction: { // SNSAction
 * //             TopicArn: "STRING_VALUE", // required
 * //             Encoding: "UTF-8" || "Base64",
 * //           },
 * //         },
 * //       ],
 * //       ScanEnabled: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeActiveReceiptRuleSetCommandInput - {@link DescribeActiveReceiptRuleSetCommandInput}
 * @returns {@link DescribeActiveReceiptRuleSetCommandOutput}
 * @see {@link DescribeActiveReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link DescribeActiveReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example DescribeActiveReceiptRuleSet
 * ```javascript
 * // The following example returns the metadata and receipt rules for the receipt rule set that is currently active:
 * const input = {};
 * const command = new DescribeActiveReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Metadata": {
 *     "CreatedTimestamp": "2016-07-15T16:25:59.607Z",
 *     "Name": "default-rule-set"
 *   },
 *   "Rules": [
 *     {
 *       "Actions": [
 *         {
 *           "S3Action": {
 *             "BucketName": "MyBucket",
 *             "ObjectKeyPrefix": "email"
 *           }
 *         }
 *       ],
 *       "Enabled": true,
 *       "Name": "MyRule",
 *       "ScanEnabled": true,
 *       "TlsPolicy": "Optional"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describeactivereceiptruleset-1469121611502
 * ```
 *
 */
export class DescribeActiveReceiptRuleSetCommand extends $Command<
  DescribeActiveReceiptRuleSetCommandInput,
  DescribeActiveReceiptRuleSetCommandOutput,
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
  constructor(readonly input: DescribeActiveReceiptRuleSetCommandInput) {
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
  ): Handler<DescribeActiveReceiptRuleSetCommandInput, DescribeActiveReceiptRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeActiveReceiptRuleSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DescribeActiveReceiptRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "DescribeActiveReceiptRuleSet",
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
  private serialize(input: DescribeActiveReceiptRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeActiveReceiptRuleSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeActiveReceiptRuleSetCommandOutput> {
    return de_DescribeActiveReceiptRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
