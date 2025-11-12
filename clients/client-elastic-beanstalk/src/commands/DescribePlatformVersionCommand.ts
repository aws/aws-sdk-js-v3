// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePlatformVersionRequest, DescribePlatformVersionResult } from "../models/models_0";
import { DescribePlatformVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePlatformVersionCommand}.
 */
export interface DescribePlatformVersionCommandInput extends DescribePlatformVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePlatformVersionCommand}.
 */
export interface DescribePlatformVersionCommandOutput extends DescribePlatformVersionResult, __MetadataBearer {}

/**
 * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of
 *       platform versions.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DescribePlatformVersionRequest
 *   PlatformArn: "STRING_VALUE",
 * };
 * const command = new DescribePlatformVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePlatformVersionResult
 * //   PlatformDescription: { // PlatformDescription
 * //     PlatformArn: "STRING_VALUE",
 * //     PlatformOwner: "STRING_VALUE",
 * //     PlatformName: "STRING_VALUE",
 * //     PlatformVersion: "STRING_VALUE",
 * //     SolutionStackName: "STRING_VALUE",
 * //     PlatformStatus: "Creating" || "Failed" || "Ready" || "Deleting" || "Deleted",
 * //     DateCreated: new Date("TIMESTAMP"),
 * //     DateUpdated: new Date("TIMESTAMP"),
 * //     PlatformCategory: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Maintainer: "STRING_VALUE",
 * //     OperatingSystemName: "STRING_VALUE",
 * //     OperatingSystemVersion: "STRING_VALUE",
 * //     ProgrammingLanguages: [ // PlatformProgrammingLanguages
 * //       { // PlatformProgrammingLanguage
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Frameworks: [ // PlatformFrameworks
 * //       { // PlatformFramework
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CustomAmiList: [ // CustomAmiList
 * //       { // CustomAmi
 * //         VirtualizationType: "STRING_VALUE",
 * //         ImageId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedTierList: [ // SupportedTierList
 * //       "STRING_VALUE",
 * //     ],
 * //     SupportedAddonList: [ // SupportedAddonList
 * //       "STRING_VALUE",
 * //     ],
 * //     PlatformLifecycleState: "STRING_VALUE",
 * //     PlatformBranchName: "STRING_VALUE",
 * //     PlatformBranchLifecycleState: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePlatformVersionCommandInput - {@link DescribePlatformVersionCommandInput}
 * @returns {@link DescribePlatformVersionCommandOutput}
 * @see {@link DescribePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException} (client fault)
 *  <p>A generic service exception has occurred.</p>
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class DescribePlatformVersionCommand extends $Command
  .classBuilder<
    DescribePlatformVersionCommandInput,
    DescribePlatformVersionCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "DescribePlatformVersion", {})
  .n("ElasticBeanstalkClient", "DescribePlatformVersionCommand")
  .sc(DescribePlatformVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePlatformVersionRequest;
      output: DescribePlatformVersionResult;
    };
    sdk: {
      input: DescribePlatformVersionCommandInput;
      output: DescribePlatformVersionCommandOutput;
    };
  };
}
