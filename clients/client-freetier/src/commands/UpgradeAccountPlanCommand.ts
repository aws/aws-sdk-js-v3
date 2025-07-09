// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FreeTierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FreeTierClient";
import { UpgradeAccountPlanRequest, UpgradeAccountPlanResponse } from "../models/models_0";
import { de_UpgradeAccountPlanCommand, se_UpgradeAccountPlanCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpgradeAccountPlanCommand}.
 */
export interface UpgradeAccountPlanCommandInput extends UpgradeAccountPlanRequest {}
/**
 * @public
 *
 * The output of {@link UpgradeAccountPlanCommand}.
 */
export interface UpgradeAccountPlanCommandOutput extends UpgradeAccountPlanResponse, __MetadataBearer {}

/**
 * <p> The account plan type for the Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FreeTierClient, UpgradeAccountPlanCommand } from "@aws-sdk/client-freetier"; // ES Modules import
 * // const { FreeTierClient, UpgradeAccountPlanCommand } = require("@aws-sdk/client-freetier"); // CommonJS import
 * const client = new FreeTierClient(config);
 * const input = { // UpgradeAccountPlanRequest
 *   accountPlanType: "FREE" || "PAID", // required
 * };
 * const command = new UpgradeAccountPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpgradeAccountPlanResponse
 * //   accountId: "STRING_VALUE", // required
 * //   accountPlanType: "FREE" || "PAID", // required
 * //   accountPlanStatus: "NOT_STARTED" || "ACTIVE" || "EXPIRED", // required
 * // };
 *
 * ```
 *
 * @param UpgradeAccountPlanCommandInput - {@link UpgradeAccountPlanCommandInput}
 * @returns {@link UpgradeAccountPlanCommandOutput}
 * @see {@link UpgradeAccountPlanCommandInput} for command's `input` shape.
 * @see {@link UpgradeAccountPlanCommandOutput} for command's `response` shape.
 * @see {@link FreeTierClientResolvedConfig | config} for FreeTierClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> This exception is thrown when the requested resource cannot be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link FreeTierServiceException}
 * <p>Base exception class for all service exceptions from FreeTier service.</p>
 *
 *
 * @example Upgrading an account plan to PAID
 * ```javascript
 * //
 * const input = {
 *   accountPlanType: "PAID"
 * };
 * const command = new UpgradeAccountPlanCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountId: "111122223333",
 *   accountPlanStatus: "NOT_STARTED",
 *   accountPlanType: "PAID"
 * }
 * *\/
 * ```
 *
 * @example Attempt to upgrade an account with insufficient permissions
 * ```javascript
 * //
 * const input = {
 *   accountPlanType: "PAID"
 * };
 * const command = new UpgradeAccountPlanCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Attempt to downgrade an account from PAID to FREE
 * ```javascript
 * //
 * const input = {
 *   accountPlanType: "FREE"
 * };
 * const command = new UpgradeAccountPlanCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Internal service error
 * ```javascript
 * //
 * const input = {
 *   accountPlanType: "PAID"
 * };
 * const command = new UpgradeAccountPlanCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Attempt to upgrade a non-existent account plan
 * ```javascript
 * //
 * const input = {
 *   accountPlanType: "PAID"
 * };
 * const command = new UpgradeAccountPlanCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Request rate exceeds limits
 * ```javascript
 * //
 * const input = {
 *   accountPlanType: "PAID"
 * };
 * const command = new UpgradeAccountPlanCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpgradeAccountPlanCommand extends $Command
  .classBuilder<
    UpgradeAccountPlanCommandInput,
    UpgradeAccountPlanCommandOutput,
    FreeTierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FreeTierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFreeTierService", "UpgradeAccountPlan", {})
  .n("FreeTierClient", "UpgradeAccountPlanCommand")
  .f(void 0, void 0)
  .ser(se_UpgradeAccountPlanCommand)
  .de(de_UpgradeAccountPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpgradeAccountPlanRequest;
      output: UpgradeAccountPlanResponse;
    };
    sdk: {
      input: UpgradeAccountPlanCommandInput;
      output: UpgradeAccountPlanCommandOutput;
    };
  };
}
