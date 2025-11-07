// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOutboundConnectionsRequest, DescribeOutboundConnectionsResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  de_DescribeOutboundConnectionsCommand,
  se_DescribeOutboundConnectionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOutboundConnectionsCommand}.
 */
export interface DescribeOutboundConnectionsCommandInput extends DescribeOutboundConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOutboundConnectionsCommand}.
 */
export interface DescribeOutboundConnectionsCommandOutput
  extends DescribeOutboundConnectionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the outbound cross-cluster connections for a local (source) Amazon
 *             OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeOutboundConnectionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeOutboundConnectionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeOutboundConnectionsRequest
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
 * const command = new DescribeOutboundConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOutboundConnectionsResponse
 * //   Connections: [ // OutboundConnections
 * //     { // OutboundConnection
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
 * //       ConnectionAlias: "STRING_VALUE",
 * //       ConnectionStatus: { // OutboundConnectionStatus
 * //         StatusCode: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //       ConnectionProperties: { // ConnectionProperties
 * //         Endpoint: "STRING_VALUE",
 * //         CrossClusterSearch: { // CrossClusterSearchConnectionProperties
 * //           SkipUnavailable: "ENABLED" || "DISABLED",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOutboundConnectionsCommandInput - {@link DescribeOutboundConnectionsCommandInput}
 * @returns {@link DescribeOutboundConnectionsCommandOutput}
 * @see {@link DescribeOutboundConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOutboundConnectionsCommandOutput} for command's `response` shape.
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
export class DescribeOutboundConnectionsCommand extends $Command
  .classBuilder<
    DescribeOutboundConnectionsCommandInput,
    DescribeOutboundConnectionsCommandOutput,
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
  .s("AmazonOpenSearchService", "DescribeOutboundConnections", {})
  .n("OpenSearchClient", "DescribeOutboundConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOutboundConnectionsCommand)
  .de(de_DescribeOutboundConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOutboundConnectionsRequest;
      output: DescribeOutboundConnectionsResponse;
    };
    sdk: {
      input: DescribeOutboundConnectionsCommandInput;
      output: DescribeOutboundConnectionsCommandOutput;
    };
  };
}
