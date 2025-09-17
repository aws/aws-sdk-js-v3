// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPlatformApplicationsInput, ListPlatformApplicationsResponse } from "../models/models_0";
import { de_ListPlatformApplicationsCommand, se_ListPlatformApplicationsCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlatformApplicationsCommand}.
 */
export interface ListPlatformApplicationsCommandInput extends ListPlatformApplicationsInput {}
/**
 * @public
 *
 * The output of {@link ListPlatformApplicationsCommand}.
 */
export interface ListPlatformApplicationsCommandOutput extends ListPlatformApplicationsResponse, __MetadataBearer {}

/**
 * <p>Lists the platform application objects for the supported push notification services,
 *             such as APNS and GCM (Firebase Cloud Messaging). The results for
 *                 <code>ListPlatformApplications</code> are paginated and return a limited list of
 *             applications, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListPlatformApplications</code> using the NextToken string received from the
 *             previous call. When there are no more records to return, <code>NextToken</code> will be
 *             null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *          <p>This action is throttled at 15 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPlatformApplicationsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPlatformApplicationsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // ListPlatformApplicationsInput
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPlatformApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlatformApplicationsResponse
 * //   PlatformApplications: [ // ListOfPlatformApplications
 * //     { // PlatformApplication
 * //       PlatformApplicationArn: "STRING_VALUE",
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
 * @param ListPlatformApplicationsCommandInput - {@link ListPlatformApplicationsCommandInput}
 * @returns {@link ListPlatformApplicationsCommandOutput}
 * @see {@link ListPlatformApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListPlatformApplicationsCommandOutput} for command's `response` shape.
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
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class ListPlatformApplicationsCommand extends $Command
  .classBuilder<
    ListPlatformApplicationsCommandInput,
    ListPlatformApplicationsCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "ListPlatformApplications", {})
  .n("SNSClient", "ListPlatformApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_ListPlatformApplicationsCommand)
  .de(de_ListPlatformApplicationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlatformApplicationsInput;
      output: ListPlatformApplicationsResponse;
    };
    sdk: {
      input: ListPlatformApplicationsCommandInput;
      output: ListPlatformApplicationsCommandOutput;
    };
  };
}
