// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeConnectionAliasPermissionsRequest,
  DescribeConnectionAliasPermissionsResult,
} from "../models/models_0";
import {
  de_DescribeConnectionAliasPermissionsCommand,
  se_DescribeConnectionAliasPermissionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeConnectionAliasPermissionsCommandOutput
  extends DescribeConnectionAliasPermissionsResult,
    __MetadataBearer {}

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class DescribeConnectionAliasPermissionsCommand extends $Command
  .classBuilder<
    DescribeConnectionAliasPermissionsCommandInput,
    DescribeConnectionAliasPermissionsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeConnectionAliasPermissions", {})
  .n("WorkSpacesClient", "DescribeConnectionAliasPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConnectionAliasPermissionsCommand)
  .de(de_DescribeConnectionAliasPermissionsCommand)
  .build() {
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
