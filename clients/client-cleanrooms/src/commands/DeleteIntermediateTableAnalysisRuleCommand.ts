// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteIntermediateTableAnalysisRuleInput,
  DeleteIntermediateTableAnalysisRuleOutput,
} from "../models/models_0";
import { DeleteIntermediateTableAnalysisRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntermediateTableAnalysisRuleCommand}.
 */
export interface DeleteIntermediateTableAnalysisRuleCommandInput extends DeleteIntermediateTableAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteIntermediateTableAnalysisRuleCommand}.
 */
export interface DeleteIntermediateTableAnalysisRuleCommandOutput extends DeleteIntermediateTableAnalysisRuleOutput, __MetadataBearer {}

/**
 * <p>Deletes an analysis rule from an intermediate table. After the analysis rule is deleted, the intermediate table becomes unqueryable until a new analysis rule is attached. Only the intermediate table owner can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteIntermediateTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteIntermediateTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteIntermediateTableAnalysisRuleInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   intermediateTableIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "CUSTOM", // required
 * };
 * const command = new DeleteIntermediateTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntermediateTableAnalysisRuleCommandInput - {@link DeleteIntermediateTableAnalysisRuleCommandInput}
 * @returns {@link DeleteIntermediateTableAnalysisRuleCommandOutput}
 * @see {@link DeleteIntermediateTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteIntermediateTableAnalysisRuleCommandOutput} for command's `response` shape.
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
export class DeleteIntermediateTableAnalysisRuleCommand extends $Command
  .classBuilder<
    DeleteIntermediateTableAnalysisRuleCommandInput,
    DeleteIntermediateTableAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteIntermediateTableAnalysisRule", {})
  .n("CleanRoomsClient", "DeleteIntermediateTableAnalysisRuleCommand")
  .sc(DeleteIntermediateTableAnalysisRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntermediateTableAnalysisRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteIntermediateTableAnalysisRuleCommandInput;
      output: DeleteIntermediateTableAnalysisRuleCommandOutput;
    };
  };
}
