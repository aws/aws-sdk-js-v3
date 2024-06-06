// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListLabelGroupsRequest, ListLabelGroupsResponse } from "../models/models_0";
import { de_ListLabelGroupsCommand, se_ListLabelGroupsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLabelGroupsCommand}.
 */
export interface ListLabelGroupsCommandInput extends ListLabelGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListLabelGroupsCommand}.
 */
export interface ListLabelGroupsCommandOutput extends ListLabelGroupsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of the label groups. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListLabelGroupsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListLabelGroupsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListLabelGroupsRequest
 *   LabelGroupNameBeginsWith: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLabelGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListLabelGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   LabelGroupSummaries: [ // LabelGroupSummaries
 * //     { // LabelGroupSummary
 * //       LabelGroupName: "STRING_VALUE",
 * //       LabelGroupArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLabelGroupsCommandInput - {@link ListLabelGroupsCommandInput}
 * @returns {@link ListLabelGroupsCommandOutput}
 * @see {@link ListLabelGroupsCommandInput} for command's `input` shape.
 * @see {@link ListLabelGroupsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 * @public
 */
export class ListLabelGroupsCommand extends $Command
  .classBuilder<
    ListLabelGroupsCommandInput,
    ListLabelGroupsCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLookoutEquipmentFrontendService", "ListLabelGroups", {})
  .n("LookoutEquipmentClient", "ListLabelGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListLabelGroupsCommand)
  .de(de_ListLabelGroupsCommand)
  .build() {}
