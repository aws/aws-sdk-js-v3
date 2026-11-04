// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPipelineBlueprintRequest, GetPipelineBlueprintResponse } from "../models/models_0";
import { GetPipelineBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are templates for the configuration needed for a `CreatePipeline` request. For more information, see [Using blueprints to create a pipeline](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#pipeline-blueprint).
 *
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
 *
 * You don't have permissions to access the resource.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * Exception is thrown when an operation has been disabled.
 *
 * @throws {@link InternalException} (server fault)
 *
 * The request failed because of an unknown error, exception, or failure (the failure is internal to the service).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You attempted to access or delete a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for missing or invalid input fields.
 *
 * @throws {@link OSISServiceException}
 *
 * Base exception class for all service exceptions from OSIS service.
 *
 * @public
 */
export class GetPipelineBlueprintCommand extends command<GetPipelineBlueprintCommandInput, GetPipelineBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "GetPipelineBlueprint",
  GetPipelineBlueprint$
) {
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
