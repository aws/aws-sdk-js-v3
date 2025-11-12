// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionResult,
} from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveSourceIdentifierFromSubscription } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveSourceIdentifierFromSubscriptionCommand}.
 */
export interface RemoveSourceIdentifierFromSubscriptionCommandInput
  extends RemoveSourceIdentifierFromSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link RemoveSourceIdentifierFromSubscriptionCommand}.
 */
export interface RemoveSourceIdentifierFromSubscriptionCommandOutput
  extends RemoveSourceIdentifierFromSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Removes a source identifier from an existing RDS event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // RemoveSourceIdentifierFromSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // RemoveSourceIdentifierFromSubscriptionResult
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
 * //     EventSubscriptionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RemoveSourceIdentifierFromSubscriptionCommandInput - {@link RemoveSourceIdentifierFromSubscriptionCommandInput}
 * @returns {@link RemoveSourceIdentifierFromSubscriptionCommandOutput}
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandInput} for command's `input` shape.
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The requested source could not be found.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To remove a source identifier from a subscription
 * ```javascript
 * // The following example removes the specified source identifier from an existing subscription.
 * const input = {
 *   SourceIdentifier: "test-instance-repl",
 *   SubscriptionName: "my-instance-events"
 * };
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EventSubscription: {
 *     CustSubscriptionId: "my-instance-events",
 *     CustomerAwsId: "123456789012",
 *     Enabled: false,
 *     EventCategoriesList: [
 *       "backup",
 *       "recovery"
 *     ],
 *     EventSubscriptionArn: "arn:aws:rds:us-east-1:123456789012:es:my-instance-events",
 *     SnsTopicArn: "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *     SourceIdsList: [
 *       "test-instance"
 *     ],
 *     SourceType: "db-instance",
 *     Status: "modifying",
 *     SubscriptionCreationTime: "Tue Jul 31 23:22:01 UTC 2018"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RemoveSourceIdentifierFromSubscriptionCommand extends $Command
  .classBuilder<
    RemoveSourceIdentifierFromSubscriptionCommandInput,
    RemoveSourceIdentifierFromSubscriptionCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "RemoveSourceIdentifierFromSubscription", {})
  .n("RDSClient", "RemoveSourceIdentifierFromSubscriptionCommand")
  .sc(RemoveSourceIdentifierFromSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveSourceIdentifierFromSubscriptionMessage;
      output: RemoveSourceIdentifierFromSubscriptionResult;
    };
    sdk: {
      input: RemoveSourceIdentifierFromSubscriptionCommandInput;
      output: RemoveSourceIdentifierFromSubscriptionCommandOutput;
    };
  };
}
