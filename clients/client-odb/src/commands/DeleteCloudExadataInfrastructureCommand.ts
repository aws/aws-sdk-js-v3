// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCloudExadataInfrastructureInput, DeleteCloudExadataInfrastructureOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { DeleteCloudExadataInfrastructure } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCloudExadataInfrastructureCommand}.
 */
export interface DeleteCloudExadataInfrastructureCommandInput extends DeleteCloudExadataInfrastructureInput {}
/**
 * @public
 *
 * The output of {@link DeleteCloudExadataInfrastructureCommand}.
 */
export interface DeleteCloudExadataInfrastructureCommandOutput
  extends DeleteCloudExadataInfrastructureOutput,
    __MetadataBearer {}

/**
 * <p>Deletes the specified Exadata infrastructure. Before you use this operation, make sure to delete all of the VM clusters that are hosted on this Exadata infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DeleteCloudExadataInfrastructureCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DeleteCloudExadataInfrastructureCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // DeleteCloudExadataInfrastructureInput
 *   cloudExadataInfrastructureId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCloudExadataInfrastructureCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCloudExadataInfrastructureCommandInput - {@link DeleteCloudExadataInfrastructureCommandInput}
 * @returns {@link DeleteCloudExadataInfrastructureCommandOutput}
 * @see {@link DeleteCloudExadataInfrastructureCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudExadataInfrastructureCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
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
export class DeleteCloudExadataInfrastructureCommand extends $Command
  .classBuilder<
    DeleteCloudExadataInfrastructureCommandInput,
    DeleteCloudExadataInfrastructureCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "DeleteCloudExadataInfrastructure", {})
  .n("OdbClient", "DeleteCloudExadataInfrastructureCommand")
  .sc(DeleteCloudExadataInfrastructure)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudExadataInfrastructureInput;
      output: {};
    };
    sdk: {
      input: DeleteCloudExadataInfrastructureCommandInput;
      output: DeleteCloudExadataInfrastructureCommandOutput;
    };
  };
}
