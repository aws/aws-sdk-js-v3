// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfiguredTableAnalysisRuleInput, DeleteConfiguredTableAnalysisRuleOutput } from "../models/models_0";
import {
  de_DeleteConfiguredTableAnalysisRuleCommand,
  se_DeleteConfiguredTableAnalysisRuleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredTableAnalysisRuleCommand}.
 */
export interface DeleteConfiguredTableAnalysisRuleCommandInput extends DeleteConfiguredTableAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredTableAnalysisRuleCommand}.
 */
export interface DeleteConfiguredTableAnalysisRuleCommandOutput
  extends DeleteConfiguredTableAnalysisRuleOutput,
    __MetadataBearer {}

/**
 * <p>Deletes a configured table analysis rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteConfiguredTableAnalysisRuleInput
 *   configuredTableIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * };
 * const command = new DeleteConfiguredTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredTableAnalysisRuleCommandInput - {@link DeleteConfiguredTableAnalysisRuleCommandInput}
 * @returns {@link DeleteConfiguredTableAnalysisRuleCommandOutput}
 * @see {@link DeleteConfiguredTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableAnalysisRuleCommandOutput} for command's `response` shape.
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
export class DeleteConfiguredTableAnalysisRuleCommand extends $Command
  .classBuilder<
    DeleteConfiguredTableAnalysisRuleCommandInput,
    DeleteConfiguredTableAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteConfiguredTableAnalysisRule", {})
  .n("CleanRoomsClient", "DeleteConfiguredTableAnalysisRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfiguredTableAnalysisRuleCommand)
  .de(de_DeleteConfiguredTableAnalysisRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredTableAnalysisRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredTableAnalysisRuleCommandInput;
      output: DeleteConfiguredTableAnalysisRuleCommandOutput;
    };
  };
}
