// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJobSchemaVersionsRequest, ListJobSchemaVersionsResponse } from "../models/models_4";
import { ListJobSchemaVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListJobSchemaVersionsCommand}.
 */
export interface ListJobSchemaVersionsCommandInput extends ListJobSchemaVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobSchemaVersionsCommand}.
 */
export interface ListJobSchemaVersionsCommandOutput extends ListJobSchemaVersionsResponse, __MetadataBearer {}

/**
 * Lists available configuration schema versions for a specified job category. Use the schema versions with `DescribeJobSchemaVersion` to retrieve the full schema document.
 *
 * The following operations are related to `ListJobSchemaVersions`:
 *
 * - `DescribeJobSchemaVersion`
 * - `CreateJob`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListJobSchemaVersionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListJobSchemaVersionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListJobSchemaVersionsRequest
 *   JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListJobSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobSchemaVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   JobConfigSchemas: [ // JobConfigSchemas // required
 * //     { // JobConfigSchemaVersionSummary
 * //       JobConfigSchemaVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListJobSchemaVersionsCommandInput - {@link ListJobSchemaVersionsCommandInput}
 * @returns {@link ListJobSchemaVersionsCommandOutput}
 * @see {@link ListJobSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListJobSchemaVersionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class ListJobSchemaVersionsCommand extends command<ListJobSchemaVersionsCommandInput, ListJobSchemaVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListJobSchemaVersions",
  ListJobSchemaVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobSchemaVersionsRequest;
      output: ListJobSchemaVersionsResponse;
    };
    sdk: {
      input: ListJobSchemaVersionsCommandInput;
      output: ListJobSchemaVersionsCommandOutput;
    };
  };
}
