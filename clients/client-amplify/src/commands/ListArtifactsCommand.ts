// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListArtifactsRequest, ListArtifactsResult } from "../models/models_0";
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
export interface ListArtifactsCommandInput extends ListArtifactsRequest {}
/**
 * @public
 *
 * The output of {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandOutput extends ListArtifactsResult, __MetadataBearer {}

/**
 * Returns a list of end-to-end testing artifacts for a specified app, branch, and job.
 *
 * To return the build artifacts, use the [GetJob](https://docs.aws.amazon.com/amplify/latest/APIReference/API_GetJob.html) API.
 *
 * For more information about Amplify testing support, see [Setting up end-to-end Cypress tests for your Amplify application](https://docs.aws.amazon.com/amplify/latest/userguide/running-tests.html) in the *Amplify Hosting User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListArtifactsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListArtifactsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // ListArtifactsRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListArtifactsResult
 * //   artifacts: [ // Artifacts // required
 * //     { // Artifact
 * //       artifactFileName: "STRING_VALUE", // required
 * //       artifactId: "STRING_VALUE", // required
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
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A request contains unexpected data.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The service failed to perform an operation due to an internal issue.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A resource could not be created because service quotas were exceeded.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * An operation failed due to a lack of access.
 *
 * @throws {@link AmplifyServiceException}
 *
 * Base exception class for all service exceptions from Amplify service.
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
      input: ListArtifactsRequest;
      output: ListArtifactsResult;
    };
    sdk: {
      input: ListArtifactsCommandInput;
      output: ListArtifactsCommandOutput;
    };
  };
}
