// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVariantImportRequest, GetVariantImportResponse } from "../models/models_0";
import { GetVariantImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Gets information about a variant import job.
 *
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
export class GetVariantImportJobCommand extends command<GetVariantImportJobCommandInput, GetVariantImportJobCommandOutput>(
  _ep0,
  _mw0,
  "GetVariantImportJob",
  GetVariantImportJob$
) {
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
