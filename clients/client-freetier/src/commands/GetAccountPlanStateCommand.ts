// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FreeTierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FreeTierClient";
import { GetAccountPlanStateRequest, GetAccountPlanStateResponse } from "../models/models_0";
import { de_GetAccountPlanStateCommand, se_GetAccountPlanStateCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountPlanStateCommand}.
 */
export interface GetAccountPlanStateCommandInput extends GetAccountPlanStateRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountPlanStateCommand}.
 */
export interface GetAccountPlanStateCommandOutput extends GetAccountPlanStateResponse, __MetadataBearer {}

/**
 * <p> This returns all of the information related to the state of the account plan related to Free Tier. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FreeTierClient, GetAccountPlanStateCommand } from "@aws-sdk/client-freetier"; // ES Modules import
 * // const { FreeTierClient, GetAccountPlanStateCommand } = require("@aws-sdk/client-freetier"); // CommonJS import
 * const client = new FreeTierClient(config);
 * const input = {};
 * const command = new GetAccountPlanStateCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountPlanStateResponse
 * //   accountId: "STRING_VALUE", // required
 * //   accountPlanType: "FREE" || "PAID", // required
 * //   accountPlanStatus: "NOT_STARTED" || "ACTIVE" || "EXPIRED", // required
 * //   accountPlanRemainingCredits: { // MonetaryAmount
 * //     amount: Number("double"), // required
 * //     unit: "USD", // required
 * //   },
 * //   accountPlanExpirationDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAccountPlanStateCommandInput - {@link GetAccountPlanStateCommandInput}
 * @returns {@link GetAccountPlanStateCommandOutput}
 * @see {@link GetAccountPlanStateCommandInput} for command's `input` shape.
 * @see {@link GetAccountPlanStateCommandOutput} for command's `response` shape.
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
 * @example Fetching account plan state by id
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new GetAccountPlanStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountId: "111122223333",
 *   accountPlanExpirationDate: "2025-06-30T23:59:59Z",
 *   accountPlanRemainingCredits: {
 *     amount: 25.0,
 *     unit: "USD"
 *   },
 *   accountPlanStatus: "ACTIVE",
 *   accountPlanType: "FREE"
 * }
 * *\/
 * ```
 *
 * @example Attempt to fetch account plan state by id with insufficient permissions
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new GetAccountPlanStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Internal service error
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new GetAccountPlanStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Attempt to fetch plan state by id for an account without account plan
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new GetAccountPlanStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Request rate exceeds limits
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new GetAccountPlanStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccountPlanStateCommand extends $Command
  .classBuilder<
    GetAccountPlanStateCommandInput,
    GetAccountPlanStateCommandOutput,
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
  .s("AWSFreeTierService", "GetAccountPlanState", {})
  .n("FreeTierClient", "GetAccountPlanStateCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountPlanStateCommand)
  .de(de_GetAccountPlanStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountPlanStateResponse;
    };
    sdk: {
      input: GetAccountPlanStateCommandInput;
      output: GetAccountPlanStateCommandOutput;
    };
  };
}
