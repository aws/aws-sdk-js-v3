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
import {
  DescribeInboundCrossClusterSearchConnectionsRequest,
  DescribeInboundCrossClusterSearchConnectionsResponse,
} from "../models/models_0";
import { DescribeInboundCrossClusterSearchConnections } from "../schemas/schemas_3_CrossClusterSearch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInboundCrossClusterSearchConnectionsCommand}.
 */
export interface DescribeInboundCrossClusterSearchConnectionsCommandInput
  extends DescribeInboundCrossClusterSearchConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInboundCrossClusterSearchConnectionsCommand}.
 */
export interface DescribeInboundCrossClusterSearchConnectionsCommandOutput
  extends DescribeInboundCrossClusterSearchConnectionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the inbound cross-cluster search connections for a destination domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeInboundCrossClusterSearchConnectionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeInboundCrossClusterSearchConnectionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DescribeInboundCrossClusterSearchConnectionsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInboundCrossClusterSearchConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInboundCrossClusterSearchConnectionsResponse
 * //   CrossClusterSearchConnections: [ // InboundCrossClusterSearchConnections
 * //     { // InboundCrossClusterSearchConnection
 * //       SourceDomainInfo: { // DomainInformation
 * //         OwnerId: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //       DestinationDomainInfo: {
 * //         OwnerId: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //       CrossClusterSearchConnectionId: "STRING_VALUE",
 * //       ConnectionStatus: { // InboundCrossClusterSearchConnectionStatus
 * //         StatusCode: "PENDING_ACCEPTANCE" || "APPROVED" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInboundCrossClusterSearchConnectionsCommandInput - {@link DescribeInboundCrossClusterSearchConnectionsCommandInput}
 * @returns {@link DescribeInboundCrossClusterSearchConnectionsCommandOutput}
 * @see {@link DescribeInboundCrossClusterSearchConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundCrossClusterSearchConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>The request processing has failed because of invalid pagination token provided by customer. Returns an HTTP status code of 400. </p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class DescribeInboundCrossClusterSearchConnectionsCommand extends $Command
  .classBuilder<
    DescribeInboundCrossClusterSearchConnectionsCommandInput,
    DescribeInboundCrossClusterSearchConnectionsCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "DescribeInboundCrossClusterSearchConnections", {})
  .n("ElasticsearchServiceClient", "DescribeInboundCrossClusterSearchConnectionsCommand")
  .sc(DescribeInboundCrossClusterSearchConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInboundCrossClusterSearchConnectionsRequest;
      output: DescribeInboundCrossClusterSearchConnectionsResponse;
    };
    sdk: {
      input: DescribeInboundCrossClusterSearchConnectionsCommandInput;
      output: DescribeInboundCrossClusterSearchConnectionsCommandOutput;
    };
  };
}
