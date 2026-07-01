// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRoutingProfilesRequest, ListRoutingProfilesResponse } from "../models/models_2";
import { ListRoutingProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRoutingProfilesCommand}.
 */
export interface ListRoutingProfilesCommandInput extends ListRoutingProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListRoutingProfilesCommand}.
 */
export interface ListRoutingProfilesCommandOutput extends ListRoutingProfilesResponse, __MetadataBearer {}

/**
 * <p>Provides summary information about the routing profiles for the specified Connect Customer instance.</p>
 *          <p>For more information about routing profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing.html">Routing Profiles</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html">Create a Routing Profile</a> in the <i>Connect Customer Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListRoutingProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRoutingProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListRoutingProfilesResponse
 * //   RoutingProfileSummaryList: [ // RoutingProfileSummaryList
 * //     { // RoutingProfileSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoutingProfilesCommandInput - {@link ListRoutingProfilesCommandInput}
 * @returns {@link ListRoutingProfilesCommandOutput}
 * @see {@link ListRoutingProfilesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListRoutingProfilesCommand extends command<ListRoutingProfilesCommandInput, ListRoutingProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListRoutingProfiles",
  ListRoutingProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoutingProfilesRequest;
      output: ListRoutingProfilesResponse;
    };
    sdk: {
      input: ListRoutingProfilesCommandInput;
      output: ListRoutingProfilesCommandOutput;
    };
  };
}
