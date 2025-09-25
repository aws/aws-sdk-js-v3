// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetVpcEndpointRequest, BatchGetVpcEndpointResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { BatchGetVpcEndpoint } from "../schemas/schemas_6_Vpc";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetVpcEndpointCommand}.
 */
export interface BatchGetVpcEndpointCommandInput extends BatchGetVpcEndpointRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetVpcEndpointCommand}.
 */
export interface BatchGetVpcEndpointCommandOutput extends BatchGetVpcEndpointResponse, __MetadataBearer {}

/**
 * <p>Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, BatchGetVpcEndpointCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, BatchGetVpcEndpointCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // BatchGetVpcEndpointRequest
 *   ids: [ // VpcEndpointIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetVpcEndpointResponse
 * //   vpcEndpointDetails: [ // VpcEndpointDetails
 * //     { // VpcEndpointDetail
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       subnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       createdDate: Number("long"),
 * //       failureCode: "STRING_VALUE",
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   vpcEndpointErrorDetails: [ // VpcEndpointErrorDetails
 * //     { // VpcEndpointErrorDetail
 * //       id: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetVpcEndpointCommandInput - {@link BatchGetVpcEndpointCommandInput}
 * @returns {@link BatchGetVpcEndpointCommandOutput}
 * @see {@link BatchGetVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link BatchGetVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class BatchGetVpcEndpointCommand extends $Command
  .classBuilder<
    BatchGetVpcEndpointCommandInput,
    BatchGetVpcEndpointCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OpenSearchServerless", "BatchGetVpcEndpoint", {})
  .n("OpenSearchServerlessClient", "BatchGetVpcEndpointCommand")
  .sc(BatchGetVpcEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetVpcEndpointRequest;
      output: BatchGetVpcEndpointResponse;
    };
    sdk: {
      input: BatchGetVpcEndpointCommandInput;
      output: BatchGetVpcEndpointCommandOutput;
    };
  };
}
