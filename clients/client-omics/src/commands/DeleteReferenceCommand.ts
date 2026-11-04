// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteReferenceRequest, DeleteReferenceResponse } from "../models/models_0";
import { DeleteReference$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteReferenceCommand}.
 */
export interface DeleteReferenceCommandInput extends DeleteReferenceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReferenceCommand}.
 */
export interface DeleteReferenceCommandOutput extends DeleteReferenceResponse, __MetadataBearer {}

/**
 * Deletes a reference genome and returns a response with no body if the operation is successful. The read set associated with the reference genome must first be deleted before deleting the reference genome. After the reference genome is deleted, you can delete the reference store using the `DeleteReferenceStore` API operation.
 *
 * For more information, see [Deleting HealthOmics reference and sequence stores](https://docs.aws.amazon.com/omics/latest/dev/deleting-reference-and-sequence-stores.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteReferenceCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteReferenceCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteReferenceRequest
 *   id: "STRING_VALUE", // required
 *   referenceStoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteReferenceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReferenceCommandInput - {@link DeleteReferenceCommandInput}
 * @returns {@link DeleteReferenceCommandOutput}
 * @see {@link DeleteReferenceCommandInput} for command's `input` shape.
 * @see {@link DeleteReferenceCommandOutput} for command's `response` shape.
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
export class DeleteReferenceCommand extends command<DeleteReferenceCommandInput, DeleteReferenceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReference",
  DeleteReference$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReferenceRequest;
      output: {};
    };
    sdk: {
      input: DeleteReferenceCommandInput;
      output: DeleteReferenceCommandOutput;
    };
  };
}
