// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { DeleteResourceSetRequest } from "../models/models_0";
import { DeleteResourceSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceSetCommand}.
 */
export interface DeleteResourceSetCommandInput extends DeleteResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceSetCommand}.
 */
export interface DeleteResourceSetCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified <a>ResourceSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteResourceSetCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteResourceSetCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // DeleteResourceSetRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourceSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceSetCommandInput - {@link DeleteResourceSetCommandInput}
 * @returns {@link DeleteResourceSetCommandOutput}
 * @see {@link DeleteResourceSetCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceSetCommandOutput} for command's `response` shape.
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
export class DeleteResourceSetCommand extends $Command
  .classBuilder<
    DeleteResourceSetCommandInput,
    DeleteResourceSetCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "DeleteResourceSet", {})
  .n("FMSClient", "DeleteResourceSetCommand")
  .sc(DeleteResourceSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceSetRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourceSetCommandInput;
      output: DeleteResourceSetCommandOutput;
    };
  };
}
