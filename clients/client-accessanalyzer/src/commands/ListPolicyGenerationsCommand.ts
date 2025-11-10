// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPolicyGenerationsRequest, ListPolicyGenerationsResponse } from "../models/models_0";
import { ListPolicyGenerations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyGenerationsCommand}.
 */
export interface ListPolicyGenerationsCommandInput extends ListPolicyGenerationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyGenerationsCommand}.
 */
export interface ListPolicyGenerationsCommandOutput extends ListPolicyGenerationsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the policy generations requested in the last seven days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListPolicyGenerationsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListPolicyGenerationsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListPolicyGenerationsRequest
 *   principalArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPolicyGenerationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyGenerationsResponse
 * //   policyGenerations: [ // PolicyGenerationList // required
 * //     { // PolicyGeneration
 * //       jobId: "STRING_VALUE", // required
 * //       principalArn: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       startedOn: new Date("TIMESTAMP"), // required
 * //       completedOn: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyGenerationsCommandInput - {@link ListPolicyGenerationsCommandInput}
 * @returns {@link ListPolicyGenerationsCommandOutput}
 * @see {@link ListPolicyGenerationsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyGenerationsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @public
 */
export class ListPolicyGenerationsCommand extends $Command
  .classBuilder<
    ListPolicyGenerationsCommandInput,
    ListPolicyGenerationsCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "ListPolicyGenerations", {})
  .n("AccessAnalyzerClient", "ListPolicyGenerationsCommand")
  .sc(ListPolicyGenerations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyGenerationsRequest;
      output: ListPolicyGenerationsResponse;
    };
    sdk: {
      input: ListPolicyGenerationsCommandInput;
      output: ListPolicyGenerationsCommandOutput;
    };
  };
}
