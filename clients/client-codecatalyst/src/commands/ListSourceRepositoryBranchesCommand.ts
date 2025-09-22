// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSourceRepositoryBranchesRequest, ListSourceRepositoryBranchesResponse } from "../models/models_0";
import { ListSourceRepositoryBranches } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourceRepositoryBranchesCommand}.
 */
export interface ListSourceRepositoryBranchesCommandInput extends ListSourceRepositoryBranchesRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceRepositoryBranchesCommand}.
 */
export interface ListSourceRepositoryBranchesCommandOutput
  extends ListSourceRepositoryBranchesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of branches in a specified source repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListSourceRepositoryBranchesCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListSourceRepositoryBranchesCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // ListSourceRepositoryBranchesRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   sourceRepositoryName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSourceRepositoryBranchesCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceRepositoryBranchesResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ListSourceRepositoryBranchesItems // required
 * //     { // ListSourceRepositoryBranchesItem
 * //       ref: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       headCommitId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSourceRepositoryBranchesCommandInput - {@link ListSourceRepositoryBranchesCommandInput}
 * @returns {@link ListSourceRepositoryBranchesCommandOutput}
 * @see {@link ListSourceRepositoryBranchesCommandInput} for command's `input` shape.
 * @see {@link ListSourceRepositoryBranchesCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 *
 * @public
 */
export class ListSourceRepositoryBranchesCommand extends $Command
  .classBuilder<
    ListSourceRepositoryBranchesCommandInput,
    ListSourceRepositoryBranchesCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "ListSourceRepositoryBranches", {})
  .n("CodeCatalystClient", "ListSourceRepositoryBranchesCommand")
  .sc(ListSourceRepositoryBranches)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourceRepositoryBranchesRequest;
      output: ListSourceRepositoryBranchesResponse;
    };
    sdk: {
      input: ListSourceRepositoryBranchesCommandInput;
      output: ListSourceRepositoryBranchesCommandOutput;
    };
  };
}
