// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSecurityPoliciesRequest, ListSecurityPoliciesResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_ListSecurityPoliciesCommand, se_ListSecurityPoliciesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityPoliciesCommand}.
 */
export interface ListSecurityPoliciesCommandInput extends ListSecurityPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityPoliciesCommand}.
 */
export interface ListSecurityPoliciesCommandOutput extends ListSecurityPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns information about configured OpenSearch Serverless security policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, ListSecurityPoliciesCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, ListSecurityPoliciesCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // ListSecurityPoliciesRequest
 *   type: "STRING_VALUE", // required
 *   resource: [ // ResourceFilter
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSecurityPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityPoliciesResponse
 * //   securityPolicySummaries: [ // SecurityPolicySummaries
 * //     { // SecurityPolicySummary
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       policyVersion: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdDate: Number("long"),
 * //       lastModifiedDate: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityPoliciesCommandInput - {@link ListSecurityPoliciesCommandInput}
 * @returns {@link ListSecurityPoliciesCommandOutput}
 * @see {@link ListSecurityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 * @public
 */
export class ListSecurityPoliciesCommand extends $Command
  .classBuilder<
    ListSecurityPoliciesCommandInput,
    ListSecurityPoliciesCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpenSearchServerless", "ListSecurityPolicies", {})
  .n("OpenSearchServerlessClient", "ListSecurityPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListSecurityPoliciesCommand)
  .de(de_ListSecurityPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityPoliciesRequest;
      output: ListSecurityPoliciesResponse;
    };
    sdk: {
      input: ListSecurityPoliciesCommandInput;
      output: ListSecurityPoliciesCommandOutput;
    };
  };
}
