// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListViewVersionsRequest, ListViewVersionsResponse } from "../models/models_3";
import { ListViewVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListViewVersionsCommand}.
 */
export interface ListViewVersionsCommandInput extends ListViewVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListViewVersionsCommand}.
 */
export interface ListViewVersionsCommandOutput extends ListViewVersionsResponse, __MetadataBearer {}

/**
 * Returns all the available versions for the specified Connect Customer instance and view identifier.
 *
 * Results will be sorted from highest to lowest.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListViewVersionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListViewVersionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListViewVersionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListViewVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListViewVersionsResponse
 * //   ViewVersionSummaryList: [ // ViewVersionSummaryList
 * //     { // ViewVersionSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //       Version: Number("int"),
 * //       VersionDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListViewVersionsCommandInput - {@link ListViewVersionsCommandInput}
 * @returns {@link ListViewVersionsCommandOutput}
 * @see {@link ListViewVersionsCommandInput} for command's `input` shape.
 * @see {@link ListViewVersionsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Displayed when rate-related API limits are exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class ListViewVersionsCommand extends command<ListViewVersionsCommandInput, ListViewVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListViewVersions",
  ListViewVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListViewVersionsRequest;
      output: ListViewVersionsResponse;
    };
    sdk: {
      input: ListViewVersionsCommandInput;
      output: ListViewVersionsCommandOutput;
    };
  };
}
