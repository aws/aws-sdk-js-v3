// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBrokerRequest, UpdateBrokerResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { UpdateBroker } from "../schemas/schemas_5_Broker";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrokerCommand}.
 */
export interface UpdateBrokerCommandInput extends UpdateBrokerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrokerCommand}.
 */
export interface UpdateBrokerCommandOutput extends UpdateBrokerResponse, __MetadataBearer {}

/**
 * <p>Adds a pending configuration change to a broker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, UpdateBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, UpdateBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // UpdateBrokerRequest
 *   AuthenticationStrategy: "SIMPLE" || "LDAP" || "CONFIG_MANAGED",
 *   AutoMinorVersionUpgrade: true || false,
 *   BrokerId: "STRING_VALUE", // required
 *   Configuration: { // ConfigurationId
 *     Id: "STRING_VALUE", // required
 *     Revision: Number("int"),
 *   },
 *   EngineVersion: "STRING_VALUE",
 *   HostInstanceType: "STRING_VALUE",
 *   LdapServerMetadata: { // LdapServerMetadataInput
 *     Hosts: [ // __listOf__string // required
 *       "STRING_VALUE",
 *     ],
 *     RoleBase: "STRING_VALUE", // required
 *     RoleName: "STRING_VALUE",
 *     RoleSearchMatching: "STRING_VALUE", // required
 *     RoleSearchSubtree: true || false,
 *     ServiceAccountPassword: "STRING_VALUE", // required
 *     ServiceAccountUsername: "STRING_VALUE", // required
 *     UserBase: "STRING_VALUE", // required
 *     UserRoleName: "STRING_VALUE",
 *     UserSearchMatching: "STRING_VALUE", // required
 *     UserSearchSubtree: true || false,
 *   },
 *   Logs: { // Logs
 *     Audit: true || false,
 *     General: true || false,
 *   },
 *   MaintenanceWindowStartTime: { // WeeklyStartTime
 *     DayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 *     TimeOfDay: "STRING_VALUE", // required
 *     TimeZone: "STRING_VALUE",
 *   },
 *   SecurityGroups: [
 *     "STRING_VALUE",
 *   ],
 *   DataReplicationMode: "NONE" || "CRDR",
 * };
 * const command = new UpdateBrokerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrokerResponse
 * //   AuthenticationStrategy: "SIMPLE" || "LDAP" || "CONFIG_MANAGED",
 * //   AutoMinorVersionUpgrade: true || false,
 * //   BrokerId: "STRING_VALUE",
 * //   Configuration: { // ConfigurationId
 * //     Id: "STRING_VALUE", // required
 * //     Revision: Number("int"),
 * //   },
 * //   EngineVersion: "STRING_VALUE",
 * //   HostInstanceType: "STRING_VALUE",
 * //   LdapServerMetadata: { // LdapServerMetadataOutput
 * //     Hosts: [ // __listOf__string // required
 * //       "STRING_VALUE",
 * //     ],
 * //     RoleBase: "STRING_VALUE", // required
 * //     RoleName: "STRING_VALUE",
 * //     RoleSearchMatching: "STRING_VALUE", // required
 * //     RoleSearchSubtree: true || false,
 * //     ServiceAccountUsername: "STRING_VALUE", // required
 * //     UserBase: "STRING_VALUE", // required
 * //     UserRoleName: "STRING_VALUE",
 * //     UserSearchMatching: "STRING_VALUE", // required
 * //     UserSearchSubtree: true || false,
 * //   },
 * //   Logs: { // Logs
 * //     Audit: true || false,
 * //     General: true || false,
 * //   },
 * //   MaintenanceWindowStartTime: { // WeeklyStartTime
 * //     DayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 * //     TimeOfDay: "STRING_VALUE", // required
 * //     TimeZone: "STRING_VALUE",
 * //   },
 * //   SecurityGroups: [
 * //     "STRING_VALUE",
 * //   ],
 * //   DataReplicationMetadata: { // DataReplicationMetadataOutput
 * //     DataReplicationCounterpart: { // DataReplicationCounterpart
 * //       BrokerId: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE", // required
 * //     },
 * //     DataReplicationRole: "STRING_VALUE", // required
 * //   },
 * //   DataReplicationMode: "NONE" || "CRDR",
 * //   PendingDataReplicationMetadata: {
 * //     DataReplicationCounterpart: {
 * //       BrokerId: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE", // required
 * //     },
 * //     DataReplicationRole: "STRING_VALUE", // required
 * //   },
 * //   PendingDataReplicationMode: "NONE" || "CRDR",
 * // };
 *
 * ```
 *
 * @param UpdateBrokerCommandInput - {@link UpdateBrokerCommandInput}
 * @returns {@link UpdateBrokerCommandOutput}
 * @see {@link UpdateBrokerCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 *
 * @public
 */
export class UpdateBrokerCommand extends $Command
  .classBuilder<
    UpdateBrokerCommandInput,
    UpdateBrokerCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mq", "UpdateBroker", {})
  .n("MqClient", "UpdateBrokerCommand")
  .sc(UpdateBroker)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrokerRequest;
      output: UpdateBrokerResponse;
    };
    sdk: {
      input: UpdateBrokerCommandInput;
      output: UpdateBrokerCommandOutput;
    };
  };
}
