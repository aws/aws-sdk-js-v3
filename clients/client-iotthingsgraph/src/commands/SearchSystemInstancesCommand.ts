// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchSystemInstancesRequest, SearchSystemInstancesResponse } from "../models/models_0";
import { de_SearchSystemInstancesCommand, se_SearchSystemInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchSystemInstancesCommand}.
 */
export interface SearchSystemInstancesCommandInput extends SearchSystemInstancesRequest {}
/**
 * @public
 *
 * The output of {@link SearchSystemInstancesCommand}.
 */
export interface SearchSystemInstancesCommandOutput extends SearchSystemInstancesResponse, __MetadataBearer {}

/**
 * <p>Searches for system instances in the user's account.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchSystemInstancesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchSystemInstancesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // SearchSystemInstancesRequest
 *   filters: [ // SystemInstanceFilters
 *     { // SystemInstanceFilter
 *       name: "SYSTEM_TEMPLATE_ID" || "STATUS" || "GREENGRASS_GROUP_NAME",
 *       value: [ // SystemInstanceFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new SearchSystemInstancesCommand(input);
 * const response = await client.send(command);
 * // { // SearchSystemInstancesResponse
 * //   summaries: [ // SystemInstanceSummaries
 * //     { // SystemInstanceSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       status: "NOT_DEPLOYED" || "BOOTSTRAP" || "DEPLOY_IN_PROGRESS" || "DEPLOYED_IN_TARGET" || "UNDEPLOY_IN_PROGRESS" || "FAILED" || "PENDING_DELETE" || "DELETED_IN_TARGET",
 * //       target: "GREENGRASS" || "CLOUD",
 * //       greengrassGroupName: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       greengrassGroupId: "STRING_VALUE",
 * //       greengrassGroupVersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchSystemInstancesCommandInput - {@link SearchSystemInstancesCommandInput}
 * @returns {@link SearchSystemInstancesCommandOutput}
 * @see {@link SearchSystemInstancesCommandInput} for command's `input` shape.
 * @see {@link SearchSystemInstancesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 * @public
 */
export class SearchSystemInstancesCommand extends $Command
  .classBuilder<
    SearchSystemInstancesCommandInput,
    SearchSystemInstancesCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "SearchSystemInstances", {})
  .n("IoTThingsGraphClient", "SearchSystemInstancesCommand")
  .f(void 0, void 0)
  .ser(se_SearchSystemInstancesCommand)
  .de(de_SearchSystemInstancesCommand)
  .build() {}
