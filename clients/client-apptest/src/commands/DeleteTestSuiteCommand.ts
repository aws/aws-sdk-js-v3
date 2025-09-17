// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTestSuiteRequest, DeleteTestSuiteResponse } from "../models/models_0";
import { de_DeleteTestSuiteCommand, se_DeleteTestSuiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTestSuiteCommand}.
 */
export interface DeleteTestSuiteCommandInput extends DeleteTestSuiteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTestSuiteCommand}.
 */
export interface DeleteTestSuiteCommandOutput extends DeleteTestSuiteResponse, __MetadataBearer {}

/**
 * <p>Deletes a test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, DeleteTestSuiteCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, DeleteTestSuiteCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // DeleteTestSuiteRequest
 *   testSuiteId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTestSuiteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTestSuiteCommandInput - {@link DeleteTestSuiteCommandInput}
 * @returns {@link DeleteTestSuiteCommandOutput}
 * @see {@link DeleteTestSuiteCommandInput} for command's `input` shape.
 * @see {@link DeleteTestSuiteCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for AWS Application Testing exceeds the limit.</p>
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
export class DeleteTestSuiteCommand extends $Command
  .classBuilder<
    DeleteTestSuiteCommandInput,
    DeleteTestSuiteCommandOutput,
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
  .s("AwsApptestControlPlaneService", "DeleteTestSuite", {})
  .n("AppTestClient", "DeleteTestSuiteCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTestSuiteCommand)
  .de(de_DeleteTestSuiteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTestSuiteRequest;
      output: {};
    };
    sdk: {
      input: DeleteTestSuiteCommandInput;
      output: DeleteTestSuiteCommandOutput;
    };
  };
}
