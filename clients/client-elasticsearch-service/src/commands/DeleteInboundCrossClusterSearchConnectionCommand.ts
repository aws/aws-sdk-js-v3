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
  DeleteInboundCrossClusterSearchConnectionRequest,
  DeleteInboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  de_DeleteInboundCrossClusterSearchConnectionCommand,
  se_DeleteInboundCrossClusterSearchConnectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInboundCrossClusterSearchConnectionCommand}.
 */
export interface DeleteInboundCrossClusterSearchConnectionCommandInput
  extends DeleteInboundCrossClusterSearchConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInboundCrossClusterSearchConnectionCommand}.
 */
export interface DeleteInboundCrossClusterSearchConnectionCommandOutput
  extends DeleteInboundCrossClusterSearchConnectionResponse,
    __MetadataBearer {}

/**
 * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DeleteInboundCrossClusterSearchConnectionRequest
 *   CrossClusterSearchConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInboundCrossClusterSearchConnectionResponse
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
 * @param DeleteInboundCrossClusterSearchConnectionCommandInput - {@link DeleteInboundCrossClusterSearchConnectionCommandInput}
 * @returns {@link DeleteInboundCrossClusterSearchConnectionCommandOutput}
 * @see {@link DeleteInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 * @public
 */
export class DeleteInboundCrossClusterSearchConnectionCommand extends $Command
  .classBuilder<
    DeleteInboundCrossClusterSearchConnectionCommandInput,
    DeleteInboundCrossClusterSearchConnectionCommandOutput,
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
  .s("AmazonElasticsearchService2015", "DeleteInboundCrossClusterSearchConnection", {})
  .n("ElasticsearchServiceClient", "DeleteInboundCrossClusterSearchConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInboundCrossClusterSearchConnectionCommand)
  .de(de_DeleteInboundCrossClusterSearchConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInboundCrossClusterSearchConnectionRequest;
      output: DeleteInboundCrossClusterSearchConnectionResponse;
    };
    sdk: {
      input: DeleteInboundCrossClusterSearchConnectionCommandInput;
      output: DeleteInboundCrossClusterSearchConnectionCommandOutput;
    };
  };
}
