// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyClusterRequest, ModifyClusterResponse } from "../models/models_0";
import { de_ModifyClusterCommand, se_ModifyClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyClusterCommand}.
 */
export interface ModifyClusterCommandInput extends ModifyClusterRequest {}
/**
 * @public
 *
 * The output of {@link ModifyClusterCommand}.
 */
export interface ModifyClusterCommandOutput extends ModifyClusterResponse, __MetadataBearer {}

/**
 * <p>Modifies CloudHSM cluster.</p>
 *          <p>
 *             <b>Cross-account use:</b> No. You cannot perform this operation on an CloudHSM cluster in a different Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, ModifyClusterCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, ModifyClusterCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // ModifyClusterRequest
 *   BackupRetentionPolicy: { // BackupRetentionPolicy
 *     Type: "DAYS",
 *     Value: "STRING_VALUE",
 *   },
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new ModifyClusterCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClusterResponse
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
 * //         EniIpV6: "STRING_VALUE",
 * //         HsmId: "STRING_VALUE", // required
 * //         State: "CREATE_IN_PROGRESS" || "ACTIVE" || "DEGRADED" || "DELETE_IN_PROGRESS" || "DELETED",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     HsmType: "STRING_VALUE",
 * //     PreCoPassword: "STRING_VALUE",
 * //     SecurityGroup: "STRING_VALUE",
 * //     SourceBackupId: "STRING_VALUE",
 * //     State: "CREATE_IN_PROGRESS" || "UNINITIALIZED" || "INITIALIZE_IN_PROGRESS" || "INITIALIZED" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "MODIFY_IN_PROGRESS" || "ROLLBACK_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DEGRADED",
 * //     StateMessage: "STRING_VALUE",
 * //     SubnetMapping: { // ExternalSubnetMapping
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     VpcId: "STRING_VALUE",
 * //     NetworkType: "IPV4" || "DUALSTACK",
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
 * //     Mode: "FIPS" || "NON_FIPS",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyClusterCommandInput - {@link ModifyClusterCommandInput}
 * @returns {@link ModifyClusterCommandOutput}
 * @see {@link ModifyClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an CloudHSM internal failure. The request can
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
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 * @public
 */
export class ModifyClusterCommand extends $Command
  .classBuilder<
    ModifyClusterCommandInput,
    ModifyClusterCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BaldrApiService", "ModifyCluster", {})
  .n("CloudHSMV2Client", "ModifyClusterCommand")
  .f(void 0, void 0)
  .ser(se_ModifyClusterCommand)
  .de(de_ModifyClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClusterRequest;
      output: ModifyClusterResponse;
    };
    sdk: {
      input: ModifyClusterCommandInput;
      output: ModifyClusterCommandOutput;
    };
  };
}
