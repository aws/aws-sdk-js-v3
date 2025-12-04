// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type { GetBucketsRequest, GetBucketsResult } from "../models/models_0";
import { GetBuckets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketsCommand}.
 */
export interface GetBucketsCommandInput extends GetBucketsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketsCommand}.
 */
export interface GetBucketsCommandOutput extends GetBucketsResult, __MetadataBearer {}

/**
 * <p>Returns information about one or more Amazon Lightsail buckets. The information returned
 *       includes the synchronization status of the Amazon Simple Storage Service (Amazon S3)
 *       account-level block public access feature for your Lightsail buckets.</p>
 *          <p>For more information about buckets, see <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer
 *         Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBucketsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetBucketsRequest
 *   bucketName: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 *   includeConnectedResources: true || false,
 *   includeCors: true || false,
 * };
 * const command = new GetBucketsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketsResult
 * //   buckets: [ // BucketList
 * //     { // Bucket
 * //       resourceType: "STRING_VALUE",
 * //       accessRules: { // AccessRules
 * //         getObject: "public" || "private",
 * //         allowPublicOverrides: true || false,
 * //       },
 * //       arn: "STRING_VALUE",
 * //       bundleId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       url: "STRING_VALUE",
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //       },
 * //       name: "STRING_VALUE",
 * //       supportCode: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       objectVersioning: "STRING_VALUE",
 * //       ableToUpdateBundle: true || false,
 * //       readonlyAccessAccounts: [ // PartnerIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       resourcesReceivingAccess: [ // AccessReceiverList
 * //         { // ResourceReceivingAccess
 * //           name: "STRING_VALUE",
 * //           resourceType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       state: { // BucketState
 * //         code: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //       accessLogConfig: { // BucketAccessLogConfig
 * //         enabled: true || false, // required
 * //         destination: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       cors: { // BucketCorsConfig
 * //         rules: [ // BucketCorsRules
 * //           { // BucketCorsRule
 * //             id: "STRING_VALUE",
 * //             allowedMethods: [ // BucketCorsAllowedMethods // required
 * //               "STRING_VALUE",
 * //             ],
 * //             allowedOrigins: [ // BucketCorsAllowedOrigins // required
 * //               "STRING_VALUE",
 * //             ],
 * //             allowedHeaders: [ // BucketCorsAllowedHeaders
 * //               "STRING_VALUE",
 * //             ],
 * //             exposeHeaders: [ // BucketCorsExposeHeaders
 * //               "STRING_VALUE",
 * //             ],
 * //             maxAgeSeconds: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * //   accountLevelBpaSync: { // AccountLevelBpaSync
 * //     status: "InSync" || "Failed" || "NeverSynced" || "Defaulted",
 * //     lastSyncedAt: new Date("TIMESTAMP"),
 * //     message: "DEFAULTED_FOR_SLR_MISSING" || "SYNC_ON_HOLD" || "DEFAULTED_FOR_SLR_MISSING_ON_HOLD" || "Unknown",
 * //     bpaImpactsLightsail: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketsCommandInput - {@link GetBucketsCommandInput}
 * @returns {@link GetBucketsCommandOutput}
 * @see {@link GetBucketsCommandInput} for command's `input` shape.
 * @see {@link GetBucketsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetBucketsCommand extends $Command
  .classBuilder<
    GetBucketsCommandInput,
    GetBucketsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetBuckets", {})
  .n("LightsailClient", "GetBucketsCommand")
  .sc(GetBuckets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketsRequest;
      output: GetBucketsResult;
    };
    sdk: {
      input: GetBucketsCommandInput;
      output: GetBucketsCommandOutput;
    };
  };
}
