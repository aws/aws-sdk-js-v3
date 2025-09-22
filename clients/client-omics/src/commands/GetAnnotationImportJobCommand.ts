// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAnnotationImportRequest, GetAnnotationImportResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { GetAnnotationImportJob } from "../schemas/schemas_2_Annotation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnnotationImportJobCommand}.
 */
export interface GetAnnotationImportJobCommandInput extends GetAnnotationImportRequest {}
/**
 * @public
 *
 * The output of {@link GetAnnotationImportJobCommand}.
 */
export interface GetAnnotationImportJobCommandOutput extends GetAnnotationImportResponse, __MetadataBearer {}

/**
 * <p>Gets information about an annotation import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetAnnotationImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetAnnotationImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetAnnotationImportRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetAnnotationImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetAnnotationImportResponse
 * //   id: "STRING_VALUE", // required
 * //   destinationName: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusMessage: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   completionTime: new Date("TIMESTAMP"), // required
 * //   items: [ // AnnotationImportItemDetails // required
 * //     { // AnnotationImportItemDetail
 * //       source: "STRING_VALUE", // required
 * //       jobStatus: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   runLeftNormalization: true || false, // required
 * //   formatOptions: { // FormatOptions Union: only one key present
 * //     tsvOptions: { // TsvOptions
 * //       readOptions: { // ReadOptions
 * //         sep: "STRING_VALUE",
 * //         encoding: "STRING_VALUE",
 * //         quote: "STRING_VALUE",
 * //         quoteAll: true || false,
 * //         escape: "STRING_VALUE",
 * //         escapeQuotes: true || false,
 * //         comment: "STRING_VALUE",
 * //         header: true || false,
 * //         lineSep: "STRING_VALUE",
 * //       },
 * //     },
 * //     vcfOptions: { // VcfOptions
 * //       ignoreQualField: true || false,
 * //       ignoreFilterField: true || false,
 * //     },
 * //   },
 * //   annotationFields: { // AnnotationFieldMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAnnotationImportJobCommandInput - {@link GetAnnotationImportJobCommandInput}
 * @returns {@link GetAnnotationImportJobCommandOutput}
 * @see {@link GetAnnotationImportJobCommandInput} for command's `input` shape.
 * @see {@link GetAnnotationImportJobCommandOutput} for command's `response` shape.
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
export class GetAnnotationImportJobCommand extends $Command
  .classBuilder<
    GetAnnotationImportJobCommandInput,
    GetAnnotationImportJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "GetAnnotationImportJob", {})
  .n("OmicsClient", "GetAnnotationImportJobCommand")
  .sc(GetAnnotationImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnnotationImportRequest;
      output: GetAnnotationImportResponse;
    };
    sdk: {
      input: GetAnnotationImportJobCommandInput;
      output: GetAnnotationImportJobCommandOutput;
    };
  };
}
