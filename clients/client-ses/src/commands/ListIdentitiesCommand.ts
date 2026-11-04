// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIdentitiesRequest, ListIdentitiesResponse } from "../models/models_0";
import { ListIdentities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIdentitiesCommand}.
 */
export interface ListIdentitiesCommandInput extends ListIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentitiesCommand}.
 */
export interface ListIdentitiesCommandOutput extends ListIdentitiesResponse, __MetadataBearer {}

/**
 * Returns a list containing all of the identities (email addresses and domains) for your Amazon Web Services account in the current Amazon Web Services Region, regardless of verification status.
 *
 * You can execute this operation no more than once per second.
 *
 * > **Note:** It's recommended that for successive pagination calls of this API, you continue to the use the same parameter/value pairs as used in the original call, e.g., if you used `IdentityType=Domain` in the the original call and received a `NextToken` in the response, you should continue providing the `IdentityType=Domain` parameter for further `NextToken` calls; however, if you didn't provide the `IdentityType` parameter in the original call, then continue to not provide it for successive pagination calls. Using this protocol will ensure consistent results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListIdentitiesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentitiesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // ListIdentitiesRequest
 *   IdentityType: "EmailAddress" || "Domain",
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentitiesResponse
 * //   Identities: [ // IdentityList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentitiesCommandInput - {@link ListIdentitiesCommandInput}
 * @returns {@link ListIdentitiesCommandOutput}
 * @see {@link ListIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @example ListIdentities
 * ```javascript
 * // The following example lists the email address identities that have been submitted for verification with Amazon SES:
 * const input = {
 *   IdentityType: "EmailAddress",
 *   MaxItems: 123,
 *   NextToken: ""
 * };
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Identities: [
 *     "user@example.com"
 *   ],
 *   NextToken: ""
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListIdentitiesCommand extends command<ListIdentitiesCommandInput, ListIdentitiesCommandOutput>(
  _ep0,
  _mw0,
  "ListIdentities",
  ListIdentities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentitiesRequest;
      output: ListIdentitiesResponse;
    };
    sdk: {
      input: ListIdentitiesCommandInput;
      output: ListIdentitiesCommandOutput;
    };
  };
}
