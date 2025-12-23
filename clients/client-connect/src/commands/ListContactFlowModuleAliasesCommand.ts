// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListContactFlowModuleAliasesRequest, ListContactFlowModuleAliasesResponse } from "../models/models_1";
import { ListContactFlowModuleAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactFlowModuleAliasesCommand}.
 */
export interface ListContactFlowModuleAliasesCommandInput extends ListContactFlowModuleAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListContactFlowModuleAliasesCommand}.
 */
export interface ListContactFlowModuleAliasesCommandOutput extends ListContactFlowModuleAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists all aliases associated with a contact flow module, showing their current version mappings and
 *    metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactFlowModuleAliasesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactFlowModuleAliasesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListContactFlowModuleAliasesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowModuleId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContactFlowModuleAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListContactFlowModuleAliasesResponse
 * //   ContactFlowModuleAliasSummaryList: [ // ContactFlowModuleAliasSummaryList
 * //     { // ContactFlowModuleAliasSummary
 * //       Arn: "STRING_VALUE",
 * //       AliasId: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       AliasName: "STRING_VALUE",
 * //       AliasDescription: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactFlowModuleAliasesCommandInput - {@link ListContactFlowModuleAliasesCommandInput}
 * @returns {@link ListContactFlowModuleAliasesCommandOutput}
 * @see {@link ListContactFlowModuleAliasesCommandInput} for command's `input` shape.
 * @see {@link ListContactFlowModuleAliasesCommandOutput} for command's `response` shape.
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
export class ListContactFlowModuleAliasesCommand extends $Command
  .classBuilder<
    ListContactFlowModuleAliasesCommandInput,
    ListContactFlowModuleAliasesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListContactFlowModuleAliases", {})
  .n("ConnectClient", "ListContactFlowModuleAliasesCommand")
  .sc(ListContactFlowModuleAliases$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactFlowModuleAliasesRequest;
      output: ListContactFlowModuleAliasesResponse;
    };
    sdk: {
      input: ListContactFlowModuleAliasesCommandInput;
      output: ListContactFlowModuleAliasesCommandOutput;
    };
  };
}
