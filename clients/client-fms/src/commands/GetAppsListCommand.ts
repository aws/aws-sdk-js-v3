// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { GetAppsListRequest, GetAppsListResponse } from "../models/models_0";
import { GetAppsList } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppsListCommand}.
 */
export interface GetAppsListCommandInput extends GetAppsListRequest {}
/**
 * @public
 *
 * The output of {@link GetAppsListCommand}.
 */
export interface GetAppsListCommandOutput extends GetAppsListResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // GetAppsListRequest
 *   ListId: "STRING_VALUE", // required
 *   DefaultList: true || false,
 * };
 * const command = new GetAppsListCommand(input);
 * const response = await client.send(command);
 * // { // GetAppsListResponse
 * //   AppsList: { // AppsListData
 * //     ListId: "STRING_VALUE",
 * //     ListName: "STRING_VALUE", // required
 * //     ListUpdateToken: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     AppsList: [ // AppsList // required
 * //       { // App
 * //         AppName: "STRING_VALUE", // required
 * //         Protocol: "STRING_VALUE", // required
 * //         Port: Number("long"), // required
 * //       },
 * //     ],
 * //     PreviousAppsList: { // PreviousAppsList
 * //       "<keys>": [
 * //         {
 * //           AppName: "STRING_VALUE", // required
 * //           Protocol: "STRING_VALUE", // required
 * //           Port: Number("long"), // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   AppsListArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAppsListCommandInput - {@link GetAppsListCommandInput}
 * @returns {@link GetAppsListCommandOutput}
 * @see {@link GetAppsListCommandInput} for command's `input` shape.
 * @see {@link GetAppsListCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetAppsListCommand extends $Command
  .classBuilder<
    GetAppsListCommandInput,
    GetAppsListCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "GetAppsList", {})
  .n("FMSClient", "GetAppsListCommand")
  .sc(GetAppsList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppsListRequest;
      output: GetAppsListResponse;
    };
    sdk: {
      input: GetAppsListCommandInput;
      output: GetAppsListCommandOutput;
    };
  };
}
