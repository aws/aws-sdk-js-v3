// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetVariantImportRequest, GetVariantImportResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetVariantImportJobCommand, se_GetVariantImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVariantImportJobCommand}.
 */
export interface GetVariantImportJobCommandInput extends GetVariantImportRequest {}
/**
 * @public
 *
 * The output of {@link GetVariantImportJobCommand}.
 */
export interface GetVariantImportJobCommandOutput extends GetVariantImportResponse, __MetadataBearer {}

/**
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores will no longer be open to new customers starting November 7, 2025. If you would like to use variant stores or annotation stores, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Gets information about a variant import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetVariantImportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetVariantImportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetVariantImportRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetVariantImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetVariantImportResponse
 * //   id: "STRING_VALUE", // required
 * //   destinationName: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusMessage: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   completionTime: new Date("TIMESTAMP"),
 * //   items: [ // VariantImportItemDetails // required
 * //     { // VariantImportItemDetail
 * //       source: "STRING_VALUE", // required
 * //       jobStatus: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   runLeftNormalization: true || false, // required
 * //   annotationFields: { // AnnotationFieldMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVariantImportJobCommandInput - {@link GetVariantImportJobCommandInput}
 * @returns {@link GetVariantImportJobCommandOutput}
 * @see {@link GetVariantImportJobCommandInput} for command's `input` shape.
 * @see {@link GetVariantImportJobCommandOutput} for command's `response` shape.
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
export class GetVariantImportJobCommand extends $Command
  .classBuilder<
    GetVariantImportJobCommandInput,
    GetVariantImportJobCommandOutput,
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
  .s("Omics", "GetVariantImportJob", {})
  .n("OmicsClient", "GetVariantImportJobCommand")
  .f(void 0, void 0)
  .ser(se_GetVariantImportJobCommand)
  .de(de_GetVariantImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVariantImportRequest;
      output: GetVariantImportResponse;
    };
    sdk: {
      input: GetVariantImportJobCommandInput;
      output: GetVariantImportJobCommandOutput;
    };
  };
}
