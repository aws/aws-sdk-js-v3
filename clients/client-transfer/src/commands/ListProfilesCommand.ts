// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProfilesRequest, ListProfilesResponse } from "../models/models_0";
import { ListProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProfilesCommand}.
 */
export interface ListProfilesCommandInput extends ListProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListProfilesCommand}.
 */
export interface ListProfilesCommandOutput extends ListProfilesResponse, __MetadataBearer {}

/**
 * Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the `MaxResults` parameter. If you ran the command previously and received a value for `NextToken`, you can supply that value to continue listing profiles from where you left off.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListProfilesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListProfilesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListProfilesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ProfileType: "LOCAL" || "PARTNER",
 * };
 * const command = new ListProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListProfilesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Profiles: [ // ListedProfiles // required
 * //     { // ListedProfile
 * //       Arn: "STRING_VALUE",
 * //       ProfileId: "STRING_VALUE",
 * //       As2Id: "STRING_VALUE",
 * //       ProfileType: "LOCAL" || "PARTNER",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProfilesCommandInput - {@link ListProfilesCommandInput}
 * @returns {@link ListProfilesCommandOutput}
 * @see {@link ListProfilesCommandInput} for command's `input` shape.
 * @see {@link ListProfilesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` parameter that was passed is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class ListProfilesCommand extends command<ListProfilesCommandInput, ListProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListProfiles",
  ListProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfilesRequest;
      output: ListProfilesResponse;
    };
    sdk: {
      input: ListProfilesCommandInput;
      output: ListProfilesCommandOutput;
    };
  };
}
