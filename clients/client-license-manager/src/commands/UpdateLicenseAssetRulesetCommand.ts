// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLicenseAssetRulesetRequest, UpdateLicenseAssetRulesetResponse } from "../models/models_0";
import { UpdateLicenseAssetRuleset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLicenseAssetRulesetCommand}.
 */
export interface UpdateLicenseAssetRulesetCommandInput extends UpdateLicenseAssetRulesetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLicenseAssetRulesetCommand}.
 */
export interface UpdateLicenseAssetRulesetCommandOutput extends UpdateLicenseAssetRulesetResponse, __MetadataBearer {}

/**
 * Updates a license asset ruleset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseAssetRulesetCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseAssetRulesetCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // UpdateLicenseAssetRulesetRequest
 *   Name: "STRING_VALUE",
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
 *   LicenseAssetRulesetArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateLicenseAssetRulesetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLicenseAssetRulesetResponse
 * //   LicenseAssetRulesetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateLicenseAssetRulesetCommandInput - {@link UpdateLicenseAssetRulesetCommandInput}
 * @returns {@link UpdateLicenseAssetRulesetCommandOutput}
 * @see {@link UpdateLicenseAssetRulesetCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseAssetRulesetCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class UpdateLicenseAssetRulesetCommand extends command<UpdateLicenseAssetRulesetCommandInput, UpdateLicenseAssetRulesetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLicenseAssetRuleset",
  UpdateLicenseAssetRuleset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLicenseAssetRulesetRequest;
      output: UpdateLicenseAssetRulesetResponse;
    };
    sdk: {
      input: UpdateLicenseAssetRulesetCommandInput;
      output: UpdateLicenseAssetRulesetCommandOutput;
    };
  };
}
