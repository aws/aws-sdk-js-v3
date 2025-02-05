// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportBackendStorageRequest, ImportBackendStorageResponse } from "../models/models_0";
import { de_ImportBackendStorageCommand, se_ImportBackendStorageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportBackendStorageCommand}.
 */
export interface ImportBackendStorageCommandInput extends ImportBackendStorageRequest {}
/**
 * @public
 *
 * The output of {@link ImportBackendStorageCommand}.
 */
export interface ImportBackendStorageCommandOutput extends ImportBackendStorageResponse, __MetadataBearer {}

/**
 * <p>Imports an existing backend storage resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ImportBackendStorageCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ImportBackendStorageCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AmplifyBackendClient(config);
 * const input = { // ImportBackendStorageRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   BucketName: "STRING_VALUE",
 *   ServiceName: "S3", // required
 * };
 * const command = new ImportBackendStorageCommand(input);
 * const response = await client.send(command);
 * // { // ImportBackendStorageResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportBackendStorageCommandInput - {@link ImportBackendStorageCommandInput}
 * @returns {@link ImportBackendStorageCommandOutput}
 * @see {@link ImportBackendStorageCommandInput} for command's `input` shape.
 * @see {@link ImportBackendStorageCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 * @public
 */
export class ImportBackendStorageCommand extends $Command
  .classBuilder<
    ImportBackendStorageCommandInput,
    ImportBackendStorageCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyBackend", "ImportBackendStorage", {})
  .n("AmplifyBackendClient", "ImportBackendStorageCommand")
  .f(void 0, void 0)
  .ser(se_ImportBackendStorageCommand)
  .de(de_ImportBackendStorageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportBackendStorageRequest;
      output: ImportBackendStorageResponse;
    };
    sdk: {
      input: ImportBackendStorageCommandInput;
      output: ImportBackendStorageCommandOutput;
    };
  };
}
