// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConnectionAliasesRequest, DescribeConnectionAliasesResult } from "../models/models_0";
import { de_DescribeConnectionAliasesCommand, se_DescribeConnectionAliasesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionAliasesCommand}.
 */
export interface DescribeConnectionAliasesCommandInput extends DescribeConnectionAliasesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionAliasesCommand}.
 */
export interface DescribeConnectionAliasesCommandOutput extends DescribeConnectionAliasesResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the connection aliases used for cross-Region
 *          redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeConnectionAliasesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeConnectionAliasesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeConnectionAliasesRequest
 *   AliasIds: [ // ConnectionAliasIdList
 *     "STRING_VALUE",
 *   ],
 *   ResourceId: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConnectionAliasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionAliasesResult
 * //   ConnectionAliases: [ // ConnectionAliasList
 * //     { // ConnectionAlias
 * //       ConnectionString: "STRING_VALUE",
 * //       AliasId: "STRING_VALUE",
 * //       State: "CREATING" || "CREATED" || "DELETING",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       Associations: [ // ConnectionAliasAssociationList
 * //         { // ConnectionAliasAssociation
 * //           AssociationStatus: "NOT_ASSOCIATED" || "ASSOCIATED_WITH_OWNER_ACCOUNT" || "ASSOCIATED_WITH_SHARED_ACCOUNT" || "PENDING_ASSOCIATION" || "PENDING_DISASSOCIATION",
 * //           AssociatedAccountId: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           ConnectionIdentifier: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConnectionAliasesCommandInput - {@link DescribeConnectionAliasesCommandInput}
 * @returns {@link DescribeConnectionAliasesCommandOutput}
 * @see {@link DescribeConnectionAliasesCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionAliasesCommandOutput} for command's `response` shape.
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
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeConnectionAliasesCommand extends $Command
  .classBuilder<
    DescribeConnectionAliasesCommandInput,
    DescribeConnectionAliasesCommandOutput,
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
  .s("WorkspacesService", "DescribeConnectionAliases", {})
  .n("WorkSpacesClient", "DescribeConnectionAliasesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConnectionAliasesCommand)
  .de(de_DescribeConnectionAliasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionAliasesRequest;
      output: DescribeConnectionAliasesResult;
    };
    sdk: {
      input: DescribeConnectionAliasesCommandInput;
      output: DescribeConnectionAliasesCommandOutput;
    };
  };
}
