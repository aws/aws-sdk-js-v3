// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTestConfigurationRequest, DeleteTestConfigurationResponse } from "../models/models_0";
import { de_DeleteTestConfigurationCommand, se_DeleteTestConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTestConfigurationCommand}.
 */
export interface DeleteTestConfigurationCommandInput extends DeleteTestConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTestConfigurationCommand}.
 */
export interface DeleteTestConfigurationCommandOutput extends DeleteTestConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes a test configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, DeleteTestConfigurationCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, DeleteTestConfigurationCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppTestClient(config);
 * const input = { // DeleteTestConfigurationRequest
 *   testConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTestConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTestConfigurationCommandInput - {@link DeleteTestConfigurationCommandInput}
 * @returns {@link DeleteTestConfigurationCommandOutput}
 * @see {@link DeleteTestConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteTestConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteTestConfigurationCommand extends $Command
  .classBuilder<
    DeleteTestConfigurationCommandInput,
    DeleteTestConfigurationCommandOutput,
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
  .s("AwsApptestControlPlaneService", "DeleteTestConfiguration", {})
  .n("AppTestClient", "DeleteTestConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTestConfigurationCommand)
  .de(de_DeleteTestConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTestConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteTestConfigurationCommandInput;
      output: DeleteTestConfigurationCommandOutput;
    };
  };
}
