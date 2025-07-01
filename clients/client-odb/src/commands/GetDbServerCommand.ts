// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDbServerInput, GetDbServerOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { de_GetDbServerCommand, se_GetDbServerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDbServerCommand}.
 */
export interface GetDbServerCommandInput extends GetDbServerInput {}
/**
 * @public
 *
 * The output of {@link GetDbServerCommand}.
 */
export interface GetDbServerCommandOutput extends GetDbServerOutput, __MetadataBearer {}

/**
 * <p>Returns information about the specified database server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetDbServerCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetDbServerCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * const client = new OdbClient(config);
 * const input = { // GetDbServerInput
 *   cloudExadataInfrastructureId: "STRING_VALUE", // required
 *   dbServerId: "STRING_VALUE", // required
 * };
 * const command = new GetDbServerCommand(input);
 * const response = await client.send(command);
 * // { // GetDbServerOutput
 * //   dbServer: { // DbServer
 * //     dbServerId: "STRING_VALUE",
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //     statusReason: "STRING_VALUE",
 * //     cpuCoreCount: Number("int"),
 * //     dbNodeStorageSizeInGBs: Number("int"),
 * //     dbServerPatchingDetails: { // DbServerPatchingDetails
 * //       estimatedPatchDuration: Number("int"),
 * //       patchingStatus: "COMPLETE" || "FAILED" || "MAINTENANCE_IN_PROGRESS" || "SCHEDULED",
 * //       timePatchingEnded: "STRING_VALUE",
 * //       timePatchingStarted: "STRING_VALUE",
 * //     },
 * //     displayName: "STRING_VALUE",
 * //     exadataInfrastructureId: "STRING_VALUE",
 * //     ocid: "STRING_VALUE",
 * //     ociResourceAnchorName: "STRING_VALUE",
 * //     maxCpuCount: Number("int"),
 * //     maxDbNodeStorageInGBs: Number("int"),
 * //     maxMemoryInGBs: Number("int"),
 * //     memorySizeInGBs: Number("int"),
 * //     shape: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     vmClusterIds: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     computeModel: "ECPU" || "OCPU",
 * //     autonomousVmClusterIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     autonomousVirtualMachineIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDbServerCommandInput - {@link GetDbServerCommandInput}
 * @returns {@link GetDbServerCommandOutput}
 * @see {@link GetDbServerCommandInput} for command's `input` shape.
 * @see {@link GetDbServerCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
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
export class GetDbServerCommand extends $Command
  .classBuilder<
    GetDbServerCommandInput,
    GetDbServerCommandOutput,
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
  .s("Odb", "GetDbServer", {})
  .n("OdbClient", "GetDbServerCommand")
  .f(void 0, void 0)
  .ser(se_GetDbServerCommand)
  .de(de_GetDbServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDbServerInput;
      output: GetDbServerOutput;
    };
    sdk: {
      input: GetDbServerCommandInput;
      output: GetDbServerCommandOutput;
    };
  };
}
