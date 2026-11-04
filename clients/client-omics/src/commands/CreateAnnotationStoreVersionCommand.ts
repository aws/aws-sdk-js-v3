// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAnnotationStoreVersionRequest, CreateAnnotationStoreVersionResponse } from "../models/models_0";
import { CreateAnnotationStoreVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAnnotationStoreVersionCommand}.
 */
export interface CreateAnnotationStoreVersionCommandInput extends CreateAnnotationStoreVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnnotationStoreVersionCommand}.
 */
export interface CreateAnnotationStoreVersionCommandOutput extends CreateAnnotationStoreVersionResponse, __MetadataBearer {}

/**
 * Creates a new version of an annotation store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateAnnotationStoreVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateAnnotationStoreVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateAnnotationStoreVersionRequest
 *   name: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   versionOptions: { // VersionOptions Union: only one key present
 *     tsvVersionOptions: { // TsvVersionOptions
 *       annotationType: "STRING_VALUE",
 *       formatToHeader: { // FormatToHeader
 *         "<keys>": "STRING_VALUE",
 *       },
 *       schema: [ // Schema
 *         { // SchemaItem
 *           "<keys>": "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAnnotationStoreVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnnotationStoreVersionResponse
 * //   id: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   storeId: "STRING_VALUE", // required
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
 * //   name: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAnnotationStoreVersionCommandInput - {@link CreateAnnotationStoreVersionCommandInput}
 * @returns {@link CreateAnnotationStoreVersionCommandOutput}
 * @see {@link CreateAnnotationStoreVersionCommandInput} for command's `input` shape.
 * @see {@link CreateAnnotationStoreVersionCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
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
export class CreateAnnotationStoreVersionCommand extends command<CreateAnnotationStoreVersionCommandInput, CreateAnnotationStoreVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateAnnotationStoreVersion",
  CreateAnnotationStoreVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAnnotationStoreVersionRequest;
      output: CreateAnnotationStoreVersionResponse;
    };
    sdk: {
      input: CreateAnnotationStoreVersionCommandInput;
      output: CreateAnnotationStoreVersionCommandOutput;
    };
  };
}
