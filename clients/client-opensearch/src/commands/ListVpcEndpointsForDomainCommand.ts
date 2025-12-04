// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListVpcEndpointsForDomainRequest, ListVpcEndpointsForDomainResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { ListVpcEndpointsForDomain } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVpcEndpointsForDomainCommand}.
 */
export interface ListVpcEndpointsForDomainCommandInput extends ListVpcEndpointsForDomainRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcEndpointsForDomainCommand}.
 */
export interface ListVpcEndpointsForDomainCommandOutput extends ListVpcEndpointsForDomainResponse, __MetadataBearer {}

/**
 * <p>Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a
 *             particular domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListVpcEndpointsForDomainCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListVpcEndpointsForDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListVpcEndpointsForDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcEndpointsForDomainCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcEndpointsForDomainResponse
 * //   VpcEndpointSummaryList: [ // VpcEndpointSummaryList // required
 * //     { // VpcEndpointSummary
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcEndpointOwner: "STRING_VALUE",
 * //       DomainArn: "STRING_VALUE",
 * //       Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListVpcEndpointsForDomainCommandInput - {@link ListVpcEndpointsForDomainCommandInput}
 * @returns {@link ListVpcEndpointsForDomainCommandOutput}
 * @see {@link ListVpcEndpointsForDomainCommandInput} for command's `input` shape.
 * @see {@link ListVpcEndpointsForDomainCommandOutput} for command's `response` shape.
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
export class ListVpcEndpointsForDomainCommand extends $Command
  .classBuilder<
    ListVpcEndpointsForDomainCommandInput,
    ListVpcEndpointsForDomainCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "ListVpcEndpointsForDomain", {})
  .n("OpenSearchClient", "ListVpcEndpointsForDomainCommand")
  .sc(ListVpcEndpointsForDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcEndpointsForDomainRequest;
      output: ListVpcEndpointsForDomainResponse;
    };
    sdk: {
      input: ListVpcEndpointsForDomainCommandInput;
      output: ListVpcEndpointsForDomainCommandOutput;
    };
  };
}
