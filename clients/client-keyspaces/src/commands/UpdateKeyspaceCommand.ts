// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateKeyspaceRequest, UpdateKeyspaceResponse } from "../models/models_0";
import { UpdateKeyspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateKeyspaceCommand}.
 */
export interface UpdateKeyspaceCommandInput extends UpdateKeyspaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyspaceCommand}.
 */
export interface UpdateKeyspaceCommandOutput extends UpdateKeyspaceResponse, __MetadataBearer {}

/**
 * Adds a new Amazon Web Services Region to the keyspace. You can add a new Region to a keyspace that is either a single or a multi-Region keyspace. Amazon Keyspaces is going to replicate all tables in the keyspace to the new Region. To successfully replicate all tables to the new Region, they must use client-side timestamps for conflict resolution. To enable client-side timestamps, specify `clientSideTimestamps.status = enabled` when invoking the API. For more information about client-side timestamps, see [Client-side timestamps in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * To add a Region to a keyspace using the `UpdateKeyspace` API, the IAM principal needs permissions for the following IAM actions:
 *
 * - `cassandra:Alter`
 * - `cassandra:AlterMultiRegionResource`
 * - `cassandra:Create`
 * - `cassandra:CreateMultiRegionResource`
 * - `cassandra:Select`
 * - `cassandra:SelectMultiRegionResource`
 * - `cassandra:Modify`
 * - `cassandra:ModifyMultiRegionResource`
 *
 * If the keyspace contains a table that is configured in provisioned mode with auto scaling enabled, the following additional IAM actions need to be allowed.
 *
 * - `application-autoscaling:RegisterScalableTarget`
 * - `application-autoscaling:DeregisterScalableTarget`
 * - `application-autoscaling:DescribeScalableTargets`
 * - `application-autoscaling:PutScalingPolicy`
 * - `application-autoscaling:DescribeScalingPolicies`
 *
 * To use the `UpdateKeyspace` API, the IAM principal also needs permissions to create a service-linked role with the following elements:
 *
 * - `iam:CreateServiceLinkedRole` - The **action** the principal can perform.
 * - `arn:aws:iam::*:role/aws-service-role/replication.cassandra.amazonaws.com/AWSServiceRoleForKeyspacesReplication` - The **resource** that the action can be performed on.
 * - `iam:AWSServiceName: replication.cassandra.amazonaws.com` - The only Amazon Web Services service that this role can be attached to is Amazon Keyspaces.
 *
 * For more information, see [Configure the IAM permissions required to add an Amazon Web Services Region to a keyspace](https://docs.aws.amazon.com/keyspaces/latest/devguide/howitworks_replication_permissions_addReplica.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, UpdateKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, UpdateKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // UpdateKeyspaceRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   replicationSpecification: { // ReplicationSpecification
 *     replicationStrategy: "STRING_VALUE", // required
 *     regionList: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientSideTimestamps: { // ClientSideTimestamps
 *     status: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateKeyspaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyspaceResponse
 * //   resourceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateKeyspaceCommandInput - {@link UpdateKeyspaceCommandInput}
 * @returns {@link UpdateKeyspaceCommandOutput}
 * @see {@link UpdateKeyspaceCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyspaceCommandOutput} for command's `response` shape.
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
export class UpdateKeyspaceCommand extends command<UpdateKeyspaceCommandInput, UpdateKeyspaceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateKeyspace",
  UpdateKeyspace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKeyspaceRequest;
      output: UpdateKeyspaceResponse;
    };
    sdk: {
      input: UpdateKeyspaceCommandInput;
      output: UpdateKeyspaceCommandOutput;
    };
  };
}
