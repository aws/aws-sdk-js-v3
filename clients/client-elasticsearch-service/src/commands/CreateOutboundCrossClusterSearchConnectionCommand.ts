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
  CreateOutboundCrossClusterSearchConnectionRequest,
  CreateOutboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  de_CreateOutboundCrossClusterSearchConnectionCommand,
  se_CreateOutboundCrossClusterSearchConnectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOutboundCrossClusterSearchConnectionCommand}.
 */
export interface CreateOutboundCrossClusterSearchConnectionCommandInput
  extends CreateOutboundCrossClusterSearchConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateOutboundCrossClusterSearchConnectionCommand}.
 */
export interface CreateOutboundCrossClusterSearchConnectionCommandOutput
  extends CreateOutboundCrossClusterSearchConnectionResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new cross-cluster search connection from a source domain to a destination domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CreateOutboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CreateOutboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // CreateOutboundCrossClusterSearchConnectionRequest
 *   SourceDomainInfo: { // DomainInformation
 *     OwnerId: "STRING_VALUE",
 *     DomainName: "STRING_VALUE", // required
 *     Region: "STRING_VALUE",
 *   },
 *   DestinationDomainInfo: {
 *     OwnerId: "STRING_VALUE",
 *     DomainName: "STRING_VALUE", // required
 *     Region: "STRING_VALUE",
 *   },
 *   ConnectionAlias: "STRING_VALUE", // required
 * };
 * const command = new CreateOutboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateOutboundCrossClusterSearchConnectionResponse
 * //   SourceDomainInfo: { // DomainInformation
 * //     OwnerId: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE", // required
 * //     Region: "STRING_VALUE",
 * //   },
 * //   DestinationDomainInfo: {
 * //     OwnerId: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE", // required
 * //     Region: "STRING_VALUE",
 * //   },
 * //   ConnectionAlias: "STRING_VALUE",
 * //   ConnectionStatus: { // OutboundCrossClusterSearchConnectionStatus
 * //     StatusCode: "PENDING_ACCEPTANCE" || "VALIDATING" || "VALIDATION_FAILED" || "PROVISIONING" || "ACTIVE" || "REJECTED" || "DELETING" || "DELETED",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   CrossClusterSearchConnectionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOutboundCrossClusterSearchConnectionCommandInput - {@link CreateOutboundCrossClusterSearchConnectionCommandInput}
 * @returns {@link CreateOutboundCrossClusterSearchConnectionCommandOutput}
 * @see {@link CreateOutboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateOutboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class CreateOutboundCrossClusterSearchConnectionCommand extends $Command
  .classBuilder<
    CreateOutboundCrossClusterSearchConnectionCommandInput,
    CreateOutboundCrossClusterSearchConnectionCommandOutput,
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
  .s("AmazonElasticsearchService2015", "CreateOutboundCrossClusterSearchConnection", {})
  .n("ElasticsearchServiceClient", "CreateOutboundCrossClusterSearchConnectionCommand")
  .f(void 0, void 0)
  .ser(se_CreateOutboundCrossClusterSearchConnectionCommand)
  .de(de_CreateOutboundCrossClusterSearchConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOutboundCrossClusterSearchConnectionRequest;
      output: CreateOutboundCrossClusterSearchConnectionResponse;
    };
    sdk: {
      input: CreateOutboundCrossClusterSearchConnectionCommandInput;
      output: CreateOutboundCrossClusterSearchConnectionCommandOutput;
    };
  };
}
