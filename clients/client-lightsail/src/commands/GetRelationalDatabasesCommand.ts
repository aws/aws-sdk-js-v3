// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabasesRequest, GetRelationalDatabasesResult } from "../models/models_1";
import { de_GetRelationalDatabasesCommand, se_GetRelationalDatabasesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelationalDatabasesCommand}.
 */
export interface GetRelationalDatabasesCommandInput extends GetRelationalDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationalDatabasesCommand}.
 */
export interface GetRelationalDatabasesCommandOutput extends GetRelationalDatabasesResult, __MetadataBearer {}

/**
 * <p>Returns information about all of your databases in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabasesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabasesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetRelationalDatabasesRequest
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetRelationalDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationalDatabasesResult
 * //   relationalDatabases: [ // RelationalDatabaseList
 * //     { // RelationalDatabase
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       supportCode: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       relationalDatabaseBlueprintId: "STRING_VALUE",
 * //       relationalDatabaseBundleId: "STRING_VALUE",
 * //       masterDatabaseName: "STRING_VALUE",
 * //       hardware: { // RelationalDatabaseHardware
 * //         cpuCount: Number("int"),
 * //         diskSizeInGb: Number("int"),
 * //         ramSizeInGb: Number("float"),
 * //       },
 * //       state: "STRING_VALUE",
 * //       secondaryAvailabilityZone: "STRING_VALUE",
 * //       backupRetentionEnabled: true || false,
 * //       pendingModifiedValues: { // PendingModifiedRelationalDatabaseValues
 * //         masterUserPassword: "STRING_VALUE",
 * //         engineVersion: "STRING_VALUE",
 * //         backupRetentionEnabled: true || false,
 * //       },
 * //       engine: "STRING_VALUE",
 * //       engineVersion: "STRING_VALUE",
 * //       latestRestorableTime: new Date("TIMESTAMP"),
 * //       masterUsername: "STRING_VALUE",
 * //       parameterApplyStatus: "STRING_VALUE",
 * //       preferredBackupWindow: "STRING_VALUE",
 * //       preferredMaintenanceWindow: "STRING_VALUE",
 * //       publiclyAccessible: true || false,
 * //       masterEndpoint: { // RelationalDatabaseEndpoint
 * //         port: Number("int"),
 * //         address: "STRING_VALUE",
 * //       },
 * //       pendingMaintenanceActions: [ // PendingMaintenanceActionList
 * //         { // PendingMaintenanceAction
 * //           action: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           currentApplyDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       caCertificateIdentifier: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRelationalDatabasesCommandInput - {@link GetRelationalDatabasesCommandInput}
 * @returns {@link GetRelationalDatabasesCommandOutput}
 * @see {@link GetRelationalDatabasesCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabasesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
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
export class GetRelationalDatabasesCommand extends $Command
  .classBuilder<
    GetRelationalDatabasesCommandInput,
    GetRelationalDatabasesCommandOutput,
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
  .s("Lightsail_20161128", "GetRelationalDatabases", {})
  .n("LightsailClient", "GetRelationalDatabasesCommand")
  .f(void 0, void 0)
  .ser(se_GetRelationalDatabasesCommand)
  .de(de_GetRelationalDatabasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationalDatabasesRequest;
      output: GetRelationalDatabasesResult;
    };
    sdk: {
      input: GetRelationalDatabasesCommandInput;
      output: GetRelationalDatabasesCommandOutput;
    };
  };
}
