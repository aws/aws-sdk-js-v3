// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSourceRepositoryBranchRequest, CreateSourceRepositoryBranchResponse } from "../models/models_0";
import {
  de_CreateSourceRepositoryBranchCommand,
  se_CreateSourceRepositoryBranchCommand,
} from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCatalyst", "CreateSourceRepositoryBranch", {})
  .n("CodeCatalystClient", "CreateSourceRepositoryBranchCommand")
  .f(void 0, void 0)
  .ser(se_CreateSourceRepositoryBranchCommand)
  .de(de_CreateSourceRepositoryBranchCommand)
  .build() {}
