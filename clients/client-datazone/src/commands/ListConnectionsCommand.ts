// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListConnectionsInput,
  ListConnectionsOutput,
  ListConnectionsOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_ListConnectionsCommand, se_ListConnectionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectionsCommand}.
 */
export interface ListConnectionsCommandInput extends ListConnectionsInput {}
/**
 * @public
 *
 * The output of {@link ListConnectionsCommand}.
 */
export interface ListConnectionsCommandOutput extends ListConnectionsOutput, __MetadataBearer {}

/**
 * <p>Lists connections. In Amazon DataZone, a connection enables you to connect your
 *          resources (domains, projects, and environments) to external resources and services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListConnectionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListConnectionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListConnectionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "NAME",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   name: "STRING_VALUE",
 *   environmentIdentifier: "STRING_VALUE",
 *   projectIdentifier: "STRING_VALUE", // required
 *   type: "ATHENA" || "BIGQUERY" || "DATABRICKS" || "DOCUMENTDB" || "DYNAMODB" || "HYPERPOD" || "IAM" || "MYSQL" || "OPENSEARCH" || "ORACLE" || "POSTGRESQL" || "REDSHIFT" || "S3" || "SAPHANA" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "VERTICA" || "WORKFLOWS_MWAA",
 * };
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectionsOutput
 * //   items: [ // ConnectionSummaries // required
 * //     { // ConnectionSummary
 * //       connectionId: "STRING_VALUE", // required
 * //       domainId: "STRING_VALUE", // required
 * //       domainUnitId: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       physicalEndpoints: [ // PhysicalEndpoints // required
 * //         { // PhysicalEndpoint
 * //           awsLocation: { // AwsLocation
 * //             accessRole: "STRING_VALUE",
 * //             awsAccountId: "STRING_VALUE",
 * //             awsRegion: "STRING_VALUE",
 * //             iamConnectionId: "STRING_VALUE",
 * //           },
 * //           glueConnectionName: "STRING_VALUE",
 * //           glueConnection: { // GlueConnection
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             connectionType: "ATHENA" || "BIGQUERY" || "DATABRICKS" || "DOCUMENTDB" || "DYNAMODB" || "HYPERPOD" || "IAM" || "MYSQL" || "OPENSEARCH" || "ORACLE" || "POSTGRESQL" || "REDSHIFT" || "S3" || "SAPHANA" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "VERTICA" || "WORKFLOWS_MWAA",
 * //             matchCriteria: [ // MatchCriteria
 * //               "STRING_VALUE",
 * //             ],
 * //             connectionProperties: { // ConnectionProperties
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             sparkProperties: { // PropertyMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             athenaProperties: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             pythonProperties: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             physicalConnectionRequirements: { // PhysicalConnectionRequirements
 * //               subnetId: "STRING_VALUE",
 * //               subnetIdList: [ // SubnetIdList
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroupIdList: [ // SecurityGroupIdList
 * //                 "STRING_VALUE",
 * //               ],
 * //               availabilityZone: "STRING_VALUE",
 * //             },
 * //             creationTime: new Date("TIMESTAMP"),
 * //             lastUpdatedTime: new Date("TIMESTAMP"),
 * //             lastUpdatedBy: "STRING_VALUE",
 * //             status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED",
 * //             statusReason: "STRING_VALUE",
 * //             lastConnectionValidationTime: new Date("TIMESTAMP"),
 * //             authenticationConfiguration: { // AuthenticationConfiguration
 * //               authenticationType: "BASIC" || "OAUTH2" || "CUSTOM",
 * //               secretArn: "STRING_VALUE",
 * //               oAuth2Properties: { // OAuth2Properties
 * //                 oAuth2GrantType: "AUTHORIZATION_CODE" || "CLIENT_CREDENTIALS" || "JWT_BEARER",
 * //                 oAuth2ClientApplication: { // OAuth2ClientApplication
 * //                   userManagedClientApplicationClientId: "STRING_VALUE",
 * //                   aWSManagedClientApplicationReference: "STRING_VALUE",
 * //                 },
 * //                 tokenUrl: "STRING_VALUE",
 * //                 tokenUrlParametersMap: { // TokenUrlParametersMap
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 authorizationCodeProperties: { // AuthorizationCodeProperties
 * //                   authorizationCode: "STRING_VALUE",
 * //                   redirectUri: "STRING_VALUE",
 * //                 },
 * //                 oAuth2Credentials: { // GlueOAuth2Credentials
 * //                   userManagedClientApplicationClientSecret: "STRING_VALUE",
 * //                   accessToken: "STRING_VALUE",
 * //                   refreshToken: "STRING_VALUE",
 * //                   jwtToken: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             connectionSchemaVersion: Number("int"),
 * //             compatibleComputeEnvironments: [ // ComputeEnvironmentsList
 * //               "SPARK" || "ATHENA" || "PYTHON",
 * //             ],
 * //           },
 * //           host: "STRING_VALUE",
 * //           port: Number("int"),
 * //           protocol: "ATHENA" || "GLUE_INTERACTIVE_SESSION" || "HTTPS" || "JDBC" || "LIVY" || "ODBC" || "PRISM",
 * //           stage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       projectId: "STRING_VALUE",
 * //       props: { // ConnectionPropertiesOutput Union: only one key present
 * //         athenaProperties: { // AthenaPropertiesOutput
 * //           workgroupName: "STRING_VALUE",
 * //         },
 * //         glueProperties: { // GluePropertiesOutput
 * //           status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED",
 * //           errorMessage: "STRING_VALUE",
 * //         },
 * //         hyperPodProperties: { // HyperPodPropertiesOutput
 * //           clusterName: "STRING_VALUE", // required
 * //           clusterArn: "STRING_VALUE",
 * //           orchestrator: "EKS" || "SLURM",
 * //         },
 * //         iamProperties: { // IamPropertiesOutput
 * //           environmentId: "STRING_VALUE",
 * //           glueLineageSyncEnabled: true || false,
 * //         },
 * //         redshiftProperties: { // RedshiftPropertiesOutput
 * //           storage: { // RedshiftStorageProperties Union: only one key present
 * //             clusterName: "STRING_VALUE",
 * //             workgroupName: "STRING_VALUE",
 * //           },
 * //           credentials: { // RedshiftCredentials Union: only one key present
 * //             secretArn: "STRING_VALUE",
 * //             usernamePassword: { // UsernamePassword
 * //               password: "STRING_VALUE", // required
 * //               username: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           isProvisionedSecret: true || false,
 * //           jdbcIamUrl: "STRING_VALUE",
 * //           jdbcUrl: "STRING_VALUE",
 * //           redshiftTempDir: "STRING_VALUE",
 * //           lineageSync: { // RedshiftLineageSyncConfigurationOutput
 * //             lineageJobId: "STRING_VALUE",
 * //             enabled: true || false,
 * //             schedule: { // LineageSyncSchedule
 * //               schedule: "STRING_VALUE",
 * //             },
 * //           },
 * //           status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED",
 * //           databaseName: "STRING_VALUE",
 * //         },
 * //         sparkEmrProperties: { // SparkEmrPropertiesOutput
 * //           computeArn: "STRING_VALUE",
 * //           credentials: {
 * //             password: "STRING_VALUE", // required
 * //             username: "STRING_VALUE", // required
 * //           },
 * //           credentialsExpiration: new Date("TIMESTAMP"),
 * //           governanceType: "AWS_MANAGED" || "USER_MANAGED",
 * //           instanceProfileArn: "STRING_VALUE",
 * //           javaVirtualEnv: "STRING_VALUE",
 * //           livyEndpoint: "STRING_VALUE",
 * //           logUri: "STRING_VALUE",
 * //           pythonVirtualEnv: "STRING_VALUE",
 * //           runtimeRole: "STRING_VALUE",
 * //           trustedCertificatesS3Uri: "STRING_VALUE",
 * //         },
 * //         sparkGlueProperties: { // SparkGluePropertiesOutput
 * //           additionalArgs: { // SparkGlueArgs
 * //             connection: "STRING_VALUE",
 * //           },
 * //           glueConnectionName: "STRING_VALUE",
 * //           glueVersion: "STRING_VALUE",
 * //           idleTimeout: Number("int"),
 * //           javaVirtualEnv: "STRING_VALUE",
 * //           numberOfWorkers: Number("int"),
 * //           pythonVirtualEnv: "STRING_VALUE",
 * //           workerType: "STRING_VALUE",
 * //         },
 * //         s3Properties: { // S3PropertiesOutput
 * //           s3Uri: "STRING_VALUE", // required
 * //           s3AccessGrantLocationId: "STRING_VALUE",
 * //           status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED",
 * //           errorMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       type: "ATHENA" || "BIGQUERY" || "DATABRICKS" || "DOCUMENTDB" || "DYNAMODB" || "HYPERPOD" || "IAM" || "MYSQL" || "OPENSEARCH" || "ORACLE" || "POSTGRESQL" || "REDSHIFT" || "S3" || "SAPHANA" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "VERTICA" || "WORKFLOWS_MWAA", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectionsCommandInput - {@link ListConnectionsCommandInput}
 * @returns {@link ListConnectionsCommandOutput}
 * @see {@link ListConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListConnectionsCommand extends $Command
  .classBuilder<
    ListConnectionsCommandInput,
    ListConnectionsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListConnections", {})
  .n("DataZoneClient", "ListConnectionsCommand")
  .f(void 0, ListConnectionsOutputFilterSensitiveLog)
  .ser(se_ListConnectionsCommand)
  .de(de_ListConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectionsInput;
      output: ListConnectionsOutput;
    };
    sdk: {
      input: ListConnectionsCommandInput;
      output: ListConnectionsCommandOutput;
    };
  };
}
