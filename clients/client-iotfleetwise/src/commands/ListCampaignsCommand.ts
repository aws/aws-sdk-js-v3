// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCampaignsRequest, ListCampaignsResponse } from "../models/models_0";
import { ListCampaigns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCampaignsCommand}.
 */
export interface ListCampaignsCommandInput extends ListCampaignsRequest {}
/**
 * @public
 *
 * The output of {@link ListCampaignsCommand}.
 */
export interface ListCampaignsCommandOutput extends ListCampaignsResponse, __MetadataBearer {}

/**
 * Lists information about created campaigns.
 *
 * > **Note:** This API operation uses pagination. Specify the `nextToken` parameter in the request to return more results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListCampaignsCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListCampaignsCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListCampaignsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   status: "STRING_VALUE",
 *   listResponseScope: "METADATA_ONLY",
 * };
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * // { // ListCampaignsResponse
 * //   campaignSummaries: [ // campaignSummaries
 * //     { // CampaignSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       signalCatalogArn: "STRING_VALUE",
 * //       targetArn: "STRING_VALUE",
 * //       status: "CREATING" || "WAITING_FOR_APPROVAL" || "RUNNING" || "SUSPENDED",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModificationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCampaignsCommandInput - {@link ListCampaignsCommandInput}
 * @returns {@link ListCampaignsCommandOutput}
 * @see {@link ListCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListCampaignsCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class ListCampaignsCommand extends command<ListCampaignsCommandInput, ListCampaignsCommandOutput>(
  _ep0,
  _mw0,
  "ListCampaigns",
  ListCampaigns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCampaignsRequest;
      output: ListCampaignsResponse;
    };
    sdk: {
      input: ListCampaignsCommandInput;
      output: ListCampaignsCommandOutput;
    };
  };
}
