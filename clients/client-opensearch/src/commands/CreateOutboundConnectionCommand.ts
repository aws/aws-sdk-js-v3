// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateOutboundConnectionRequest, CreateOutboundConnectionResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { CreateOutboundConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOutboundConnectionCommand}.
 */
export interface CreateOutboundConnectionCommandInput extends CreateOutboundConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateOutboundConnectionCommand}.
 */
export interface CreateOutboundConnectionCommandOutput extends CreateOutboundConnectionResponse, __MetadataBearer {}

/**
 * <p>Creates a new cross-cluster search connection from a source Amazon OpenSearch Service domain
 *    to a destination domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CreateOutboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CreateOutboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // CreateOutboundConnectionRequest
 *   LocalDomainInfo: { // DomainInformationContainer
 *     AWSDomainInformation: { // AWSDomainInformation
 *       OwnerId: "STRING_VALUE",
 *       DomainName: "STRING_VALUE", // required
 *       Region: "STRING_VALUE",
 *     },
 *   },
 *   RemoteDomainInfo: {
 *     AWSDomainInformation: {
 *       OwnerId: "STRING_VALUE",
 *       DomainName: "STRING_VALUE", // required
 *       Region: "STRING_VALUE",
 *     },
 *   },
 *   ConnectionAlias: "STRING_VALUE", // required
 *   ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 *   ConnectionProperties: { // ConnectionProperties
 *     Endpoint: "STRING_VALUE",
 *     CrossClusterSearch: { // CrossClusterSearchConnectionProperties
 *       SkipUnavailable: "ENABLED" || "DISABLED",
 *     },
 *   },
 * };
 * const command = new CreateOutboundConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateOutboundConnectionResponse
 * //   LocalDomainInfo: { // DomainInformationContainer
 * //     AWSDomainInformation: { // AWSDomainInformation
 * //       OwnerId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //     },
 * //   },
 * //   RemoteDomainInfo: {
 * //     AWSDomainInformation: {
 * //       OwnerId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //     },
 * //   },
 * //   ConnectionAlias: "STRING_VALUE",
 * //   ConnectionStatus: { // OutboundConnectionStatus
 * //     StatusCode: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   ConnectionId: "STRING_VALUE",
 * //   ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //   ConnectionProperties: { // ConnectionProperties
 * //     Endpoint: "STRING_VALUE",
 * //     CrossClusterSearch: { // CrossClusterSearchConnectionProperties
 * //       SkipUnavailable: "ENABLED" || "DISABLED",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOutboundConnectionCommandInput - {@link CreateOutboundConnectionCommandInput}
 * @returns {@link CreateOutboundConnectionCommandOutput}
 * @see {@link CreateOutboundConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateOutboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class CreateOutboundConnectionCommand extends $Command
  .classBuilder<
    CreateOutboundConnectionCommandInput,
    CreateOutboundConnectionCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "CreateOutboundConnection", {})
  .n("OpenSearchClient", "CreateOutboundConnectionCommand")
  .sc(CreateOutboundConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOutboundConnectionRequest;
      output: CreateOutboundConnectionResponse;
    };
    sdk: {
      input: CreateOutboundConnectionCommandInput;
      output: CreateOutboundConnectionCommandOutput;
    };
  };
}
