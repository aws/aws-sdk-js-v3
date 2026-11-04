// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecommendationReportDetailsRequest, GetRecommendationReportDetailsResponse } from "../models/models_0";
import { GetRecommendationReportDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetRecommendationReportDetailsCommandOutput extends GetRecommendationReportDetailsResponse, __MetadataBearer {}

/**
 * Retrieves detailed information about the specified recommendation report.
 *
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
 *
 * The user does not have permission to perform the action. Check the AWS Identity and Access Management (IAM) policy associated with this user.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified ID in the request is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request body isn't valid.
 *
 * @throws {@link MigrationHubStrategyServiceException}
 *
 * Base exception class for all service exceptions from MigrationHubStrategy service.
 *
 * @public
 */
export class GetRecommendationReportDetailsCommand extends command<GetRecommendationReportDetailsCommandInput, GetRecommendationReportDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetRecommendationReportDetails",
  GetRecommendationReportDetails$
) {
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
