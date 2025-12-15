// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { GetRuleSetRequest, GetRuleSetResponse } from "../models/models_0";
import { GetRuleSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRuleSetCommand}.
 */
export interface GetRuleSetCommandInput extends GetRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link GetRuleSetCommand}.
 */
export interface GetRuleSetCommandOutput extends GetRuleSetResponse, __MetadataBearer {}

/**
 * <p>Fetch attributes of a rule set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetRuleSetCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetRuleSetCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetRuleSetRequest
 *   RuleSetId: "STRING_VALUE", // required
 * };
 * const command = new GetRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // GetRuleSetResponse
 * //   RuleSetId: "STRING_VALUE", // required
 * //   RuleSetArn: "STRING_VALUE", // required
 * //   RuleSetName: "STRING_VALUE", // required
 * //   CreatedDate: new Date("TIMESTAMP"), // required
 * //   LastModificationDate: new Date("TIMESTAMP"), // required
 * //   Rules: [ // Rules // required
 * //     { // Rule
 * //       Name: "STRING_VALUE",
 * //       Conditions: [ // RuleConditions
 * //         { // RuleCondition Union: only one key present
 * //           BooleanExpression: { // RuleBooleanExpression
 * //             Evaluate: { // RuleBooleanToEvaluate Union: only one key present
 * //               Attribute: "READ_RECEIPT_REQUESTED" || "TLS" || "TLS_WRAPPED",
 * //               Analysis: { // Analysis
 * //                 Analyzer: "STRING_VALUE", // required
 * //                 ResultField: "STRING_VALUE", // required
 * //               },
 * //               IsInAddressList: { // RuleIsInAddressList
 * //                 Attribute: "RECIPIENT" || "MAIL_FROM" || "SENDER" || "FROM" || "TO" || "CC", // required
 * //                 AddressLists: [ // RuleAddressListArnList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             Operator: "IS_TRUE" || "IS_FALSE", // required
 * //           },
 * //           StringExpression: { // RuleStringExpression
 * //             Evaluate: { // RuleStringToEvaluate Union: only one key present
 * //               Attribute: "MAIL_FROM" || "HELO" || "RECIPIENT" || "SENDER" || "FROM" || "SUBJECT" || "TO" || "CC",
 * //               MimeHeaderAttribute: "STRING_VALUE",
 * //               Analysis: {
 * //                 Analyzer: "STRING_VALUE", // required
 * //                 ResultField: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             Operator: "EQUALS" || "NOT_EQUALS" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS", // required
 * //             Values: [ // RuleStringList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           NumberExpression: { // RuleNumberExpression
 * //             Evaluate: { // RuleNumberToEvaluate Union: only one key present
 * //               Attribute: "MESSAGE_SIZE",
 * //             },
 * //             Operator: "EQUALS" || "NOT_EQUALS" || "LESS_THAN" || "GREATER_THAN" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN_OR_EQUAL", // required
 * //             Value: Number("double"), // required
 * //           },
 * //           IpExpression: { // RuleIpExpression
 * //             Evaluate: { // RuleIpToEvaluate Union: only one key present
 * //               Attribute: "SOURCE_IP",
 * //             },
 * //             Operator: "CIDR_MATCHES" || "NOT_CIDR_MATCHES", // required
 * //             Values: [ // RuleIpValueList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           VerdictExpression: { // RuleVerdictExpression
 * //             Evaluate: { // RuleVerdictToEvaluate Union: only one key present
 * //               Attribute: "SPF" || "DKIM",
 * //               Analysis: {
 * //                 Analyzer: "STRING_VALUE", // required
 * //                 ResultField: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             Operator: "EQUALS" || "NOT_EQUALS", // required
 * //             Values: [ // RuleVerdictValueList // required
 * //               "PASS" || "FAIL" || "GRAY" || "PROCESSING_FAILED",
 * //             ],
 * //           },
 * //           DmarcExpression: { // RuleDmarcExpression
 * //             Operator: "EQUALS" || "NOT_EQUALS", // required
 * //             Values: [ // RuleDmarcValueList // required
 * //               "NONE" || "QUARANTINE" || "REJECT",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       Unless: [
 * //         {//  Union: only one key present
 * //           BooleanExpression: {
 * //             Evaluate: {//  Union: only one key present
 * //               Attribute: "READ_RECEIPT_REQUESTED" || "TLS" || "TLS_WRAPPED",
 * //               Analysis: {
 * //                 Analyzer: "STRING_VALUE", // required
 * //                 ResultField: "STRING_VALUE", // required
 * //               },
 * //               IsInAddressList: {
 * //                 Attribute: "RECIPIENT" || "MAIL_FROM" || "SENDER" || "FROM" || "TO" || "CC", // required
 * //                 AddressLists: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             Operator: "IS_TRUE" || "IS_FALSE", // required
 * //           },
 * //           StringExpression: {
 * //             Evaluate: {//  Union: only one key present
 * //               Attribute: "MAIL_FROM" || "HELO" || "RECIPIENT" || "SENDER" || "FROM" || "SUBJECT" || "TO" || "CC",
 * //               MimeHeaderAttribute: "STRING_VALUE",
 * //               Analysis: {
 * //                 Analyzer: "STRING_VALUE", // required
 * //                 ResultField: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             Operator: "EQUALS" || "NOT_EQUALS" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS", // required
 * //             Values: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           NumberExpression: {
 * //             Evaluate: {//  Union: only one key present
 * //               Attribute: "MESSAGE_SIZE",
 * //             },
 * //             Operator: "EQUALS" || "NOT_EQUALS" || "LESS_THAN" || "GREATER_THAN" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN_OR_EQUAL", // required
 * //             Value: Number("double"), // required
 * //           },
 * //           IpExpression: {
 * //             Evaluate: {//  Union: only one key present
 * //               Attribute: "SOURCE_IP",
 * //             },
 * //             Operator: "CIDR_MATCHES" || "NOT_CIDR_MATCHES", // required
 * //             Values: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           VerdictExpression: {
 * //             Evaluate: {//  Union: only one key present
 * //               Attribute: "SPF" || "DKIM",
 * //               Analysis: "<Analysis>",
 * //             },
 * //             Operator: "EQUALS" || "NOT_EQUALS", // required
 * //             Values: [ // required
 * //               "PASS" || "FAIL" || "GRAY" || "PROCESSING_FAILED",
 * //             ],
 * //           },
 * //           DmarcExpression: {
 * //             Operator: "EQUALS" || "NOT_EQUALS", // required
 * //             Values: [ // required
 * //               "NONE" || "QUARANTINE" || "REJECT",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       Actions: [ // RuleActions // required
 * //         { // RuleAction Union: only one key present
 * //           Drop: {},
 * //           Relay: { // RelayAction
 * //             ActionFailurePolicy: "CONTINUE" || "DROP",
 * //             Relay: "STRING_VALUE", // required
 * //             MailFrom: "REPLACE" || "PRESERVE",
 * //           },
 * //           Archive: { // ArchiveAction
 * //             ActionFailurePolicy: "CONTINUE" || "DROP",
 * //             TargetArchive: "STRING_VALUE", // required
 * //           },
 * //           WriteToS3: { // S3Action
 * //             ActionFailurePolicy: "CONTINUE" || "DROP",
 * //             RoleArn: "STRING_VALUE", // required
 * //             S3Bucket: "STRING_VALUE", // required
 * //             S3Prefix: "STRING_VALUE",
 * //             S3SseKmsKeyId: "STRING_VALUE",
 * //           },
 * //           Send: { // SendAction
 * //             ActionFailurePolicy: "CONTINUE" || "DROP",
 * //             RoleArn: "STRING_VALUE", // required
 * //           },
 * //           AddHeader: { // AddHeaderAction
 * //             HeaderName: "STRING_VALUE", // required
 * //             HeaderValue: "STRING_VALUE", // required
 * //           },
 * //           ReplaceRecipient: { // ReplaceRecipientAction
 * //             ReplaceWith: [ // Recipients
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           DeliverToMailbox: { // DeliverToMailboxAction
 * //             ActionFailurePolicy: "CONTINUE" || "DROP",
 * //             MailboxArn: "STRING_VALUE", // required
 * //             RoleArn: "STRING_VALUE", // required
 * //           },
 * //           DeliverToQBusiness: { // DeliverToQBusinessAction
 * //             ActionFailurePolicy: "CONTINUE" || "DROP",
 * //             ApplicationId: "STRING_VALUE", // required
 * //             IndexId: "STRING_VALUE", // required
 * //             RoleArn: "STRING_VALUE", // required
 * //           },
 * //           PublishToSns: { // SnsAction
 * //             ActionFailurePolicy: "CONTINUE" || "DROP",
 * //             TopicArn: "STRING_VALUE", // required
 * //             RoleArn: "STRING_VALUE", // required
 * //             Encoding: "UTF-8" || "BASE64",
 * //             PayloadType: "HEADERS" || "CONTENT",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRuleSetCommandInput - {@link GetRuleSetCommandInput}
 * @returns {@link GetRuleSetCommandOutput}
 * @see {@link GetRuleSetCommandInput} for command's `input` shape.
 * @see {@link GetRuleSetCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class GetRuleSetCommand extends $Command
  .classBuilder<
    GetRuleSetCommandInput,
    GetRuleSetCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "GetRuleSet", {})
  .n("MailManagerClient", "GetRuleSetCommand")
  .sc(GetRuleSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuleSetRequest;
      output: GetRuleSetResponse;
    };
    sdk: {
      input: GetRuleSetCommandInput;
      output: GetRuleSetCommandOutput;
    };
  };
}
