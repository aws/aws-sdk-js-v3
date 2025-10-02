// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVerifiedAccessEndpointRequest, DeleteVerifiedAccessEndpointResult } from "../models/models_3";
import { de_DeleteVerifiedAccessEndpointCommand, se_DeleteVerifiedAccessEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVerifiedAccessEndpointCommand}.
 */
export interface DeleteVerifiedAccessEndpointCommandInput extends DeleteVerifiedAccessEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedAccessEndpointCommand}.
 */
export interface DeleteVerifiedAccessEndpointCommandOutput
  extends DeleteVerifiedAccessEndpointResult,
    __MetadataBearer {}

/**
 * <p>Delete an Amazon Web Services Verified Access endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVerifiedAccessEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVerifiedAccessEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVerifiedAccessEndpointRequest
 *   VerifiedAccessEndpointId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DeleteVerifiedAccessEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVerifiedAccessEndpointResult
 * //   VerifiedAccessEndpoint: { // VerifiedAccessEndpoint
 * //     VerifiedAccessInstanceId: "STRING_VALUE",
 * //     VerifiedAccessGroupId: "STRING_VALUE",
 * //     VerifiedAccessEndpointId: "STRING_VALUE",
 * //     ApplicationDomain: "STRING_VALUE",
 * //     EndpointType: "load-balancer" || "network-interface" || "rds" || "cidr",
 * //     AttachmentType: "vpc",
 * //     DomainCertificateArn: "STRING_VALUE",
 * //     EndpointDomain: "STRING_VALUE",
 * //     DeviceValidationDomain: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     LoadBalancerOptions: { // VerifiedAccessEndpointLoadBalancerOptions
 * //       Protocol: "http" || "https" || "tcp",
 * //       Port: Number("int"),
 * //       LoadBalancerArn: "STRING_VALUE",
 * //       SubnetIds: [ // VerifiedAccessEndpointSubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       PortRanges: [ // VerifiedAccessEndpointPortRangeList
 * //         { // VerifiedAccessEndpointPortRange
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     NetworkInterfaceOptions: { // VerifiedAccessEndpointEniOptions
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       Protocol: "http" || "https" || "tcp",
 * //       Port: Number("int"),
 * //       PortRanges: [
 * //         {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     Status: { // VerifiedAccessEndpointStatus
 * //       Code: "pending" || "active" || "updating" || "deleting" || "deleted",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     LastUpdatedTime: "STRING_VALUE",
 * //     DeletionTime: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //       CustomerManagedKeyEnabled: true || false,
 * //       KmsKeyArn: "STRING_VALUE",
 * //     },
 * //     RdsOptions: { // VerifiedAccessEndpointRdsOptions
 * //       Protocol: "http" || "https" || "tcp",
 * //       Port: Number("int"),
 * //       RdsDbInstanceArn: "STRING_VALUE",
 * //       RdsDbClusterArn: "STRING_VALUE",
 * //       RdsDbProxyArn: "STRING_VALUE",
 * //       RdsEndpoint: "STRING_VALUE",
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CidrOptions: { // VerifiedAccessEndpointCidrOptions
 * //       Cidr: "STRING_VALUE",
 * //       PortRanges: [
 * //         {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       ],
 * //       Protocol: "http" || "https" || "tcp",
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVerifiedAccessEndpointCommandInput - {@link DeleteVerifiedAccessEndpointCommandInput}
 * @returns {@link DeleteVerifiedAccessEndpointCommandOutput}
 * @see {@link DeleteVerifiedAccessEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedAccessEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVerifiedAccessEndpointCommand extends $Command
  .classBuilder<
    DeleteVerifiedAccessEndpointCommandInput,
    DeleteVerifiedAccessEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteVerifiedAccessEndpoint", {})
  .n("EC2Client", "DeleteVerifiedAccessEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVerifiedAccessEndpointCommand)
  .de(de_DeleteVerifiedAccessEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVerifiedAccessEndpointRequest;
      output: DeleteVerifiedAccessEndpointResult;
    };
    sdk: {
      input: DeleteVerifiedAccessEndpointCommandInput;
      output: DeleteVerifiedAccessEndpointCommandOutput;
    };
  };
}
