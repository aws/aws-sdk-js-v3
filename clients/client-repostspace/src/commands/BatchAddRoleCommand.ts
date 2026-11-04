// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchAddRoleInput, BatchAddRoleOutput } from "../models/models_0";
import { BatchAddRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchAddRoleCommand}.
 */
export interface BatchAddRoleCommandInput extends BatchAddRoleInput {}
/**
 * @public
 *
 * The output of {@link BatchAddRoleCommand}.
 */
export interface BatchAddRoleCommandOutput extends BatchAddRoleOutput, __MetadataBearer {}

/**
 * Add a role to multiple users or groups in a private re:Post.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, BatchAddRoleCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, BatchAddRoleCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // BatchAddRoleInput
 *   spaceId: "STRING_VALUE", // required
 *   accessorIds: [ // AccessorIdList // required
 *     "STRING_VALUE",
 *   ],
 *   role: "EXPERT" || "MODERATOR" || "ADMINISTRATOR" || "SUPPORTREQUESTOR", // required
 * };
 * const command = new BatchAddRoleCommand(input);
 * const response = await client.send(command);
 * // { // BatchAddRoleOutput
 * //   addedAccessorIds: [ // AccessorIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // BatchErrorList // required
 * //     { // BatchError
 * //       accessorId: "STRING_VALUE", // required
 * //       error: Number("int"), // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAddRoleCommandInput - {@link BatchAddRoleCommandInput}
 * @returns {@link BatchAddRoleCommandOutput}
 * @see {@link BatchAddRoleCommandInput} for command's `input` shape.
 * @see {@link BatchAddRoleCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link RepostspaceServiceException}
 *
 * Base exception class for all service exceptions from Repostspace service.
 *
 * @example BatchAddRole
 * ```javascript
 * //
 * const input = {
 *   accessorIds: [
 *     "12345678-1234-1234-1234-1234567890ab"
 *   ],
 *   role: "EXPERT",
 *   spaceId: "SP1234567890abcdefghijkl"
 * };
 * const command = new BatchAddRoleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   addedAccessorIds: [
 *     "12345678-1234-1234-1234-1234567890ab"
 *   ],
 *   errors:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchAddRoleCommand extends command<BatchAddRoleCommandInput, BatchAddRoleCommandOutput>(
  _ep0,
  _mw0,
  "BatchAddRole",
  BatchAddRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAddRoleInput;
      output: BatchAddRoleOutput;
    };
    sdk: {
      input: BatchAddRoleCommandInput;
      output: BatchAddRoleCommandOutput;
    };
  };
}
