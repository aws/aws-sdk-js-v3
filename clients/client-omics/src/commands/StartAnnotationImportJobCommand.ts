// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartAnnotationImportRequest, StartAnnotationImportResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_StartAnnotationImportJobCommand, se_StartAnnotationImportJobCommand } from "../protocols/Aws_restJson1";

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
 * <p>Starts an annotation import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartAnnotationImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartAnnotationImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "StartAnnotationImportJob", {})
  .n("OmicsClient", "StartAnnotationImportJobCommand")
  .f(void 0, void 0)
  .ser(se_StartAnnotationImportJobCommand)
  .de(de_StartAnnotationImportJobCommand)
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
