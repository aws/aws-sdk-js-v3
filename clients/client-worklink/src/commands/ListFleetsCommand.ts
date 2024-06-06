// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFleetsRequest, ListFleetsResponse } from "../models/models_0";
import { de_ListFleetsCommand, se_ListFleetsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFleetsCommand}.
 */
export interface ListFleetsCommandInput extends ListFleetsRequest {}
/**
 * @public
 *
 * The output of {@link ListFleetsCommand}.
 */
export interface ListFleetsCommandOutput extends ListFleetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of fleets for the current account and Region.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListFleetsCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListFleetsCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // ListFleetsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFleetsCommand(input);
 * const response = await client.send(command);
 * // { // ListFleetsResponse
 * //   FleetSummaryList: [ // FleetSummaryList
 * //     { // FleetSummary
 * //       FleetArn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       FleetName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       CompanyCode: "STRING_VALUE",
 * //       FleetStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "FAILED_TO_CREATE" || "FAILED_TO_DELETE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFleetsCommandInput - {@link ListFleetsCommandInput}
 * @returns {@link ListFleetsCommandOutput}
 * @see {@link ListFleetsCommandInput} for command's `input` shape.
 * @see {@link ListFleetsCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link WorkLinkServiceException}
 * <p>Base exception class for all service exceptions from WorkLink service.</p>
 *
 * @public
 */
export class ListFleetsCommand extends $Command
  .classBuilder<
    ListFleetsCommandInput,
    ListFleetsCommandOutput,
    WorkLinkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkLinkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkLink", "ListFleets", {})
  .n("WorkLinkClient", "ListFleetsCommand")
  .f(void 0, void 0)
  .ser(se_ListFleetsCommand)
  .de(de_ListFleetsCommand)
  .build() {}
