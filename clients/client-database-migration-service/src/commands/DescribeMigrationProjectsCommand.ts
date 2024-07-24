// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMigrationProjectsMessage, DescribeMigrationProjectsResponse } from "../models/models_0";
import { de_DescribeMigrationProjectsCommand, se_DescribeMigrationProjectsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMigrationProjectsCommand}.
 */
export interface DescribeMigrationProjectsCommandInput extends DescribeMigrationProjectsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMigrationProjectsCommand}.
 */
export interface DescribeMigrationProjectsCommandOutput extends DescribeMigrationProjectsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of migration projects for your account in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMigrationProjectsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMigrationProjectsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMigrationProjectsMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeMigrationProjectsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMigrationProjectsResponse
 * //   Marker: "STRING_VALUE",
 * //   MigrationProjects: [ // MigrationProjectList
 * //     { // MigrationProject
 * //       MigrationProjectName: "STRING_VALUE",
 * //       MigrationProjectArn: "STRING_VALUE",
 * //       MigrationProjectCreationTime: new Date("TIMESTAMP"),
 * //       SourceDataProviderDescriptors: [ // DataProviderDescriptorList
 * //         { // DataProviderDescriptor
 * //           SecretsManagerSecretId: "STRING_VALUE",
 * //           SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //           DataProviderName: "STRING_VALUE",
 * //           DataProviderArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TargetDataProviderDescriptors: [
 * //         {
 * //           SecretsManagerSecretId: "STRING_VALUE",
 * //           SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //           DataProviderName: "STRING_VALUE",
 * //           DataProviderArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       InstanceProfileName: "STRING_VALUE",
 * //       TransformationRules: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       SchemaConversionApplicationAttributes: { // SCApplicationAttributes
 * //         S3BucketPath: "STRING_VALUE",
 * //         S3BucketRoleArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMigrationProjectsCommandInput - {@link DescribeMigrationProjectsCommandInput}
 * @returns {@link DescribeMigrationProjectsCommandOutput}
 * @see {@link DescribeMigrationProjectsCommandInput} for command's `input` shape.
 * @see {@link DescribeMigrationProjectsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 */
export class DescribeMigrationProjectsCommand extends $Command
  .classBuilder<
    DescribeMigrationProjectsCommandInput,
    DescribeMigrationProjectsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeMigrationProjects", {})
  .n("DatabaseMigrationServiceClient", "DescribeMigrationProjectsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMigrationProjectsCommand)
  .de(de_DescribeMigrationProjectsCommand)
  .build() {}
