// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RejectInboundConnectionRequest, RejectInboundConnectionResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_RejectInboundConnectionCommand, se_RejectInboundConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectInboundConnectionCommand}.
 */
export interface RejectInboundConnectionCommandInput extends RejectInboundConnectionRequest {}
/**
 * @public
 *
 * The output of {@link RejectInboundConnectionCommand}.
 */
export interface RejectInboundConnectionCommandOutput extends RejectInboundConnectionResponse, __MetadataBearer {}

/**
 * <p>Allows the remote Amazon OpenSearch Service domain owner to reject an inbound cross-cluster
 *    connection request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, RejectInboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, RejectInboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // RejectInboundConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new RejectInboundConnectionCommand(input);
 * const response = await client.send(command);
 * // { // RejectInboundConnectionResponse
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
 * @param RejectInboundConnectionCommandInput - {@link RejectInboundConnectionCommandInput}
 * @returns {@link RejectInboundConnectionCommandOutput}
 * @see {@link RejectInboundConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectInboundConnectionCommandOutput} for command's `response` shape.
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
export class RejectInboundConnectionCommand extends $Command
  .classBuilder<
    RejectInboundConnectionCommandInput,
    RejectInboundConnectionCommandOutput,
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
  .s("AmazonOpenSearchService", "RejectInboundConnection", {})
  .n("OpenSearchClient", "RejectInboundConnectionCommand")
  .f(void 0, void 0)
  .ser(se_RejectInboundConnectionCommand)
  .de(de_RejectInboundConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectInboundConnectionRequest;
      output: RejectInboundConnectionResponse;
    };
    sdk: {
      input: RejectInboundConnectionCommandInput;
      output: RejectInboundConnectionCommandOutput;
    };
  };
}
