// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeScalingParametersRequest, DescribeScalingParametersResponse } from "../models/models_0";
import { de_DescribeScalingParametersCommand, se_DescribeScalingParametersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingParametersCommand}.
 */
export interface DescribeScalingParametersCommandInput extends DescribeScalingParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScalingParametersCommand}.
 */
export interface DescribeScalingParametersCommandOutput extends DescribeScalingParametersResponse, __MetadataBearer {}

/**
 * <p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see   <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeScalingParametersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeScalingParametersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeScalingParametersRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DescribeScalingParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingParametersResponse
 * //   ScalingParameters: { // ScalingParametersStatus
 * //     Options: { // ScalingParameters
 * //       DesiredInstanceType: "search.m1.small" || "search.m1.large" || "search.m2.xlarge" || "search.m2.2xlarge" || "search.m3.medium" || "search.m3.large" || "search.m3.xlarge" || "search.m3.2xlarge" || "search.small" || "search.medium" || "search.large" || "search.xlarge" || "search.2xlarge" || "search.previousgeneration.small" || "search.previousgeneration.large" || "search.previousgeneration.xlarge" || "search.previousgeneration.2xlarge",
 * //       DesiredReplicationCount: Number("int"),
 * //       DesiredPartitionCount: Number("int"),
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeScalingParametersCommandInput - {@link DescribeScalingParametersCommandInput}
 * @returns {@link DescribeScalingParametersCommandOutput}
 * @see {@link DescribeScalingParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingParametersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 * @public
 */
export class DescribeScalingParametersCommand extends $Command
  .classBuilder<
    DescribeScalingParametersCommandInput,
    DescribeScalingParametersCommandOutput,
    CloudSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("A9SearchCloudConfigService2013", "DescribeScalingParameters", {})
  .n("CloudSearchClient", "DescribeScalingParametersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScalingParametersCommand)
  .de(de_DescribeScalingParametersCommand)
  .build() {}
