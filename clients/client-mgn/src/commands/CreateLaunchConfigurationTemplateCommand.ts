// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  CreateLaunchConfigurationTemplateRequest,
  CreateLaunchConfigurationTemplateRequestFilterSensitiveLog,
  LaunchConfigurationTemplate,
  LaunchConfigurationTemplateFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateLaunchConfigurationTemplateCommand,
  se_CreateLaunchConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLaunchConfigurationTemplateCommand}.
 */
export interface CreateLaunchConfigurationTemplateCommandInput extends CreateLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateLaunchConfigurationTemplateCommand}.
 */
export interface CreateLaunchConfigurationTemplateCommandOutput extends LaunchConfigurationTemplate, __MetadataBearer {}

/**
 * <p>Creates a new Launch Configuration Template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateLaunchConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // CreateLaunchConfigurationTemplateRequest
 *   postLaunchActions: { // PostLaunchActions
 *     deployment: "STRING_VALUE",
 *     s3LogBucket: "STRING_VALUE",
 *     s3OutputKeyPrefix: "STRING_VALUE",
 *     cloudWatchLogGroupName: "STRING_VALUE",
 *     ssmDocuments: [ // SsmDocuments
 *       { // SsmDocument
 *         actionName: "STRING_VALUE", // required
 *         ssmDocumentName: "STRING_VALUE", // required
 *         timeoutSeconds: Number("int"),
 *         mustSucceedForCutover: true || false,
 *         parameters: { // SsmDocumentParameters
 *           "<keys>": [ // SsmParameterStoreParameters
 *             { // SsmParameterStoreParameter
 *               parameterType: "STRING_VALUE", // required
 *               parameterName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         externalParameters: { // SsmDocumentExternalParameters
 *           "<keys>": { // SsmExternalParameter Union: only one key present
 *             dynamicPath: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   enableMapAutoTagging: true || false,
 *   mapAutoTaggingMpeID: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   launchDisposition: "STRING_VALUE",
 *   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 *   copyPrivateIp: true || false,
 *   associatePublicIpAddress: true || false,
 *   copyTags: true || false,
 *   licensing: { // Licensing
 *     osByol: true || false,
 *   },
 *   bootMode: "STRING_VALUE",
 *   smallVolumeMaxSize: Number("long"),
 *   smallVolumeConf: { // LaunchTemplateDiskConf
 *     volumeType: "STRING_VALUE",
 *     iops: Number("long"),
 *     throughput: Number("long"),
 *   },
 *   largeVolumeConf: {
 *     volumeType: "STRING_VALUE",
 *     iops: Number("long"),
 *     throughput: Number("long"),
 *   },
 * };
 * const command = new CreateLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // LaunchConfigurationTemplate
 * //   launchConfigurationTemplateID: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE",
 * //   postLaunchActions: { // PostLaunchActions
 * //     deployment: "STRING_VALUE",
 * //     s3LogBucket: "STRING_VALUE",
 * //     s3OutputKeyPrefix: "STRING_VALUE",
 * //     cloudWatchLogGroupName: "STRING_VALUE",
 * //     ssmDocuments: [ // SsmDocuments
 * //       { // SsmDocument
 * //         actionName: "STRING_VALUE", // required
 * //         ssmDocumentName: "STRING_VALUE", // required
 * //         timeoutSeconds: Number("int"),
 * //         mustSucceedForCutover: true || false,
 * //         parameters: { // SsmDocumentParameters
 * //           "<keys>": [ // SsmParameterStoreParameters
 * //             { // SsmParameterStoreParameter
 * //               parameterType: "STRING_VALUE", // required
 * //               parameterName: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         externalParameters: { // SsmDocumentExternalParameters
 * //           "<keys>": { // SsmExternalParameter Union: only one key present
 * //             dynamicPath: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   enableMapAutoTagging: true || false,
 * //   mapAutoTaggingMpeID: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ec2LaunchTemplateID: "STRING_VALUE",
 * //   launchDisposition: "STRING_VALUE",
 * //   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //   copyPrivateIp: true || false,
 * //   associatePublicIpAddress: true || false,
 * //   copyTags: true || false,
 * //   licensing: { // Licensing
 * //     osByol: true || false,
 * //   },
 * //   bootMode: "STRING_VALUE",
 * //   smallVolumeMaxSize: Number("long"),
 * //   smallVolumeConf: { // LaunchTemplateDiskConf
 * //     volumeType: "STRING_VALUE",
 * //     iops: Number("long"),
 * //     throughput: Number("long"),
 * //   },
 * //   largeVolumeConf: {
 * //     volumeType: "STRING_VALUE",
 * //     iops: Number("long"),
 * //     throughput: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLaunchConfigurationTemplateCommandInput - {@link CreateLaunchConfigurationTemplateCommandInput}
 * @returns {@link CreateLaunchConfigurationTemplateCommandOutput}
 * @see {@link CreateLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class CreateLaunchConfigurationTemplateCommand extends $Command
  .classBuilder<
    CreateLaunchConfigurationTemplateCommandInput,
    CreateLaunchConfigurationTemplateCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "CreateLaunchConfigurationTemplate", {})
  .n("MgnClient", "CreateLaunchConfigurationTemplateCommand")
  .f(CreateLaunchConfigurationTemplateRequestFilterSensitiveLog, LaunchConfigurationTemplateFilterSensitiveLog)
  .ser(se_CreateLaunchConfigurationTemplateCommand)
  .de(de_CreateLaunchConfigurationTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLaunchConfigurationTemplateRequest;
      output: LaunchConfigurationTemplate;
    };
    sdk: {
      input: CreateLaunchConfigurationTemplateCommandInput;
      output: CreateLaunchConfigurationTemplateCommandOutput;
    };
  };
}
