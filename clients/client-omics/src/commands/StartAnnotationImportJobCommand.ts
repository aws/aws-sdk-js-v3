// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartAnnotationImportRequest, StartAnnotationImportResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { StartAnnotationImportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAnnotationImportJobCommand}.
 */
export interface StartAnnotationImportJobCommandInput extends StartAnnotationImportRequest {}
/**
 * @public
 *
 * The output of {@link StartAnnotationImportJobCommand}.
 */
export interface StartAnnotationImportJobCommandOutput extends StartAnnotationImportResponse, __MetadataBearer {}

/**
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores will no longer be open to new customers starting November 7, 2025. If you would like to use variant stores or annotation stores, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Starts an annotation import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartAnnotationImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartAnnotationImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // StartAnnotationImportRequest
 *   destinationName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   items: [ // AnnotationImportItemSources // required
 *     { // AnnotationImportItemSource
 *       source: "STRING_VALUE", // required
 *     },
 *   ],
 *   versionName: "STRING_VALUE",
 *   formatOptions: { // FormatOptions Union: only one key present
 *     tsvOptions: { // TsvOptions
 *       readOptions: { // ReadOptions
 *         sep: "STRING_VALUE",
 *         encoding: "STRING_VALUE",
 *         quote: "STRING_VALUE",
 *         quoteAll: true || false,
 *         escape: "STRING_VALUE",
 *         escapeQuotes: true || false,
 *         comment: "STRING_VALUE",
 *         header: true || false,
 *         lineSep: "STRING_VALUE",
 *       },
 *     },
 *     vcfOptions: { // VcfOptions
 *       ignoreQualField: true || false,
 *       ignoreFilterField: true || false,
 *     },
 *   },
 *   runLeftNormalization: true || false,
 *   annotationFields: { // AnnotationFieldMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartAnnotationImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartAnnotationImportResponse
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAnnotationImportJobCommandInput - {@link StartAnnotationImportJobCommandInput}
 * @returns {@link StartAnnotationImportJobCommandOutput}
 * @see {@link StartAnnotationImportJobCommandInput} for command's `input` shape.
 * @see {@link StartAnnotationImportJobCommandOutput} for command's `response` shape.
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
export class StartAnnotationImportJobCommand extends $Command
  .classBuilder<
    StartAnnotationImportJobCommandInput,
    StartAnnotationImportJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "StartAnnotationImportJob", {})
  .n("OmicsClient", "StartAnnotationImportJobCommand")
  .sc(StartAnnotationImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAnnotationImportRequest;
      output: StartAnnotationImportResponse;
    };
    sdk: {
      input: StartAnnotationImportJobCommandInput;
      output: StartAnnotationImportJobCommandOutput;
    };
  };
}
