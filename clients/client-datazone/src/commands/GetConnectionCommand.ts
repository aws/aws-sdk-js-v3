// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectionInput, GetConnectionOutput } from "../models/models_1";
import { GetConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandInput extends GetConnectionInput {}
/**
 * @public
 *
 * The output of {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandOutput extends GetConnectionOutput, __MetadataBearer {}

/**
 * <p>Gets a connection. In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetConnectionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetConnectionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetConnectionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   withSecret: true || false,
 * };
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionOutput
 * //   connectionCredentials: { // ConnectionCredentials
 * //     accessKeyId: "STRING_VALUE",
 * //     secretAccessKey: "STRING_VALUE",
 * //     sessionToken: "STRING_VALUE",
 * //     expiration: new Date("TIMESTAMP"),
 * //   },
 * //   configurations: [ // Configurations
 * //     { // Configuration
 * //       classification: "STRING_VALUE",
 * //       properties: { // PropertyMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   connectionId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   domainUnitId: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE",
 * //   environmentUserRole: "STRING_VALUE",
 * //   name: "STRING_VALUE", // required
 * //   physicalEndpoints: [ // PhysicalEndpoints // required
 * //     { // PhysicalEndpoint
 * //       awsLocation: { // AwsLocation
 * //         accessRole: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //         awsRegion: "STRING_VALUE",
 * //         iamConnectionId: "STRING_VALUE",
 * //       },
 * //       glueConnectionName: "STRING_VALUE",
 * //       glueConnectionNames: [ // GlueConnectionNames
 * //         "STRING_VALUE",
 * //       ],
 * //       glueConnection: { // GlueConnection
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         connectionType: "ATHENA" || "BIGQUERY" || "DATABRICKS" || "DOCUMENTDB" || "DYNAMODB" || "HYPERPOD" || "IAM" || "MYSQL" || "OPENSEARCH" || "ORACLE" || "POSTGRESQL" || "REDSHIFT" || "S3" || "SAPHANA" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "VERTICA" || "WORKFLOWS_MWAA" || "AMAZON_Q" || "MLFLOW" || "VPC",
 * //         matchCriteria: [ // MatchCriteria
 * //           "STRING_VALUE",
 * //         ],
 * //         connectionProperties: { // ConnectionProperties
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         sparkProperties: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         athenaProperties: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         pythonProperties: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         physicalConnectionRequirements: { // PhysicalConnectionRequirements
 * //           subnetId: "STRING_VALUE",
 * //           subnetIdList: [ // SubnetIdList
 * //             "STRING_VALUE",
 * //           ],
 * //           securityGroupIdList: [ // SecurityGroupIdList
 * //             "STRING_VALUE",
 * //           ],
 * //           availabilityZone: "STRING_VALUE",
 * //         },
 * //         creationTime: new Date("TIMESTAMP"),
 * //         lastUpdatedTime: new Date("TIMESTAMP"),
 * //         lastUpdatedBy: "STRING_VALUE",
 * //         status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED",
 * //         statusReason: "STRING_VALUE",
 * //         lastConnectionValidationTime: new Date("TIMESTAMP"),
 * //         authenticationConfiguration: { // AuthenticationConfiguration
 * //           authenticationType: "BASIC" || "OAUTH2" || "CUSTOM",
 * //           secretArn: "STRING_VALUE",
 * //           oAuth2Properties: { // OAuth2Properties
 * //             oAuth2GrantType: "AUTHORIZATION_CODE" || "CLIENT_CREDENTIALS" || "JWT_BEARER",
 * //             oAuth2ClientApplication: { // OAuth2ClientApplication
 * //               userManagedClientApplicationClientId: "STRING_VALUE",
 * //               aWSManagedClientApplicationReference: "STRING_VALUE",
 * //             },
 * //             tokenUrl: "STRING_VALUE",
 * //             tokenUrlParametersMap: { // TokenUrlParametersMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             authorizationCodeProperties: { // AuthorizationCodeProperties
 * //               authorizationCode: "STRING_VALUE",
 * //               redirectUri: "STRING_VALUE",
 * //             },
 * //             oAuth2Credentials: { // GlueOAuth2Credentials
 * //               userManagedClientApplicationClientSecret: "STRING_VALUE",
 * //               accessToken: "STRING_VALUE",
 * //               refreshToken: "STRING_VALUE",
 * //               jwtToken: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         connectionSchemaVersion: Number("int"),
 * //         compatibleComputeEnvironments: [ // ComputeEnvironmentsList
 * //           "SPARK" || "ATHENA" || "PYTHON",
 * //         ],
 * //       },
 * //       enableTrustedIdentityPropagation: true || false,
 * //       host: "STRING_VALUE",
 * //       port: Number("int"),
 * //       protocol: "ATHENA" || "GLUE_INTERACTIVE_SESSION" || "HTTPS" || "JDBC" || "LIVY" || "ODBC" || "PRISM",
 * //       stage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   projectId: "STRING_VALUE",
 * //   props: { // ConnectionPropertiesOutput Union: only one key present
 * //     athenaProperties: { // AthenaPropertiesOutput
 * //       workgroupName: "STRING_VALUE",
 * //     },
 * //     glueProperties: { // GluePropertiesOutput
 * //       status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //     hyperPodProperties: { // HyperPodPropertiesOutput
 * //       clusterName: "STRING_VALUE", // required
 * //       clusterArn: "STRING_VALUE",
 * //       orchestrator: "EKS" || "SLURM",
 * //     },
 * //     iamProperties: { // IamPropertiesOutput
 * //       environmentId: "STRING_VALUE",
 * //       glueLineageSyncEnabled: true || false,
 * //     },
 * //     redshiftProperties: { // RedshiftPropertiesOutput
 * //       storage: { // RedshiftStorageProperties Union: only one key present
 * //         clusterName: "STRING_VALUE",
 * //         workgroupName: "STRING_VALUE",
 * //       },
 * //       credentials: { // RedshiftCredentials Union: only one key present
 * //         secretArn: "STRING_VALUE",
 * //         usernamePassword: { // UsernamePassword
 * //           password: "STRING_VALUE", // required
 * //           username: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       isProvisionedSecret: true || false,
 * //       jdbcIamUrl: "STRING_VALUE",
 * //       jdbcUrl: "STRING_VALUE",
 * //       redshiftTempDir: "STRING_VALUE",
 * //       lineageSync: { // RedshiftLineageSyncConfigurationOutput
 * //         lineageJobId: "STRING_VALUE",
 * //         enabled: true || false,
 * //         schedule: { // LineageSyncSchedule
 * //           schedule: "STRING_VALUE",
 * //         },
 * //       },
 * //       status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED",
 * //       databaseName: "STRING_VALUE",
 * //     },
 * //     sparkEmrProperties: { // SparkEmrPropertiesOutput
 * //       computeArn: "STRING_VALUE",
 * //       credentials: {
 * //         password: "STRING_VALUE", // required
 * //         username: "STRING_VALUE", // required
 * //       },
 * //       credentialsExpiration: new Date("TIMESTAMP"),
 * //       governanceType: "AWS_MANAGED" || "USER_MANAGED",
 * //       instanceProfileArn: "STRING_VALUE",
 * //       javaVirtualEnv: "STRING_VALUE",
 * //       livyEndpoint: "STRING_VALUE",
 * //       logUri: "STRING_VALUE",
 * //       pythonVirtualEnv: "STRING_VALUE",
 * //       runtimeRole: "STRING_VALUE",
 * //       trustedCertificatesS3Uri: "STRING_VALUE",
 * //       certificateData: "STRING_VALUE",
 * //       managedEndpointArn: "STRING_VALUE",
 * //       managedEndpointCredentials: { // ManagedEndpointCredentials
 * //         id: "STRING_VALUE",
 * //         token: "STRING_VALUE",
 * //       },
 * //     },
 * //     sparkGlueProperties: { // SparkGluePropertiesOutput
 * //       additionalArgs: { // SparkGlueArgs
 * //         connection: "STRING_VALUE",
 * //       },
 * //       glueConnectionName: "STRING_VALUE",
 * //       glueConnectionNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //       glueVersion: "STRING_VALUE",
 * //       idleTimeout: Number("int"),
 * //       javaVirtualEnv: "STRING_VALUE",
 * //       numberOfWorkers: Number("int"),
 * //       pythonVirtualEnv: "STRING_VALUE",
 * //       workerType: "STRING_VALUE",
 * //     },
 * //     s3Properties: { // S3PropertiesOutput
 * //       s3Uri: "STRING_VALUE", // required
 * //       s3AccessGrantLocationId: "STRING_VALUE",
 * //       registerS3AccessGrantLocation: true || false,
 * //       status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //     snowflakeProperties: { // SnowflakePropertiesOutput
 * //       snowflakeRole: "STRING_VALUE", // required
 * //       identityMapping: { // IdentityMapping
 * //         usernameAttribute: "STRING_VALUE", // required
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       lineageSync: { // LineageSyncOutput
 * //         lineageJobId: "STRING_VALUE",
 * //         timezone: "UTC" || "AFRICA_JOHANNESBURG" || "AMERICA_MONTREAL" || "AMERICA_SAO_PAULO" || "ASIA_BAHRAIN" || "ASIA_BANGKOK" || "ASIA_CALCUTTA" || "ASIA_DUBAI" || "ASIA_HONG_KONG" || "ASIA_JAKARTA" || "ASIA_KUALA_LUMPUR" || "ASIA_SEOUL" || "ASIA_SHANGHAI" || "ASIA_SINGAPORE" || "ASIA_TAIPEI" || "ASIA_TOKYO" || "AUSTRALIA_MELBOURNE" || "AUSTRALIA_SYDNEY" || "CANADA_CENTRAL" || "CET" || "CST6CDT" || "ETC_GMT" || "ETC_GMT0" || "ETC_GMT_ADD_0" || "ETC_GMT_ADD_1" || "ETC_GMT_ADD_10" || "ETC_GMT_ADD_11" || "ETC_GMT_ADD_12" || "ETC_GMT_ADD_2" || "ETC_GMT_ADD_3" || "ETC_GMT_ADD_4" || "ETC_GMT_ADD_5" || "ETC_GMT_ADD_6" || "ETC_GMT_ADD_7" || "ETC_GMT_ADD_8" || "ETC_GMT_ADD_9" || "ETC_GMT_NEG_0" || "ETC_GMT_NEG_1" || "ETC_GMT_NEG_10" || "ETC_GMT_NEG_11" || "ETC_GMT_NEG_12" || "ETC_GMT_NEG_13" || "ETC_GMT_NEG_14" || "ETC_GMT_NEG_2" || "ETC_GMT_NEG_3" || "ETC_GMT_NEG_4" || "ETC_GMT_NEG_5" || "ETC_GMT_NEG_6" || "ETC_GMT_NEG_7" || "ETC_GMT_NEG_8" || "ETC_GMT_NEG_9" || "EUROPE_DUBLIN" || "EUROPE_LONDON" || "EUROPE_PARIS" || "EUROPE_STOCKHOLM" || "EUROPE_ZURICH" || "ISRAEL" || "MEXICO_GENERAL" || "MST7MDT" || "PACIFIC_AUCKLAND" || "US_CENTRAL" || "US_EASTERN" || "US_MOUNTAIN" || "US_PACIFIC",
 * //         enabled: true || false,
 * //         schedule: "STRING_VALUE",
 * //       },
 * //       status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED", // required
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //     amazonQProperties: { // AmazonQPropertiesOutput
 * //       isEnabled: true || false, // required
 * //       profileArn: "STRING_VALUE",
 * //       authMode: "STRING_VALUE",
 * //     },
 * //     mlflowProperties: { // MlflowPropertiesOutput
 * //       trackingServerArn: "STRING_VALUE",
 * //     },
 * //     workflowsMwaaProperties: { // WorkflowsMwaaPropertiesOutput
 * //       mwaaEnvironmentName: "STRING_VALUE",
 * //     },
 * //     workflowsServerlessProperties: {},
 * //     lakehouseProperties: { // LakehousePropertiesOutput
 * //       glueLineageSyncEnabled: true || false,
 * //     },
 * //     vpcProperties: { // VpcPropertiesOutput
 * //       vpcId: "STRING_VALUE", // required
 * //       subnetIds: [ // VpcConnectionSubnetIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "CREATING" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED" || "READY" || "UPDATING" || "UPDATE_FAILED" || "DELETED", // required
 * //       securityGroupId: "STRING_VALUE",
 * //       glueConnectionNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   type: "ATHENA" || "BIGQUERY" || "DATABRICKS" || "DOCUMENTDB" || "DYNAMODB" || "HYPERPOD" || "IAM" || "MYSQL" || "OPENSEARCH" || "ORACLE" || "POSTGRESQL" || "REDSHIFT" || "S3" || "SAPHANA" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "VERTICA" || "WORKFLOWS_MWAA" || "AMAZON_Q" || "MLFLOW" || "VPC", // required
 * //   scope: "DOMAIN" || "PROJECT",
 * // };
 *
 * ```
 *
 * @param GetConnectionCommandInput - {@link GetConnectionCommandInput}
 * @returns {@link GetConnectionCommandOutput}
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class GetConnectionCommand extends command<GetConnectionCommandInput, GetConnectionCommandOutput>(
  _ep0,
  _mw0,
  "GetConnection",
  GetConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionInput;
      output: GetConnectionOutput;
    };
    sdk: {
      input: GetConnectionCommandInput;
      output: GetConnectionCommandOutput;
    };
  };
}
