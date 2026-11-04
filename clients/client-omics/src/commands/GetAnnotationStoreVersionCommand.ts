// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAnnotationStoreVersionRequest, GetAnnotationStoreVersionResponse } from "../models/models_0";
import { GetAnnotationStoreVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the metadata for an annotation store version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetAnnotationStoreVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetAnnotationStoreVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
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
export class GetAnnotationStoreVersionCommand extends command<GetAnnotationStoreVersionCommandInput, GetAnnotationStoreVersionCommandOutput>(
  _ep0,
  _mw0,
  "GetAnnotationStoreVersion",
  GetAnnotationStoreVersion$
) {
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
