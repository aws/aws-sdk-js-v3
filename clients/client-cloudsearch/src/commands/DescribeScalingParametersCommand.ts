// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeScalingParametersRequest, DescribeScalingParametersResponse } from "../models/models_0";
import { DescribeScalingParameters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see [Configuring Scaling Options](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html) in the *Amazon CloudSearch Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeScalingParametersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeScalingParametersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * // import type { CloudSearchClientConfig } from "@aws-sdk/client-cloudsearch";
 * const config = {}; // type is CloudSearchClientConfig
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
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An internal error occurred while processing the request. If this problem persists, report an issue from the [Service Health Dashboard](http://status.aws.amazon.com/).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because it attempted to reference a resource that does not exist.
 *
 * @throws {@link CloudSearchServiceException}
 *
 * Base exception class for all service exceptions from CloudSearch service.
 *
 * @public
 */
export class DescribeScalingParametersCommand extends command<DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeScalingParameters",
  DescribeScalingParameters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScalingParametersRequest;
      output: DescribeScalingParametersResponse;
    };
    sdk: {
      input: DescribeScalingParametersCommandInput;
      output: DescribeScalingParametersCommandOutput;
    };
  };
}
