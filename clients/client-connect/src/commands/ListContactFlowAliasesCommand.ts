// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContactFlowAliasesRequest, ListContactFlowAliasesResponse } from "../models/models_2";
import { ListContactFlowAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContactFlowAliasesCommand}.
 */
export interface ListContactFlowAliasesCommandInput extends ListContactFlowAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListContactFlowAliasesCommand}.
 */
export interface ListContactFlowAliasesCommandOutput extends ListContactFlowAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists the aliases associated with a flow, including the version that each alias points to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactFlowAliasesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactFlowAliasesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListContactFlowAliasesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContactFlowAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListContactFlowAliasesResponse
 * //   ContactFlowAliasSummaryList: [ // ContactFlowAliasSummaryList
 * //     { // ContactFlowAliasSummary
 * //       Arn: "STRING_VALUE",
 * //       AliasId: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       AliasName: "STRING_VALUE",
 * //       AliasDescription: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactFlowAliasesCommandInput - {@link ListContactFlowAliasesCommandInput}
 * @returns {@link ListContactFlowAliasesCommandOutput}
 * @see {@link ListContactFlowAliasesCommandInput} for command's `input` shape.
 * @see {@link ListContactFlowAliasesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class ListContactFlowAliasesCommand extends command<ListContactFlowAliasesCommandInput, ListContactFlowAliasesCommandOutput>(
  _ep0,
  _mw0,
  "ListContactFlowAliases",
  ListContactFlowAliases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactFlowAliasesRequest;
      output: ListContactFlowAliasesResponse;
    };
    sdk: {
      input: ListContactFlowAliasesCommandInput;
      output: ListContactFlowAliasesCommandOutput;
    };
  };
}
