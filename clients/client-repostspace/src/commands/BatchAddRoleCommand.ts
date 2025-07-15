// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchAddRoleInput, BatchAddRoleOutput } from "../models/models_0";
import { de_BatchAddRoleCommand, se_BatchAddRoleCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Add a role to multiple users or groups in a private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, BatchAddRoleCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, BatchAddRoleCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
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
export class BatchAddRoleCommand extends $Command
  .classBuilder<
    BatchAddRoleCommandInput,
    BatchAddRoleCommandOutput,
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
  .s("RepostSpace", "BatchAddRole", {})
  .n("RepostspaceClient", "BatchAddRoleCommand")
  .f(void 0, void 0)
  .ser(se_BatchAddRoleCommand)
  .de(de_BatchAddRoleCommand)
  .build() {
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
