// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  UpdateRuleSetRequest,
  UpdateRuleSetRequestFilterSensitiveLog,
  UpdateRuleSetResponse,
} from "../models/models_0";
import { de_UpdateRuleSetCommand, se_UpdateRuleSetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuleSetCommand}.
 */
export interface UpdateRuleSetCommandInput extends UpdateRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleSetCommand}.
 */
export interface UpdateRuleSetCommandOutput extends UpdateRuleSetResponse, __MetadataBearer {}

/**
 * <p>Update attributes of an already provisioned rule set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, UpdateRuleSetCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, UpdateRuleSetCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MailManagerClient(config);
 * const input = { // UpdateRuleSetRequest
 *   RuleSetId: "STRING_VALUE", // required
 *   RuleSetName: "STRING_VALUE",
 *   Rules: [ // Rules
 *     { // Rule
 *       Name: "STRING_VALUE",
 *       Conditions: [ // RuleConditions
 *         { // RuleCondition Union: only one key present
 *           BooleanExpression: { // RuleBooleanExpression
 *             Evaluate: { // RuleBooleanToEvaluate Union: only one key present
 *               Attribute: "READ_RECEIPT_REQUESTED" || "TLS" || "TLS_WRAPPED",
 *               IsInAddressList: { // RuleIsInAddressList
 *                 Attribute: "RECIPIENT" || "MAIL_FROM" || "SENDER" || "FROM" || "TO" || "CC", // required
 *                 AddressLists: [ // RuleAddressListArnList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *             Operator: "IS_TRUE" || "IS_FALSE", // required
 *           },
 *           StringExpression: { // RuleStringExpression
 *             Evaluate: { // RuleStringToEvaluate Union: only one key present
 *               Attribute: "MAIL_FROM" || "HELO" || "RECIPIENT" || "SENDER" || "FROM" || "SUBJECT" || "TO" || "CC",
 *               MimeHeaderAttribute: "STRING_VALUE",
 *             },
 *             Operator: "EQUALS" || "NOT_EQUALS" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS", // required
 *             Values: [ // RuleStringList // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           NumberExpression: { // RuleNumberExpression
 *             Evaluate: { // RuleNumberToEvaluate Union: only one key present
 *               Attribute: "MESSAGE_SIZE",
 *             },
 *             Operator: "EQUALS" || "NOT_EQUALS" || "LESS_THAN" || "GREATER_THAN" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN_OR_EQUAL", // required
 *             Value: Number("double"), // required
 *           },
 *           IpExpression: { // RuleIpExpression
 *             Evaluate: { // RuleIpToEvaluate Union: only one key present
 *               Attribute: "SOURCE_IP",
 *             },
 *             Operator: "CIDR_MATCHES" || "NOT_CIDR_MATCHES", // required
 *             Values: [ // RuleIpValueList // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           VerdictExpression: { // RuleVerdictExpression
 *             Evaluate: { // RuleVerdictToEvaluate Union: only one key present
 *               Attribute: "SPF" || "DKIM",
 *               Analysis: { // Analysis
 *                 Analyzer: "STRING_VALUE", // required
 *                 ResultField: "STRING_VALUE", // required
 *               },
 *             },
 *             Operator: "EQUALS" || "NOT_EQUALS", // required
 *             Values: [ // RuleVerdictValueList // required
 *               "PASS" || "FAIL" || "GRAY" || "PROCESSING_FAILED",
 *             ],
 *           },
 *           DmarcExpression: { // RuleDmarcExpression
 *             Operator: "EQUALS" || "NOT_EQUALS", // required
 *             Values: [ // RuleDmarcValueList // required
 *               "NONE" || "QUARANTINE" || "REJECT",
 *             ],
 *           },
 *         },
 *       ],
 *       Unless: [
 *         {//  Union: only one key present
 *           BooleanExpression: {
 *             Evaluate: {//  Union: only one key present
 *               Attribute: "READ_RECEIPT_REQUESTED" || "TLS" || "TLS_WRAPPED",
 *               IsInAddressList: {
 *                 Attribute: "RECIPIENT" || "MAIL_FROM" || "SENDER" || "FROM" || "TO" || "CC", // required
 *                 AddressLists: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *             Operator: "IS_TRUE" || "IS_FALSE", // required
 *           },
 *           StringExpression: {
 *             Evaluate: {//  Union: only one key present
 *               Attribute: "MAIL_FROM" || "HELO" || "RECIPIENT" || "SENDER" || "FROM" || "SUBJECT" || "TO" || "CC",
 *               MimeHeaderAttribute: "STRING_VALUE",
 *             },
 *             Operator: "EQUALS" || "NOT_EQUALS" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS", // required
 *             Values: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           NumberExpression: {
 *             Evaluate: {//  Union: only one key present
 *               Attribute: "MESSAGE_SIZE",
 *             },
 *             Operator: "EQUALS" || "NOT_EQUALS" || "LESS_THAN" || "GREATER_THAN" || "LESS_THAN_OR_EQUAL" || "GREATER_THAN_OR_EQUAL", // required
 *             Value: Number("double"), // required
 *           },
 *           IpExpression: {
 *             Evaluate: {//  Union: only one key present
 *               Attribute: "SOURCE_IP",
 *             },
 *             Operator: "CIDR_MATCHES" || "NOT_CIDR_MATCHES", // required
 *             Values: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           VerdictExpression: {
 *             Evaluate: {//  Union: only one key present
 *               Attribute: "SPF" || "DKIM",
 *               Analysis: {
 *                 Analyzer: "STRING_VALUE", // required
 *                 ResultField: "STRING_VALUE", // required
 *               },
 *             },
 *             Operator: "EQUALS" || "NOT_EQUALS", // required
 *             Values: [ // required
 *               "PASS" || "FAIL" || "GRAY" || "PROCESSING_FAILED",
 *             ],
 *           },
 *           DmarcExpression: {
 *             Operator: "EQUALS" || "NOT_EQUALS", // required
 *             Values: [ // required
 *               "NONE" || "QUARANTINE" || "REJECT",
 *             ],
 *           },
 *         },
 *       ],
 *       Actions: [ // RuleActions // required
 *         { // RuleAction Union: only one key present
 *           Drop: {},
 *           Relay: { // RelayAction
 *             ActionFailurePolicy: "CONTINUE" || "DROP",
 *             Relay: "STRING_VALUE", // required
 *             MailFrom: "REPLACE" || "PRESERVE",
 *           },
 *           Archive: { // ArchiveAction
 *             ActionFailurePolicy: "CONTINUE" || "DROP",
 *             TargetArchive: "STRING_VALUE", // required
 *           },
 *           WriteToS3: { // S3Action
 *             ActionFailurePolicy: "CONTINUE" || "DROP",
 *             RoleArn: "STRING_VALUE", // required
 *             S3Bucket: "STRING_VALUE", // required
 *             S3Prefix: "STRING_VALUE",
 *             S3SseKmsKeyId: "STRING_VALUE",
 *           },
 *           Send: { // SendAction
 *             ActionFailurePolicy: "CONTINUE" || "DROP",
 *             RoleArn: "STRING_VALUE", // required
 *           },
 *           AddHeader: { // AddHeaderAction
 *             HeaderName: "STRING_VALUE", // required
 *             HeaderValue: "STRING_VALUE", // required
 *           },
 *           ReplaceRecipient: { // ReplaceRecipientAction
 *             ReplaceWith: [ // Recipients
 *               "STRING_VALUE",
 *             ],
 *           },
 *           DeliverToMailbox: { // DeliverToMailboxAction
 *             ActionFailurePolicy: "CONTINUE" || "DROP",
 *             MailboxArn: "STRING_VALUE", // required
 *             RoleArn: "STRING_VALUE", // required
 *           },
 *           DeliverToQBusiness: { // DeliverToQBusinessAction
 *             ActionFailurePolicy: "CONTINUE" || "DROP",
 *             ApplicationId: "STRING_VALUE", // required
 *             IndexId: "STRING_VALUE", // required
 *             RoleArn: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRuleSetCommandInput - {@link UpdateRuleSetCommandInput}
 * @returns {@link UpdateRuleSetCommandOutput}
 * @see {@link UpdateRuleSetCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleSetCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
 * @public
 */
export class UpdateRuleSetCommand extends $Command
  .classBuilder<
    UpdateRuleSetCommandInput,
    UpdateRuleSetCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "UpdateRuleSet", {})
  .n("MailManagerClient", "UpdateRuleSetCommand")
  .f(UpdateRuleSetRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateRuleSetCommand)
  .de(de_UpdateRuleSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleSetRequest;
      output: {};
    };
    sdk: {
      input: UpdateRuleSetCommandInput;
      output: UpdateRuleSetCommandOutput;
    };
  };
}
