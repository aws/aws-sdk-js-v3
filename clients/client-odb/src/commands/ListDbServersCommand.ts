// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDbServersInput, ListDbServersOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { ListDbServers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDbServersCommand}.
 */
export interface ListDbServersCommandInput extends ListDbServersInput {}
/**
 * @public
 *
 * The output of {@link ListDbServersCommand}.
 */
export interface ListDbServersCommandOutput extends ListDbServersOutput, __MetadataBearer {}

/**
 * <p>Returns information about the database servers that belong to the specified Exadata infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListDbServersCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListDbServersCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListDbServersInput
 *   cloudExadataInfrastructureId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDbServersCommand(input);
 * const response = await client.send(command);
 * // { // ListDbServersOutput
 * //   nextToken: "STRING_VALUE",
 * //   dbServers: [ // DbServerList // required
 * //     { // DbServerSummary
 * //       dbServerId: "STRING_VALUE",
 * //       status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //       statusReason: "STRING_VALUE",
 * //       cpuCoreCount: Number("int"),
 * //       dbNodeStorageSizeInGBs: Number("int"),
 * //       dbServerPatchingDetails: { // DbServerPatchingDetails
 * //         estimatedPatchDuration: Number("int"),
 * //         patchingStatus: "COMPLETE" || "FAILED" || "MAINTENANCE_IN_PROGRESS" || "SCHEDULED",
 * //         timePatchingEnded: "STRING_VALUE",
 * //         timePatchingStarted: "STRING_VALUE",
 * //       },
 * //       displayName: "STRING_VALUE",
 * //       exadataInfrastructureId: "STRING_VALUE",
 * //       ocid: "STRING_VALUE",
 * //       ociResourceAnchorName: "STRING_VALUE",
 * //       maxCpuCount: Number("int"),
 * //       maxDbNodeStorageInGBs: Number("int"),
 * //       maxMemoryInGBs: Number("int"),
 * //       memorySizeInGBs: Number("int"),
 * //       shape: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       vmClusterIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       computeModel: "ECPU" || "OCPU",
 * //       autonomousVmClusterIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       autonomousVirtualMachineIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDbServersCommandInput - {@link ListDbServersCommandInput}
 * @returns {@link ListDbServersCommandOutput}
 * @see {@link ListDbServersCommandInput} for command's `input` shape.
 * @see {@link ListDbServersCommandOutput} for command's `response` shape.
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
export class ListDbServersCommand extends $Command
  .classBuilder<
    ListDbServersCommandInput,
    ListDbServersCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "ListDbServers", {})
  .n("OdbClient", "ListDbServersCommand")
  .sc(ListDbServers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDbServersInput;
      output: ListDbServersOutput;
    };
    sdk: {
      input: ListDbServersCommandInput;
      output: ListDbServersCommandOutput;
    };
  };
}
