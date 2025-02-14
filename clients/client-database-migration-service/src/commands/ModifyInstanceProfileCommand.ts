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
import { ModifyInstanceProfileMessage, ModifyInstanceProfileResponse } from "../models/models_1";
import { de_ModifyInstanceProfileCommand, se_ModifyInstanceProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *          <note>
 *             <p>All migration projects associated with the instance profile must be deleted or
 *             modified before you can modify the instance profile.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyInstanceProfileCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyInstanceProfileCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
 * @public
 * @example Modify Instance Profile
 * ```javascript
 * // Modifies the specified instance profile using the provided parameters.
 * const input = {
 *   "AvailabilityZone": "",
 *   "Description": "",
 *   "InstanceProfileIdentifier": "",
 *   "InstanceProfileName": "",
 *   "KmsKeyArn": "",
 *   "NetworkType": "",
 *   "PubliclyAccessible": true,
 *   "SubnetGroupIdentifier": "",
 *   "VpcSecurityGroups": []
 * };
 * const command = new ModifyInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceProfile": {
 *     "InstanceProfileArn": "arn:aws:dms:us-east-1:012345678901:instance-profile:my-instance-profile",
 *     "InstanceProfileCreationTime": "2022-12-16T09:44:43.543246Z",
 *     "InstanceProfileName": "my-instance-profile",
 *     "KmsKeyArn": "arn:aws:kms:us-east-1:012345678901:key/01234567-89ab-cdef-0123-456789abcdef",
 *     "PubliclyAccessible": true,
 *     "SubnetGroupIdentifier": "public-subnets",
 *     "VpcIdentifier": "vpc-0a1b2c3d4e5f6g7h8",
 *     "VpcSecurityGroups": [
 *       "sg-0123456"
 *     ]
 *   }
 * }
 * *\/
 * // example id: modify-instance-profile-1689724223329
 * ```
 *
 */
export class ModifyInstanceProfileCommand extends $Command
  .classBuilder<
    ModifyInstanceProfileCommandInput,
    ModifyInstanceProfileCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "ModifyInstanceProfile", {})
  .n("DatabaseMigrationServiceClient", "ModifyInstanceProfileCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceProfileCommand)
  .de(de_ModifyInstanceProfileCommand)
  .build() {
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
