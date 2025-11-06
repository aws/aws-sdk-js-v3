// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListContactFlowVersionsRequest, ListContactFlowVersionsResponse } from "../models/models_2";
import { de_ListContactFlowVersionsCommand, se_ListContactFlowVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactFlowVersionsCommand}.
 */
export interface ListContactFlowVersionsCommandInput extends ListContactFlowVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactFlowVersionsCommand}.
 */
export interface ListContactFlowVersionsCommandOutput extends ListContactFlowVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns all the available versions for the specified Amazon Connect instance and flow
 *    identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactFlowVersionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactFlowVersionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListContactFlowVersionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContactFlowVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactFlowVersionsResponse
 * //   ContactFlowVersionSummaryList: [ // ContactFlowVersionSummaryList
 * //     { // ContactFlowVersionSummary
 * //       Arn: "STRING_VALUE",
 * //       VersionDescription: "STRING_VALUE",
 * //       Version: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactFlowVersionsCommandInput - {@link ListContactFlowVersionsCommandInput}
 * @returns {@link ListContactFlowVersionsCommandOutput}
 * @see {@link ListContactFlowVersionsCommandInput} for command's `input` shape.
 * @see {@link ListContactFlowVersionsCommandOutput} for command's `response` shape.
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
export class ListContactFlowVersionsCommand extends $Command
  .classBuilder<
    ListContactFlowVersionsCommandInput,
    ListContactFlowVersionsCommandOutput,
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
  .s("AmazonConnectService", "ListContactFlowVersions", {})
  .n("ConnectClient", "ListContactFlowVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListContactFlowVersionsCommand)
  .de(de_ListContactFlowVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactFlowVersionsRequest;
      output: ListContactFlowVersionsResponse;
    };
    sdk: {
      input: ListContactFlowVersionsCommandInput;
      output: ListContactFlowVersionsCommandOutput;
    };
  };
}
