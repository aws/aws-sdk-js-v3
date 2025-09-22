// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteOutboundCrossClusterSearchConnectionRequest,
  DeleteOutboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import { DeleteOutboundCrossClusterSearchConnection } from "../schemas/schemas_3_CrossClusterSearch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOutboundCrossClusterSearchConnectionCommand}.
 */
export interface DeleteOutboundCrossClusterSearchConnectionCommandInput
  extends DeleteOutboundCrossClusterSearchConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOutboundCrossClusterSearchConnectionCommand}.
 */
export interface DeleteOutboundCrossClusterSearchConnectionCommandOutput
  extends DeleteOutboundCrossClusterSearchConnectionResponse,
    __MetadataBearer {}

/**
 * <p>Allows the source domain owner to delete an existing outbound cross-cluster search connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteOutboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteOutboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DeleteOutboundCrossClusterSearchConnectionRequest
 *   CrossClusterSearchConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOutboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOutboundCrossClusterSearchConnectionResponse
 * //   CrossClusterSearchConnection: { // OutboundCrossClusterSearchConnection
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
 * //     ConnectionAlias: "STRING_VALUE",
 * //     ConnectionStatus: { // OutboundCrossClusterSearchConnectionStatus
 * //       StatusCode: "PENDING_ACCEPTANCE" || "VALIDATING" || "VALIDATION_FAILED" || "PROVISIONING" || "ACTIVE" || "REJECTED" || "DELETING" || "DELETED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteOutboundCrossClusterSearchConnectionCommandInput - {@link DeleteOutboundCrossClusterSearchConnectionCommandInput}
 * @returns {@link DeleteOutboundCrossClusterSearchConnectionCommandOutput}
 * @see {@link DeleteOutboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteOutboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteOutboundCrossClusterSearchConnectionCommand extends $Command
  .classBuilder<
    DeleteOutboundCrossClusterSearchConnectionCommandInput,
    DeleteOutboundCrossClusterSearchConnectionCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "DeleteOutboundCrossClusterSearchConnection", {})
  .n("ElasticsearchServiceClient", "DeleteOutboundCrossClusterSearchConnectionCommand")
  .sc(DeleteOutboundCrossClusterSearchConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOutboundCrossClusterSearchConnectionRequest;
      output: DeleteOutboundCrossClusterSearchConnectionResponse;
    };
    sdk: {
      input: DeleteOutboundCrossClusterSearchConnectionCommandInput;
      output: DeleteOutboundCrossClusterSearchConnectionCommandOutput;
    };
  };
}
