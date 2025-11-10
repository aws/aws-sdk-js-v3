// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointsRequest, DescribeVpcEndpointsResponse } from "../models/models_0";
import { DescribeVpcEndpoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointsCommand}.
 */
export interface DescribeVpcEndpointsCommandInput extends DescribeVpcEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointsCommand}.
 */
export interface DescribeVpcEndpointsCommandOutput extends DescribeVpcEndpointsResponse, __MetadataBearer {}

/**
 * <p>Describes one or more Amazon OpenSearch Service-managed VPC endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeVpcEndpointsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeVpcEndpointsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DescribeVpcEndpointsRequest
 *   VpcEndpointIds: [ // VpcEndpointIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointsResponse
 * //   VpcEndpoints: [ // VpcEndpoints // required
 * //     { // VpcEndpoint
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcEndpointOwner: "STRING_VALUE",
 * //       DomainArn: "STRING_VALUE",
 * //       VpcOptions: { // VPCDerivedInfo
 * //         VPCId: "STRING_VALUE",
 * //         SubnetIds: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         AvailabilityZones: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //       Endpoint: "STRING_VALUE",
 * //     },
 * //   ],
 * //   VpcEndpointErrors: [ // VpcEndpointErrorList // required
 * //     { // VpcEndpointError
 * //       VpcEndpointId: "STRING_VALUE",
 * //       ErrorCode: "ENDPOINT_NOT_FOUND" || "SERVER_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointsCommandInput - {@link DescribeVpcEndpointsCommandInput}
 * @returns {@link DescribeVpcEndpointsCommandOutput}
 * @see {@link DescribeVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class DescribeVpcEndpointsCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointsCommandInput,
    DescribeVpcEndpointsCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "DescribeVpcEndpoints", {})
  .n("ElasticsearchServiceClient", "DescribeVpcEndpointsCommand")
  .sc(DescribeVpcEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEndpointsRequest;
      output: DescribeVpcEndpointsResponse;
    };
    sdk: {
      input: DescribeVpcEndpointsCommandInput;
      output: DescribeVpcEndpointsCommandOutput;
    };
  };
}
