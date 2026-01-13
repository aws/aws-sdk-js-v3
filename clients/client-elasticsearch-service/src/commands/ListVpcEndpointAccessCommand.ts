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
import type { ListVpcEndpointAccessRequest, ListVpcEndpointAccessResponse } from "../models/models_0";
import { ListVpcEndpointAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVpcEndpointAccessCommand}.
 */
export interface ListVpcEndpointAccessCommandInput extends ListVpcEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcEndpointAccessCommand}.
 */
export interface ListVpcEndpointAccessCommandOutput extends ListVpcEndpointAccessResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about each  principal that is allowed to access a
 *    given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListVpcEndpointAccessCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListVpcEndpointAccessCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // ListVpcEndpointAccessRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcEndpointAccessResponse
 * //   AuthorizedPrincipalList: [ // AuthorizedPrincipalList // required
 * //     { // AuthorizedPrincipal
 * //       PrincipalType: "AWS_ACCOUNT" || "AWS_SERVICE",
 * //       Principal: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListVpcEndpointAccessCommandInput - {@link ListVpcEndpointAccessCommandInput}
 * @returns {@link ListVpcEndpointAccessCommandOutput}
 * @see {@link ListVpcEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link ListVpcEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
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
export class ListVpcEndpointAccessCommand extends $Command
  .classBuilder<
    ListVpcEndpointAccessCommandInput,
    ListVpcEndpointAccessCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "ListVpcEndpointAccess", {})
  .n("ElasticsearchServiceClient", "ListVpcEndpointAccessCommand")
  .sc(ListVpcEndpointAccess$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcEndpointAccessRequest;
      output: ListVpcEndpointAccessResponse;
    };
    sdk: {
      input: ListVpcEndpointAccessCommandInput;
      output: ListVpcEndpointAccessCommandOutput;
    };
  };
}
