// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetAutoSnapshotsRequest, GetAutoSnapshotsResult } from "../models/models_0";
import { de_GetAutoSnapshotsCommand, se_GetAutoSnapshotsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the available automatic snapshots for an instance or disk. For more information,
 *       see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetAutoSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetAutoSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
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
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetAutoSnapshotsCommand extends $Command
  .classBuilder<
    GetAutoSnapshotsCommandInput,
    GetAutoSnapshotsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetAutoSnapshots", {})
  .n("LightsailClient", "GetAutoSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_GetAutoSnapshotsCommand)
  .de(de_GetAutoSnapshotsCommand)
  .build() {
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
