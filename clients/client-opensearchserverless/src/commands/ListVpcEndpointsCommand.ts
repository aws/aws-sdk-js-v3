// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVpcEndpointsRequest, ListVpcEndpointsResponse } from "../models/models_0";
import { ListVpcEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVpcEndpointsCommand}.
 */
export interface ListVpcEndpointsCommandInput extends ListVpcEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcEndpointsCommand}.
 */
export interface ListVpcEndpointsCommandOutput extends ListVpcEndpointsResponse, __MetadataBearer {}

/**
 * Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see [Access Amazon OpenSearch Serverless using an interface endpoint](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, ListVpcEndpointsCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, ListVpcEndpointsCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // import type { OpenSearchServerlessClientConfig } from "@aws-sdk/client-opensearchserverless";
 * const config = {}; // type is OpenSearchServerlessClientConfig
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // ListVpcEndpointsRequest
 *   vpcEndpointFilters: { // VpcEndpointFilters
 *     status: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcEndpointsResponse
 * //   vpcEndpointSummaries: [ // VpcEndpointSummaries
 * //     { // VpcEndpointSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVpcEndpointsCommandInput - {@link ListVpcEndpointsCommandInput}
 * @returns {@link ListVpcEndpointsCommandOutput}
 * @see {@link ListVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Thrown when an error internal to the service occurs while processing a request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Thrown when the HTTP request contains invalid input or is missing required input.
 *
 * @throws {@link OpenSearchServerlessServiceException}
 *
 * Base exception class for all service exceptions from OpenSearchServerless service.
 *
 * @public
 */
export class ListVpcEndpointsCommand extends command<ListVpcEndpointsCommandInput, ListVpcEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListVpcEndpoints",
  ListVpcEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcEndpointsRequest;
      output: ListVpcEndpointsResponse;
    };
    sdk: {
      input: ListVpcEndpointsCommandInput;
      output: ListVpcEndpointsCommandOutput;
    };
  };
}
