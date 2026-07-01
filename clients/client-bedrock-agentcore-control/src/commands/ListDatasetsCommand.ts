// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { ListDatasets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandInput extends ListDatasetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandOutput extends ListDatasetsResponse, __MetadataBearer {}

/**
 * <p> Lists all datasets in the caller's account, paginated. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListDatasetsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListDatasetsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListDatasetsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetsResponse
 * //   datasets: [ // DatasetSummaryList // required
 * //     { // DatasetSummary
 * //       datasetArn: "STRING_VALUE", // required
 * //       datasetId: "STRING_VALUE", // required
 * //       datasetName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //       draftStatus: "MODIFIED" || "UNMODIFIED",
 * //       schemaType: "AGENTCORE_EVALUATION_PREDEFINED_V1" || "AGENTCORE_EVALUATION_SIMULATED_V1", // required
 * //       exampleCount: Number("long"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetsCommandInput - {@link ListDatasetsCommandInput}
 * @returns {@link ListDatasetsCommandOutput}
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class ListDatasetsCommand extends command<ListDatasetsCommandInput, ListDatasetsCommandOutput>(
  _ep0,
  _mw0,
  "ListDatasets",
  ListDatasets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetsRequest;
      output: ListDatasetsResponse;
    };
    sdk: {
      input: ListDatasetsCommandInput;
      output: ListDatasetsCommandOutput;
    };
  };
}
