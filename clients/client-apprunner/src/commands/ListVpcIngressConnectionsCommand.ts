// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVpcIngressConnectionsRequest, ListVpcIngressConnectionsResponse } from "../models/models_0";
import { de_ListVpcIngressConnectionsCommand, se_ListVpcIngressConnectionsCommand } from "../protocols/Aws_json1_0";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "ListVpcIngressConnections", {})
  .n("AppRunnerClient", "ListVpcIngressConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_ListVpcIngressConnectionsCommand)
  .de(de_ListVpcIngressConnectionsCommand)
  .build() {}
