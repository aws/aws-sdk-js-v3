// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetHostedConfigurationVersionRequest,
  HostedConfigurationVersion,
  HostedConfigurationVersionFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetHostedConfigurationVersionCommand,
  se_GetHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHostedConfigurationVersionCommand}.
 */
export interface GetHostedConfigurationVersionCommandInput extends GetHostedConfigurationVersionRequest {}
/**
 * @public
 */
export type GetHostedConfigurationVersionCommandOutputType = Omit<HostedConfigurationVersion, "Content"> & {
  Content?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetHostedConfigurationVersionCommand}.
 */
export interface GetHostedConfigurationVersionCommandOutput
  extends GetHostedConfigurationVersionCommandOutputType,
    __MetadataBearer {}

/**
 * <p>Retrieves information about a specific configuration version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // GetHostedConfigurationVersionRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   VersionNumber: Number("int"), // required
 * };
 * const command = new GetHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * // { // HostedConfigurationVersion
 * //   ApplicationId: "STRING_VALUE",
 * //   ConfigurationProfileId: "STRING_VALUE",
 * //   VersionNumber: Number("int"),
 * //   Description: "STRING_VALUE",
 * //   Content: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   VersionLabel: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetHostedConfigurationVersionCommandInput - {@link GetHostedConfigurationVersionCommandInput}
 * @returns {@link GetHostedConfigurationVersionCommandOutput}
 * @see {@link GetHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link GetHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @public
 * @example To retrieve hosted configuration details
 * ```javascript
 * // The following get-hosted-configuration-version example retrieves the configuration details of the AWS AppConfig hosted configuration.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "VersionNumber": 1
 * };
 * const command = new GetHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "ContentType": "application/json",
 *   "VersionNumber": 1
 * }
 * *\/
 * // example id: to-retrieve-hosted-configuration-details-1632267003527
 * ```
 *
 */
export class GetHostedConfigurationVersionCommand extends $Command
  .classBuilder<
    GetHostedConfigurationVersionCommandInput,
    GetHostedConfigurationVersionCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "GetHostedConfigurationVersion", {})
  .n("AppConfigClient", "GetHostedConfigurationVersionCommand")
  .f(void 0, HostedConfigurationVersionFilterSensitiveLog)
  .ser(se_GetHostedConfigurationVersionCommand)
  .de(de_GetHostedConfigurationVersionCommand)
  .build() {}
