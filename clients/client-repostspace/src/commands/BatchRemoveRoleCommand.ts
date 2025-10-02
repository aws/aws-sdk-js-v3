// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchRemoveRoleInput, BatchRemoveRoleOutput } from "../models/models_0";
import { de_BatchRemoveRoleCommand, se_BatchRemoveRoleCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchRemoveRoleCommand}.
 */
export interface BatchRemoveRoleCommandInput extends BatchRemoveRoleInput {}
/**
 * @public
 *
 * The output of {@link BatchRemoveRoleCommand}.
 */
export interface BatchRemoveRoleCommandOutput extends BatchRemoveRoleOutput, __MetadataBearer {}

/**
 * <p>Remove a role from multiple users or groups in a private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, BatchRemoveRoleCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, BatchRemoveRoleCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // BatchRemoveRoleInput
 *   spaceId: "STRING_VALUE", // required
 *   accessorIds: [ // AccessorIdList // required
 *     "STRING_VALUE",
 *   ],
 *   role: "EXPERT" || "MODERATOR" || "ADMINISTRATOR" || "SUPPORTREQUESTOR", // required
 * };
 * const command = new BatchRemoveRoleCommand(input);
 * const response = await client.send(command);
 * // { // BatchRemoveRoleOutput
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
 * @param BatchRemoveRoleCommandInput - {@link BatchRemoveRoleCommandInput}
 * @returns {@link BatchRemoveRoleCommandOutput}
 * @see {@link BatchRemoveRoleCommandInput} for command's `input` shape.
 * @see {@link BatchRemoveRoleCommandOutput} for command's `response` shape.
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
 * @example BatchRemoveRole
 * ```javascript
 * //
 * const input = {
 *   accessorIds: [
 *     "12345678-1234-1234-1234-1234567890ab"
 *   ],
 *   role: "EXPERT",
 *   spaceId: "SP1234567890abcdefghijkl"
 * };
 * const command = new BatchRemoveRoleCommand(input);
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
export class BatchRemoveRoleCommand extends $Command
  .classBuilder<
    BatchRemoveRoleCommandInput,
    BatchRemoveRoleCommandOutput,
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
  .s("RepostSpace", "BatchRemoveRole", {})
  .n("RepostspaceClient", "BatchRemoveRoleCommand")
  .f(void 0, void 0)
  .ser(se_BatchRemoveRoleCommand)
  .de(de_BatchRemoveRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchRemoveRoleInput;
      output: BatchRemoveRoleOutput;
    };
    sdk: {
      input: BatchRemoveRoleCommandInput;
      output: BatchRemoveRoleCommandOutput;
    };
  };
}
