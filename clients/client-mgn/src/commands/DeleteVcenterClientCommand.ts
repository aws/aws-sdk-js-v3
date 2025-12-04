// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { DeleteVcenterClientRequest } from "../models/models_0";
import { DeleteVcenterClient } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVcenterClientCommand}.
 */
export interface DeleteVcenterClientCommandInput extends DeleteVcenterClientRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVcenterClientCommand}.
 */
export interface DeleteVcenterClientCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a given vCenter client by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteVcenterClientCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteVcenterClientCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // DeleteVcenterClientRequest
 *   vcenterClientID: "STRING_VALUE", // required
 * };
 * const command = new DeleteVcenterClientCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVcenterClientCommandInput - {@link DeleteVcenterClientCommandInput}
 * @returns {@link DeleteVcenterClientCommandOutput}
 * @see {@link DeleteVcenterClientCommandInput} for command's `input` shape.
 * @see {@link DeleteVcenterClientCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class DeleteVcenterClientCommand extends $Command
  .classBuilder<
    DeleteVcenterClientCommandInput,
    DeleteVcenterClientCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "DeleteVcenterClient", {})
  .n("MgnClient", "DeleteVcenterClientCommand")
  .sc(DeleteVcenterClient)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVcenterClientRequest;
      output: {};
    };
    sdk: {
      input: DeleteVcenterClientCommandInput;
      output: DeleteVcenterClientCommandOutput;
    };
  };
}
