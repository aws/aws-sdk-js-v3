// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSourceRepositoryRequest, DeleteSourceRepositoryResponse } from "../models/models_0";
import { de_DeleteSourceRepositoryCommand, se_DeleteSourceRepositoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSourceRepositoryCommand}.
 */
export interface DeleteSourceRepositoryCommandInput extends DeleteSourceRepositoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSourceRepositoryCommand}.
 */
export interface DeleteSourceRepositoryCommandOutput extends DeleteSourceRepositoryResponse, __MetadataBearer {}

/**
 * <p>Deletes a source repository in Amazon CodeCatalyst. You cannot use this API to delete a linked repository. It can only be used to delete a Amazon CodeCatalyst source repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, DeleteSourceRepositoryCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, DeleteSourceRepositoryCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // DeleteSourceRepositoryRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteSourceRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSourceRepositoryResponse
 * //   spaceName: "STRING_VALUE", // required
 * //   projectName: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteSourceRepositoryCommandInput - {@link DeleteSourceRepositoryCommandInput}
 * @returns {@link DeleteSourceRepositoryCommandOutput}
 * @see {@link DeleteSourceRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceRepositoryCommandOutput} for command's `response` shape.
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
export class DeleteSourceRepositoryCommand extends $Command
  .classBuilder<
    DeleteSourceRepositoryCommandInput,
    DeleteSourceRepositoryCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCatalyst", "DeleteSourceRepository", {})
  .n("CodeCatalystClient", "DeleteSourceRepositoryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSourceRepositoryCommand)
  .de(de_DeleteSourceRepositoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSourceRepositoryRequest;
      output: DeleteSourceRepositoryResponse;
    };
    sdk: {
      input: DeleteSourceRepositoryCommandInput;
      output: DeleteSourceRepositoryCommandOutput;
    };
  };
}
