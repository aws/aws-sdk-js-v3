// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { CreateNetworkMigrationDefinitionRequest, NetworkMigrationDefinition } from "../models/models_0";
import { CreateNetworkMigrationDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkMigrationDefinitionCommand}.
 */
export interface CreateNetworkMigrationDefinitionCommandInput extends CreateNetworkMigrationDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkMigrationDefinitionCommand}.
 */
export interface CreateNetworkMigrationDefinitionCommandOutput extends NetworkMigrationDefinition, __MetadataBearer {}

/**
 * <p>Creates a new network migration definition that specifies the source and target network configuration for a migration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateNetworkMigrationDefinitionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateNetworkMigrationDefinitionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // CreateNetworkMigrationDefinitionRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sourceConfigurations: [ // SourceConfigurationList
 *     { // SourceConfiguration
 *       sourceEnvironment: "STRING_VALUE", // required
 *       sourceS3Configuration: { // SourceS3Configuration
 *         s3Bucket: "STRING_VALUE", // required
 *         s3BucketOwner: "STRING_VALUE", // required
 *         s3Key: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   targetS3Configuration: { // TargetS3Configuration
 *     s3Bucket: "STRING_VALUE", // required
 *     s3BucketOwner: "STRING_VALUE", // required
 *   },
 *   targetNetwork: { // TargetNetwork
 *     topology: "STRING_VALUE", // required
 *     inboundCidr: "STRING_VALUE",
 *     outboundCidr: "STRING_VALUE",
 *     inspectionCidr: "STRING_VALUE",
 *   },
 *   targetDeployment: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   scopeTags: { // ScopeTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateNetworkMigrationDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // NetworkMigrationDefinition
 * //   arn: "STRING_VALUE",
 * //   networkMigrationDefinitionID: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   sourceConfigurations: [ // SourceConfigurationList
 * //     { // SourceConfiguration
 * //       sourceEnvironment: "STRING_VALUE", // required
 * //       sourceS3Configuration: { // SourceS3Configuration
 * //         s3Bucket: "STRING_VALUE", // required
 * //         s3BucketOwner: "STRING_VALUE", // required
 * //         s3Key: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   targetS3Configuration: { // TargetS3Configuration
 * //     s3Bucket: "STRING_VALUE", // required
 * //     s3BucketOwner: "STRING_VALUE", // required
 * //   },
 * //   targetNetwork: { // TargetNetwork
 * //     topology: "STRING_VALUE", // required
 * //     inboundCidr: "STRING_VALUE",
 * //     outboundCidr: "STRING_VALUE",
 * //     inspectionCidr: "STRING_VALUE",
 * //   },
 * //   targetDeployment: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   scopeTags: { // ScopeTagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkMigrationDefinitionCommandInput - {@link CreateNetworkMigrationDefinitionCommandInput}
 * @returns {@link CreateNetworkMigrationDefinitionCommandOutput}
 * @see {@link CreateNetworkMigrationDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkMigrationDefinitionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample CreateNetworkMigrationDefinition call
 * ```javascript
 * //
 * const input = {
 *   description: "network 1 description",
 *   name: "network1",
 *   sourceConfigurations: [
 *     {
 *       sourceEnvironment: "NSX",
 *       sourceS3Configuration: {
 *         s3Bucket: "source_bucket",
 *         s3BucketOwner: "012345678901",
 *         s3Key: "source_key"
 *       }
 *     }
 *   ],
 *   targetDeployment: "SINGLE_ACCOUNT",
 *   targetNetwork: {
 *     inboundCidr: "192.168.1.0/24",
 *     topology: "ISOLATED_VPC"
 *   },
 *   targetS3Configuration: {
 *     s3Bucket: "target_bucket",
 *     s3BucketOwner: "012345678901"
 *   }
 * };
 * const command = new CreateNetworkMigrationDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: 1735334198,
 *   description: "network 1 description",
 *   name: "network1",
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   sourceConfigurations: [
 *     {
 *       sourceEnvironment: "NSX",
 *       sourceS3Configuration: {
 *         s3Bucket: "source_bucket",
 *         s3BucketOwner: "012345678901",
 *         s3Key: "source_key"
 *       }
 *     }
 *   ],
 *   tags:   { /* empty *\/ },
 *   targetNetwork: {
 *     inboundCidr: "192.168.1.0/24",
 *     topology: "ISOLATED_VPC"
 *   },
 *   targetS3Configuration: {
 *     s3Bucket: "target_bucket",
 *     s3BucketOwner: "012345678901"
 *   },
 *   updatedAt: 1735334198
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateNetworkMigrationDefinitionCommand extends $Command
  .classBuilder<
    CreateNetworkMigrationDefinitionCommandInput,
    CreateNetworkMigrationDefinitionCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "CreateNetworkMigrationDefinition", {})
  .n("MgnClient", "CreateNetworkMigrationDefinitionCommand")
  .sc(CreateNetworkMigrationDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkMigrationDefinitionRequest;
      output: NetworkMigrationDefinition;
    };
    sdk: {
      input: CreateNetworkMigrationDefinitionCommandInput;
      output: CreateNetworkMigrationDefinitionCommandOutput;
    };
  };
}
