// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ValidatePipelineRequest, ValidatePipelineResponse } from "../models/models_0";
import { ValidatePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ValidatePipelineCommand}.
 */
export interface ValidatePipelineCommandInput extends ValidatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link ValidatePipelineCommand}.
 */
export interface ValidatePipelineCommandOutput extends ValidatePipelineResponse, __MetadataBearer {}

/**
 * Checks whether an OpenSearch Ingestion pipeline configuration is valid prior to creation. For more information, see [Creating Amazon OpenSearch Ingestion pipelines](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, ValidatePipelineCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, ValidatePipelineCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // ValidatePipelineRequest
 *   PipelineConfigurationBody: "STRING_VALUE", // required
 * };
 * const command = new ValidatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // ValidatePipelineResponse
 * //   isValid: true || false,
 * //   Errors: [ // ValidationMessageList
 * //     { // ValidationMessage
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidatePipelineCommandInput - {@link ValidatePipelineCommandInput}
 * @returns {@link ValidatePipelineCommandOutput}
 * @see {@link ValidatePipelineCommandInput} for command's `input` shape.
 * @see {@link ValidatePipelineCommandOutput} for command's `response` shape.
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
export class ValidatePipelineCommand extends command<ValidatePipelineCommandInput, ValidatePipelineCommandOutput>(
  _ep0,
  _mw0,
  "ValidatePipeline",
  ValidatePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidatePipelineRequest;
      output: ValidatePipelineResponse;
    };
    sdk: {
      input: ValidatePipelineCommandInput;
      output: ValidatePipelineCommandOutput;
    };
  };
}
