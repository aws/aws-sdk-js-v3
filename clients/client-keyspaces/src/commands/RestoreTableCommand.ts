// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreTableRequest, RestoreTableResponse } from "../models/models_0";
import { RestoreTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreTableCommand}.
 */
export interface RestoreTableCommandInput extends RestoreTableRequest {}
/**
 * @public
 *
 * The output of {@link RestoreTableCommand}.
 */
export interface RestoreTableCommandOutput extends RestoreTableResponse, __MetadataBearer {}

/**
 * Restores the table to the specified point in time within the `earliest_restorable_timestamp` and the current time. For more information about restore points, see [Time window for PITR continuous backups](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window) in the *Amazon Keyspaces Developer Guide*.
 *
 * Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.
 *
 * When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp `(day:hour:minute:second)` to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.
 *
 * In addition to the table's schema, data, and TTL settings, `RestoreTable` restores the capacity mode, auto scaling settings, encryption settings, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.
 *
 * You can also overwrite these settings during restore:
 *
 * - Read/write capacity mode
 * - Provisioned throughput capacity units
 * - Auto scaling settings
 * - Point-in-time (PITR) settings
 * - Tags
 *
 * For more information, see [PITR restore settings](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings) in the *Amazon Keyspaces Developer Guide*.
 *
 * Note that the following settings are not restored, and you must configure them manually for the new table:
 *
 * - Identity and Access Management (IAM) policies
 * - Amazon CloudWatch metrics and alarms
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, RestoreTableCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, RestoreTableCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // RestoreTableRequest
 *   sourceKeyspaceName: "STRING_VALUE", // required
 *   sourceTableName: "STRING_VALUE", // required
 *   targetKeyspaceName: "STRING_VALUE", // required
 *   targetTableName: "STRING_VALUE", // required
 *   restoreTimestamp: new Date("TIMESTAMP"),
 *   capacitySpecificationOverride: { // CapacitySpecification
 *     throughputMode: "STRING_VALUE", // required
 *     readCapacityUnits: Number("long"),
 *     writeCapacityUnits: Number("long"),
 *   },
 *   encryptionSpecificationOverride: { // EncryptionSpecification
 *     type: "STRING_VALUE", // required
 *     kmsKeyIdentifier: "STRING_VALUE",
 *   },
 *   pointInTimeRecoveryOverride: { // PointInTimeRecovery
 *     status: "STRING_VALUE", // required
 *   },
 *   tagsOverride: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
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
 * };
 * const command = new RestoreTableCommand(input);
 * const response = await client.send(command);
 * // { // RestoreTableResponse
 * //   restoredTableARN: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RestoreTableCommandInput - {@link RestoreTableCommandInput}
 * @returns {@link RestoreTableCommandOutput}
 * @see {@link RestoreTableCommandInput} for command's `input` shape.
 * @see {@link RestoreTableCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to perform an action and the same or a different action is already in progress, or if you try to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Amazon Keyspaces was unable to fully process this request because of an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly, or its status might not be `ACTIVE`.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The operation exceeded the service quota for this resource. For more information on service quotas, see [Quotas](https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation failed due to an invalid or malformed request.
 *
 * @throws {@link KeyspacesServiceException}
 *
 * Base exception class for all service exceptions from Keyspaces service.
 *
 * @public
 */
export class RestoreTableCommand extends command<RestoreTableCommandInput, RestoreTableCommandOutput>(
  _ep0,
  _mw0,
  "RestoreTable",
  RestoreTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreTableRequest;
      output: RestoreTableResponse;
    };
    sdk: {
      input: RestoreTableCommandInput;
      output: RestoreTableCommandOutput;
    };
  };
}
