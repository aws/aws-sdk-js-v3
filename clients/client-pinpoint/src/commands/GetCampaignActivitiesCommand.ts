// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCampaignActivitiesRequest, GetCampaignActivitiesResponse } from "../models/models_0";
import { GetCampaignActivities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about all the activities for a campaign.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignActivitiesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignActivitiesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
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
 *
 * Provides information about an API request or response.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PinpointServiceException}
 *
 * Base exception class for all service exceptions from Pinpoint service.
 *
 * @public
 */
export class GetCampaignActivitiesCommand extends command<GetCampaignActivitiesCommandInput, GetCampaignActivitiesCommandOutput>(
  _ep0,
  _mw0,
  "GetCampaignActivities",
  GetCampaignActivities$
) {
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
