// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { GetNetworkMigrationDefinitionRequest, NetworkMigrationDefinition } from "../models/models_0";
import { GetNetworkMigrationDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkMigrationDefinitionCommand}.
 */
export interface GetNetworkMigrationDefinitionCommandInput extends GetNetworkMigrationDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkMigrationDefinitionCommand}.
 */
export interface GetNetworkMigrationDefinitionCommandOutput extends NetworkMigrationDefinition, __MetadataBearer {}

/**
 * <p>Retrieves the details of a network migration definition including source and target configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetNetworkMigrationDefinitionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetNetworkMigrationDefinitionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // GetNetworkMigrationDefinitionRequest
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 * };
 * const command = new GetNetworkMigrationDefinitionCommand(input);
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
 * @param GetNetworkMigrationDefinitionCommandInput - {@link GetNetworkMigrationDefinitionCommandInput}
 * @returns {@link GetNetworkMigrationDefinitionCommandOutput}
 * @see {@link GetNetworkMigrationDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetNetworkMigrationDefinitionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample GetNetworkMigrationDefinition call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567"
 * };
 * const command = new GetNetworkMigrationDefinitionCommand(input);
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
export class GetNetworkMigrationDefinitionCommand extends $Command
  .classBuilder<
    GetNetworkMigrationDefinitionCommandInput,
    GetNetworkMigrationDefinitionCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "GetNetworkMigrationDefinition", {})
  .n("MgnClient", "GetNetworkMigrationDefinitionCommand")
  .sc(GetNetworkMigrationDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkMigrationDefinitionRequest;
      output: NetworkMigrationDefinition;
    };
    sdk: {
      input: GetNetworkMigrationDefinitionCommandInput;
      output: GetNetworkMigrationDefinitionCommandOutput;
    };
  };
}
