// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ValidatePipelineRequest, ValidatePipelineResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { ValidatePipeline } from "../schemas/schemas_7_Pipeline";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Checks whether an OpenSearch Ingestion pipeline configuration is valid prior to creation. For
 *    more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html">Creating Amazon OpenSearch
 *     Ingestion pipelines</a>.</p>
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
 *  <p>You don't have permissions to access the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>Exception is thrown when an operation has been disabled.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
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
export class ValidatePipelineCommand extends $Command
  .classBuilder<
    ValidatePipelineCommandInput,
    ValidatePipelineCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchIngestionService", "ValidatePipeline", {})
  .n("OSISClient", "ValidatePipelineCommand")
  .sc(ValidatePipeline)
  .build() {
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
