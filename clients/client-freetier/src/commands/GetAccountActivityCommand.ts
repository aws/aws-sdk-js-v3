// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FreeTierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FreeTierClient";
import { GetAccountActivityRequest, GetAccountActivityResponse } from "../models/models_0";
import { de_GetAccountActivityCommand, se_GetAccountActivityCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountActivityCommand}.
 */
export interface GetAccountActivityCommandInput extends GetAccountActivityRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountActivityCommand}.
 */
export interface GetAccountActivityCommandOutput extends GetAccountActivityResponse, __MetadataBearer {}

/**
 * <p> Returns a specific activity record that is available to the customer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FreeTierClient, GetAccountActivityCommand } from "@aws-sdk/client-freetier"; // ES Modules import
 * // const { FreeTierClient, GetAccountActivityCommand } = require("@aws-sdk/client-freetier"); // CommonJS import
 * const client = new FreeTierClient(config);
 * const input = { // GetAccountActivityRequest
 *   activityId: "STRING_VALUE", // required
 *   languageCode: "en-US" || "en-GB" || "id-ID" || "de-DE" || "es-ES" || "fr-FR" || "ja-JP" || "it-IT" || "pt-PT" || "ko-KR" || "zh-CN" || "zh-TW" || "tr-TR",
 * };
 * const command = new GetAccountActivityCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountActivityResponse
 * //   activityId: "STRING_VALUE", // required
 * //   title: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED" || "EXPIRING", // required
 * //   instructionsUrl: "STRING_VALUE", // required
 * //   reward: { // ActivityReward Union: only one key present
 * //     credit: { // MonetaryAmount
 * //       amount: Number("double"), // required
 * //       unit: "USD", // required
 * //     },
 * //   },
 * //   estimatedTimeToCompleteInMinutes: Number("int"),
 * //   expiresAt: new Date("TIMESTAMP"),
 * //   startedAt: new Date("TIMESTAMP"),
 * //   completedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAccountActivityCommandInput - {@link GetAccountActivityCommandInput}
 * @returns {@link GetAccountActivityCommandOutput}
 * @see {@link GetAccountActivityCommandInput} for command's `input` shape.
 * @see {@link GetAccountActivityCommandOutput} for command's `response` shape.
 * @see {@link FreeTierClientResolvedConfig | config} for FreeTierClient's `config` shape.
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
 * @example Fetching an Account activity by id
 * ```javascript
 * //
 * const input = {
 *   activityId: "d622f48bf4014286a2686ab10cacfb2e",
 *   languageCode: "en-US"
 * };
 * const command = new GetAccountActivityCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   activityId: "d622f48bf4014286a2686ab10cacfb2e",
 *   completedAt: "1985-06-12T23:20:50.520Z",
 *   description: "Set up three notifications: one for your costs reach ...",
 *   estimatedTimeToCompleteInMinutes: 15,
 *   expiresAt: "1985-10-12T23:20:50.520Z",
 *   instructionsUrl: "https://catalog.us-east-1.prod.workshops.aws/workshops/2a5fc82d-2b5f-4105-83c2-91a1b4d7abfe/en-US/2-foundation/lab1-create",
 *   reward: {
 *     credit: {
 *       amount: 20.0,
 *       unit: "USD"
 *     }
 *   },
 *   startedAt: "1985-04-12T23:20:50.520Z",
 *   status: "COMPLETED",
 *   title: "Configure Your Access in the AWS Identity and Access Management (IAM) center"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccountActivityCommand extends $Command
  .classBuilder<
    GetAccountActivityCommandInput,
    GetAccountActivityCommandOutput,
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
  .s("AWSFreeTierService", "GetAccountActivity", {})
  .n("FreeTierClient", "GetAccountActivityCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountActivityCommand)
  .de(de_GetAccountActivityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountActivityRequest;
      output: GetAccountActivityResponse;
    };
    sdk: {
      input: GetAccountActivityCommandInput;
      output: GetAccountActivityCommandOutput;
    };
  };
}
