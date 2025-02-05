// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetProtocolsListRequest, GetProtocolsListResponse } from "../models/models_0";
import { de_GetProtocolsListCommand, se_GetProtocolsListCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProtocolsListCommand}.
 */
export interface GetProtocolsListCommandInput extends GetProtocolsListRequest {}
/**
 * @public
 *
 * The output of {@link GetProtocolsListCommand}.
 */
export interface GetProtocolsListCommandOutput extends GetProtocolsListResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FMSClient(config);
 * const input = { // GetProtocolsListRequest
 *   ListId: "STRING_VALUE", // required
 *   DefaultList: true || false,
 * };
 * const command = new GetProtocolsListCommand(input);
 * const response = await client.send(command);
 * // { // GetProtocolsListResponse
 * //   ProtocolsList: { // ProtocolsListData
 * //     ListId: "STRING_VALUE",
 * //     ListName: "STRING_VALUE", // required
 * //     ListUpdateToken: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     ProtocolsList: [ // ProtocolsList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     PreviousProtocolsList: { // PreviousProtocolsList
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   ProtocolsListArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProtocolsListCommandInput - {@link GetProtocolsListCommandInput}
 * @returns {@link GetProtocolsListCommandOutput}
 * @see {@link GetProtocolsListCommandInput} for command's `input` shape.
 * @see {@link GetProtocolsListCommandOutput} for command's `response` shape.
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
export class GetProtocolsListCommand extends $Command
  .classBuilder<
    GetProtocolsListCommandInput,
    GetProtocolsListCommandOutput,
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
  .s("AWSFMS_20180101", "GetProtocolsList", {})
  .n("FMSClient", "GetProtocolsListCommand")
  .f(void 0, void 0)
  .ser(se_GetProtocolsListCommand)
  .de(de_GetProtocolsListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProtocolsListRequest;
      output: GetProtocolsListResponse;
    };
    sdk: {
      input: GetProtocolsListCommandInput;
      output: GetProtocolsListCommandOutput;
    };
  };
}
