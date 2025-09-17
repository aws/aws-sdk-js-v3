// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { DeletePolicyStatementInput, DeletePolicyStatementOutput } from "../models/models_0";
import { de_DeletePolicyStatementCommand, se_DeletePolicyStatementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyStatementCommand}.
 */
export interface DeletePolicyStatementCommandInput extends DeletePolicyStatementInput {}
/**
 * @public
 *
 * The output of {@link DeletePolicyStatementCommand}.
 */
export interface DeletePolicyStatementCommandOutput extends DeletePolicyStatementOutput, __MetadataBearer {}

/**
 * <p>Deletes the policy statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, DeletePolicyStatementCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, DeletePolicyStatementCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // DeletePolicyStatementInput
 *   arn: "STRING_VALUE", // required
 *   statementId: "STRING_VALUE", // required
 * };
 * const command = new DeletePolicyStatementCommand(input);
 * const response = await client.send(command);
 * // { // DeletePolicyStatementOutput
 * //   arn: "STRING_VALUE", // required
 * //   token: "STRING_VALUE", // required
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePolicyStatementCommandInput - {@link DeletePolicyStatementCommandInput}
 * @returns {@link DeletePolicyStatementCommandOutput}
 * @see {@link DeletePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class DeletePolicyStatementCommand extends $Command
  .classBuilder<
    DeletePolicyStatementCommandInput,
    DeletePolicyStatementCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "DeletePolicyStatement", {})
  .n("EntityResolutionClient", "DeletePolicyStatementCommand")
  .f(void 0, void 0)
  .ser(se_DeletePolicyStatementCommand)
  .de(de_DeletePolicyStatementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyStatementInput;
      output: DeletePolicyStatementOutput;
    };
    sdk: {
      input: DeletePolicyStatementCommandInput;
      output: DeletePolicyStatementCommandOutput;
    };
  };
}
