// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAnnotationStoreVersionRequest, GetAnnotationStoreVersionResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetAnnotationStoreVersionCommand, se_GetAnnotationStoreVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnnotationStoreVersionCommand}.
 */
export interface GetAnnotationStoreVersionCommandInput extends GetAnnotationStoreVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetAnnotationStoreVersionCommand}.
 */
export interface GetAnnotationStoreVersionCommandOutput extends GetAnnotationStoreVersionResponse, __MetadataBearer {}

/**
 * <p>
 * Retrieves the metadata for an annotation store version.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetAnnotationStoreVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetAnnotationStoreVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetAnnotationStoreVersionRequest
 *   name: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 * };
 * const command = new GetAnnotationStoreVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetAnnotationStoreVersionResponse
 * //   storeId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   versionArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   versionOptions: { // VersionOptions Union: only one key present
 * //     tsvVersionOptions: { // TsvVersionOptions
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
 * //   statusMessage: "STRING_VALUE", // required
 * //   versionSizeBytes: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetAnnotationStoreVersionCommandInput - {@link GetAnnotationStoreVersionCommandInput}
 * @returns {@link GetAnnotationStoreVersionCommandOutput}
 * @see {@link GetAnnotationStoreVersionCommandInput} for command's `input` shape.
 * @see {@link GetAnnotationStoreVersionCommandOutput} for command's `response` shape.
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
export class GetAnnotationStoreVersionCommand extends $Command
  .classBuilder<
    GetAnnotationStoreVersionCommandInput,
    GetAnnotationStoreVersionCommandOutput,
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
  .s("Omics", "GetAnnotationStoreVersion", {})
  .n("OmicsClient", "GetAnnotationStoreVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetAnnotationStoreVersionCommand)
  .de(de_GetAnnotationStoreVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnnotationStoreVersionRequest;
      output: GetAnnotationStoreVersionResponse;
    };
    sdk: {
      input: GetAnnotationStoreVersionCommandInput;
      output: GetAnnotationStoreVersionCommandOutput;
    };
  };
}
