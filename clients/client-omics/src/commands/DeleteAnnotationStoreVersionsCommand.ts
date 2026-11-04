// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAnnotationStoreVersionsRequest, DeleteAnnotationStoreVersionsResponse } from "../models/models_0";
import { DeleteAnnotationStoreVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAnnotationStoreVersionsCommand}.
 */
export interface DeleteAnnotationStoreVersionsCommandInput extends DeleteAnnotationStoreVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnnotationStoreVersionsCommand}.
 */
export interface DeleteAnnotationStoreVersionsCommandOutput extends DeleteAnnotationStoreVersionsResponse, __MetadataBearer {}

/**
 * Deletes one or multiple versions of an annotation store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteAnnotationStoreVersionsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteAnnotationStoreVersionsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteAnnotationStoreVersionsRequest
 *   name: "STRING_VALUE", // required
 *   versions: [ // VersionList // required
 *     "STRING_VALUE",
 *   ],
 *   force: true || false,
 * };
 * const command = new DeleteAnnotationStoreVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAnnotationStoreVersionsResponse
 * //   errors: [ // VersionDeleteErrorList
 * //     { // VersionDeleteError
 * //       versionName: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteAnnotationStoreVersionsCommandInput - {@link DeleteAnnotationStoreVersionsCommandInput}
 * @returns {@link DeleteAnnotationStoreVersionsCommandOutput}
 * @see {@link DeleteAnnotationStoreVersionsCommandInput} for command's `input` shape.
 * @see {@link DeleteAnnotationStoreVersionsCommandOutput} for command's `response` shape.
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
export class DeleteAnnotationStoreVersionsCommand extends command<DeleteAnnotationStoreVersionsCommandInput, DeleteAnnotationStoreVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAnnotationStoreVersions",
  DeleteAnnotationStoreVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnnotationStoreVersionsRequest;
      output: DeleteAnnotationStoreVersionsResponse;
    };
    sdk: {
      input: DeleteAnnotationStoreVersionsCommandInput;
      output: DeleteAnnotationStoreVersionsCommandOutput;
    };
  };
}
