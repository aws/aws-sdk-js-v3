// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReceiptRuleSetRequest, DescribeReceiptRuleSetResponse } from "../models/models_0";
import { de_DescribeReceiptRuleSetCommand, se_DescribeReceiptRuleSetCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReceiptRuleSetCommand}.
 */
export interface DescribeReceiptRuleSetCommandInput extends DescribeReceiptRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReceiptRuleSetCommand}.
 */
export interface DescribeReceiptRuleSetCommandOutput extends DescribeReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Returns the details of the specified receipt rule set.</p>
 *          <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DescribeReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DescribeReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DescribeReceiptRuleSetRequest
 *   RuleSetName: "STRING_VALUE", // required
 * };
 * const command = new DescribeReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReceiptRuleSetResponse
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
 * @param DescribeReceiptRuleSetCommandInput - {@link DescribeReceiptRuleSetCommandInput}
 * @returns {@link DescribeReceiptRuleSetCommandOutput}
 * @see {@link DescribeReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link DescribeReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example DescribeReceiptRuleSet
 * ```javascript
 * // The following example returns the metadata and receipt rules of a receipt rule set:
 * const input = {
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new DescribeReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Metadata": {
 *     "CreatedTimestamp": "2016-07-15T16:25:59.607Z",
 *     "Name": "MyRuleSet"
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
 * // example id: describereceiptruleset-1469121240385
 * ```
 *
 */
export class DescribeReceiptRuleSetCommand extends $Command
  .classBuilder<
    DescribeReceiptRuleSetCommandInput,
    DescribeReceiptRuleSetCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "DescribeReceiptRuleSet", {})
  .n("SESClient", "DescribeReceiptRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReceiptRuleSetCommand)
  .de(de_DescribeReceiptRuleSetCommand)
  .build() {}
