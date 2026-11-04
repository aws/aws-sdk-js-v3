// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAnnotationImportRequest, StartAnnotationImportResponse } from "../models/models_0";
import { StartAnnotationImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Starts an annotation import job.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class StartAnnotationImportJobCommand extends command<StartAnnotationImportJobCommandInput, StartAnnotationImportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartAnnotationImportJob",
  StartAnnotationImportJob$
) {
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
