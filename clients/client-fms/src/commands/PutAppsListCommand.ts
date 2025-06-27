// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutAppsListRequest, PutAppsListResponse } from "../models/models_0";
import { de_PutAppsListCommand, se_PutAppsListCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAppsListCommand}.
 */
export interface PutAppsListCommandInput extends PutAppsListRequest {}
/**
 * @public
 *
 * The output of {@link PutAppsListCommand}.
 */
export interface PutAppsListCommandOutput extends PutAppsListResponse, __MetadataBearer {}

/**
 * <p>Creates an Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // PutAppsListRequest
 *   AppsList: { // AppsListData
 *     ListId: "STRING_VALUE",
 *     ListName: "STRING_VALUE", // required
 *     ListUpdateToken: "STRING_VALUE",
 *     CreateTime: new Date("TIMESTAMP"),
 *     LastUpdateTime: new Date("TIMESTAMP"),
 *     AppsList: [ // AppsList // required
 *       { // App
 *         AppName: "STRING_VALUE", // required
 *         Protocol: "STRING_VALUE", // required
 *         Port: Number("long"), // required
 *       },
 *     ],
 *     PreviousAppsList: { // PreviousAppsList
 *       "<keys>": [
 *         {
 *           AppName: "STRING_VALUE", // required
 *           Protocol: "STRING_VALUE", // required
 *           Port: Number("long"), // required
 *         },
 *       ],
 *     },
 *   },
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutAppsListCommand(input);
 * const response = await client.send(command);
 * // { // PutAppsListResponse
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
 * @param PutAppsListCommandInput - {@link PutAppsListCommandInput}
 * @returns {@link PutAppsListCommandOutput}
 * @see {@link PutAppsListCommandInput} for command's `input` shape.
 * @see {@link PutAppsListCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
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
export class PutAppsListCommand extends $Command
  .classBuilder<
    PutAppsListCommandInput,
    PutAppsListCommandOutput,
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
  .s("AWSFMS_20180101", "PutAppsList", {})
  .n("FMSClient", "PutAppsListCommand")
  .f(void 0, void 0)
  .ser(se_PutAppsListCommand)
  .de(de_PutAppsListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAppsListRequest;
      output: PutAppsListResponse;
    };
    sdk: {
      input: PutAppsListCommandInput;
      output: PutAppsListCommandOutput;
    };
  };
}
