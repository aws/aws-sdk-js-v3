// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOutboundConnectionRequest, DeleteOutboundConnectionResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DeleteOutboundConnectionCommand, se_DeleteOutboundConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOutboundConnectionCommand}.
 */
export interface DeleteOutboundConnectionCommandInput extends DeleteOutboundConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOutboundConnectionCommand}.
 */
export interface DeleteOutboundConnectionCommandOutput extends DeleteOutboundConnectionResponse, __MetadataBearer {}

/**
 * <p>Allows the source Amazon OpenSearch Service domain owner to delete an existing outbound
 *    cross-cluster search connection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeleteOutboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeleteOutboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DeleteOutboundConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOutboundConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOutboundConnectionResponse
 * //   Connection: { // OutboundConnection
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
 * //     ConnectionAlias: "STRING_VALUE",
 * //     ConnectionStatus: { // OutboundConnectionStatus
 * //       StatusCode: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //     ConnectionProperties: { // ConnectionProperties
 * //       Endpoint: "STRING_VALUE",
 * //       CrossClusterSearch: { // CrossClusterSearchConnectionProperties
 * //         SkipUnavailable: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteOutboundConnectionCommandInput - {@link DeleteOutboundConnectionCommandInput}
 * @returns {@link DeleteOutboundConnectionCommandOutput}
 * @see {@link DeleteOutboundConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteOutboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
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
export class DeleteOutboundConnectionCommand extends $Command
  .classBuilder<
    DeleteOutboundConnectionCommandInput,
    DeleteOutboundConnectionCommandOutput,
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
  .s("AmazonOpenSearchService", "DeleteOutboundConnection", {})
  .n("OpenSearchClient", "DeleteOutboundConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOutboundConnectionCommand)
  .de(de_DeleteOutboundConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOutboundConnectionRequest;
      output: DeleteOutboundConnectionResponse;
    };
    sdk: {
      input: DeleteOutboundConnectionCommandInput;
      output: DeleteOutboundConnectionCommandOutput;
    };
  };
}
