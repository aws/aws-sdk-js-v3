// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { UpdateTableRequest, UpdateTableResponse } from "../models/models_0";
import { de_UpdateTableCommand, se_UpdateTableCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandInput extends UpdateTableRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandOutput extends UpdateTableResponse, __MetadataBearer {}

/**
 * <p>Adds new columns to the table or updates one of the table's settings, for example
 *          capacity mode, auto scaling, encryption, point-in-time recovery, or ttl settings.
 *       Note that you can only update one specific table setting per update operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, UpdateTableCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, UpdateTableCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // UpdateTableRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   tableName: "STRING_VALUE", // required
 *   addColumns: [ // ColumnDefinitionList
 *     { // ColumnDefinition
 *       name: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *     },
 *   ],
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
 * };
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTableResponse
 * //   resourceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateTableCommandInput - {@link UpdateTableCommandInput}
 * @returns {@link UpdateTableCommandOutput}
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to
 *          perform an action and the same or a different action is already
 *          in progress, or if you try to create a resource that already exists. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly,
 *          or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource.  For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
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
export class UpdateTableCommand extends $Command
  .classBuilder<
    UpdateTableCommandInput,
    UpdateTableCommandOutput,
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
  .s("KeyspacesService", "UpdateTable", {})
  .n("KeyspacesClient", "UpdateTableCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTableCommand)
  .de(de_UpdateTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTableRequest;
      output: UpdateTableResponse;
    };
    sdk: {
      input: UpdateTableCommandInput;
      output: UpdateTableCommandOutput;
    };
  };
}
