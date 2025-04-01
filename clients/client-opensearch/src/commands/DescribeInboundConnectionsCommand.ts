// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInboundConnectionsRequest, DescribeInboundConnectionsResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DescribeInboundConnectionsCommand, se_DescribeInboundConnectionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInboundConnectionsCommand}.
 */
export interface DescribeInboundConnectionsCommandInput extends DescribeInboundConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInboundConnectionsCommand}.
 */
export interface DescribeInboundConnectionsCommandOutput extends DescribeInboundConnectionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the inbound cross-cluster search connections for a destination (remote) Amazon
 *    OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeInboundConnectionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeInboundConnectionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeInboundConnectionsRequest
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
 * const command = new DescribeInboundConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInboundConnectionsResponse
 * //   Connections: [ // InboundConnections
 * //     { // InboundConnection
 * //       LocalDomainInfo: { // DomainInformationContainer
 * //         AWSDomainInformation: { // AWSDomainInformation
 * //           OwnerId: "STRING_VALUE",
 * //           DomainName: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE",
 * //         },
 * //       },
 * //       RemoteDomainInfo: {
 * //         AWSDomainInformation: {
 * //           OwnerId: "STRING_VALUE",
 * //           DomainName: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE",
 * //         },
 * //       },
 * //       ConnectionId: "STRING_VALUE",
 * //       ConnectionStatus: { // InboundConnectionStatus
 * //         StatusCode: "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInboundConnectionsCommandInput - {@link DescribeInboundConnectionsCommandInput}
 * @returns {@link DescribeInboundConnectionsCommandOutput}
 * @see {@link DescribeInboundConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundConnectionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Request processing failed because you provided an invalid pagination token.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class DescribeInboundConnectionsCommand extends $Command
  .classBuilder<
    DescribeInboundConnectionsCommandInput,
    DescribeInboundConnectionsCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "DescribeInboundConnections", {})
  .n("OpenSearchClient", "DescribeInboundConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInboundConnectionsCommand)
  .de(de_DescribeInboundConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInboundConnectionsRequest;
      output: DescribeInboundConnectionsResponse;
    };
    sdk: {
      input: DescribeInboundConnectionsCommandInput;
      output: DescribeInboundConnectionsCommandOutput;
    };
  };
}
