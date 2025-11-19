// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVpcEndpointAccessRequest, ListVpcEndpointAccessResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { ListVpcEndpointAccess } from "../schemas/schemas_0";

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
 * <p>Retrieves information about each Amazon Web Services principal that is allowed to
 *             access a given Amazon OpenSearch Service domain through the use of an interface VPC
 *             endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListVpcEndpointAccessCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListVpcEndpointAccessCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
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
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
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
export class ListVpcEndpointAccessCommand extends $Command
  .classBuilder<
    ListVpcEndpointAccessCommandInput,
    ListVpcEndpointAccessCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "ListVpcEndpointAccess", {})
  .n("OpenSearchClient", "ListVpcEndpointAccessCommand")
  .sc(ListVpcEndpointAccess)
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
