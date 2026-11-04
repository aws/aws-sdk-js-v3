// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRuleGroupsNamespaceRequest } from "../models/models_0";
import { DeleteRuleGroupsNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRuleGroupsNamespaceCommand}.
 */
export interface DeleteRuleGroupsNamespaceCommandInput extends DeleteRuleGroupsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuleGroupsNamespaceCommand}.
 */
export interface DeleteRuleGroupsNamespaceCommandOutput extends __MetadataBearer {}

/**
 * Deletes one rule groups namespace and its associated rule groups definition.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DeleteRuleGroupsNamespaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRuleGroupsNamespaceCommandInput - {@link DeleteRuleGroupsNamespaceCommandInput}
 * @returns {@link DeleteRuleGroupsNamespaceCommandOutput}
 * @see {@link DeleteRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleGroupsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request would cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class DeleteRuleGroupsNamespaceCommand extends command<DeleteRuleGroupsNamespaceCommandInput, DeleteRuleGroupsNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRuleGroupsNamespace",
  DeleteRuleGroupsNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRuleGroupsNamespaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteRuleGroupsNamespaceCommandInput;
      output: DeleteRuleGroupsNamespaceCommandOutput;
    };
  };
}
