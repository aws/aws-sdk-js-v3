// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListVpcIngressConnectionsRequest, ListVpcIngressConnectionsResponse } from "../models/models_0";
import { ListVpcIngressConnections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVpcIngressConnectionsCommand}.
 */
export interface ListVpcIngressConnectionsCommandInput extends ListVpcIngressConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcIngressConnectionsCommand}.
 */
export interface ListVpcIngressConnectionsCommandOutput extends ListVpcIngressConnectionsResponse, __MetadataBearer {}

/**
 * <p>Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListVpcIngressConnectionsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListVpcIngressConnectionsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // ListVpcIngressConnectionsRequest
 *   Filter: { // ListVpcIngressConnectionsFilter
 *     ServiceArn: "STRING_VALUE",
 *     VpcEndpointId: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcIngressConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcIngressConnectionsResponse
 * //   VpcIngressConnectionSummaryList: [ // VpcIngressConnectionSummaryList // required
 * //     { // VpcIngressConnectionSummary
 * //       VpcIngressConnectionArn: "STRING_VALUE",
 * //       ServiceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVpcIngressConnectionsCommandInput - {@link ListVpcIngressConnectionsCommandInput}
 * @returns {@link ListVpcIngressConnectionsCommandOutput}
 * @see {@link ListVpcIngressConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListVpcIngressConnectionsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 *
 * @public
 */
export class ListVpcIngressConnectionsCommand extends $Command
  .classBuilder<
    ListVpcIngressConnectionsCommandInput,
    ListVpcIngressConnectionsCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "ListVpcIngressConnections", {})
  .n("AppRunnerClient", "ListVpcIngressConnectionsCommand")
  .sc(ListVpcIngressConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcIngressConnectionsRequest;
      output: ListVpcIngressConnectionsResponse;
    };
    sdk: {
      input: ListVpcIngressConnectionsCommandInput;
      output: ListVpcIngressConnectionsCommandOutput;
    };
  };
}
