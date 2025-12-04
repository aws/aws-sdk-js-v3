// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AcceptInboundConnectionRequest, AcceptInboundConnectionResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { AcceptInboundConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptInboundConnectionCommand}.
 */
export interface AcceptInboundConnectionCommandInput extends AcceptInboundConnectionRequest {}
/**
 * @public
 *
 * The output of {@link AcceptInboundConnectionCommand}.
 */
export interface AcceptInboundConnectionCommandOutput extends AcceptInboundConnectionResponse, __MetadataBearer {}

/**
 * <p>Allows the destination Amazon OpenSearch Service domain owner to accept an inbound
 *             cross-cluster search connection request. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AcceptInboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AcceptInboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // AcceptInboundConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new AcceptInboundConnectionCommand(input);
 * const response = await client.send(command);
 * // { // AcceptInboundConnectionResponse
 * //   Connection: { // InboundConnection
 * //     LocalDomainInfo: { // DomainInformationContainer
 * //       AWSDomainInformation: { // AWSDomainInformation
 * //         OwnerId: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //     },
 * //     RemoteDomainInfo: {
 * //       AWSDomainInformation: {
 * //         OwnerId: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //     },
 * //     ConnectionId: "STRING_VALUE",
 * //     ConnectionStatus: { // InboundConnectionStatus
 * //       StatusCode: "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptInboundConnectionCommandInput - {@link AcceptInboundConnectionCommandInput}
 * @returns {@link AcceptInboundConnectionCommandOutput}
 * @see {@link AcceptInboundConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptInboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class AcceptInboundConnectionCommand extends $Command
  .classBuilder<
    AcceptInboundConnectionCommandInput,
    AcceptInboundConnectionCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "AcceptInboundConnection", {})
  .n("OpenSearchClient", "AcceptInboundConnectionCommand")
  .sc(AcceptInboundConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptInboundConnectionRequest;
      output: AcceptInboundConnectionResponse;
    };
    sdk: {
      input: AcceptInboundConnectionCommandInput;
      output: AcceptInboundConnectionCommandOutput;
    };
  };
}
