// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeOutboundCrossClusterSearchConnectionsRequest,
  DescribeOutboundCrossClusterSearchConnectionsResponse,
} from "../models/models_0";
import {
  de_DescribeOutboundCrossClusterSearchConnectionsCommand,
  se_DescribeOutboundCrossClusterSearchConnectionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOutboundCrossClusterSearchConnectionsCommand}.
 */
export interface DescribeOutboundCrossClusterSearchConnectionsCommandInput
  extends DescribeOutboundCrossClusterSearchConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOutboundCrossClusterSearchConnectionsCommand}.
 */
export interface DescribeOutboundCrossClusterSearchConnectionsCommandOutput
  extends DescribeOutboundCrossClusterSearchConnectionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DescribeOutboundCrossClusterSearchConnectionsRequest
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
 * const command = new DescribeOutboundCrossClusterSearchConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOutboundCrossClusterSearchConnectionsResponse
 * //   CrossClusterSearchConnections: [ // OutboundCrossClusterSearchConnections
 * //     { // OutboundCrossClusterSearchConnection
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
 * //       ConnectionAlias: "STRING_VALUE",
 * //       ConnectionStatus: { // OutboundCrossClusterSearchConnectionStatus
 * //         StatusCode: "PENDING_ACCEPTANCE" || "VALIDATING" || "VALIDATION_FAILED" || "PROVISIONING" || "ACTIVE" || "REJECTED" || "DELETING" || "DELETED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOutboundCrossClusterSearchConnectionsCommandInput - {@link DescribeOutboundCrossClusterSearchConnectionsCommandInput}
 * @returns {@link DescribeOutboundCrossClusterSearchConnectionsCommandOutput}
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandOutput} for command's `response` shape.
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
export class DescribeOutboundCrossClusterSearchConnectionsCommand extends $Command
  .classBuilder<
    DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "DescribeOutboundCrossClusterSearchConnections", {})
  .n("ElasticsearchServiceClient", "DescribeOutboundCrossClusterSearchConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOutboundCrossClusterSearchConnectionsCommand)
  .de(de_DescribeOutboundCrossClusterSearchConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOutboundCrossClusterSearchConnectionsRequest;
      output: DescribeOutboundCrossClusterSearchConnectionsResponse;
    };
    sdk: {
      input: DescribeOutboundCrossClusterSearchConnectionsCommandInput;
      output: DescribeOutboundCrossClusterSearchConnectionsCommandOutput;
    };
  };
}
