// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartVariantImportRequest, StartVariantImportResponse } from "../models/models_1";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_StartVariantImportJobCommand, se_StartVariantImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartVariantImportJobCommand}.
 */
export interface StartVariantImportJobCommandInput extends StartVariantImportRequest {}
/**
 * @public
 *
 * The output of {@link StartVariantImportJobCommand}.
 */
export interface StartVariantImportJobCommandOutput extends StartVariantImportResponse, __MetadataBearer {}

/**
 * <p>Starts a variant import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartVariantImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartVariantImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // StartVariantImportRequest
 *   destinationName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   items: [ // VariantImportItemSources // required
 *     { // VariantImportItemSource
 *       source: "STRING_VALUE", // required
 *     },
 *   ],
 *   runLeftNormalization: true || false,
 *   annotationFields: { // AnnotationFieldMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartVariantImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartVariantImportResponse
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartVariantImportJobCommandInput - {@link StartVariantImportJobCommandInput}
 * @returns {@link StartVariantImportJobCommandOutput}
 * @see {@link StartVariantImportJobCommandInput} for command's `input` shape.
 * @see {@link StartVariantImportJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class StartVariantImportJobCommand extends $Command
  .classBuilder<
    StartVariantImportJobCommandInput,
    StartVariantImportJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "StartVariantImportJob", {})
  .n("OmicsClient", "StartVariantImportJobCommand")
  .f(void 0, void 0)
  .ser(se_StartVariantImportJobCommand)
  .de(de_StartVariantImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartVariantImportRequest;
      output: StartVariantImportResponse;
    };
    sdk: {
      input: StartVariantImportJobCommandInput;
      output: StartVariantImportJobCommandOutput;
    };
  };
}
