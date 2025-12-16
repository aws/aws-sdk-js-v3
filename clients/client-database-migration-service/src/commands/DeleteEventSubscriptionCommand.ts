// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEventSubscriptionMessage, DeleteEventSubscriptionResponse } from "../models/models_0";
import { DeleteEventSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventSubscriptionCommand}.
 */
export interface DeleteEventSubscriptionCommandInput extends DeleteEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link DeleteEventSubscriptionCommand}.
 */
export interface DeleteEventSubscriptionCommandOutput extends DeleteEventSubscriptionResponse, __MetadataBearer {}

/**
 * <p> Deletes an DMS event subscription. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteEventSubscriptionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteEventSubscriptionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEventSubscriptionResponse
 * //   EventSubscription: { // EventSubscription
 * //     CustomerAwsId: "STRING_VALUE",
 * //     CustSubscriptionId: "STRING_VALUE",
 * //     SnsTopicArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     SubscriptionCreationTime: "STRING_VALUE",
 * //     SourceType: "STRING_VALUE",
 * //     SourceIdsList: [ // SourceIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     EventCategoriesList: [ // EventCategoriesList
 * //       "STRING_VALUE",
 * //     ],
 * //     Enabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEventSubscriptionCommandInput - {@link DeleteEventSubscriptionCommandInput}
 * @returns {@link DeleteEventSubscriptionCommandOutput}
 * @see {@link DeleteEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DeleteEventSubscriptionCommand extends $Command
  .classBuilder<
    DeleteEventSubscriptionCommandInput,
    DeleteEventSubscriptionCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DeleteEventSubscription", {})
  .n("DatabaseMigrationServiceClient", "DeleteEventSubscriptionCommand")
  .sc(DeleteEventSubscription$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventSubscriptionMessage;
      output: DeleteEventSubscriptionResponse;
    };
    sdk: {
      input: DeleteEventSubscriptionCommandInput;
      output: DeleteEventSubscriptionCommandOutput;
    };
  };
}
