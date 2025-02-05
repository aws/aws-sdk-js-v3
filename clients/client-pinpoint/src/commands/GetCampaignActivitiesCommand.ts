// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCampaignActivitiesRequest, GetCampaignActivitiesResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetCampaignActivitiesCommand, se_GetCampaignActivitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCampaignActivitiesCommand}.
 */
export interface GetCampaignActivitiesCommandInput extends GetCampaignActivitiesRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignActivitiesCommand}.
 */
export interface GetCampaignActivitiesCommandOutput extends GetCampaignActivitiesResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about all the activities for a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignActivitiesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignActivitiesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointClient(config);
 * const input = { // GetCampaignActivitiesRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   CampaignId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetCampaignActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignActivitiesResponse
 * //   ActivitiesResponse: { // ActivitiesResponse
 * //     Item: [ // ListOfActivityResponse // required
 * //       { // ActivityResponse
 * //         ApplicationId: "STRING_VALUE", // required
 * //         CampaignId: "STRING_VALUE", // required
 * //         End: "STRING_VALUE",
 * //         Id: "STRING_VALUE", // required
 * //         Result: "STRING_VALUE",
 * //         ScheduledStart: "STRING_VALUE",
 * //         Start: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         SuccessfulEndpointCount: Number("int"),
 * //         TimezonesCompletedCount: Number("int"),
 * //         TimezonesTotalCount: Number("int"),
 * //         TotalEndpointCount: Number("int"),
 * //         TreatmentId: "STRING_VALUE",
 * //         ExecutionMetrics: { // MapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCampaignActivitiesCommandInput - {@link GetCampaignActivitiesCommandInput}
 * @returns {@link GetCampaignActivitiesCommandOutput}
 * @see {@link GetCampaignActivitiesCommandInput} for command's `input` shape.
 * @see {@link GetCampaignActivitiesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 * @public
 */
export class GetCampaignActivitiesCommand extends $Command
  .classBuilder<
    GetCampaignActivitiesCommandInput,
    GetCampaignActivitiesCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetCampaignActivities", {})
  .n("PinpointClient", "GetCampaignActivitiesCommand")
  .f(void 0, void 0)
  .ser(se_GetCampaignActivitiesCommand)
  .de(de_GetCampaignActivitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCampaignActivitiesRequest;
      output: GetCampaignActivitiesResponse;
    };
    sdk: {
      input: GetCampaignActivitiesCommandInput;
      output: GetCampaignActivitiesCommandOutput;
    };
  };
}
