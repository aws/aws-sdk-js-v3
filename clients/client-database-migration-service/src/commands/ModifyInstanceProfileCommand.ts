// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyInstanceProfileMessage, ModifyInstanceProfileResponse } from "../models/models_0";
import { ModifyInstanceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyInstanceProfileCommand}.
 */
export interface ModifyInstanceProfileCommandInput extends ModifyInstanceProfileMessage {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceProfileCommand}.
 */
export interface ModifyInstanceProfileCommandOutput extends ModifyInstanceProfileResponse, __MetadataBearer {}

/**
 * <p>Modifies the specified instance profile using the provided parameters.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:UpdateInstanceProfile</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 *          <note>
 *             <p>All migration projects associated with the instance profile must be deleted or
 *             modified before you can modify the instance profile.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyInstanceProfileCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyInstanceProfileCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyInstanceProfileMessage
 *   InstanceProfileIdentifier: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   KmsKeyArn: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   NetworkType: "STRING_VALUE",
 *   InstanceProfileName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SubnetGroupIdentifier: "STRING_VALUE",
 *   VpcSecurityGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceProfileResponse
 * //   InstanceProfile: { // InstanceProfile
 * //     InstanceProfileArn: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //     PubliclyAccessible: true || false,
 * //     NetworkType: "STRING_VALUE",
 * //     InstanceProfileName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     InstanceProfileCreationTime: new Date("TIMESTAMP"),
 * //     SubnetGroupIdentifier: "STRING_VALUE",
 * //     VpcSecurityGroups: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyInstanceProfileCommandInput - {@link ModifyInstanceProfileCommandInput}
 * @returns {@link ModifyInstanceProfileCommandOutput}
 * @see {@link ModifyInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *  <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 *
 * @throws {@link S3ResourceNotFoundFault} (client fault)
 *  <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Modify an instance profile
 * ```javascript
 * // The following example updates the description and network type of an instance profile.
 * const input = {
 *   Description: "Updated instance profile description",
 *   InstanceProfileIdentifier: "arn:aws:dms:us-east-1:111122223333:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   NetworkType: "DUAL"
 * };
 * const command = new ModifyInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceProfile: {
 *     Description: "Updated instance profile description",
 *     InstanceProfileArn: "arn:aws:dms:us-east-1:111122223333:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *     InstanceProfileCreationTime: "2026-01-09T12:30:00.000000Z",
 *     InstanceProfileName: "example-instance-profile",
 *     KmsKeyArn: "arn:aws:kms:us-east-1:111122223333:key/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     NetworkType: "DUAL",
 *     PubliclyAccessible: false,
 *     SubnetGroupIdentifier: "example-replication-subnet-group",
 *     VpcSecurityGroups: [
 *       "sg-0123456789abcdef0"
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyInstanceProfileCommand extends command<ModifyInstanceProfileCommandInput, ModifyInstanceProfileCommandOutput>(
  _ep0,
  _mw0,
  "ModifyInstanceProfile",
  ModifyInstanceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceProfileMessage;
      output: ModifyInstanceProfileResponse;
    };
    sdk: {
      input: ModifyInstanceProfileCommandInput;
      output: ModifyInstanceProfileCommandOutput;
    };
  };
}
