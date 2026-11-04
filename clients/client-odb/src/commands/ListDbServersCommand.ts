// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDbServersInput, ListDbServersOutput } from "../models/models_0";
import { ListDbServers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about the database servers that belong to the specified Exadata infrastructure.
 *
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
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class ListDbServersCommand extends command<ListDbServersCommandInput, ListDbServersCommandOutput>(
  _ep0,
  _mw0,
  "ListDbServers",
  ListDbServers$
) {
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
