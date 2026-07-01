// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelVariantImportRequest, CancelVariantImportResponse } from "../models/models_0";
import { CancelVariantImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelVariantImportJobCommand}.
 */
export interface CancelVariantImportJobCommandInput extends CancelVariantImportRequest {}
/**
 * @public
 *
 * The output of {@link CancelVariantImportJobCommand}.
 */
export interface CancelVariantImportJobCommandOutput extends CancelVariantImportResponse, __MetadataBearer {}

/**
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Cancels a variant import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CancelVariantImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CancelVariantImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CancelVariantImportRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new CancelVariantImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelVariantImportJobCommandInput - {@link CancelVariantImportJobCommandInput}
 * @returns {@link CancelVariantImportJobCommandOutput}
 * @see {@link CancelVariantImportJobCommandInput} for command's `input` shape.
 * @see {@link CancelVariantImportJobCommandOutput} for command's `response` shape.
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
export class CancelVariantImportJobCommand extends command<CancelVariantImportJobCommandInput, CancelVariantImportJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelVariantImportJob",
  CancelVariantImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelVariantImportRequest;
      output: {};
    };
    sdk: {
      input: CancelVariantImportJobCommandInput;
      output: CancelVariantImportJobCommandOutput;
    };
  };
}
