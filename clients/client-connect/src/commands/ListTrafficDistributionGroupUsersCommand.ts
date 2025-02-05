// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListTrafficDistributionGroupUsersRequest,
  ListTrafficDistributionGroupUsersResponse,
} from "../models/models_2";
import {
  de_ListTrafficDistributionGroupUsersCommand,
  se_ListTrafficDistributionGroupUsersCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListTrafficDistributionGroupUsersCommandOutput
  extends ListTrafficDistributionGroupUsersResponse,
    __MetadataBearer {}

/**
 * <p>Lists traffic distribution group users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTrafficDistributionGroupUsersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTrafficDistributionGroupUsersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
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
 * @public
 */
export class ListTrafficDistributionGroupUsersCommand extends $Command
  .classBuilder<
    ListTrafficDistributionGroupUsersCommandInput,
    ListTrafficDistributionGroupUsersCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListTrafficDistributionGroupUsers", {})
  .n("ConnectClient", "ListTrafficDistributionGroupUsersCommand")
  .f(void 0, void 0)
  .ser(se_ListTrafficDistributionGroupUsersCommand)
  .de(de_ListTrafficDistributionGroupUsersCommand)
  .build() {
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
