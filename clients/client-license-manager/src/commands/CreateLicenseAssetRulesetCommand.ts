// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerClient";
import type { CreateLicenseAssetRulesetRequest, CreateLicenseAssetRulesetResponse } from "../models/models_0";
import { CreateLicenseAssetRuleset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLicenseAssetRulesetCommand}.
 */
export interface CreateLicenseAssetRulesetCommandInput extends CreateLicenseAssetRulesetRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseAssetRulesetCommand}.
 */
export interface CreateLicenseAssetRulesetCommandOutput extends CreateLicenseAssetRulesetResponse, __MetadataBearer {}

/**
 * <p>Creates a license asset ruleset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseAssetRulesetCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseAssetRulesetCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseAssetRulesetRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Rules: [ // LicenseAssetRuleList // required
 *     { // LicenseAssetRule
 *       RuleStatement: { // RuleStatement
 *         LicenseConfigurationRuleStatement: { // LicenseConfigurationRuleStatement
 *           AndRuleStatement: { // AndRuleStatement
 *             MatchingRuleStatements: [ // MatchingRuleStatementList
 *               { // MatchingRuleStatement
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Constraint: "STRING_VALUE", // required
 *                 ValueToMatch: [ // StringList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             ScriptRuleStatements: [ // ScriptRuleStatementList
 *               { // ScriptRuleStatement
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Script: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           OrRuleStatement: { // OrRuleStatement
 *             MatchingRuleStatements: [
 *               {
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Constraint: "STRING_VALUE", // required
 *                 ValueToMatch: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             ScriptRuleStatements: [
 *               {
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Script: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           MatchingRuleStatement: {
 *             KeyToMatch: "STRING_VALUE", // required
 *             Constraint: "STRING_VALUE", // required
 *             ValueToMatch: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         LicenseRuleStatement: { // LicenseRuleStatement
 *           AndRuleStatement: {
 *             MatchingRuleStatements: [
 *               {
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Constraint: "STRING_VALUE", // required
 *                 ValueToMatch: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             ScriptRuleStatements: [
 *               {
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Script: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           OrRuleStatement: {
 *             MatchingRuleStatements: [
 *               {
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Constraint: "STRING_VALUE", // required
 *                 ValueToMatch: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             ScriptRuleStatements: [
 *               {
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Script: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           MatchingRuleStatement: "<MatchingRuleStatement>",
 *         },
 *         InstanceRuleStatement: { // InstanceRuleStatement
 *           AndRuleStatement: {
 *             MatchingRuleStatements: [
 *               "<MatchingRuleStatement>",
 *             ],
 *             ScriptRuleStatements: [
 *               {
 *                 KeyToMatch: "STRING_VALUE", // required
 *                 Script: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           OrRuleStatement: {
 *             MatchingRuleStatements: "<MatchingRuleStatementList>",
 *             ScriptRuleStatements: "<ScriptRuleStatementList>",
 *           },
 *           MatchingRuleStatement: "<MatchingRuleStatement>",
 *           ScriptRuleStatement: "<ScriptRuleStatement>",
 *         },
 *       },
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLicenseAssetRulesetCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseAssetRulesetResponse
 * //   LicenseAssetRulesetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateLicenseAssetRulesetCommandInput - {@link CreateLicenseAssetRulesetCommandInput}
 * @returns {@link CreateLicenseAssetRulesetCommandOutput}
 * @see {@link CreateLicenseAssetRulesetCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseAssetRulesetCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class CreateLicenseAssetRulesetCommand extends $Command
  .classBuilder<
    CreateLicenseAssetRulesetCommandInput,
    CreateLicenseAssetRulesetCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "CreateLicenseAssetRuleset", {})
  .n("LicenseManagerClient", "CreateLicenseAssetRulesetCommand")
  .sc(CreateLicenseAssetRuleset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseAssetRulesetRequest;
      output: CreateLicenseAssetRulesetResponse;
    };
    sdk: {
      input: CreateLicenseAssetRulesetCommandInput;
      output: CreateLicenseAssetRulesetCommandOutput;
    };
  };
}
