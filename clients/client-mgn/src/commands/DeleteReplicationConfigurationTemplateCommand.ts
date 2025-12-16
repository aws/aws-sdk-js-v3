// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  DeleteReplicationConfigurationTemplateRequest,
  DeleteReplicationConfigurationTemplateResponse,
} from "../models/models_0";
import { DeleteReplicationConfigurationTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationConfigurationTemplateCommand}.
 */
export interface DeleteReplicationConfigurationTemplateCommandInput
  extends DeleteReplicationConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationConfigurationTemplateCommand}.
 */
export interface DeleteReplicationConfigurationTemplateCommandOutput
  extends DeleteReplicationConfigurationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a single Replication Configuration Template by ID</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteReplicationConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteReplicationConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // DeleteReplicationConfigurationTemplateRequest
 *   replicationConfigurationTemplateID: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReplicationConfigurationTemplateCommandInput - {@link DeleteReplicationConfigurationTemplateCommandInput}
 * @returns {@link DeleteReplicationConfigurationTemplateCommandOutput}
 * @see {@link DeleteReplicationConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class DeleteReplicationConfigurationTemplateCommand extends $Command
  .classBuilder<
    DeleteReplicationConfigurationTemplateCommandInput,
    DeleteReplicationConfigurationTemplateCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "DeleteReplicationConfigurationTemplate", {})
  .n("MgnClient", "DeleteReplicationConfigurationTemplateCommand")
  .sc(DeleteReplicationConfigurationTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationConfigurationTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteReplicationConfigurationTemplateCommandInput;
      output: DeleteReplicationConfigurationTemplateCommandOutput;
    };
  };
}
