// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessKeyLastUsedRequest, GetAccessKeyLastUsedResponse } from "../models/models_0";
import { GetAccessKeyLastUsed$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessKeyLastUsedCommand}.
 */
export interface GetAccessKeyLastUsedCommandInput extends GetAccessKeyLastUsedRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessKeyLastUsedCommand}.
 */
export interface GetAccessKeyLastUsedCommandOutput extends GetAccessKeyLastUsedResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about when the specified access key was last used. The
 *             information includes the date and time of last use, along with the Amazon Web Services service and
 *             Region that were specified in the last request made with that key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccessKeyLastUsedCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccessKeyLastUsedCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetAccessKeyLastUsedRequest
 *   AccessKeyId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessKeyLastUsedCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessKeyLastUsedResponse
 * //   UserName: "STRING_VALUE",
 * //   AccessKeyLastUsed: { // AccessKeyLastUsed
 * //     LastUsedDate: new Date("TIMESTAMP"),
 * //     ServiceName: "STRING_VALUE", // required
 * //     Region: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessKeyLastUsedCommandInput - {@link GetAccessKeyLastUsedCommandInput}
 * @returns {@link GetAccessKeyLastUsedCommandOutput}
 * @see {@link GetAccessKeyLastUsedCommandInput} for command's `input` shape.
 * @see {@link GetAccessKeyLastUsedCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetAccessKeyLastUsedCommand extends command<GetAccessKeyLastUsedCommandInput, GetAccessKeyLastUsedCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessKeyLastUsed",
  GetAccessKeyLastUsed$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessKeyLastUsedRequest;
      output: GetAccessKeyLastUsedResponse;
    };
    sdk: {
      input: GetAccessKeyLastUsedCommandInput;
      output: GetAccessKeyLastUsedCommandOutput;
    };
  };
}
