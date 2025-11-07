// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutProtocolsListRequest, PutProtocolsListResponse } from "../models/models_0";
import { PutProtocolsList } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutProtocolsListCommand}.
 */
export interface PutProtocolsListCommandInput extends PutProtocolsListRequest {}
/**
 * @public
 *
 * The output of {@link PutProtocolsListCommand}.
 */
export interface PutProtocolsListCommandOutput extends PutProtocolsListResponse, __MetadataBearer {}

/**
 * <p>Creates an Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // PutProtocolsListRequest
 *   ProtocolsList: { // ProtocolsListData
 *     ListId: "STRING_VALUE",
 *     ListName: "STRING_VALUE", // required
 *     ListUpdateToken: "STRING_VALUE",
 *     CreateTime: new Date("TIMESTAMP"),
 *     LastUpdateTime: new Date("TIMESTAMP"),
 *     ProtocolsList: [ // ProtocolsList // required
 *       "STRING_VALUE",
 *     ],
 *     PreviousProtocolsList: { // PreviousProtocolsList
 *       "<keys>": [
 *         "STRING_VALUE",
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
 * const command = new PutProtocolsListCommand(input);
 * const response = await client.send(command);
 * // { // PutProtocolsListResponse
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
 * @param PutProtocolsListCommandInput - {@link PutProtocolsListCommandInput}
 * @returns {@link PutProtocolsListCommandOutput}
 * @see {@link PutProtocolsListCommandInput} for command's `input` shape.
 * @see {@link PutProtocolsListCommandOutput} for command's `response` shape.
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
export class PutProtocolsListCommand extends $Command
  .classBuilder<
    PutProtocolsListCommandInput,
    PutProtocolsListCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "PutProtocolsList", {})
  .n("FMSClient", "PutProtocolsListCommand")
  .sc(PutProtocolsList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProtocolsListRequest;
      output: PutProtocolsListResponse;
    };
    sdk: {
      input: PutProtocolsListCommandInput;
      output: PutProtocolsListCommandOutput;
    };
  };
}
