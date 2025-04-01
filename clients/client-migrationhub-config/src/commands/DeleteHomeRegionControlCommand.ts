// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient";
import { DeleteHomeRegionControlRequest, DeleteHomeRegionControlResult } from "../models/models_0";
import { de_DeleteHomeRegionControlCommand, se_DeleteHomeRegionControlCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHomeRegionControlCommand}.
 */
export interface DeleteHomeRegionControlCommandInput extends DeleteHomeRegionControlRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHomeRegionControlCommand}.
 */
export interface DeleteHomeRegionControlCommandOutput extends DeleteHomeRegionControlResult, __MetadataBearer {}

/**
 * <p>This operation deletes the home region configuration for the calling account. The operation does not delete discovery or migration tracking data in the home region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, DeleteHomeRegionControlCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, DeleteHomeRegionControlCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const input = { // DeleteHomeRegionControlRequest
 *   ControlId: "STRING_VALUE", // required
 * };
 * const command = new DeleteHomeRegionControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHomeRegionControlCommandInput - {@link DeleteHomeRegionControlCommandInput}
 * @returns {@link DeleteHomeRegionControlCommandOutput}
 * @see {@link DeleteHomeRegionControlCommandInput} for command's `input` shape.
 * @see {@link DeleteHomeRegionControlCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for MigrationHubConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *       encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in the
 *       wrong format or data type.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when a request fails due to temporary unavailability of the
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubConfigServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubConfig service.</p>
 *
 *
 * @public
 */
export class DeleteHomeRegionControlCommand extends $Command
  .classBuilder<
    DeleteHomeRegionControlCommandInput,
    DeleteHomeRegionControlCommandOutput,
    MigrationHubConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubMultiAccountService", "DeleteHomeRegionControl", {})
  .n("MigrationHubConfigClient", "DeleteHomeRegionControlCommand")
  .f(void 0, void 0)
  .ser(se_DeleteHomeRegionControlCommand)
  .de(de_DeleteHomeRegionControlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHomeRegionControlRequest;
      output: {};
    };
    sdk: {
      input: DeleteHomeRegionControlCommandInput;
      output: DeleteHomeRegionControlCommandOutput;
    };
  };
}
