// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPartnerAccountsRequest, ListPartnerAccountsResponse } from "../models/models_0";
import { ListPartnerAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPartnerAccountsCommand}.
 */
export interface ListPartnerAccountsCommandInput extends ListPartnerAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartnerAccountsCommand}.
 */
export interface ListPartnerAccountsCommandOutput extends ListPartnerAccountsResponse, __MetadataBearer {}

/**
 * Lists the partner accounts associated with your AWS account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListPartnerAccountsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListPartnerAccountsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListPartnerAccountsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPartnerAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartnerAccountsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Sidewalk: [ // SidewalkAccountList
 * //     { // SidewalkAccountInfoWithFingerprint
 * //       AmazonId: "STRING_VALUE",
 * //       Fingerprint: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPartnerAccountsCommandInput - {@link ListPartnerAccountsCommandInput}
 * @returns {@link ListPartnerAccountsCommandOutput}
 * @see {@link ListPartnerAccountsCommandInput} for command's `input` shape.
 * @see {@link ListPartnerAccountsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class ListPartnerAccountsCommand extends command<ListPartnerAccountsCommandInput, ListPartnerAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListPartnerAccounts",
  ListPartnerAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPartnerAccountsRequest;
      output: ListPartnerAccountsResponse;
    };
    sdk: {
      input: ListPartnerAccountsCommandInput;
      output: ListPartnerAccountsCommandOutput;
    };
  };
}
