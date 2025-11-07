// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetGroupsCommand}.
 */
export interface ListDatasetGroupsCommandInput extends ListDatasetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetGroupsCommand}.
 */
export interface ListDatasetGroupsCommandOutput extends ListDatasetGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of dataset groups. The response provides the properties
 *       for each dataset group, including the Amazon Resource Name (ARN). For more
 *       information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetGroupsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetGroupsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // ListDatasetGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatasetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetGroupsResponse
 * //   datasetGroups: [ // DatasetGroups
 * //     { // DatasetGroupSummary
 * //       name: "STRING_VALUE",
 * //       datasetGroupArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //       domain: "ECOMMERCE" || "VIDEO_ON_DEMAND",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetGroupsCommandInput - {@link ListDatasetGroupsCommandInput}
 * @returns {@link ListDatasetGroupsCommandOutput}
 * @see {@link ListDatasetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGroupsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class ListDatasetGroupsCommand extends $Command
  .classBuilder<
    ListDatasetGroupsCommandInput,
    ListDatasetGroupsCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "ListDatasetGroups", {})
  .n("PersonalizeClient", "ListDatasetGroupsCommand")
  .sc(ListDatasetGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetGroupsRequest;
      output: ListDatasetGroupsResponse;
    };
    sdk: {
      input: ListDatasetGroupsCommandInput;
      output: ListDatasetGroupsCommandOutput;
    };
  };
}
