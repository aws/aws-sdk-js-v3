// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FreeTierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FreeTierClient";
import { ListAccountActivitiesRequest, ListAccountActivitiesResponse } from "../models/models_0";
import { de_ListAccountActivitiesCommand, se_ListAccountActivitiesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountActivitiesCommand}.
 */
export interface ListAccountActivitiesCommandInput extends ListAccountActivitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountActivitiesCommand}.
 */
export interface ListAccountActivitiesCommandOutput extends ListAccountActivitiesResponse, __MetadataBearer {}

/**
 * <p> Returns a list of activities that are available. This operation supports pagination and filtering by status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FreeTierClient, ListAccountActivitiesCommand } from "@aws-sdk/client-freetier"; // ES Modules import
 * // const { FreeTierClient, ListAccountActivitiesCommand } = require("@aws-sdk/client-freetier"); // CommonJS import
 * const client = new FreeTierClient(config);
 * const input = { // ListAccountActivitiesRequest
 *   filterActivityStatuses: [ // FilterActivityStatuses
 *     "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED" || "EXPIRING",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   languageCode: "en-US" || "en-GB" || "id-ID" || "de-DE" || "es-ES" || "fr-FR" || "ja-JP" || "it-IT" || "pt-PT" || "ko-KR" || "zh-CN" || "zh-TW" || "tr-TR",
 * };
 * const command = new ListAccountActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountActivitiesResponse
 * //   activities: [ // Activities // required
 * //     { // ActivitySummary
 * //       activityId: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       reward: { // ActivityReward Union: only one key present
 * //         credit: { // MonetaryAmount
 * //           amount: Number("double"), // required
 * //           unit: "USD", // required
 * //         },
 * //       },
 * //       status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED" || "EXPIRING", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountActivitiesCommandInput - {@link ListAccountActivitiesCommandInput}
 * @returns {@link ListAccountActivitiesCommandOutput}
 * @see {@link ListAccountActivitiesCommandInput} for command's `input` shape.
 * @see {@link ListAccountActivitiesCommandOutput} for command's `response` shape.
 * @see {@link FreeTierClientResolvedConfig | config} for FreeTierClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
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
 * @example Fetching a page of completed activities
 * ```javascript
 * //
 * const input = {
 *   filterActivityStatuses: [
 *     "COMPLETED"
 *   ],
 *   languageCode: "en-US",
 *   maxResults: 1
 * };
 * const command = new ListAccountActivitiesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   activities: [
 *     {
 *       activityId: "d622f48bf4014286a2686ab10cacfb2e",
 *       reward: {
 *         credit: {
 *           amount: 20.0,
 *           unit: "USD"
 *         }
 *       },
 *       status: "COMPLETED",
 *       title: "Configure Your Access in the AWS Identity and Access Management (IAM) center"
 *     }
 *   ],
 *   nextToken: "a95f3d9e7710c6ca8ba4f640b40bbc40"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAccountActivitiesCommand extends $Command
  .classBuilder<
    ListAccountActivitiesCommandInput,
    ListAccountActivitiesCommandOutput,
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
  .s("AWSFreeTierService", "ListAccountActivities", {})
  .n("FreeTierClient", "ListAccountActivitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListAccountActivitiesCommand)
  .de(de_ListAccountActivitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountActivitiesRequest;
      output: ListAccountActivitiesResponse;
    };
    sdk: {
      input: ListAccountActivitiesCommandInput;
      output: ListAccountActivitiesCommandOutput;
    };
  };
}
