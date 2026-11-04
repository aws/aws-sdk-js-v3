// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPlatformApplicationsInput, ListPlatformApplicationsResponse } from "../models/models_0";
import { ListPlatformApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the platform application objects for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). The results for `ListPlatformApplications` are paginated and return a limited list of applications, up to 100. If additional records are available after the first page results, then a NextToken string will be returned. To receive the next page, you call `ListPlatformApplications` using the NextToken string received from the previous call. When there are no more records to return, `NextToken` will be null. For more information, see [Using Amazon SNS Mobile Push Notifications](https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html).
 *
 * This action is throttled at 15 transactions per second (TPS).
 *
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
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class ListPlatformApplicationsCommand extends command<ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "ListPlatformApplications",
  ListPlatformApplications$
) {
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
