// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  DescribeLaunchConfigurationTemplatesRequest,
  DescribeLaunchConfigurationTemplatesResponse,
} from "../models/models_0";
import { DescribeLaunchConfigurationTemplates$ } from "../schemas/schemas_0";

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
export interface DescribeLaunchConfigurationTemplatesCommandOutput extends DescribeLaunchConfigurationTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeLaunchConfigurationTemplatesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeLaunchConfigurationTemplatesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
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
 * //       launchConfigurationTemplateID: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //       postLaunchActions: { // PostLaunchActions
 * //         deployment: "STRING_VALUE",
 * //         s3LogBucket: "STRING_VALUE",
 * //         s3OutputKeyPrefix: "STRING_VALUE",
 * //         cloudWatchLogGroupName: "STRING_VALUE",
 * //         ssmDocuments: [ // SsmDocuments
 * //           { // SsmDocument
 * //             actionName: "STRING_VALUE", // required
 * //             ssmDocumentName: "STRING_VALUE", // required
 * //             timeoutSeconds: Number("int"),
 * //             mustSucceedForCutover: true || false,
 * //             parameters: { // SsmDocumentParameters
 * //               "<keys>": [ // SsmParameterStoreParameters
 * //                 { // SsmParameterStoreParameter
 * //                   parameterType: "STRING_VALUE", // required
 * //                   parameterName: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             externalParameters: { // SsmDocumentExternalParameters
 * //               "<keys>": { // SsmExternalParameter Union: only one key present
 * //                 dynamicPath: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       enableMapAutoTagging: true || false,
 * //       mapAutoTaggingMpeID: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ec2LaunchTemplateID: "STRING_VALUE",
 * //       launchDisposition: "STRING_VALUE",
 * //       targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //       copyPrivateIp: true || false,
 * //       associatePublicIpAddress: true || false,
 * //       copyTags: true || false,
 * //       licensing: { // Licensing
 * //         osByol: true || false,
 * //       },
 * //       bootMode: "STRING_VALUE",
 * //       smallVolumeMaxSize: Number("long"),
 * //       smallVolumeConf: { // LaunchTemplateDiskConf
 * //         volumeType: "STRING_VALUE",
 * //         iops: Number("long"),
 * //         throughput: Number("long"),
 * //       },
 * //       largeVolumeConf: {
 * //         volumeType: "STRING_VALUE",
 * //         iops: Number("long"),
 * //         throughput: Number("long"),
 * //       },
 * //       enableParametersEncryption: true || false,
 * //       parametersEncryptionKey: "STRING_VALUE",
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
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
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
export class DescribeLaunchConfigurationTemplatesCommand extends $Command
  .classBuilder<
    DescribeLaunchConfigurationTemplatesCommandInput,
    DescribeLaunchConfigurationTemplatesCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "DescribeLaunchConfigurationTemplates", {})
  .n("MgnClient", "DescribeLaunchConfigurationTemplatesCommand")
  .sc(DescribeLaunchConfigurationTemplates$)
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
