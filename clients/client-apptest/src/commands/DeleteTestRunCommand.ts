// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTestRunRequest, DeleteTestRunResponse } from "../models/models_0";
import { de_DeleteTestRunCommand, se_DeleteTestRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTestRunCommand}.
 */
export interface DeleteTestRunCommandInput extends DeleteTestRunRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTestRunCommand}.
 */
export interface DeleteTestRunCommandOutput extends DeleteTestRunResponse, __MetadataBearer {}

/**
 * <p>Deletes a test run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, DeleteTestRunCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, DeleteTestRunCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * const client = new AppTestClient(config);
 * const input = { // DeleteTestRunRequest
 *   testRunId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTestRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTestRunCommandInput - {@link DeleteTestRunCommandInput}
 * @returns {@link DeleteTestRunCommandOutput}
 * @see {@link DeleteTestRunCommandInput} for command's `input` shape.
 * @see {@link DeleteTestRunCommandOutput} for command's `response` shape.
 * @see {@link AppTestClientResolvedConfig | config} for AppTestClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter provided in the request is not valid.</p>
 *
 * @throws {@link AppTestServiceException}
 * <p>Base exception class for all service exceptions from AppTest service.</p>
 *
 *
 * @public
 */
export class DeleteTestRunCommand extends $Command
  .classBuilder<
    DeleteTestRunCommandInput,
    DeleteTestRunCommandOutput,
    AppTestClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppTestClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsApptestControlPlaneService", "DeleteTestRun", {})
  .n("AppTestClient", "DeleteTestRunCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTestRunCommand)
  .de(de_DeleteTestRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTestRunRequest;
      output: {};
    };
    sdk: {
      input: DeleteTestRunCommandInput;
      output: DeleteTestRunCommandOutput;
    };
  };
}
