// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionResult,
} from "../models/models_0";
import {
  de_RemoveSourceIdentifierFromSubscriptionCommand,
  se_RemoveSourceIdentifierFromSubscriptionCommand,
} from "../protocols/Aws_query";

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
 * <p>Removes a source identifier from an existing Amazon DocumentDB event notification
 *             subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, RemoveSourceIdentifierFromSubscriptionCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, RemoveSourceIdentifierFromSubscriptionCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The requested source could not be found. </p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class RemoveSourceIdentifierFromSubscriptionCommand extends $Command
  .classBuilder<
    RemoveSourceIdentifierFromSubscriptionCommandInput,
    RemoveSourceIdentifierFromSubscriptionCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "RemoveSourceIdentifierFromSubscription", {})
  .n("DocDBClient", "RemoveSourceIdentifierFromSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_RemoveSourceIdentifierFromSubscriptionCommand)
  .de(de_RemoveSourceIdentifierFromSubscriptionCommand)
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
