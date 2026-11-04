// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOriginationNumbersRequest, ListOriginationNumbersResult } from "../models/models_0";
import { ListOriginationNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOriginationNumbersCommand}.
 */
export interface ListOriginationNumbersCommandInput extends ListOriginationNumbersRequest {}
/**
 * @public
 *
 * The output of {@link ListOriginationNumbersCommand}.
 */
export interface ListOriginationNumbersCommandOutput extends ListOriginationNumbersResult, __MetadataBearer {}

/**
 * Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata. For more information about origination numbers, see [Origination numbers](https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html) in the *Amazon SNS Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListOriginationNumbersCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListOriginationNumbersCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // ListOriginationNumbersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOriginationNumbersCommand(input);
 * const response = await client.send(command);
 * // { // ListOriginationNumbersResult
 * //   NextToken: "STRING_VALUE",
 * //   PhoneNumbers: [ // PhoneNumberInformationList
 * //     { // PhoneNumberInformation
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       PhoneNumber: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Iso2CountryCode: "STRING_VALUE",
 * //       RouteType: "Transactional" || "Promotional" || "Premium",
 * //       NumberCapabilities: [ // NumberCapabilityList
 * //         "SMS" || "MMS" || "VOICE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOriginationNumbersCommandInput - {@link ListOriginationNumbersCommandInput}
 * @returns {@link ListOriginationNumbersCommandOutput}
 * @see {@link ListOriginationNumbersCommandInput} for command's `input` shape.
 * @see {@link ListOriginationNumbersCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottledException} (client fault)
 *
 * Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that a parameter in the request is invalid.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class ListOriginationNumbersCommand extends command<ListOriginationNumbersCommandInput, ListOriginationNumbersCommandOutput>(
  _ep0,
  _mw0,
  "ListOriginationNumbers",
  ListOriginationNumbers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOriginationNumbersRequest;
      output: ListOriginationNumbersResult;
    };
    sdk: {
      input: ListOriginationNumbersCommandInput;
      output: ListOriginationNumbersCommandOutput;
    };
  };
}
