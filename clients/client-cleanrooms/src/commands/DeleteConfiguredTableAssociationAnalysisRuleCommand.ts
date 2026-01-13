// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteConfiguredTableAssociationAnalysisRuleInput,
  DeleteConfiguredTableAssociationAnalysisRuleOutput,
} from "../models/models_0";
import { DeleteConfiguredTableAssociationAnalysisRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredTableAssociationAnalysisRuleCommand}.
 */
export interface DeleteConfiguredTableAssociationAnalysisRuleCommandInput extends DeleteConfiguredTableAssociationAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredTableAssociationAnalysisRuleCommand}.
 */
export interface DeleteConfiguredTableAssociationAnalysisRuleCommandOutput extends DeleteConfiguredTableAssociationAnalysisRuleOutput, __MetadataBearer {}

/**
 * <p>Deletes an analysis rule for a configured table association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableAssociationAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableAssociationAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteConfiguredTableAssociationAnalysisRuleInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   configuredTableAssociationIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * };
 * const command = new DeleteConfiguredTableAssociationAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredTableAssociationAnalysisRuleCommandInput - {@link DeleteConfiguredTableAssociationAnalysisRuleCommandInput}
 * @returns {@link DeleteConfiguredTableAssociationAnalysisRuleCommandOutput}
 * @see {@link DeleteConfiguredTableAssociationAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableAssociationAnalysisRuleCommandOutput} for command's `response` shape.
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
export class DeleteConfiguredTableAssociationAnalysisRuleCommand extends $Command
  .classBuilder<
    DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
    DeleteConfiguredTableAssociationAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeleteConfiguredTableAssociationAnalysisRule", {})
  .n("CleanRoomsClient", "DeleteConfiguredTableAssociationAnalysisRuleCommand")
  .sc(DeleteConfiguredTableAssociationAnalysisRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredTableAssociationAnalysisRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredTableAssociationAnalysisRuleCommandInput;
      output: DeleteConfiguredTableAssociationAnalysisRuleCommandOutput;
    };
  };
}
