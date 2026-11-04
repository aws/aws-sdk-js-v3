// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAnnotationStoreRequest, DeleteAnnotationStoreResponse } from "../models/models_0";
import { DeleteAnnotationStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAnnotationStoreCommand}.
 */
export interface DeleteAnnotationStoreCommandInput extends DeleteAnnotationStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnnotationStoreCommand}.
 */
export interface DeleteAnnotationStoreCommandOutput extends DeleteAnnotationStoreResponse, __MetadataBearer {}

/**
 * > **Important:** Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see [Amazon Web Services HealthOmics variant store and annotation store availability change](https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html).
 *
 * Deletes an annotation store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteAnnotationStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteAnnotationStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteAnnotationStoreRequest
 *   name: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeleteAnnotationStoreCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAnnotationStoreResponse
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteAnnotationStoreCommandInput - {@link DeleteAnnotationStoreCommandInput}
 * @returns {@link DeleteAnnotationStoreCommandOutput}
 * @see {@link DeleteAnnotationStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteAnnotationStoreCommandOutput} for command's `response` shape.
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
export class DeleteAnnotationStoreCommand extends command<DeleteAnnotationStoreCommandInput, DeleteAnnotationStoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAnnotationStore",
  DeleteAnnotationStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnnotationStoreRequest;
      output: DeleteAnnotationStoreResponse;
    };
    sdk: {
      input: DeleteAnnotationStoreCommandInput;
      output: DeleteAnnotationStoreCommandOutput;
    };
  };
}
