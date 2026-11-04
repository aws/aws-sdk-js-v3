// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAutoSnapshotsRequest, GetAutoSnapshotsResult } from "../models/models_0";
import { GetAutoSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAutoSnapshotsCommand}.
 */
export interface GetAutoSnapshotsCommandInput extends GetAutoSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link GetAutoSnapshotsCommand}.
 */
export interface GetAutoSnapshotsCommandOutput extends GetAutoSnapshotsResult, __MetadataBearer {}

/**
 * Returns the available automatic snapshots for an instance or disk. For more information, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configuring-automatic-snapshots).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetAutoSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetAutoSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetAutoSnapshotsRequest
 *   resourceName: "STRING_VALUE", // required
 * };
 * const command = new GetAutoSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // GetAutoSnapshotsResult
 * //   resourceName: "STRING_VALUE",
 * //   resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //   autoSnapshots: [ // AutoSnapshotDetailsList
 * //     { // AutoSnapshotDetails
 * //       date: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       status: "Success" || "Failed" || "InProgress" || "NotFound",
 * //       fromAttachedDisks: [ // AttachedDiskList
 * //         { // AttachedDisk
 * //           path: "STRING_VALUE",
 * //           sizeInGb: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAutoSnapshotsCommandInput - {@link GetAutoSnapshotsCommandInput}
 * @returns {@link GetAutoSnapshotsCommandOutput}
 * @see {@link GetAutoSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetAutoSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link OperationFailureException} (client fault)
 *
 * Lightsail throws this exception when an operation fails to execute.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetAutoSnapshotsCommand extends command<GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "GetAutoSnapshots",
  GetAutoSnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutoSnapshotsRequest;
      output: GetAutoSnapshotsResult;
    };
    sdk: {
      input: GetAutoSnapshotsCommandInput;
      output: GetAutoSnapshotsCommandOutput;
    };
  };
}
