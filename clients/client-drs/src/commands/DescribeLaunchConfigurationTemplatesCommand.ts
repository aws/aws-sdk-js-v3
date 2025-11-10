// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeLaunchConfigurationTemplatesRequest,
  DescribeLaunchConfigurationTemplatesResponse,
} from "../models/models_0";
import { DescribeLaunchConfigurationTemplates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLaunchConfigurationTemplatesCommand}.
 */
export interface DescribeLaunchConfigurationTemplatesCommandInput extends DescribeLaunchConfigurationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLaunchConfigurationTemplatesCommand}.
 */
export interface DescribeLaunchConfigurationTemplatesCommandOutput
  extends DescribeLaunchConfigurationTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeLaunchConfigurationTemplatesCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeLaunchConfigurationTemplatesCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DescribeLaunchConfigurationTemplatesRequest
 *   launchConfigurationTemplateIDs: [ // LaunchConfigurationTemplateIDs
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeLaunchConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLaunchConfigurationTemplatesResponse
 * //   items: [ // LaunchConfigurationTemplates
 * //     { // LaunchConfigurationTemplate
 * //       launchConfigurationTemplateID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       launchDisposition: "STRING_VALUE",
 * //       targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //       copyPrivateIp: true || false,
 * //       copyTags: true || false,
 * //       licensing: { // Licensing
 * //         osByol: true || false,
 * //       },
 * //       exportBucketArn: "STRING_VALUE",
 * //       postLaunchEnabled: true || false,
 * //       launchIntoSourceInstance: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLaunchConfigurationTemplatesCommandInput - {@link DescribeLaunchConfigurationTemplatesCommandInput}
 * @returns {@link DescribeLaunchConfigurationTemplatesCommandOutput}
 * @see {@link DescribeLaunchConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class DescribeLaunchConfigurationTemplatesCommand extends $Command
  .classBuilder<
    DescribeLaunchConfigurationTemplatesCommandInput,
    DescribeLaunchConfigurationTemplatesCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "DescribeLaunchConfigurationTemplates", {})
  .n("DrsClient", "DescribeLaunchConfigurationTemplatesCommand")
  .sc(DescribeLaunchConfigurationTemplates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLaunchConfigurationTemplatesRequest;
      output: DescribeLaunchConfigurationTemplatesResponse;
    };
    sdk: {
      input: DescribeLaunchConfigurationTemplatesCommandInput;
      output: DescribeLaunchConfigurationTemplatesCommandOutput;
    };
  };
}
