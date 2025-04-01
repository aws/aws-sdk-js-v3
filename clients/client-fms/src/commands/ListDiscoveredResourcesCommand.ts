// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListDiscoveredResourcesRequest, ListDiscoveredResourcesResponse } from "../models/models_0";
import { de_ListDiscoveredResourcesCommand, se_ListDiscoveredResourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDiscoveredResourcesCommand}.
 */
export interface ListDiscoveredResourcesCommandInput extends ListDiscoveredResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListDiscoveredResourcesCommand}.
 */
export interface ListDiscoveredResourcesCommandOutput extends ListDiscoveredResourcesResponse, __MetadataBearer {}

/**
 * <p>Returns an array of resources in the organization's accounts that are available to be associated with a resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListDiscoveredResourcesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListDiscoveredResourcesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // ListDiscoveredResourcesRequest
 *   MemberAccountIds: [ // AWSAccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   ResourceType: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDiscoveredResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoveredResourcesResponse
 * //   Items: [ // DiscoveredResourceList
 * //     { // DiscoveredResource
 * //       URI: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoveredResourcesCommandInput - {@link ListDiscoveredResourcesCommandInput}
 * @returns {@link ListDiscoveredResourcesCommandOutput}
 * @see {@link ListDiscoveredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveredResourcesCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class ListDiscoveredResourcesCommand extends $Command
  .classBuilder<
    ListDiscoveredResourcesCommandInput,
    ListDiscoveredResourcesCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFMS_20180101", "ListDiscoveredResources", {})
  .n("FMSClient", "ListDiscoveredResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListDiscoveredResourcesCommand)
  .de(de_ListDiscoveredResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDiscoveredResourcesRequest;
      output: ListDiscoveredResourcesResponse;
    };
    sdk: {
      input: ListDiscoveredResourcesCommandInput;
      output: ListDiscoveredResourcesCommandOutput;
    };
  };
}
