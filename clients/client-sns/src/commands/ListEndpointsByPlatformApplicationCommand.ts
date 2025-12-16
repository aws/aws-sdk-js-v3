// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListEndpointsByPlatformApplicationInput,
  ListEndpointsByPlatformApplicationResponse,
} from "../models/models_0";
import { ListEndpointsByPlatformApplication$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEndpointsByPlatformApplicationCommand}.
 */
export interface ListEndpointsByPlatformApplicationCommandInput extends ListEndpointsByPlatformApplicationInput {}
/**
 * @public
 *
 * The output of {@link ListEndpointsByPlatformApplicationCommand}.
 */
export interface ListEndpointsByPlatformApplicationCommandOutput
  extends ListEndpointsByPlatformApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the endpoints and endpoint attributes for devices in a supported push
 *             notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for
 *                 <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited
 *             list of endpoints, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListEndpointsByPlatformApplication</code> again using the NextToken string
 *             received from the previous call. When there are no more records to return, NextToken
 *             will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *          <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListEndpointsByPlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListEndpointsByPlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // ListEndpointsByPlatformApplicationInput
 *   PlatformApplicationArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEndpointsByPlatformApplicationCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointsByPlatformApplicationResponse
 * //   Endpoints: [ // ListOfEndpoints
 * //     { // Endpoint
 * //       EndpointArn: "STRING_VALUE",
 * //       Attributes: { // MapStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointsByPlatformApplicationCommandInput - {@link ListEndpointsByPlatformApplicationCommandInput}
 * @returns {@link ListEndpointsByPlatformApplicationCommandOutput}
 * @see {@link ListEndpointsByPlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsByPlatformApplicationCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class ListEndpointsByPlatformApplicationCommand extends $Command
  .classBuilder<
    ListEndpointsByPlatformApplicationCommandInput,
    ListEndpointsByPlatformApplicationCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "ListEndpointsByPlatformApplication", {})
  .n("SNSClient", "ListEndpointsByPlatformApplicationCommand")
  .sc(ListEndpointsByPlatformApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEndpointsByPlatformApplicationInput;
      output: ListEndpointsByPlatformApplicationResponse;
    };
    sdk: {
      input: ListEndpointsByPlatformApplicationCommandInput;
      output: ListEndpointsByPlatformApplicationCommandOutput;
    };
  };
}
