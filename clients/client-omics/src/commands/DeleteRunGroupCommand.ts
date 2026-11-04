// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRunGroupRequest } from "../models/models_0";
import { DeleteRunGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRunGroupCommand}.
 */
export interface DeleteRunGroupCommandInput extends DeleteRunGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRunGroupCommand}.
 */
export interface DeleteRunGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes a run group and returns a response with no body if the operation is successful.
 *
 * To verify that the run group is deleted:
 *
 * - Use `ListRunGroups` to confirm the workflow no longer appears in the list.
 * - Use `GetRunGroup` to verify the workflow cannot be found.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteRunGroupCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteRunGroupCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteRunGroupRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteRunGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRunGroupCommandInput - {@link DeleteRunGroupCommandInput}
 * @returns {@link DeleteRunGroupCommandOutput}
 * @see {@link DeleteRunGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteRunGroupCommandOutput} for command's `response` shape.
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
export class DeleteRunGroupCommand extends command<DeleteRunGroupCommandInput, DeleteRunGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRunGroup",
  DeleteRunGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRunGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteRunGroupCommandInput;
      output: DeleteRunGroupCommandOutput;
    };
  };
}
