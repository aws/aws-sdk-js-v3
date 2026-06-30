// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisallowIntermediateTableInput, DisallowIntermediateTableOutput } from "../models/models_1";
import { DisallowIntermediateTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisallowIntermediateTableCommand}.
 */
export interface DisallowIntermediateTableCommandInput extends DisallowIntermediateTableInput {}
/**
 * @public
 *
 * The output of {@link DisallowIntermediateTableCommand}.
 */
export interface DisallowIntermediateTableCommandOutput extends DisallowIntermediateTableOutput, __MetadataBearer {}

/**
 * <p>Invalidates a specific intermediate table that references the caller's base table. The data provider (base table owner) calls this operation, not the intermediate table owner. By default, invalidation cascades to descendant intermediate tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DisallowIntermediateTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DisallowIntermediateTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DisallowIntermediateTableInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   intermediateTableName: "STRING_VALUE", // required
 *   includeDescendants: true || false,
 * };
 * const command = new DisallowIntermediateTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisallowIntermediateTableCommandInput - {@link DisallowIntermediateTableCommandInput}
 * @returns {@link DisallowIntermediateTableCommandOutput}
 * @see {@link DisallowIntermediateTableCommandInput} for command's `input` shape.
 * @see {@link DisallowIntermediateTableCommandOutput} for command's `response` shape.
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
export class DisallowIntermediateTableCommand extends $Command
  .classBuilder<
    DisallowIntermediateTableCommandInput,
    DisallowIntermediateTableCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DisallowIntermediateTable", {})
  .n("CleanRoomsClient", "DisallowIntermediateTableCommand")
  .sc(DisallowIntermediateTable$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisallowIntermediateTableInput;
      output: {};
    };
    sdk: {
      input: DisallowIntermediateTableCommandInput;
      output: DisallowIntermediateTableCommandOutput;
    };
  };
}
