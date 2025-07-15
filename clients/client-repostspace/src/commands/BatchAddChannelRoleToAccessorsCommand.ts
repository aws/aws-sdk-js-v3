// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchAddChannelRoleToAccessorsInput, BatchAddChannelRoleToAccessorsOutput } from "../models/models_0";
import {
  de_BatchAddChannelRoleToAccessorsCommand,
  se_BatchAddChannelRoleToAccessorsCommand,
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
 * The input for {@link BatchAddChannelRoleToAccessorsCommand}.
 */
export interface BatchAddChannelRoleToAccessorsCommandInput extends BatchAddChannelRoleToAccessorsInput {}
/**
 * @public
 *
 * The output of {@link BatchAddChannelRoleToAccessorsCommand}.
 */
export interface BatchAddChannelRoleToAccessorsCommandOutput
  extends BatchAddChannelRoleToAccessorsOutput,
    __MetadataBearer {}

/**
 * <p>Add role to multiple users or groups in a private re:Post channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, BatchAddChannelRoleToAccessorsCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, BatchAddChannelRoleToAccessorsCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
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
export class BatchAddChannelRoleToAccessorsCommand extends $Command
  .classBuilder<
    BatchAddChannelRoleToAccessorsCommandInput,
    BatchAddChannelRoleToAccessorsCommandOutput,
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
  .s("RepostSpace", "BatchAddChannelRoleToAccessors", {})
  .n("RepostspaceClient", "BatchAddChannelRoleToAccessorsCommand")
  .f(void 0, void 0)
  .ser(se_BatchAddChannelRoleToAccessorsCommand)
  .de(de_BatchAddChannelRoleToAccessorsCommand)
  .build() {
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
