// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListResourceSetResourcesRequest, ListResourceSetResourcesResponse } from "../models/models_0";
import { de_ListResourceSetResourcesCommand, se_ListResourceSetResourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceSetResourcesCommand}.
 */
export interface ListResourceSetResourcesCommandInput extends ListResourceSetResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceSetResourcesCommand}.
 */
export interface ListResourceSetResourcesCommandOutput extends ListResourceSetResourcesResponse, __MetadataBearer {}

/**
 * <p>Returns an array of resources that are currently associated to a resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListResourceSetResourcesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListResourceSetResourcesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FMSClient(config);
 * const input = { // ListResourceSetResourcesRequest
 *   Identifier: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceSetResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceSetResourcesResponse
 * //   Items: [ // ResourceList // required
 * //     { // Resource
 * //       URI: "STRING_VALUE", // required
 * //       AccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceSetResourcesCommandInput - {@link ListResourceSetResourcesCommandInput}
 * @returns {@link ListResourceSetResourcesCommandOutput}
 * @see {@link ListResourceSetResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourceSetResourcesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 * @public
 */
export class ListResourceSetResourcesCommand extends $Command
  .classBuilder<
    ListResourceSetResourcesCommandInput,
    ListResourceSetResourcesCommandOutput,
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
  .s("AWSFMS_20180101", "ListResourceSetResources", {})
  .n("FMSClient", "ListResourceSetResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceSetResourcesCommand)
  .de(de_ListResourceSetResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceSetResourcesRequest;
      output: ListResourceSetResourcesResponse;
    };
    sdk: {
      input: ListResourceSetResourcesCommandInput;
      output: ListResourceSetResourcesCommandOutput;
    };
  };
}
