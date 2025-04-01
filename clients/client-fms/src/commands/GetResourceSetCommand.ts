// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetResourceSetRequest, GetResourceSetResponse } from "../models/models_0";
import { de_GetResourceSetCommand, se_GetResourceSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceSetCommand}.
 */
export interface GetResourceSetCommandInput extends GetResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceSetCommand}.
 */
export interface GetResourceSetCommandOutput extends GetResourceSetResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specific resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetResourceSetCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetResourceSetCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // GetResourceSetRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetResourceSetCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceSetResponse
 * //   ResourceSet: { // ResourceSet
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     UpdateToken: "STRING_VALUE",
 * //     ResourceTypeList: [ // ResourceTypeList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     ResourceSetStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 * //   },
 * //   ResourceSetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetResourceSetCommandInput - {@link GetResourceSetCommandInput}
 * @returns {@link GetResourceSetCommandOutput}
 * @see {@link GetResourceSetCommandInput} for command's `input` shape.
 * @see {@link GetResourceSetCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetResourceSetCommand extends $Command
  .classBuilder<
    GetResourceSetCommandInput,
    GetResourceSetCommandOutput,
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
  .s("AWSFMS_20180101", "GetResourceSet", {})
  .n("FMSClient", "GetResourceSetCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceSetCommand)
  .de(de_GetResourceSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceSetRequest;
      output: GetResourceSetResponse;
    };
    sdk: {
      input: GetResourceSetCommandInput;
      output: GetResourceSetCommandOutput;
    };
  };
}
