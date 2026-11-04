// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartVariantImportRequest, StartVariantImportResponse } from "../models/models_0";
import { StartVariantImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Starts a variant import job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartVariantImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartVariantImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
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
export class StartVariantImportJobCommand extends command<StartVariantImportJobCommandInput, StartVariantImportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartVariantImportJob",
  StartVariantImportJob$
) {
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
