// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EntityResolutionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EntityResolutionClient";
import type { AddPolicyStatementInput, AddPolicyStatementOutput } from "../models/models_0";
import { AddPolicyStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddPolicyStatementCommand}.
 */
export interface AddPolicyStatementCommandInput extends AddPolicyStatementInput {}
/**
 * @public
 *
 * The output of {@link AddPolicyStatementCommand}.
 */
export interface AddPolicyStatementCommandOutput extends AddPolicyStatementOutput, __MetadataBearer {}

/**
 * <p>Adds a policy statement object. To retrieve a list of existing policy statements, use the <code>GetPolicy</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, AddPolicyStatementCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, AddPolicyStatementCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // AddPolicyStatementInput
 *   arn: "STRING_VALUE", // required
 *   statementId: "STRING_VALUE", // required
 *   effect: "Allow" || "Deny", // required
 *   action: [ // StatementActionList // required
 *     "STRING_VALUE",
 *   ],
 *   principal: [ // StatementPrincipalList // required
 *     "STRING_VALUE",
 *   ],
 *   condition: "STRING_VALUE",
 * };
 * const command = new AddPolicyStatementCommand(input);
 * const response = await client.send(command);
 * // { // AddPolicyStatementOutput
 * //   arn: "STRING_VALUE", // required
 * //   token: "STRING_VALUE", // required
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddPolicyStatementCommandInput - {@link AddPolicyStatementCommandInput}
 * @returns {@link AddPolicyStatementCommandOutput}
 * @see {@link AddPolicyStatementCommandInput} for command's `input` shape.
 * @see {@link AddPolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found. </p>
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
export class AddPolicyStatementCommand extends $Command
  .classBuilder<
    AddPolicyStatementCommandInput,
    AddPolicyStatementCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "AddPolicyStatement", {})
  .n("EntityResolutionClient", "AddPolicyStatementCommand")
  .sc(AddPolicyStatement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddPolicyStatementInput;
      output: AddPolicyStatementOutput;
    };
    sdk: {
      input: AddPolicyStatementCommandInput;
      output: AddPolicyStatementCommandOutput;
    };
  };
}
