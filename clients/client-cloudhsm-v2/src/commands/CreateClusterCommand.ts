// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { de_CreateClusterCommand, se_CreateClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * <p>Creates a new AWS CloudHSM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CreateClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CreateClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // CreateClusterRequest
 *   BackupRetentionPolicy: { // BackupRetentionPolicy
 *     Type: "DAYS",
 *     Value: "STRING_VALUE",
 *   },
 *   HsmType: "STRING_VALUE", // required
 *   SourceBackupId: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIds // required
 *     "STRING_VALUE",
 *   ],
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
 * //   Cluster: { // Cluster
 * //     BackupPolicy: "DEFAULT",
 * //     BackupRetentionPolicy: { // BackupRetentionPolicy
 * //       Type: "DAYS",
 * //       Value: "STRING_VALUE",
 * //     },
 * //     ClusterId: "STRING_VALUE",
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     Hsms: [ // Hsms
 * //       { // Hsm
 * //         AvailabilityZone: "STRING_VALUE",
 * //         ClusterId: "STRING_VALUE",
 * //         SubnetId: "STRING_VALUE",
 * //         EniId: "STRING_VALUE",
 * //         EniIp: "STRING_VALUE",
 * //         HsmId: "STRING_VALUE", // required
 * //         State: "CREATE_IN_PROGRESS" || "ACTIVE" || "DEGRADED" || "DELETE_IN_PROGRESS" || "DELETED",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     HsmType: "STRING_VALUE",
 * //     PreCoPassword: "STRING_VALUE",
 * //     SecurityGroup: "STRING_VALUE",
 * //     SourceBackupId: "STRING_VALUE",
 * //     State: "CREATE_IN_PROGRESS" || "UNINITIALIZED" || "INITIALIZE_IN_PROGRESS" || "INITIALIZED" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DEGRADED",
 * //     StateMessage: "STRING_VALUE",
 * //     SubnetMapping: { // ExternalSubnetMapping
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     VpcId: "STRING_VALUE",
 * //     Certificates: { // Certificates
 * //       ClusterCsr: "STRING_VALUE",
 * //       HsmCertificate: "STRING_VALUE",
 * //       AwsHardwareCertificate: "STRING_VALUE",
 * //       ManufacturerHardwareCertificate: "STRING_VALUE",
 * //       ClusterCertificate: "STRING_VALUE",
 * //     },
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an AWS CloudHSM internal failure. The request can
 *       be retried.</p>
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *  <p>The request was rejected because it is not a valid request.</p>
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>The request was rejected because an error occurred.</p>
 *
 * @throws {@link CloudHsmTagException} (client fault)
 *  <p>The request was rejected because of a tagging failure. Verify the tag conditions in all applicable policies, and then retry the request.</p>
 *
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 * @public
 */
export class CreateClusterCommand extends $Command
  .classBuilder<
    CreateClusterCommandInput,
    CreateClusterCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BaldrApiService", "CreateCluster", {})
  .n("CloudHSMV2Client", "CreateClusterCommand")
  .f(void 0, void 0)
  .ser(se_CreateClusterCommand)
  .de(de_CreateClusterCommand)
  .build() {}
