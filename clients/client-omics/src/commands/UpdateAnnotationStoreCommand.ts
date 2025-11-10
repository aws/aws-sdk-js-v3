// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAnnotationStoreRequest, UpdateAnnotationStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { UpdateAnnotationStore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnnotationStoreCommand}.
 */
export interface UpdateAnnotationStoreCommandInput extends UpdateAnnotationStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnnotationStoreCommand}.
 */
export interface UpdateAnnotationStoreCommandOutput extends UpdateAnnotationStoreResponse, __MetadataBearer {}

/**
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores will no longer be open to new customers starting November 7, 2025. If you would like to use variant stores or annotation stores, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Updates an annotation store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateAnnotationStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateAnnotationStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateAnnotationStoreRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateAnnotationStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnnotationStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   storeOptions: { // StoreOptions Union: only one key present
 * //     tsvStoreOptions: { // TsvStoreOptions
 * //       annotationType: "STRING_VALUE",
 * //       formatToHeader: { // FormatToHeader
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       schema: [ // Schema
 * //         { // SchemaItem
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   storeFormat: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAnnotationStoreCommandInput - {@link UpdateAnnotationStoreCommandInput}
 * @returns {@link UpdateAnnotationStoreCommandOutput}
 * @see {@link UpdateAnnotationStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateAnnotationStoreCommandOutput} for command's `response` shape.
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
export class UpdateAnnotationStoreCommand extends $Command
  .classBuilder<
    UpdateAnnotationStoreCommandInput,
    UpdateAnnotationStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "UpdateAnnotationStore", {})
  .n("OmicsClient", "UpdateAnnotationStoreCommand")
  .sc(UpdateAnnotationStore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnnotationStoreRequest;
      output: UpdateAnnotationStoreResponse;
    };
    sdk: {
      input: UpdateAnnotationStoreCommandInput;
      output: UpdateAnnotationStoreCommandOutput;
    };
  };
}
