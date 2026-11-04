// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchAddChannelRoleToAccessorsInput, BatchAddChannelRoleToAccessorsOutput } from "../models/models_0";
import { BatchAddChannelRoleToAccessors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchAddChannelRoleToAccessorsCommand}.
 */
export interface BatchAddChannelRoleToAccessorsCommandInput extends BatchAddChannelRoleToAccessorsInput {}
/**
 * @public
 *
 * The output of {@link BatchAddChannelRoleToAccessorsCommand}.
 */
export interface BatchAddChannelRoleToAccessorsCommandOutput extends BatchAddChannelRoleToAccessorsOutput, __MetadataBearer {}

/**
 * Add role to multiple users or groups in a private re:Post channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, BatchAddChannelRoleToAccessorsCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, BatchAddChannelRoleToAccessorsCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // BatchAddChannelRoleToAccessorsInput
 *   spaceId: "STRING_VALUE", // required
 *   channelId: "STRING_VALUE", // required
 *   accessorIds: [ // AccessorIdList // required
 *     "STRING_VALUE",
 *   ],
 *   channelRole: "ASKER" || "EXPERT" || "MODERATOR" || "SUPPORTREQUESTOR", // required
 * };
 * const command = new BatchAddChannelRoleToAccessorsCommand(input);
 * const response = await client.send(command);
 * // { // BatchAddChannelRoleToAccessorsOutput
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
 * @param BatchAddChannelRoleToAccessorsCommandInput - {@link BatchAddChannelRoleToAccessorsCommandInput}
 * @returns {@link BatchAddChannelRoleToAccessorsCommandOutput}
 * @see {@link BatchAddChannelRoleToAccessorsCommandInput} for command's `input` shape.
 * @see {@link BatchAddChannelRoleToAccessorsCommandOutput} for command's `response` shape.
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
 * @example BatchAddChannelRoleToAccessors
 * ```javascript
 * //
 * const input = {
 *   accessorIds: [
 *     "12345678-1234-1234-1234-1234567890ab"
 *   ],
 *   channelId: "WS1234567890abcdefghijkl",
 *   channelRole: "MODERATOR",
 *   spaceId: "SP1234567890abcdefghijkl"
 * };
 * const command = new BatchAddChannelRoleToAccessorsCommand(input);
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
export class BatchAddChannelRoleToAccessorsCommand extends command<BatchAddChannelRoleToAccessorsCommandInput, BatchAddChannelRoleToAccessorsCommandOutput>(
  _ep0,
  _mw0,
  "BatchAddChannelRoleToAccessors",
  BatchAddChannelRoleToAccessors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAddChannelRoleToAccessorsInput;
      output: BatchAddChannelRoleToAccessorsOutput;
    };
    sdk: {
      input: BatchAddChannelRoleToAccessorsCommandInput;
      output: BatchAddChannelRoleToAccessorsCommandOutput;
    };
  };
}
