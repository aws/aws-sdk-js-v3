// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartVariantImportRequest, StartVariantImportResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { StartVariantImportJob$ } from "../schemas/schemas_0";

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
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores will no longer be open to new customers starting November 7, 2025. If you would like to use variant stores or annotation stores, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Starts a variant import job.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "StartVariantImportJob", {})
  .n("OmicsClient", "StartVariantImportJobCommand")
  .sc(StartVariantImportJob$)
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
