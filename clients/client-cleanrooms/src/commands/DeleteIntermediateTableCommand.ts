// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteIntermediateTableInput, DeleteIntermediateTableOutput } from "../models/models_0";
import { DeleteIntermediateTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntermediateTableCommand}.
 */
export interface DeleteIntermediateTableCommandInput extends DeleteIntermediateTableInput {}
/**
 * @public
 *
 * The output of {@link DeleteIntermediateTableCommand}.
 */
export interface DeleteIntermediateTableCommandOutput extends DeleteIntermediateTableOutput, __MetadataBearer {}

/**
 * <p>Deletes an intermediate table. When you delete the table, the service marks it as DELETED, removes its analysis rule and schema, and triggers storage cleanup. This operation is idempotent. Only the intermediate table owner can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteIntermediateTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteIntermediateTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteIntermediateTableInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   intermediateTableIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntermediateTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntermediateTableCommandInput - {@link DeleteIntermediateTableCommandInput}
 * @returns {@link DeleteIntermediateTableCommandOutput}
 * @see {@link DeleteIntermediateTableCommandInput} for command's `input` shape.
 * @see {@link DeleteIntermediateTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class DeleteIntermediateTableCommand extends $Command
  .classBuilder<
    DeleteIntermediateTableCommandInput,
    DeleteIntermediateTableCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteIntermediateTable", {})
  .n("CleanRoomsClient", "DeleteIntermediateTableCommand")
  .sc(DeleteIntermediateTable$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntermediateTableInput;
      output: {};
    };
    sdk: {
      input: DeleteIntermediateTableCommandInput;
      output: DeleteIntermediateTableCommandOutput;
    };
  };
}
