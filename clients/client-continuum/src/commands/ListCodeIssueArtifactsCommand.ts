// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCodeIssueArtifactsInput, ListCodeIssueArtifactsOutput } from "../models/models_0";
import { ListCodeIssueArtifacts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCodeIssueArtifactsCommand}.
 */
export interface ListCodeIssueArtifactsCommandInput extends ListCodeIssueArtifactsInput {}
/**
 * @public
 *
 * The output of {@link ListCodeIssueArtifactsCommand}.
 */
export interface ListCodeIssueArtifactsCommandOutput extends ListCodeIssueArtifactsOutput, __MetadataBearer {}

/**
 * Lists the artifacts attached to an issue in descending artifactId order. Content is returned by GetCodeIssueArtifact.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListCodeIssueArtifactsCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListCodeIssueArtifactsCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // ListCodeIssueArtifactsInput
 *   environmentId: "STRING_VALUE", // required
 *   issueId: "STRING_VALUE", // required
 *   artifactType: "EVIDENCE" || "AGENT_COMMUNICATION" || "VALIDATION_EVIDENCE" || "REMEDIATION_PROPOSAL" || "DECISION" || "PATCH",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCodeIssueArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeIssueArtifactsOutput
 * //   items: [ // CodeIssueArtifactItems // required
 * //     { // IssueArtifactItem
 * //       artifactId: "STRING_VALUE", // required
 * //       artifactType: "EVIDENCE" || "AGENT_COMMUNICATION" || "VALIDATION_EVIDENCE" || "REMEDIATION_PROPOSAL" || "DECISION" || "PATCH", // required
 * //       mediaType: "STRING_VALUE", // required
 * //       producer: { // IssueArtifactProducerSummary
 * //         agent: "STRING_VALUE", // required
 * //       },
 * //       contentSizeBytes: Number("long"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeIssueArtifactsCommandInput - {@link ListCodeIssueArtifactsCommandInput}
 * @returns {@link ListCodeIssueArtifactsCommandOutput}
 * @see {@link ListCodeIssueArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListCodeIssueArtifactsCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class ListCodeIssueArtifactsCommand extends command<ListCodeIssueArtifactsCommandInput, ListCodeIssueArtifactsCommandOutput>(
  _ep0,
  _mw0,
  "ListCodeIssueArtifacts",
  ListCodeIssueArtifacts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeIssueArtifactsInput;
      output: ListCodeIssueArtifactsOutput;
    };
    sdk: {
      input: ListCodeIssueArtifactsCommandInput;
      output: ListCodeIssueArtifactsCommandOutput;
    };
  };
}
