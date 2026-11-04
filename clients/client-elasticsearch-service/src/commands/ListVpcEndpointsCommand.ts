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
 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current account and Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListVpcEndpointsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListVpcEndpointsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // ListVpcEndpointsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcEndpointsResponse
 * //   VpcEndpointSummaryList: [ // VpcEndpointSummaryList // required
 * //     { // VpcEndpointSummary
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcEndpointOwner: "STRING_VALUE",
 * //       DomainArn: "STRING_VALUE",
 * //       Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListVpcEndpointsCommandInput - {@link ListVpcEndpointsCommandInput}
 * @returns {@link ListVpcEndpointsCommandOutput}
 * @see {@link ListVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access a not supported operation. Gives http status code of 409.
 *
 * @throws {@link InternalException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.
 *
 * @throws {@link ElasticsearchServiceServiceException}
 *
 * Base exception class for all service exceptions from ElasticsearchService service.
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
