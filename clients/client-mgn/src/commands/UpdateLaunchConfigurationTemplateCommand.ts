// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { LaunchConfigurationTemplate, UpdateLaunchConfigurationTemplateRequest } from "../models/models_0";
import { UpdateLaunchConfigurationTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLaunchConfigurationTemplateCommand}.
 */
export interface UpdateLaunchConfigurationTemplateCommandInput extends UpdateLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLaunchConfigurationTemplateCommand}.
 */
export interface UpdateLaunchConfigurationTemplateCommandOutput extends LaunchConfigurationTemplate, __MetadataBearer {}

/**
 * Updates an existing Launch Configuration Template by ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateLaunchConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // UpdateLaunchConfigurationTemplateRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
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
 *     volumeInitializationRate: Number("long"),
 *     deleteOnTermination: true || false,
 *   },
 *   largeVolumeConf: {
 *     volumeType: "STRING_VALUE",
 *     iops: Number("long"),
 *     throughput: Number("long"),
 *     volumeInitializationRate: Number("long"),
 *     deleteOnTermination: true || false,
 *   },
 *   enableParametersEncryption: true || false,
 *   parametersEncryptionKey: "STRING_VALUE",
 * };
 * const command = new UpdateLaunchConfigurationTemplateCommand(input);
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
 * //     volumeInitializationRate: Number("long"),
 * //     deleteOnTermination: true || false,
 * //   },
 * //   largeVolumeConf: {
 * //     volumeType: "STRING_VALUE",
 * //     iops: Number("long"),
 * //     throughput: Number("long"),
 * //     volumeInitializationRate: Number("long"),
 * //     deleteOnTermination: true || false,
 * //   },
 * //   enableParametersEncryption: true || false,
 * //   parametersEncryptionKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateLaunchConfigurationTemplateCommandInput - {@link UpdateLaunchConfigurationTemplateCommandInput}
 * @returns {@link UpdateLaunchConfigurationTemplateCommandOutput}
 * @see {@link UpdateLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Operation denied due to a file permission or access check error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found exception.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * Uninitialized account exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validate exception.
 *
 * @throws {@link MgnServiceException}
 *
 * Base exception class for all service exceptions from Mgn service.
 *
 * @public
 */
export class UpdateLaunchConfigurationTemplateCommand extends command<UpdateLaunchConfigurationTemplateCommandInput, UpdateLaunchConfigurationTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLaunchConfigurationTemplate",
  UpdateLaunchConfigurationTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLaunchConfigurationTemplateRequest;
      output: LaunchConfigurationTemplate;
    };
    sdk: {
      input: UpdateLaunchConfigurationTemplateCommandInput;
      output: UpdateLaunchConfigurationTemplateCommandOutput;
    };
  };
}
