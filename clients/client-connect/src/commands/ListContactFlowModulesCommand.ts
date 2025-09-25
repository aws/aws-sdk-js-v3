// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListContactFlowModulesRequest, ListContactFlowModulesResponse } from "../models/models_1";
import { ListContactFlowModules } from "../schemas/schemas_19_Flow";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactFlowModulesCommand}.
 */
export interface ListContactFlowModulesCommandInput extends ListContactFlowModulesRequest {}
/**
 * @public
 *
 * The output of {@link ListContactFlowModulesCommand}.
 */
export interface ListContactFlowModulesCommandOutput extends ListContactFlowModulesResponse, __MetadataBearer {}

/**
 * <p>Provides information about the flow modules for the specified Amazon Connect
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactFlowModulesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactFlowModulesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListContactFlowModulesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ContactFlowModuleState: "ACTIVE" || "ARCHIVED",
 * };
 * const command = new ListContactFlowModulesCommand(input);
 * const response = await client.send(command);
 * // { // ListContactFlowModulesResponse
 * //   ContactFlowModulesSummaryList: [ // ContactFlowModulesSummaryList
 * //     { // ContactFlowModuleSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       State: "ACTIVE" || "ARCHIVED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactFlowModulesCommandInput - {@link ListContactFlowModulesCommandInput}
 * @returns {@link ListContactFlowModulesCommandOutput}
 * @see {@link ListContactFlowModulesCommandInput} for command's `input` shape.
 * @see {@link ListContactFlowModulesCommandOutput} for command's `response` shape.
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
export class ListContactFlowModulesCommand extends $Command
  .classBuilder<
    ListContactFlowModulesCommandInput,
    ListContactFlowModulesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListContactFlowModules", {})
  .n("ConnectClient", "ListContactFlowModulesCommand")
  .sc(ListContactFlowModules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactFlowModulesRequest;
      output: ListContactFlowModulesResponse;
    };
    sdk: {
      input: ListContactFlowModulesCommandInput;
      output: ListContactFlowModulesCommandOutput;
    };
  };
}
