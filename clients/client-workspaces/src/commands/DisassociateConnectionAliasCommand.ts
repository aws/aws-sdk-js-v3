// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateConnectionAliasRequest, DisassociateConnectionAliasResult } from "../models/models_0";
import { DisassociateConnectionAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateConnectionAliasCommand}.
 */
export interface DisassociateConnectionAliasCommandInput extends DisassociateConnectionAliasRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateConnectionAliasCommand}.
 */
export interface DisassociateConnectionAliasCommandOutput extends DisassociateConnectionAliasResult, __MetadataBearer {}

/**
 * Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see [Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html).
 *
 * > **Note:** Before performing this operation, call [DescribeConnectionAliases](https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html) to make sure that the current state of the connection alias is `CREATED`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DisassociateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DisassociateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DisassociateConnectionAliasRequest
 *   AliasId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateConnectionAliasCommandInput - {@link DisassociateConnectionAliasCommandInput}
 * @returns {@link DisassociateConnectionAliasCommandOutput}
 * @see {@link DisassociateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The state of the resource is not valid for this operation.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class DisassociateConnectionAliasCommand extends command<DisassociateConnectionAliasCommandInput, DisassociateConnectionAliasCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateConnectionAlias",
  DisassociateConnectionAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateConnectionAliasRequest;
      output: {};
    };
    sdk: {
      input: DisassociateConnectionAliasCommandInput;
      output: DisassociateConnectionAliasCommandOutput;
    };
  };
}
