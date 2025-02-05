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
import { UpdateSubscriptionsToEventBridgeMessage, UpdateSubscriptionsToEventBridgeResponse } from "../models/models_1";
import {
  de_UpdateSubscriptionsToEventBridgeCommand,
  se_UpdateSubscriptionsToEventBridgeCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSubscriptionsToEventBridgeCommand}.
 */
export interface UpdateSubscriptionsToEventBridgeCommandInput extends UpdateSubscriptionsToEventBridgeMessage {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriptionsToEventBridgeCommand}.
 */
export interface UpdateSubscriptionsToEventBridgeCommandOutput
  extends UpdateSubscriptionsToEventBridgeResponse,
    __MetadataBearer {}

/**
 * <p>Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules.
 *          By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.5 or higher.
 *          If any replication instances are from versions earlier than 3.4.5, the operation raises an error and tells you
 *          to upgrade these instances to version 3.4.5 or higher. To enable migration regardless of version, set the <code>Force</code>
 *          option to true. However, if you don't upgrade instances earlier than version 3.4.5, some types of events might not be
 *          available when you use Amazon EventBridge.</p>
 *          <p>To call this operation, make sure that you have certain permissions added to your user account.
 *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html#CHAP_Events-migrate-to-eventbridge">Migrating event subscriptions to Amazon EventBridge</a>
 *             in the <i>Amazon Web Services Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, UpdateSubscriptionsToEventBridgeCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, UpdateSubscriptionsToEventBridgeCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // UpdateSubscriptionsToEventBridgeMessage
 *   ForceMove: true || false,
 * };
 * const command = new UpdateSubscriptionsToEventBridgeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubscriptionsToEventBridgeResponse
 * //   Result: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSubscriptionsToEventBridgeCommandInput - {@link UpdateSubscriptionsToEventBridgeCommandInput}
 * @returns {@link UpdateSubscriptionsToEventBridgeCommandOutput}
 * @see {@link UpdateSubscriptionsToEventBridgeCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionsToEventBridgeCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 */
export class UpdateSubscriptionsToEventBridgeCommand extends $Command
  .classBuilder<
    UpdateSubscriptionsToEventBridgeCommandInput,
    UpdateSubscriptionsToEventBridgeCommandOutput,
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
  .s("AmazonDMSv20160101", "UpdateSubscriptionsToEventBridge", {})
  .n("DatabaseMigrationServiceClient", "UpdateSubscriptionsToEventBridgeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSubscriptionsToEventBridgeCommand)
  .de(de_UpdateSubscriptionsToEventBridgeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubscriptionsToEventBridgeMessage;
      output: UpdateSubscriptionsToEventBridgeResponse;
    };
    sdk: {
      input: UpdateSubscriptionsToEventBridgeCommandInput;
      output: UpdateSubscriptionsToEventBridgeCommandOutput;
    };
  };
}
