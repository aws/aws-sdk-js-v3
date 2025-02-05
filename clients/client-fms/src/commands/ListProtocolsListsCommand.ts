// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListProtocolsListsRequest, ListProtocolsListsResponse } from "../models/models_0";
import { de_ListProtocolsListsCommand, se_ListProtocolsListsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProtocolsListsCommand}.
 */
export interface ListProtocolsListsCommandInput extends ListProtocolsListsRequest {}
/**
 * @public
 *
 * The output of {@link ListProtocolsListsCommand}.
 */
export interface ListProtocolsListsCommandOutput extends ListProtocolsListsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ProtocolsListDataSummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListProtocolsListsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListProtocolsListsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FMSClient(config);
 * const input = { // ListProtocolsListsRequest
 *   DefaultLists: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"), // required
 * };
 * const command = new ListProtocolsListsCommand(input);
 * const response = await client.send(command);
 * // { // ListProtocolsListsResponse
 * //   ProtocolsLists: [ // ProtocolsListsData
 * //     { // ProtocolsListDataSummary
 * //       ListArn: "STRING_VALUE",
 * //       ListId: "STRING_VALUE",
 * //       ListName: "STRING_VALUE",
 * //       ProtocolsList: [ // ProtocolsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProtocolsListsCommandInput - {@link ListProtocolsListsCommandInput}
 * @returns {@link ListProtocolsListsCommandOutput}
 * @see {@link ListProtocolsListsCommandInput} for command's `input` shape.
 * @see {@link ListProtocolsListsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
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
export class ListProtocolsListsCommand extends $Command
  .classBuilder<
    ListProtocolsListsCommandInput,
    ListProtocolsListsCommandOutput,
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
  .s("AWSFMS_20180101", "ListProtocolsLists", {})
  .n("FMSClient", "ListProtocolsListsCommand")
  .f(void 0, void 0)
  .ser(se_ListProtocolsListsCommand)
  .de(de_ListProtocolsListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtocolsListsRequest;
      output: ListProtocolsListsResponse;
    };
    sdk: {
      input: ListProtocolsListsCommandInput;
      output: ListProtocolsListsCommandOutput;
    };
  };
}
