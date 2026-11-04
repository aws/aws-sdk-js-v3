// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPolicyGenerationsRequest, ListPolicyGenerationsResponse } from "../models/models_0";
import { ListPolicyGenerations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all of the policy generations requested in the last seven days.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Throttling limit exceeded error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation exception error.
 *
 * @throws {@link AccessAnalyzerServiceException}
 *
 * Base exception class for all service exceptions from AccessAnalyzer service.
 *
 * @public
 */
export class ListPolicyGenerationsCommand extends command<ListPolicyGenerationsCommandInput, ListPolicyGenerationsCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicyGenerations",
  ListPolicyGenerations$
) {
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
