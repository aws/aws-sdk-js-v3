// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListTrafficDistributionGroupUsersRequest,
  ListTrafficDistributionGroupUsersResponse,
} from "../models/models_2";
import { ListTrafficDistributionGroupUsers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrafficDistributionGroupUsersCommand}.
 */
export interface ListTrafficDistributionGroupUsersCommandInput extends ListTrafficDistributionGroupUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficDistributionGroupUsersCommand}.
 */
export interface ListTrafficDistributionGroupUsersCommandOutput extends ListTrafficDistributionGroupUsersResponse, __MetadataBearer {}

/**
 * Lists traffic distribution group users.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTrafficDistributionGroupUsersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTrafficDistributionGroupUsersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListTrafficDistributionGroupUsersRequest
 *   TrafficDistributionGroupId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrafficDistributionGroupUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficDistributionGroupUsersResponse
 * //   NextToken: "STRING_VALUE",
 * //   TrafficDistributionGroupUserSummaryList: [ // TrafficDistributionGroupUserSummaryList
 * //     { // TrafficDistributionGroupUserSummary
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrafficDistributionGroupUsersCommandInput - {@link ListTrafficDistributionGroupUsersCommandInput}
 * @returns {@link ListTrafficDistributionGroupUsersCommandOutput}
 * @see {@link ListTrafficDistributionGroupUsersCommandInput} for command's `input` shape.
 * @see {@link ListTrafficDistributionGroupUsersCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class ListTrafficDistributionGroupUsersCommand extends command<ListTrafficDistributionGroupUsersCommandInput, ListTrafficDistributionGroupUsersCommandOutput>(
  _ep0,
  _mw0,
  "ListTrafficDistributionGroupUsers",
  ListTrafficDistributionGroupUsers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrafficDistributionGroupUsersRequest;
      output: ListTrafficDistributionGroupUsersResponse;
    };
    sdk: {
      input: ListTrafficDistributionGroupUsersCommandInput;
      output: ListTrafficDistributionGroupUsersCommandOutput;
    };
  };
}
