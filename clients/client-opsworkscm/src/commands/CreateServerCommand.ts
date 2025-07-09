// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateServerRequest,
  CreateServerRequestFilterSensitiveLog,
  CreateServerResponse,
  CreateServerResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_CreateServerCommand, se_CreateServerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServerCommand}.
 */
export interface CreateServerCommandInput extends CreateServerRequest {}
/**
 * @public
 *
 * The output of {@link CreateServerCommand}.
 */
export interface CreateServerCommandOutput extends CreateServerResponse, __MetadataBearer {}

/**
 * <p>
 *       Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By
 *       default, you can create a maximum of 10 servers.
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A
 *       <code>ResourceAlreadyExistsException</code>
 *       is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when
 *       you
 *       specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when
 *       parameters
 *       of the request are not valid.
 *     </p>
 *          <p>
 *       If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, OpsWorks creates a new
 *       security group.
 *     </p>
 *          <p>
 *             <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If
 *       a KeyName is present, OpsWorks enables SSH access. SSH is also open to the world on TCP port 22.
 *     </p>
 *          <p>
 *             <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, OpsWorks enables SSH access. SSH is also open to the world on TCP port 22.
 *     </p>
 *          <p>By default, your server is accessible from any IP address. We
 *       recommend that you update your security group rules to allow
 *       access from known IP addresses and address ranges only. To edit security group rules, open Security Groups
 *       in the navigation pane of the EC2 management console.
 *     </p>
 *          <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key,
 *       specify values for <code>CustomDomain</code>,
 *       <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, CreateServerCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, CreateServerCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // CreateServerRequest
 *   AssociatePublicIpAddress: true || false,
 *   CustomDomain: "STRING_VALUE",
 *   CustomCertificate: "STRING_VALUE",
 *   CustomPrivateKey: "STRING_VALUE",
 *   DisableAutomatedBackup: true || false,
 *   Engine: "STRING_VALUE", // required
 *   EngineModel: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   EngineAttributes: [ // EngineAttributes
 *     { // EngineAttribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   BackupRetentionCount: Number("int"),
 *   ServerName: "STRING_VALUE", // required
 *   InstanceProfileArn: "STRING_VALUE", // required
 *   InstanceType: "STRING_VALUE", // required
 *   KeyPair: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   PreferredBackupWindow: "STRING_VALUE",
 *   SecurityGroupIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 *   ServiceRoleArn: "STRING_VALUE", // required
 *   SubnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   BackupId: "STRING_VALUE",
 * };
 * const command = new CreateServerCommand(input);
 * const response = await client.send(command);
 * // { // CreateServerResponse
 * //   Server: { // Server
 * //     AssociatePublicIpAddress: true || false,
 * //     BackupRetentionCount: Number("int"),
 * //     ServerName: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     CloudFormationStackArn: "STRING_VALUE",
 * //     CustomDomain: "STRING_VALUE",
 * //     DisableAutomatedBackup: true || false,
 * //     Endpoint: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineModel: "STRING_VALUE",
 * //     EngineAttributes: [ // EngineAttributes
 * //       { // EngineAttribute
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     EngineVersion: "STRING_VALUE",
 * //     InstanceProfileArn: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     KeyPair: "STRING_VALUE",
 * //     MaintenanceStatus: "SUCCESS" || "FAILED",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     SecurityGroupIds: [ // Strings
 * //       "STRING_VALUE",
 * //     ],
 * //     ServiceRoleArn: "STRING_VALUE",
 * //     Status: "BACKING_UP" || "CONNECTION_LOST" || "CREATING" || "DELETING" || "MODIFYING" || "FAILED" || "HEALTHY" || "RUNNING" || "RESTORING" || "SETUP" || "UNDER_MAINTENANCE" || "UNHEALTHY" || "TERMINATED",
 * //     StatusReason: "STRING_VALUE",
 * //     SubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     ServerArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateServerCommandInput - {@link CreateServerCommandInput}
 * @returns {@link CreateServerCommandOutput}
 * @see {@link CreateServerCommandInput} for command's `input` shape.
 * @see {@link CreateServerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit of servers or backups has been reached.
 *     </p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The requested resource cannot be created because it already exists.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 *
 * @public
 */
export class CreateServerCommand extends $Command
  .classBuilder<
    CreateServerCommandInput,
    CreateServerCommandOutput,
    OpsWorksCMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksCMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorksCM_V2016_11_01", "CreateServer", {})
  .n("OpsWorksCMClient", "CreateServerCommand")
  .f(CreateServerRequestFilterSensitiveLog, CreateServerResponseFilterSensitiveLog)
  .ser(se_CreateServerCommand)
  .de(de_CreateServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServerRequest;
      output: CreateServerResponse;
    };
    sdk: {
      input: CreateServerCommandInput;
      output: CreateServerCommandOutput;
    };
  };
}
