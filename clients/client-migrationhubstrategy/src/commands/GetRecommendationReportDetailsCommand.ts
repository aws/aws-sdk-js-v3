// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetRecommendationReportDetailsRequest, GetRecommendationReportDetailsResponse } from "../models/models_0";
import { GetRecommendationReportDetails } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationReportDetailsCommand}.
 */
export interface GetRecommendationReportDetailsCommandInput extends GetRecommendationReportDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationReportDetailsCommand}.
 */
export interface GetRecommendationReportDetailsCommandOutput
  extends GetRecommendationReportDetailsResponse,
    __MetadataBearer {}

/**
 * <p> Retrieves detailed information about the specified recommendation report. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetRecommendationReportDetailsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetRecommendationReportDetailsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetRecommendationReportDetailsRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetRecommendationReportDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationReportDetailsResponse
 * //   id: "STRING_VALUE",
 * //   recommendationReportDetails: { // RecommendationReportDetails
 * //     status: "STRING_VALUE",
 * //     statusMessage: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     completionTime: new Date("TIMESTAMP"),
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Keys: [ // S3Keys
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecommendationReportDetailsCommandInput - {@link GetRecommendationReportDetailsCommandInput}
 * @returns {@link GetRecommendationReportDetailsCommandOutput}
 * @see {@link GetRecommendationReportDetailsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationReportDetailsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @public
 */
export class GetRecommendationReportDetailsCommand extends $Command
  .classBuilder<
    GetRecommendationReportDetailsCommandInput,
    GetRecommendationReportDetailsCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubStrategyRecommendation", "GetRecommendationReportDetails", {})
  .n("MigrationHubStrategyClient", "GetRecommendationReportDetailsCommand")
  .sc(GetRecommendationReportDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationReportDetailsRequest;
      output: GetRecommendationReportDetailsResponse;
    };
    sdk: {
      input: GetRecommendationReportDetailsCommandInput;
      output: GetRecommendationReportDetailsCommandOutput;
    };
  };
}
