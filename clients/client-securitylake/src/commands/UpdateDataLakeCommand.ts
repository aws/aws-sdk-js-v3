// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataLakeRequest, UpdateDataLakeResponse } from "../models/models_0";
import { UpdateDataLake } from "../schemas/schemas_0";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataLakeCommand}.
 */
export interface UpdateDataLakeCommandInput extends UpdateDataLakeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataLakeCommand}.
 */
export interface UpdateDataLakeCommandOutput extends UpdateDataLakeResponse, __MetadataBearer {}

/**
 * <p>You can use <code>UpdateDataLake</code> to specify where to store your security data, how it should
 *          be encrypted at rest and for how long. You can add a <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/manage-regions.html#add-rollup-region">Rollup
 *             Region</a> to consolidate data from multiple Amazon Web Services Regions, replace
 *          default encryption (SSE-S3) with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">Customer Manged Key</a>,
 *          or specify transition and expiration actions through storage <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/lifecycle-management.html">Lifecycle management</a>. The <code>UpdateDataLake</code> API works as an "upsert" operation that performs an insert if the specified item or record does not exist, or an update if it
 *          already exists. Security Lake securely stores your data at rest using Amazon Web Services encryption solutions. For more details, see <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/data-protection.html">Data protection in Amazon Security Lake</a>.</p>
 *          <p>For example, omitting the key <code>encryptionConfiguration</code> from a Region that is
 *          included in an update call that currently uses KMS will leave that Region's KMS key in
 *          place, but specifying <code>encryptionConfiguration: \{kmsKeyId: 'S3_MANAGED_KEY'\}</code>
 *          for that same Region will reset the key to <code>S3-managed</code>.</p>
 *          <p>For more details about lifecycle management and how to update retention settings for one or more Regions after enabling Security Lake, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/lifecycle-management.html">Amazon Security Lake User Guide</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, UpdateDataLakeCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, UpdateDataLakeCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = { // UpdateDataLakeRequest
 *   configurations: [ // DataLakeConfigurationList // required
 *     { // DataLakeConfiguration
 *       region: "STRING_VALUE", // required
 *       encryptionConfiguration: { // DataLakeEncryptionConfiguration
 *         kmsKeyId: "STRING_VALUE",
 *       },
 *       lifecycleConfiguration: { // DataLakeLifecycleConfiguration
 *         expiration: { // DataLakeLifecycleExpiration
 *           days: Number("int"),
 *         },
 *         transitions: [ // DataLakeLifecycleTransitionList
 *           { // DataLakeLifecycleTransition
 *             storageClass: "STRING_VALUE",
 *             days: Number("int"),
 *           },
 *         ],
 *       },
 *       replicationConfiguration: { // DataLakeReplicationConfiguration
 *         regions: [ // RegionList
 *           "STRING_VALUE",
 *         ],
 *         roleArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   metaStoreManagerRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateDataLakeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataLakeResponse
 * //   dataLakes: [ // DataLakeResourceList
 * //     { // DataLakeResource
 * //       dataLakeArn: "STRING_VALUE", // required
 * //       region: "STRING_VALUE", // required
 * //       s3BucketArn: "STRING_VALUE",
 * //       encryptionConfiguration: { // DataLakeEncryptionConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       lifecycleConfiguration: { // DataLakeLifecycleConfiguration
 * //         expiration: { // DataLakeLifecycleExpiration
 * //           days: Number("int"),
 * //         },
 * //         transitions: [ // DataLakeLifecycleTransitionList
 * //           { // DataLakeLifecycleTransition
 * //             storageClass: "STRING_VALUE",
 * //             days: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       replicationConfiguration: { // DataLakeReplicationConfiguration
 * //         regions: [ // RegionList
 * //           "STRING_VALUE",
 * //         ],
 * //         roleArn: "STRING_VALUE",
 * //       },
 * //       createStatus: "INITIALIZED" || "PENDING" || "COMPLETED" || "FAILED",
 * //       updateStatus: { // DataLakeUpdateStatus
 * //         requestId: "STRING_VALUE",
 * //         status: "INITIALIZED" || "PENDING" || "COMPLETED" || "FAILED",
 * //         exception: { // DataLakeUpdateException
 * //           reason: "STRING_VALUE",
 * //           code: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateDataLakeCommandInput - {@link UpdateDataLakeCommandInput}
 * @returns {@link UpdateDataLakeCommandOutput}
 * @see {@link UpdateDataLakeCommandInput} for command's `input` shape.
 * @see {@link UpdateDataLakeCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 *
 * @public
 */
export class UpdateDataLakeCommand extends $Command
  .classBuilder<
    UpdateDataLakeCommandInput,
    UpdateDataLakeCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "UpdateDataLake", {})
  .n("SecurityLakeClient", "UpdateDataLakeCommand")
  .sc(UpdateDataLake)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataLakeRequest;
      output: UpdateDataLakeResponse;
    };
    sdk: {
      input: UpdateDataLakeCommandInput;
      output: UpdateDataLakeCommandOutput;
    };
  };
}
