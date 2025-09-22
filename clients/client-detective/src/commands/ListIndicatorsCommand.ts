// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIndicatorsRequest, ListIndicatorsResponse } from "../models/models_0";
import { ListIndicators } from "../schemas/schemas_3_Organization";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIndicatorsCommand}.
 */
export interface ListIndicatorsCommandInput extends ListIndicatorsRequest {}
/**
 * @public
 *
 * The output of {@link ListIndicatorsCommand}.
 */
export interface ListIndicatorsCommandOutput extends ListIndicatorsResponse, __MetadataBearer {}

/**
 * <p>Gets the indicators from an investigation. You can use the information from the indicators to determine if an IAM user and/or IAM role is involved in an unusual activity that could indicate malicious behavior and its impact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListIndicatorsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListIndicatorsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // ListIndicatorsRequest
 *   GraphArn: "STRING_VALUE", // required
 *   InvestigationId: "STRING_VALUE", // required
 *   IndicatorType: "TTP_OBSERVED" || "IMPOSSIBLE_TRAVEL" || "FLAGGED_IP_ADDRESS" || "NEW_GEOLOCATION" || "NEW_ASO" || "NEW_USER_AGENT" || "RELATED_FINDING" || "RELATED_FINDING_GROUP",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIndicatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListIndicatorsResponse
 * //   GraphArn: "STRING_VALUE",
 * //   InvestigationId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Indicators: [ // Indicators
 * //     { // Indicator
 * //       IndicatorType: "TTP_OBSERVED" || "IMPOSSIBLE_TRAVEL" || "FLAGGED_IP_ADDRESS" || "NEW_GEOLOCATION" || "NEW_ASO" || "NEW_USER_AGENT" || "RELATED_FINDING" || "RELATED_FINDING_GROUP",
 * //       IndicatorDetail: { // IndicatorDetail
 * //         TTPsObservedDetail: { // TTPsObservedDetail
 * //           Tactic: "STRING_VALUE",
 * //           Technique: "STRING_VALUE",
 * //           Procedure: "STRING_VALUE",
 * //           IpAddress: "STRING_VALUE",
 * //           APIName: "STRING_VALUE",
 * //           APISuccessCount: Number("long"),
 * //           APIFailureCount: Number("long"),
 * //         },
 * //         ImpossibleTravelDetail: { // ImpossibleTravelDetail
 * //           StartingIpAddress: "STRING_VALUE",
 * //           EndingIpAddress: "STRING_VALUE",
 * //           StartingLocation: "STRING_VALUE",
 * //           EndingLocation: "STRING_VALUE",
 * //           HourlyTimeDelta: Number("int"),
 * //         },
 * //         FlaggedIpAddressDetail: { // FlaggedIpAddressDetail
 * //           IpAddress: "STRING_VALUE",
 * //           Reason: "AWS_THREAT_INTELLIGENCE",
 * //         },
 * //         NewGeolocationDetail: { // NewGeolocationDetail
 * //           Location: "STRING_VALUE",
 * //           IpAddress: "STRING_VALUE",
 * //           IsNewForEntireAccount: true || false,
 * //         },
 * //         NewAsoDetail: { // NewAsoDetail
 * //           Aso: "STRING_VALUE",
 * //           IsNewForEntireAccount: true || false,
 * //         },
 * //         NewUserAgentDetail: { // NewUserAgentDetail
 * //           UserAgent: "STRING_VALUE",
 * //           IsNewForEntireAccount: true || false,
 * //         },
 * //         RelatedFindingDetail: { // RelatedFindingDetail
 * //           Arn: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           IpAddress: "STRING_VALUE",
 * //         },
 * //         RelatedFindingGroupDetail: { // RelatedFindingGroupDetail
 * //           Id: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIndicatorsCommandInput - {@link ListIndicatorsCommandInput}
 * @returns {@link ListIndicatorsCommandOutput}
 * @see {@link ListIndicatorsCommandInput} for command's `input` shape.
 * @see {@link ListIndicatorsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class ListIndicatorsCommand extends $Command
  .classBuilder<
    ListIndicatorsCommandInput,
    ListIndicatorsCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "ListIndicators", {})
  .n("DetectiveClient", "ListIndicatorsCommand")
  .sc(ListIndicators)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIndicatorsRequest;
      output: ListIndicatorsResponse;
    };
    sdk: {
      input: ListIndicatorsCommandInput;
      output: ListIndicatorsCommandOutput;
    };
  };
}
