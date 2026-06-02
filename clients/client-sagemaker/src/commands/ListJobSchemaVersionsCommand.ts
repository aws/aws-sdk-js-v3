// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListJobSchemaVersionsRequest, ListJobSchemaVersionsResponse } from "../models/models_4";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListJobSchemaVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists available configuration schema versions for a specified job category. Use the schema versions with <code>DescribeJobSchemaVersion</code> to retrieve the full schema document.</p> <p>The following operations are related to <code>ListJobSchemaVersions</code>:</p> <ul> <li> <p> <code>DescribeJobSchemaVersion</code> </p> </li> <li> <p> <code>CreateJob</code> </p> </li> </ul>
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
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListJobSchemaVersionsCommand extends $Command
  .classBuilder<
    ListJobSchemaVersionsCommandInput,
    ListJobSchemaVersionsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListJobSchemaVersions", {})
  .n("SageMakerClient", "ListJobSchemaVersionsCommand")
  .sc(ListJobSchemaVersions$)
  .build() {
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
