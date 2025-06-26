// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { CreateTableRequest, CreateTableResponse } from "../models/models_0";
import { de_CreateTableCommand, se_CreateTableCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTableCommand}.
 */
export interface CreateTableCommandInput extends CreateTableRequest {}
/**
 * @public
 *
 * The output of {@link CreateTableCommand}.
 */
export interface CreateTableCommandOutput extends CreateTableResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.</p> <p> <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>. You can monitor the creation status of the new table by using the <code>GetTable</code> operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.tables.html">Create a table</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, CreateTableCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, CreateTableCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // CreateTableRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   tableName: "STRING_VALUE", // required
 *   schemaDefinition: { // SchemaDefinition
 *     allColumns: [ // ColumnDefinitionList // required
 *       { // ColumnDefinition
 *         name: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *       },
 *     ],
 *     partitionKeys: [ // PartitionKeyList // required
 *       { // PartitionKey
 *         name: "STRING_VALUE", // required
 *       },
 *     ],
 *     clusteringKeys: [ // ClusteringKeyList
 *       { // ClusteringKey
 *         name: "STRING_VALUE", // required
 *         orderBy: "STRING_VALUE", // required
 *       },
 *     ],
 *     staticColumns: [ // StaticColumnList
 *       { // StaticColumn
 *         name: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   comment: { // Comment
 *     message: "STRING_VALUE", // required
 *   },
 *   capacitySpecification: { // CapacitySpecification
 *     throughputMode: "STRING_VALUE", // required
 *     readCapacityUnits: Number("long"),
 *     writeCapacityUnits: Number("long"),
 *   },
 *   encryptionSpecification: { // EncryptionSpecification
 *     type: "STRING_VALUE", // required
 *     kmsKeyIdentifier: "STRING_VALUE",
 *   },
 *   pointInTimeRecovery: { // PointInTimeRecovery
 *     status: "STRING_VALUE", // required
 *   },
 *   ttl: { // TimeToLive
 *     status: "STRING_VALUE", // required
 *   },
 *   defaultTimeToLive: Number("int"),
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientSideTimestamps: { // ClientSideTimestamps
 *     status: "STRING_VALUE", // required
 *   },
 *   autoScalingSpecification: { // AutoScalingSpecification
 *     writeCapacityAutoScaling: { // AutoScalingSettings
 *       autoScalingDisabled: true || false,
 *       minimumUnits: Number("long"),
 *       maximumUnits: Number("long"),
 *       scalingPolicy: { // AutoScalingPolicy
 *         targetTrackingScalingPolicyConfiguration: { // TargetTrackingScalingPolicyConfiguration
 *           disableScaleIn: true || false,
 *           scaleInCooldown: Number("int"),
 *           scaleOutCooldown: Number("int"),
 *           targetValue: Number("double"), // required
 *         },
 *       },
 *     },
 *     readCapacityAutoScaling: {
 *       autoScalingDisabled: true || false,
 *       minimumUnits: Number("long"),
 *       maximumUnits: Number("long"),
 *       scalingPolicy: {
 *         targetTrackingScalingPolicyConfiguration: {
 *           disableScaleIn: true || false,
 *           scaleInCooldown: Number("int"),
 *           scaleOutCooldown: Number("int"),
 *           targetValue: Number("double"), // required
 *         },
 *       },
 *     },
 *   },
 *   replicaSpecifications: [ // ReplicaSpecificationList
 *     { // ReplicaSpecification
 *       region: "STRING_VALUE", // required
 *       readCapacityUnits: Number("long"),
 *       readCapacityAutoScaling: {
 *         autoScalingDisabled: true || false,
 *         minimumUnits: Number("long"),
 *         maximumUnits: Number("long"),
 *         scalingPolicy: {
 *           targetTrackingScalingPolicyConfiguration: {
 *             disableScaleIn: true || false,
 *             scaleInCooldown: Number("int"),
 *             scaleOutCooldown: Number("int"),
 *             targetValue: Number("double"), // required
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   cdcSpecification: { // CdcSpecification
 *     status: "STRING_VALUE", // required
 *     viewType: "STRING_VALUE",
 *     tags: [
 *       {
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     propagateTags: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateTableResponse
 * //   resourceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTableCommandInput - {@link CreateTableCommandInput}
 * @returns {@link CreateTableCommandOutput}
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to perform an action and the same or a different action is already in progress, or if you try to create a resource that already exists. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource. For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
 *
 *
 * @public
 */
export class CreateTableCommand extends $Command
  .classBuilder<
    CreateTableCommandInput,
    CreateTableCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KeyspacesService", "CreateTable", {})
  .n("KeyspacesClient", "CreateTableCommand")
  .f(void 0, void 0)
  .ser(se_CreateTableCommand)
  .de(de_CreateTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTableRequest;
      output: CreateTableResponse;
    };
    sdk: {
      input: CreateTableCommandInput;
      output: CreateTableCommandOutput;
    };
  };
}
