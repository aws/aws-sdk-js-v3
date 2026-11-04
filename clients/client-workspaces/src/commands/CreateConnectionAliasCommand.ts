// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConnectionAliasRequest, CreateConnectionAliasResult } from "../models/models_0";
import { CreateConnectionAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateConnectionAliasCommand}.
 */
export interface CreateConnectionAliasCommandInput extends CreateConnectionAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionAliasCommand}.
 */
export interface CreateConnectionAliasCommandOutput extends CreateConnectionAliasResult, __MetadataBearer {}

/**
 * Creates the specified connection alias for use with cross-Region redirection. For more information, see [Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateConnectionAliasRequest
 *   ConnectionString: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionAliasResult
 * //   AliasId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectionAliasCommandInput - {@link CreateConnectionAliasCommandInput}
 * @returns {@link CreateConnectionAliasCommandOutput}
 * @see {@link CreateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class CreateConnectionAliasCommand extends command<CreateConnectionAliasCommandInput, CreateConnectionAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreateConnectionAlias",
  CreateConnectionAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectionAliasRequest;
      output: CreateConnectionAliasResult;
    };
    sdk: {
      input: CreateConnectionAliasCommandInput;
      output: CreateConnectionAliasCommandOutput;
    };
  };
}
