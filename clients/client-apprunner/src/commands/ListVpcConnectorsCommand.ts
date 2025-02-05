// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVpcConnectorsRequest, ListVpcConnectorsResponse } from "../models/models_0";
import { de_ListVpcConnectorsCommand, se_ListVpcConnectorsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVpcConnectorsCommand}.
 */
export interface ListVpcConnectorsCommandInput extends ListVpcConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcConnectorsCommand}.
 */
export interface ListVpcConnectorsCommandOutput extends ListVpcConnectorsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of App Runner VPC connectors in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListVpcConnectorsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListVpcConnectorsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppRunnerClient(config);
 * const input = { // ListVpcConnectorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcConnectorsResponse
 * //   VpcConnectors: [ // VpcConnectors // required
 * //     { // VpcConnector
 * //       VpcConnectorName: "STRING_VALUE",
 * //       VpcConnectorArn: "STRING_VALUE",
 * //       VpcConnectorRevision: Number("int"),
 * //       Subnets: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroups: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Status: "ACTIVE" || "INACTIVE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       DeletedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVpcConnectorsCommandInput - {@link ListVpcConnectorsCommandInput}
 * @returns {@link ListVpcConnectorsCommandOutput}
 * @see {@link ListVpcConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListVpcConnectorsCommandOutput} for command's `response` shape.
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
export class ListVpcConnectorsCommand extends $Command
  .classBuilder<
    ListVpcConnectorsCommandInput,
    ListVpcConnectorsCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "ListVpcConnectors", {})
  .n("AppRunnerClient", "ListVpcConnectorsCommand")
  .f(void 0, void 0)
  .ser(se_ListVpcConnectorsCommand)
  .de(de_ListVpcConnectorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcConnectorsRequest;
      output: ListVpcConnectorsResponse;
    };
    sdk: {
      input: ListVpcConnectorsCommandInput;
      output: ListVpcConnectorsCommandOutput;
    };
  };
}
