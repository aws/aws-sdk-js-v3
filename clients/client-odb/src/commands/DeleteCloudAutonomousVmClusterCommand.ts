// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCloudAutonomousVmClusterInput, DeleteCloudAutonomousVmClusterOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import {
  de_DeleteCloudAutonomousVmClusterCommand,
  se_DeleteCloudAutonomousVmClusterCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCloudAutonomousVmClusterCommand}.
 */
export interface DeleteCloudAutonomousVmClusterCommandInput extends DeleteCloudAutonomousVmClusterInput {}
/**
 * @public
 *
 * The output of {@link DeleteCloudAutonomousVmClusterCommand}.
 */
export interface DeleteCloudAutonomousVmClusterCommandOutput
  extends DeleteCloudAutonomousVmClusterOutput,
    __MetadataBearer {}

/**
 * <p>Deletes an Autonomous VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DeleteCloudAutonomousVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DeleteCloudAutonomousVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * const client = new OdbClient(config);
 * const input = { // DeleteCloudAutonomousVmClusterInput
 *   cloudAutonomousVmClusterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCloudAutonomousVmClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCloudAutonomousVmClusterCommandInput - {@link DeleteCloudAutonomousVmClusterCommandInput}
 * @returns {@link DeleteCloudAutonomousVmClusterCommandOutput}
 * @see {@link DeleteCloudAutonomousVmClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudAutonomousVmClusterCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class DeleteCloudAutonomousVmClusterCommand extends $Command
  .classBuilder<
    DeleteCloudAutonomousVmClusterCommandInput,
    DeleteCloudAutonomousVmClusterCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Odb", "DeleteCloudAutonomousVmCluster", {})
  .n("OdbClient", "DeleteCloudAutonomousVmClusterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCloudAutonomousVmClusterCommand)
  .de(de_DeleteCloudAutonomousVmClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudAutonomousVmClusterInput;
      output: {};
    };
    sdk: {
      input: DeleteCloudAutonomousVmClusterCommandInput;
      output: DeleteCloudAutonomousVmClusterCommandOutput;
    };
  };
}
