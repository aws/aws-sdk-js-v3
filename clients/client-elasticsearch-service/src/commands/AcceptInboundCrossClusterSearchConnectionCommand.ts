// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AcceptInboundCrossClusterSearchConnectionRequest,
  AcceptInboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import { AcceptInboundCrossClusterSearchConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptInboundCrossClusterSearchConnectionCommand}.
 */
export interface AcceptInboundCrossClusterSearchConnectionCommandInput
  extends AcceptInboundCrossClusterSearchConnectionRequest {}
/**
 * @public
 *
 * The output of {@link AcceptInboundCrossClusterSearchConnectionCommand}.
 */
export interface AcceptInboundCrossClusterSearchConnectionCommandOutput
  extends AcceptInboundCrossClusterSearchConnectionResponse,
    __MetadataBearer {}

/**
 * <p>Allows the destination domain owner to accept an inbound cross-cluster search connection request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, AcceptInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, AcceptInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // AcceptInboundCrossClusterSearchConnectionRequest
 *   CrossClusterSearchConnectionId: "STRING_VALUE", // required
 * };
 * const command = new AcceptInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * // { // AcceptInboundCrossClusterSearchConnectionResponse
 * //   CrossClusterSearchConnection: { // InboundCrossClusterSearchConnection
 * //     SourceDomainInfo: { // DomainInformation
 * //       OwnerId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //     },
 * //     DestinationDomainInfo: {
 * //       OwnerId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //     },
 * //     CrossClusterSearchConnectionId: "STRING_VALUE",
 * //     ConnectionStatus: { // InboundCrossClusterSearchConnectionStatus
 * //       StatusCode: "PENDING_ACCEPTANCE" || "APPROVED" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptInboundCrossClusterSearchConnectionCommandInput - {@link AcceptInboundCrossClusterSearchConnectionCommandInput}
 * @returns {@link AcceptInboundCrossClusterSearchConnectionCommandOutput}
 * @see {@link AcceptInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class AcceptInboundCrossClusterSearchConnectionCommand extends $Command
  .classBuilder<
    AcceptInboundCrossClusterSearchConnectionCommandInput,
    AcceptInboundCrossClusterSearchConnectionCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "AcceptInboundCrossClusterSearchConnection", {})
  .n("ElasticsearchServiceClient", "AcceptInboundCrossClusterSearchConnectionCommand")
  .sc(AcceptInboundCrossClusterSearchConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptInboundCrossClusterSearchConnectionRequest;
      output: AcceptInboundCrossClusterSearchConnectionResponse;
    };
    sdk: {
      input: AcceptInboundCrossClusterSearchConnectionCommandInput;
      output: AcceptInboundCrossClusterSearchConnectionCommandOutput;
    };
  };
}
