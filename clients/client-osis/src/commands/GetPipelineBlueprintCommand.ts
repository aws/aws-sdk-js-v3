// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPipelineBlueprintRequest, GetPipelineBlueprintResponse } from "../models/models_0";
import type { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { GetPipelineBlueprint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineBlueprintCommand}.
 */
export interface GetPipelineBlueprintCommandInput extends GetPipelineBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link GetPipelineBlueprintCommand}.
 */
export interface GetPipelineBlueprintCommandOutput extends GetPipelineBlueprintResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are
 *    templates for the configuration needed for a <code>CreatePipeline</code> request. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#pipeline-blueprint">Using
 *     blueprints to create a pipeline</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, GetPipelineBlueprintCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, GetPipelineBlueprintCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // GetPipelineBlueprintRequest
 *   BlueprintName: "STRING_VALUE", // required
 *   Format: "STRING_VALUE",
 * };
 * const command = new GetPipelineBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineBlueprintResponse
 * //   Blueprint: { // PipelineBlueprint
 * //     BlueprintName: "STRING_VALUE",
 * //     PipelineConfigurationBody: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     DisplayDescription: "STRING_VALUE",
 * //     Service: "STRING_VALUE",
 * //     UseCase: "STRING_VALUE",
 * //   },
 * //   Format: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPipelineBlueprintCommandInput - {@link GetPipelineBlueprintCommandInput}
 * @returns {@link GetPipelineBlueprintCommandOutput}
 * @see {@link GetPipelineBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetPipelineBlueprintCommandOutput} for command's `response` shape.
 * @see {@link OSISClientResolvedConfig | config} for OSISClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to access the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>Exception is thrown when an operation has been disabled.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You attempted to access or delete a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing or invalid input fields.</p>
 *
 * @throws {@link OSISServiceException}
 * <p>Base exception class for all service exceptions from OSIS service.</p>
 *
 *
 * @public
 */
export class GetPipelineBlueprintCommand extends $Command
  .classBuilder<
    GetPipelineBlueprintCommandInput,
    GetPipelineBlueprintCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchIngestionService", "GetPipelineBlueprint", {})
  .n("OSISClient", "GetPipelineBlueprintCommand")
  .sc(GetPipelineBlueprint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPipelineBlueprintRequest;
      output: GetPipelineBlueprintResponse;
    };
    sdk: {
      input: GetPipelineBlueprintCommandInput;
      output: GetPipelineBlueprintCommandOutput;
    };
  };
}
