// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import type { GetTableRequest, GetTableResponse } from "../models/models_0";
import { GetTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableCommand}.
 */
export interface GetTableCommandInput extends GetTableRequest {}
/**
 * @public
 *
 * The output of {@link GetTableCommand}.
 */
export interface GetTableCommandOutput extends GetTableResponse, __MetadataBearer {}

/**
 * <p>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.</p> <p>To read table metadata using <code>GetTable</code>, the IAM principal needs <code>Select</code> action permissions for the table and the system keyspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, GetTableCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, GetTableCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // GetTableRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   tableName: "STRING_VALUE", // required
 * };
 * const command = new GetTableCommand(input);
 * const response = await client.send(command);
 * // { // GetTableResponse
 * //   keyspaceName: "STRING_VALUE", // required
 * //   tableName: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   creationTimestamp: new Date("TIMESTAMP"),
 * //   status: "STRING_VALUE",
 * //   schemaDefinition: { // SchemaDefinition
 * //     allColumns: [ // ColumnDefinitionList // required
 * //       { // ColumnDefinition
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     partitionKeys: [ // PartitionKeyList // required
 * //       { // PartitionKey
 * //         name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     clusteringKeys: [ // ClusteringKeyList
 * //       { // ClusteringKey
 * //         name: "STRING_VALUE", // required
 * //         orderBy: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     staticColumns: [ // StaticColumnList
 * //       { // StaticColumn
 * //         name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   capacitySpecification: { // CapacitySpecificationSummary
 * //     throughputMode: "STRING_VALUE", // required
 * //     readCapacityUnits: Number("long"),
 * //     writeCapacityUnits: Number("long"),
 * //     lastUpdateToPayPerRequestTimestamp: new Date("TIMESTAMP"),
 * //   },
 * //   encryptionSpecification: { // EncryptionSpecification
 * //     type: "STRING_VALUE", // required
 * //     kmsKeyIdentifier: "STRING_VALUE",
 * //   },
 * //   pointInTimeRecovery: { // PointInTimeRecoverySummary
 * //     status: "STRING_VALUE", // required
 * //     earliestRestorableTimestamp: new Date("TIMESTAMP"),
 * //   },
 * //   ttl: { // TimeToLive
 * //     status: "STRING_VALUE", // required
 * //   },
 * //   defaultTimeToLive: Number("int"),
 * //   comment: { // Comment
 * //     message: "STRING_VALUE", // required
 * //   },
 * //   clientSideTimestamps: { // ClientSideTimestamps
 * //     status: "STRING_VALUE", // required
 * //   },
 * //   replicaSpecifications: [ // ReplicaSpecificationSummaryList
 * //     { // ReplicaSpecificationSummary
 * //       region: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       capacitySpecification: {
 * //         throughputMode: "STRING_VALUE", // required
 * //         readCapacityUnits: Number("long"),
 * //         writeCapacityUnits: Number("long"),
 * //         lastUpdateToPayPerRequestTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   latestStreamArn: "STRING_VALUE",
 * //   cdcSpecification: { // CdcSpecificationSummary
 * //     status: "STRING_VALUE", // required
 * //     viewType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableCommandInput - {@link GetTableCommandInput}
 * @returns {@link GetTableCommandOutput}
 * @see {@link GetTableCommandInput} for command's `input` shape.
 * @see {@link GetTableCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this action. </p>
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
export class GetTableCommand extends $Command
  .classBuilder<
    GetTableCommandInput,
    GetTableCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesService", "GetTable", {})
  .n("KeyspacesClient", "GetTableCommand")
  .sc(GetTable$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableRequest;
      output: GetTableResponse;
    };
    sdk: {
      input: GetTableCommandInput;
      output: GetTableCommandOutput;
    };
  };
}
