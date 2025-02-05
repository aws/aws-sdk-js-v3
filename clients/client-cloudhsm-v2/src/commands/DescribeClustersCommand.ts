// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import { de_DescribeClustersCommand, se_DescribeClustersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandInput extends DescribeClustersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandOutput extends DescribeClustersResponse, __MetadataBearer {}

/**
 * <p>Gets information about CloudHSM clusters.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the clusters. When the response contains only a subset of clusters, it includes
 *       a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code>
 *       request to get more clusters. When you receive a response with no <code>NextToken</code> (or
 *       an empty or null value), that means there are no more clusters to get.</p>
 *          <p>
 *             <b>Cross-account use:</b> No. You cannot perform this operation on CloudHSM clusters in a different Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DescribeClustersCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DescribeClustersCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudHSMV2Client(config);
 * const input = { // DescribeClustersRequest
 *   Filters: { // Filters
 *     "<keys>": [ // Strings
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClustersResponse
 * //   Clusters: [ // Clusters
 * //     { // Cluster
 * //       BackupPolicy: "DEFAULT",
 * //       BackupRetentionPolicy: { // BackupRetentionPolicy
 * //         Type: "DAYS",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       ClusterId: "STRING_VALUE",
 * //       CreateTimestamp: new Date("TIMESTAMP"),
 * //       Hsms: [ // Hsms
 * //         { // Hsm
 * //           AvailabilityZone: "STRING_VALUE",
 * //           ClusterId: "STRING_VALUE",
 * //           SubnetId: "STRING_VALUE",
 * //           EniId: "STRING_VALUE",
 * //           EniIp: "STRING_VALUE",
 * //           EniIpV6: "STRING_VALUE",
 * //           HsmId: "STRING_VALUE", // required
 * //           HsmType: "STRING_VALUE",
 * //           State: "CREATE_IN_PROGRESS" || "ACTIVE" || "DEGRADED" || "DELETE_IN_PROGRESS" || "DELETED",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       HsmType: "STRING_VALUE",
 * //       HsmTypeRollbackExpiration: new Date("TIMESTAMP"),
 * //       PreCoPassword: "STRING_VALUE",
 * //       SecurityGroup: "STRING_VALUE",
 * //       SourceBackupId: "STRING_VALUE",
 * //       State: "CREATE_IN_PROGRESS" || "UNINITIALIZED" || "INITIALIZE_IN_PROGRESS" || "INITIALIZED" || "ACTIVE" || "UPDATE_IN_PROGRESS" || "MODIFY_IN_PROGRESS" || "ROLLBACK_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DEGRADED",
 * //       StateMessage: "STRING_VALUE",
 * //       SubnetMapping: { // ExternalSubnetMapping
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       VpcId: "STRING_VALUE",
 * //       NetworkType: "IPV4" || "DUALSTACK",
 * //       Certificates: { // Certificates
 * //         ClusterCsr: "STRING_VALUE",
 * //         HsmCertificate: "STRING_VALUE",
 * //         AwsHardwareCertificate: "STRING_VALUE",
 * //         ManufacturerHardwareCertificate: "STRING_VALUE",
 * //         ClusterCertificate: "STRING_VALUE",
 * //       },
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Mode: "FIPS" || "NON_FIPS",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClustersCommandInput - {@link DescribeClustersCommandInput}
 * @returns {@link DescribeClustersCommandOutput}
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
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
export class DescribeClustersCommand extends $Command
  .classBuilder<
    DescribeClustersCommandInput,
    DescribeClustersCommandOutput,
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
  .s("BaldrApiService", "DescribeClusters", {})
  .n("CloudHSMV2Client", "DescribeClustersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClustersCommand)
  .de(de_DescribeClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClustersRequest;
      output: DescribeClustersResponse;
    };
    sdk: {
      input: DescribeClustersCommandInput;
      output: DescribeClustersCommandOutput;
    };
  };
}
