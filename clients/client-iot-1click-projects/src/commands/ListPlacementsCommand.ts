// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { ListPlacementsRequest, ListPlacementsResponse } from "../models/models_0";
import { de_ListPlacementsCommand, se_ListPlacementsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlacementsCommand}.
 */
export interface ListPlacementsCommandInput extends ListPlacementsRequest {}
/**
 * @public
 *
 * The output of {@link ListPlacementsCommand}.
 */
export interface ListPlacementsCommandOutput extends ListPlacementsResponse, __MetadataBearer {}

/**
 * <p>Lists the placement(s) of a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, ListPlacementsCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, ListPlacementsCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // ListPlacementsRequest
 *   projectName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPlacementsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlacementsResponse
 * //   placements: [ // PlacementSummaryList // required
 * //     { // PlacementSummary
 * //       projectName: "STRING_VALUE", // required
 * //       placementName: "STRING_VALUE", // required
 * //       createdDate: new Date("TIMESTAMP"), // required
 * //       updatedDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlacementsCommandInput - {@link ListPlacementsCommandInput}
 * @returns {@link ListPlacementsCommandOutput}
 * @see {@link ListPlacementsCommandInput} for command's `input` shape.
 * @see {@link ListPlacementsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoT1ClickProjectsServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickProjects service.</p>
 *
 * @public
 */
export class ListPlacementsCommand extends $Command
  .classBuilder<
    ListPlacementsCommandInput,
    ListPlacementsCommandOutput,
    IoT1ClickProjectsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoT1ClickProjectsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoT1ClickProjects", "ListPlacements", {})
  .n("IoT1ClickProjectsClient", "ListPlacementsCommand")
  .f(void 0, void 0)
  .ser(se_ListPlacementsCommand)
  .de(de_ListPlacementsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlacementsRequest;
      output: ListPlacementsResponse;
    };
    sdk: {
      input: ListPlacementsCommandInput;
      output: ListPlacementsCommandOutput;
    };
  };
}
