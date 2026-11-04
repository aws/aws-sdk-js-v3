// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListArtifactsInput, ListArtifactsOutput } from "../models/models_0";
import { ListArtifacts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandInput extends ListArtifactsInput {}
/**
 * @public
 *
 * The output of {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandOutput extends ListArtifactsOutput, __MetadataBearer {}

/**
 * Returns a paginated list of artifact summaries for the specified agent space.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListArtifactsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListArtifactsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListArtifactsInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListArtifactsOutput
 * //   artifactSummaries: [ // ArtifactSummaryList // required
 * //     { // ArtifactSummary
 * //       artifactId: "STRING_VALUE", // required
 * //       fileName: "STRING_VALUE", // required
 * //       artifactType: "TXT" || "PNG" || "JPEG" || "MD" || "PDF" || "DOCX" || "DOC" || "JSON" || "YAML", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArtifactsCommandInput - {@link ListArtifactsCommandInput}
 * @returns {@link ListArtifactsCommandOutput}
 * @see {@link ListArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListArtifactsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link SecurityAgentServiceException}
 *
 * Base exception class for all service exceptions from SecurityAgent service.
 *
 * @public
 */
export class ListArtifactsCommand extends command<ListArtifactsCommandInput, ListArtifactsCommandOutput>(
  _ep0,
  _mw0,
  "ListArtifacts",
  ListArtifacts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListArtifactsInput;
      output: ListArtifactsOutput;
    };
    sdk: {
      input: ListArtifactsCommandInput;
      output: ListArtifactsCommandOutput;
    };
  };
}
