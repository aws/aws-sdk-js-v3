// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGatewayGroupsRequest, ListGatewayGroupsResponse } from "../models/models_0";
import { de_ListGatewayGroupsCommand, se_ListGatewayGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListGatewayGroupsCommand}.
 */
export interface ListGatewayGroupsCommandInput extends ListGatewayGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewayGroupsCommand}.
 */
export interface ListGatewayGroupsCommandOutput extends ListGatewayGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of
 *          a specific gateway group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListGatewayGroupsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListGatewayGroupsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListGatewayGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGatewayGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayGroupsResponse
 * //   GatewayGroups: [ // GatewayGroupSummaries
 * //     { // GatewayGroupSummary
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayGroupsCommandInput - {@link ListGatewayGroupsCommandInput}
 * @returns {@link ListGatewayGroupsCommandOutput}
 * @see {@link ListGatewayGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGatewayGroupsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class ListGatewayGroupsCommand extends $Command
  .classBuilder<
    ListGatewayGroupsCommandInput,
    ListGatewayGroupsCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "ListGatewayGroups", {})
  .n("AlexaForBusinessClient", "ListGatewayGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListGatewayGroupsCommand)
  .de(de_ListGatewayGroupsCommand)
  .build() {}
