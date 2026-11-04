// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddPolicyStatementInput, AddPolicyStatementOutput } from "../models/models_0";
import { AddPolicyStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds a policy statement object. To retrieve a list of existing policy statements, use the `GetPolicy` API.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class AddPolicyStatementCommand extends command<AddPolicyStatementCommandInput, AddPolicyStatementCommandOutput>(
  _ep0,
  _mw0,
  "AddPolicyStatement",
  AddPolicyStatement$
) {
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
