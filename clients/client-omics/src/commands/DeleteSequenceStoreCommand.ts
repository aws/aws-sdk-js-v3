// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSequenceStoreRequest, DeleteSequenceStoreResponse } from "../models/models_0";
import { DeleteSequenceStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSequenceStoreCommand}.
 */
export interface DeleteSequenceStoreCommandInput extends DeleteSequenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSequenceStoreCommand}.
 */
export interface DeleteSequenceStoreCommandOutput extends DeleteSequenceStoreResponse, __MetadataBearer {}

/**
 * Deletes a sequence store and returns a response with no body if the operation is successful. You can only delete a sequence store when it does not contain any read sets.
 *
 * Use the `BatchDeleteReadSet` API operation to ensure that all read sets in the sequence store are deleted. When a sequence store is deleted, all tags associated with the store are also deleted.
 *
 * For more information, see [Deleting HealthOmics reference and sequence stores](https://docs.aws.amazon.com/omics/latest/dev/deleting-reference-and-sequence-stores.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteSequenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteSequenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteSequenceStoreRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteSequenceStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSequenceStoreCommandInput - {@link DeleteSequenceStoreCommandInput}
 * @returns {@link DeleteSequenceStoreCommandOutput}
 * @see {@link DeleteSequenceStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteSequenceStoreCommandOutput} for command's `response` shape.
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
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
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
export class DeleteSequenceStoreCommand extends command<DeleteSequenceStoreCommandInput, DeleteSequenceStoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSequenceStore",
  DeleteSequenceStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSequenceStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteSequenceStoreCommandInput;
      output: DeleteSequenceStoreCommandOutput;
    };
  };
}
