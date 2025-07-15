// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchRemoveChannelRoleFromAccessorsInput,
  BatchRemoveChannelRoleFromAccessorsOutput,
} from "../models/models_0";
import {
  de_BatchRemoveChannelRoleFromAccessorsCommand,
  se_BatchRemoveChannelRoleFromAccessorsCommand,
} from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchRemoveChannelRoleFromAccessorsCommand}.
 */
export interface BatchRemoveChannelRoleFromAccessorsCommandInput extends BatchRemoveChannelRoleFromAccessorsInput {}
/**
 * @public
 *
 * The output of {@link BatchRemoveChannelRoleFromAccessorsCommand}.
 */
export interface BatchRemoveChannelRoleFromAccessorsCommandOutput
  extends BatchRemoveChannelRoleFromAccessorsOutput,
    __MetadataBearer {}

/**
 * <p>Remove a role from multiple users or groups in a private re:Post channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, BatchRemoveChannelRoleFromAccessorsCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, BatchRemoveChannelRoleFromAccessorsCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // BatchRemoveChannelRoleFromAccessorsInput
 *   spaceId: "STRING_VALUE", // required
 *   channelId: "STRING_VALUE", // required
 *   accessorIds: [ // AccessorIdList // required
 *     "STRING_VALUE",
 *   ],
 *   channelRole: "ASKER" || "EXPERT" || "MODERATOR" || "SUPPORTREQUESTOR", // required
 * };
 * const command = new BatchRemoveChannelRoleFromAccessorsCommand(input);
 * const response = await client.send(command);
 * // { // BatchRemoveChannelRoleFromAccessorsOutput
 * //   removedAccessorIds: [ // AccessorIdList // required
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
 * @param BatchRemoveChannelRoleFromAccessorsCommandInput - {@link BatchRemoveChannelRoleFromAccessorsCommandInput}
 * @returns {@link BatchRemoveChannelRoleFromAccessorsCommandOutput}
 * @see {@link BatchRemoveChannelRoleFromAccessorsCommandInput} for command's `input` shape.
 * @see {@link BatchRemoveChannelRoleFromAccessorsCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 *
 * @example BatchRemoveChannelRoleFromAccessors
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
 * const command = new BatchRemoveChannelRoleFromAccessorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors:   [],
 *   removedAccessorIds: [
 *     "12345678-1234-1234-1234-1234567890ab"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchRemoveChannelRoleFromAccessorsCommand extends $Command
  .classBuilder<
    BatchRemoveChannelRoleFromAccessorsCommandInput,
    BatchRemoveChannelRoleFromAccessorsCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RepostSpace", "BatchRemoveChannelRoleFromAccessors", {})
  .n("RepostspaceClient", "BatchRemoveChannelRoleFromAccessorsCommand")
  .f(void 0, void 0)
  .ser(se_BatchRemoveChannelRoleFromAccessorsCommand)
  .de(de_BatchRemoveChannelRoleFromAccessorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchRemoveChannelRoleFromAccessorsInput;
      output: BatchRemoveChannelRoleFromAccessorsOutput;
    };
    sdk: {
      input: BatchRemoveChannelRoleFromAccessorsCommandInput;
      output: BatchRemoveChannelRoleFromAccessorsCommandOutput;
    };
  };
}
