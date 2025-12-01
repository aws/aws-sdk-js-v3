// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSourceRepositoryBranchRequest, CreateSourceRepositoryBranchResponse } from "../models/models_0";
import { CreateSourceRepositoryBranch } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSourceRepositoryBranchCommand}.
 */
export interface CreateSourceRepositoryBranchCommandInput extends CreateSourceRepositoryBranchRequest {}
/**
 * @public
 *
 * The output of {@link CreateSourceRepositoryBranchCommand}.
 */
export interface CreateSourceRepositoryBranchCommandOutput
  extends CreateSourceRepositoryBranchResponse,
    __MetadataBearer {}

/**
 * <p>Creates a branch in a specified source repository in Amazon CodeCatalyst. </p>
 *          <note>
 *             <p>This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, CreateSourceRepositoryBranchCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, CreateSourceRepositoryBranchCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // CreateSourceRepositoryBranchRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   sourceRepositoryName: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   headCommitId: "STRING_VALUE",
 * };
 * const command = new CreateSourceRepositoryBranchCommand(input);
 * const response = await client.send(command);
 * // { // CreateSourceRepositoryBranchResponse
 * //   ref: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   lastUpdatedTime: new Date("TIMESTAMP"),
 * //   headCommitId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSourceRepositoryBranchCommandInput - {@link CreateSourceRepositoryBranchCommandInput}
 * @returns {@link CreateSourceRepositoryBranchCommandOutput}
 * @see {@link CreateSourceRepositoryBranchCommandInput} for command's `input` shape.
 * @see {@link CreateSourceRepositoryBranchCommandOutput} for command's `response` shape.
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
export class CreateSourceRepositoryBranchCommand extends $Command
  .classBuilder<
    CreateSourceRepositoryBranchCommandInput,
    CreateSourceRepositoryBranchCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "CreateSourceRepositoryBranch", {})
  .n("CodeCatalystClient", "CreateSourceRepositoryBranchCommand")
  .sc(CreateSourceRepositoryBranch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSourceRepositoryBranchRequest;
      output: CreateSourceRepositoryBranchResponse;
    };
    sdk: {
      input: CreateSourceRepositoryBranchCommandInput;
      output: CreateSourceRepositoryBranchCommandOutput;
    };
  };
}
