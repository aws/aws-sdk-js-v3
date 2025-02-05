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
  AcceptInboundCrossClusterSearchConnectionRequest,
  AcceptInboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  de_AcceptInboundCrossClusterSearchConnectionCommand,
  se_AcceptInboundCrossClusterSearchConnectionCommand,
} from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "AcceptInboundCrossClusterSearchConnection", {})
  .n("ElasticsearchServiceClient", "AcceptInboundCrossClusterSearchConnectionCommand")
  .f(void 0, void 0)
  .ser(se_AcceptInboundCrossClusterSearchConnectionCommand)
  .de(de_AcceptInboundCrossClusterSearchConnectionCommand)
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
