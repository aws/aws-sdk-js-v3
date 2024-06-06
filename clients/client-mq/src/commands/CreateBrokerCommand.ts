// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBrokerRequest, CreateBrokerResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_CreateBrokerCommand, se_CreateBrokerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBrokerCommand}.
 */
export interface CreateBrokerCommandInput extends CreateBrokerRequest {}
/**
 * @public
 *
 * The output of {@link CreateBrokerCommand}.
 */
export interface CreateBrokerCommandOutput extends CreateBrokerResponse, __MetadataBearer {}

/**
 * <p>Creates a broker. Note: This API is asynchronous.</p> <p>To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy.</p> <ul><li><p>ec2:CreateNetworkInterface</p> <p>This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account.</p></li> <li><p>ec2:CreateNetworkInterfacePermission</p> <p>This permission is required to attach the ENI to the broker instance.</p></li> <li><p>ec2:DeleteNetworkInterface</p></li> <li><p>ec2:DeleteNetworkInterfacePermission</p></li> <li><p>ec2:DetachNetworkInterface</p></li> <li><p>ec2:DescribeInternetGateways</p></li> <li><p>ec2:DescribeNetworkInterfaces</p></li> <li><p>ec2:DescribeNetworkInterfacePermissions</p></li> <li><p>ec2:DescribeRouteTables</p></li> <li><p>ec2:DescribeSecurityGroups</p></li> <li><p>ec2:DescribeSubnets</p></li> <li><p>ec2:DescribeVpcs</p></li></ul> <p>For more information, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/amazon-mq-setting-up.html#create-iam-user">Create an IAM User and Get Your Amazon Web Services Credentials</a> and <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/connecting-to-amazon-mq.html#never-modify-delete-elastic-network-interface">Never Modify or Delete the Amazon MQ Elastic Network Interface</a> in the <i>Amazon MQ Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, CreateBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, CreateBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // CreateBrokerRequest
 *   AuthenticationStrategy: "SIMPLE" || "LDAP",
 *   AutoMinorVersionUpgrade: true || false, // required
 *   BrokerName: "STRING_VALUE", // required
 *   Configuration: { // ConfigurationId
 *     Id: "STRING_VALUE", // required
 *     Revision: Number("int"),
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 *   DeploymentMode: "SINGLE_INSTANCE" || "ACTIVE_STANDBY_MULTI_AZ" || "CLUSTER_MULTI_AZ", // required
 *   EncryptionOptions: { // EncryptionOptions
 *     KmsKeyId: "STRING_VALUE",
 *     UseAwsOwnedKey: true || false, // required
 *   },
 *   EngineType: "ACTIVEMQ" || "RABBITMQ", // required
 *   EngineVersion: "STRING_VALUE", // required
 *   HostInstanceType: "STRING_VALUE", // required
 *   LdapServerMetadata: { // LdapServerMetadataInput
 *     Hosts: [ // __listOf__string // required
 *       "STRING_VALUE",
 *     ],
 *     RoleBase: "STRING_VALUE", // required
 *     RoleName: "STRING_VALUE",
 *     RoleSearchMatching: "STRING_VALUE", // required
 *     RoleSearchSubtree: true || false,
 *     ServiceAccountPassword: "STRING_VALUE", // required
 *     ServiceAccountUsername: "STRING_VALUE", // required
 *     UserBase: "STRING_VALUE", // required
 *     UserRoleName: "STRING_VALUE",
 *     UserSearchMatching: "STRING_VALUE", // required
 *     UserSearchSubtree: true || false,
 *   },
 *   Logs: { // Logs
 *     Audit: true || false,
 *     General: true || false,
 *   },
 *   MaintenanceWindowStartTime: { // WeeklyStartTime
 *     DayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 *     TimeOfDay: "STRING_VALUE", // required
 *     TimeZone: "STRING_VALUE",
 *   },
 *   PubliclyAccessible: true || false, // required
 *   SecurityGroups: [
 *     "STRING_VALUE",
 *   ],
 *   StorageType: "EBS" || "EFS",
 *   SubnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Users: [ // __listOfUser // required
 *     { // User
 *       ConsoleAccess: true || false,
 *       Groups: "<__listOf__string>",
 *       Password: "STRING_VALUE", // required
 *       Username: "STRING_VALUE", // required
 *       ReplicationUser: true || false,
 *     },
 *   ],
 *   DataReplicationMode: "NONE" || "CRDR",
 *   DataReplicationPrimaryBrokerArn: "STRING_VALUE",
 * };
 * const command = new CreateBrokerCommand(input);
 * const response = await client.send(command);
 * // { // CreateBrokerResponse
 * //   BrokerArn: "STRING_VALUE",
 * //   BrokerId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBrokerCommandInput - {@link CreateBrokerCommandInput}
 * @returns {@link CreateBrokerCommandOutput}
 * @see {@link CreateBrokerCommandInput} for command's `input` shape.
 * @see {@link CreateBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 * @public
 */
export class CreateBrokerCommand extends $Command
  .classBuilder<
    CreateBrokerCommandInput,
    CreateBrokerCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mq", "CreateBroker", {})
  .n("MqClient", "CreateBrokerCommand")
  .f(void 0, void 0)
  .ser(se_CreateBrokerCommand)
  .de(de_CreateBrokerCommand)
  .build() {}
