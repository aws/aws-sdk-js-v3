// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSecurityProfileFlowModulesRequest, ListSecurityProfileFlowModulesResponse } from "../models/models_2";
import { ListSecurityProfileFlowModules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityProfileFlowModulesCommand}.
 */
export interface ListSecurityProfileFlowModulesCommandInput extends ListSecurityProfileFlowModulesRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityProfileFlowModulesCommand}.
 */
export interface ListSecurityProfileFlowModulesCommandOutput extends ListSecurityProfileFlowModulesResponse, __MetadataBearer {}

/**
 * <p> A list of Flow Modules an AI Agent can invoke as a tool </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityProfileFlowModulesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityProfileFlowModulesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListSecurityProfileFlowModulesRequest
 *   SecurityProfileId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSecurityProfileFlowModulesCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityProfileFlowModulesResponse
 * //   AllowedFlowModules: [ // AllowedFlowModules
 * //     { // FlowModule
 * //       Type: "MCP",
 * //       FlowModuleId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityProfileFlowModulesCommandInput - {@link ListSecurityProfileFlowModulesCommandInput}
 * @returns {@link ListSecurityProfileFlowModulesCommandOutput}
 * @see {@link ListSecurityProfileFlowModulesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfileFlowModulesCommandOutput} for command's `response` shape.
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
export class ListSecurityProfileFlowModulesCommand extends $Command
  .classBuilder<
    ListSecurityProfileFlowModulesCommandInput,
    ListSecurityProfileFlowModulesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListSecurityProfileFlowModules", {})
  .n("ConnectClient", "ListSecurityProfileFlowModulesCommand")
  .sc(ListSecurityProfileFlowModules$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityProfileFlowModulesRequest;
      output: ListSecurityProfileFlowModulesResponse;
    };
    sdk: {
      input: ListSecurityProfileFlowModulesCommandInput;
      output: ListSecurityProfileFlowModulesCommandOutput;
    };
  };
}
