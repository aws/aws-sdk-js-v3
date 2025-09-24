// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetAdminAccountRequest, GetAdminAccountResponse } from "../models/models_0";
import { GetAdminAccount } from "../schemas/schemas_18_GetAdminAccount";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAdminAccountCommand}.
 */
export interface GetAdminAccountCommandInput extends GetAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAdminAccountCommand}.
 */
export interface GetAdminAccountCommandOutput extends GetAdminAccountResponse, __MetadataBearer {}

/**
 * <p>Returns the Organizations account that is associated with Firewall Manager
 *       as the Firewall Manager default administrator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = {};
 * const command = new GetAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAdminAccountResponse
 * //   AdminAccount: "STRING_VALUE",
 * //   RoleStatus: "READY" || "CREATING" || "PENDING_DELETION" || "DELETING" || "DELETED",
 * // };
 *
 * ```
 *
 * @param GetAdminAccountCommandInput - {@link GetAdminAccountCommandInput}
 * @returns {@link GetAdminAccountCommandOutput}
 * @see {@link GetAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdminAccountCommandOutput} for command's `response` shape.
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
export class GetAdminAccountCommand extends $Command
  .classBuilder<
    GetAdminAccountCommandInput,
    GetAdminAccountCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "GetAdminAccount", {})
  .n("FMSClient", "GetAdminAccountCommand")
  .sc(GetAdminAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAdminAccountResponse;
    };
    sdk: {
      input: GetAdminAccountCommandInput;
      output: GetAdminAccountCommandOutput;
    };
  };
}
