// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateSoftwareUpdateJobRequest, CreateSoftwareUpdateJobResponse } from "../models/models_0";
import { de_CreateSoftwareUpdateJobCommand, se_CreateSoftwareUpdateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSoftwareUpdateJobCommand}.
 */
export interface CreateSoftwareUpdateJobCommandInput extends CreateSoftwareUpdateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateSoftwareUpdateJobCommand}.
 */
export interface CreateSoftwareUpdateJobCommandOutput extends CreateSoftwareUpdateJobResponse, __MetadataBearer {}

/**
 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSoftwareUpdateJobCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSoftwareUpdateJobCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateSoftwareUpdateJobRequest
 *   AmznClientToken: "STRING_VALUE",
 *   S3UrlSignerRole: "STRING_VALUE", // required
 *   SoftwareToUpdate: "core" || "ota_agent", // required
 *   UpdateAgentLogLevel: "NONE" || "TRACE" || "DEBUG" || "VERBOSE" || "INFO" || "WARN" || "ERROR" || "FATAL",
 *   UpdateTargets: [ // UpdateTargets // required
 *     "STRING_VALUE",
 *   ],
 *   UpdateTargetsArchitecture: "armv6l" || "armv7l" || "x86_64" || "aarch64", // required
 *   UpdateTargetsOperatingSystem: "ubuntu" || "raspbian" || "amazon_linux" || "openwrt", // required
 * };
 * const command = new CreateSoftwareUpdateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateSoftwareUpdateJobResponse
 * //   IotJobArn: "STRING_VALUE",
 * //   IotJobId: "STRING_VALUE",
 * //   PlatformSoftwareVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSoftwareUpdateJobCommandInput - {@link CreateSoftwareUpdateJobCommandInput}
 * @returns {@link CreateSoftwareUpdateJobCommandOutput}
 * @see {@link CreateSoftwareUpdateJobCommandInput} for command's `input` shape.
 * @see {@link CreateSoftwareUpdateJobCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class CreateSoftwareUpdateJobCommand extends $Command
  .classBuilder<
    CreateSoftwareUpdateJobCommandInput,
    CreateSoftwareUpdateJobCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "CreateSoftwareUpdateJob", {})
  .n("GreengrassClient", "CreateSoftwareUpdateJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateSoftwareUpdateJobCommand)
  .de(de_CreateSoftwareUpdateJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSoftwareUpdateJobRequest;
      output: CreateSoftwareUpdateJobResponse;
    };
    sdk: {
      input: CreateSoftwareUpdateJobCommandInput;
      output: CreateSoftwareUpdateJobCommandOutput;
    };
  };
}
