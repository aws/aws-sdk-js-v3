// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeConnectionAliasPermissionsRequest,
  DescribeConnectionAliasPermissionsResult,
} from "../models/models_0";
import { DescribeConnectionAliasPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeConnectionAliasPermissionsCommand}.
 */
export interface DescribeConnectionAliasPermissionsCommandInput extends DescribeConnectionAliasPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionAliasPermissionsCommand}.
 */
export interface DescribeConnectionAliasPermissionsCommandOutput extends DescribeConnectionAliasPermissionsResult, __MetadataBearer {}

/**
 * <p>Describes the permissions that the owner of a connection alias has granted to another
 *             Amazon Web Services account for the specified connection alias. For more information, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeConnectionAliasPermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeConnectionAliasPermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeConnectionAliasPermissionsRequest
 *   AliasId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeConnectionAliasPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionAliasPermissionsResult
 * //   AliasId: "STRING_VALUE",
 * //   ConnectionAliasPermissions: [ // ConnectionAliasPermissions
 * //     { // ConnectionAliasPermission
 * //       SharedAccountId: "STRING_VALUE", // required
 * //       AllowAssociation: true || false, // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConnectionAliasPermissionsCommandInput - {@link DescribeConnectionAliasPermissionsCommandInput}
 * @returns {@link DescribeConnectionAliasPermissionsCommandOutput}
 * @see {@link DescribeConnectionAliasPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionAliasPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeConnectionAliasPermissionsCommand extends command<DescribeConnectionAliasPermissionsCommandInput, DescribeConnectionAliasPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConnectionAliasPermissions",
  DescribeConnectionAliasPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionAliasPermissionsRequest;
      output: DescribeConnectionAliasPermissionsResult;
    };
    sdk: {
      input: DescribeConnectionAliasPermissionsCommandInput;
      output: DescribeConnectionAliasPermissionsCommandOutput;
    };
  };
}
