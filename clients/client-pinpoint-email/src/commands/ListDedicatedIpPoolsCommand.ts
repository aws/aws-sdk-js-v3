// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDedicatedIpPoolsRequest, ListDedicatedIpPoolsResponse } from "../models/models_0";
import { ListDedicatedIpPools$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDedicatedIpPoolsCommand}.
 */
export interface ListDedicatedIpPoolsCommandInput extends ListDedicatedIpPoolsRequest {}
/**
 * @public
 *
 * The output of {@link ListDedicatedIpPoolsCommand}.
 */
export interface ListDedicatedIpPoolsCommandOutput extends ListDedicatedIpPoolsResponse, __MetadataBearer {}

/**
 * <p>List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current
 *             AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListDedicatedIpPoolsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListDedicatedIpPoolsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // ListDedicatedIpPoolsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListDedicatedIpPoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListDedicatedIpPoolsResponse
 * //   DedicatedIpPools: [ // ListOfDedicatedIpPools
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDedicatedIpPoolsCommandInput - {@link ListDedicatedIpPoolsCommandInput}
 * @returns {@link ListDedicatedIpPoolsCommandOutput}
 * @see {@link ListDedicatedIpPoolsCommandInput} for command's `input` shape.
 * @see {@link ListDedicatedIpPoolsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class ListDedicatedIpPoolsCommand extends command<ListDedicatedIpPoolsCommandInput, ListDedicatedIpPoolsCommandOutput>(
  _ep0,
  _mw0,
  "ListDedicatedIpPools",
  ListDedicatedIpPools$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDedicatedIpPoolsRequest;
      output: ListDedicatedIpPoolsResponse;
    };
    sdk: {
      input: ListDedicatedIpPoolsCommandInput;
      output: ListDedicatedIpPoolsCommandOutput;
    };
  };
}
