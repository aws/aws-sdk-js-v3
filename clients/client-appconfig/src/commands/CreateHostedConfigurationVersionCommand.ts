// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateHostedConfigurationVersionRequest,
  CreateHostedConfigurationVersionRequestFilterSensitiveLog,
  HostedConfigurationVersion,
  HostedConfigurationVersionFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateHostedConfigurationVersionCommand,
  se_CreateHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type CreateHostedConfigurationVersionCommandInputType = Omit<
  CreateHostedConfigurationVersionRequest,
  "Content"
> & {
  Content: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link CreateHostedConfigurationVersionCommand}.
 */
export interface CreateHostedConfigurationVersionCommandInput
  extends CreateHostedConfigurationVersionCommandInputType {}
/**
 * @public
 */
export type CreateHostedConfigurationVersionCommandOutputType = Omit<HostedConfigurationVersion, "Content"> & {
  Content?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link CreateHostedConfigurationVersionCommand}.
 */
export interface CreateHostedConfigurationVersionCommandOutput
  extends CreateHostedConfigurationVersionCommandOutputType,
    __MetadataBearer {}

/**
 * <p>Creates a new configuration in the AppConfig hosted configuration store. If
 *          you're creating a feature flag, we recommend you familiarize yourself with the JSON schema
 *          for feature flag data. For more information, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile-feature-flags.html#appconfig-type-reference-feature-flags">Type reference for AWS.AppConfig.FeatureFlags</a> in the
 *             <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppConfigClient(config);
 * const input = { // CreateHostedConfigurationVersionRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Content: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   ContentType: "STRING_VALUE", // required
 *   LatestVersionNumber: Number("int"),
 *   VersionLabel: "STRING_VALUE",
 * };
 * const command = new CreateHostedConfigurationVersionCommand(input);
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
 * @param CreateHostedConfigurationVersionCommandInput - {@link CreateHostedConfigurationVersionCommandInput}
 * @returns {@link CreateHostedConfigurationVersionCommandOutput}
 * @see {@link CreateHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>The configuration size is too large.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>Deployment strategies: 20 max</p>
 *          <p>Configuration profiles: 100 max per application</p>
 *          <p>Environments: 20 max per application</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @public
 * @example To create a hosted configuration version
 * ```javascript
 * // The following create-hosted-configuration-version example creates a new configuration in the AWS AppConfig configuration store.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "Content": "eyAiTmFtZSI6ICJFeGFtcGxlQXBwbGljYXRpb24iLCAiSWQiOiBFeGFtcGxlSUQsICJSYW5rIjogNyB9",
 *   "ContentType": "text",
 *   "LatestVersionNumber": 1
 * };
 * const command = new CreateHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationId": "339ohji",
 *   "ConfigurationProfileId": "ur8hx2f",
 *   "ContentType": "text",
 *   "VersionNumber": 1
 * }
 * *\/
 * // example id: to-create-a-hosted-configuration-version-1632265196980
 * ```
 *
 */
export class CreateHostedConfigurationVersionCommand extends $Command
  .classBuilder<
    CreateHostedConfigurationVersionCommandInput,
    CreateHostedConfigurationVersionCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "CreateHostedConfigurationVersion", {})
  .n("AppConfigClient", "CreateHostedConfigurationVersionCommand")
  .f(CreateHostedConfigurationVersionRequestFilterSensitiveLog, HostedConfigurationVersionFilterSensitiveLog)
  .ser(se_CreateHostedConfigurationVersionCommand)
  .de(de_CreateHostedConfigurationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHostedConfigurationVersionRequest;
      output: HostedConfigurationVersion;
    };
    sdk: {
      input: CreateHostedConfigurationVersionCommandInput;
      output: CreateHostedConfigurationVersionCommandOutput;
    };
  };
}
