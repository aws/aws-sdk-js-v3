// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePlatformVersionRequest, CreatePlatformVersionResult } from "../models/models_0";
import { de_CreatePlatformVersionCommand, se_CreatePlatformVersionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePlatformVersionCommand}.
 */
export interface CreatePlatformVersionCommandInput extends CreatePlatformVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePlatformVersionCommand}.
 */
export interface CreatePlatformVersionCommandOutput extends CreatePlatformVersionResult, __MetadataBearer {}

/**
 * <p>Create a new version of your custom platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreatePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreatePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // CreatePlatformVersionRequest
 *   PlatformName: "STRING_VALUE", // required
 *   PlatformVersion: "STRING_VALUE", // required
 *   PlatformDefinitionBundle: { // S3Location
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *   },
 *   EnvironmentName: "STRING_VALUE",
 *   OptionSettings: [ // ConfigurationOptionSettingsList
 *     { // ConfigurationOptionSetting
 *       ResourceName: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *       OptionName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreatePlatformVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePlatformVersionResult
 * //   PlatformSummary: { // PlatformSummary
 * //     PlatformArn: "STRING_VALUE",
 * //     PlatformOwner: "STRING_VALUE",
 * //     PlatformStatus: "Creating" || "Failed" || "Ready" || "Deleting" || "Deleted",
 * //     PlatformCategory: "STRING_VALUE",
 * //     OperatingSystemName: "STRING_VALUE",
 * //     OperatingSystemVersion: "STRING_VALUE",
 * //     SupportedTierList: [ // SupportedTierList
 * //       "STRING_VALUE",
 * //     ],
 * //     SupportedAddonList: [ // SupportedAddonList
 * //       "STRING_VALUE",
 * //     ],
 * //     PlatformLifecycleState: "STRING_VALUE",
 * //     PlatformVersion: "STRING_VALUE",
 * //     PlatformBranchName: "STRING_VALUE",
 * //     PlatformBranchLifecycleState: "STRING_VALUE",
 * //   },
 * //   Builder: { // Builder
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePlatformVersionCommandInput - {@link CreatePlatformVersionCommandInput}
 * @returns {@link CreatePlatformVersionCommandOutput}
 * @see {@link CreatePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link TooManyPlatformsException} (client fault)
 *  <p>You have exceeded the maximum number of allowed platforms associated with the account.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class CreatePlatformVersionCommand extends $Command
  .classBuilder<
    CreatePlatformVersionCommandInput,
    CreatePlatformVersionCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "CreatePlatformVersion", {})
  .n("ElasticBeanstalkClient", "CreatePlatformVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreatePlatformVersionCommand)
  .de(de_CreatePlatformVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlatformVersionRequest;
      output: CreatePlatformVersionResult;
    };
    sdk: {
      input: CreatePlatformVersionCommandInput;
      output: CreatePlatformVersionCommandOutput;
    };
  };
}
