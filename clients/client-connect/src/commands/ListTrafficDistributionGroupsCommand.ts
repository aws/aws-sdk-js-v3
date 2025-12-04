// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTrafficDistributionGroupsRequest, ListTrafficDistributionGroupsResponse } from "../models/models_2";
import { ListTrafficDistributionGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficDistributionGroupsCommand}.
 */
export interface ListTrafficDistributionGroupsCommandInput extends ListTrafficDistributionGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficDistributionGroupsCommand}.
 */
export interface ListTrafficDistributionGroupsCommandOutput
  extends ListTrafficDistributionGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Lists traffic distribution groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTrafficDistributionGroupsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTrafficDistributionGroupsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListTrafficDistributionGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 * };
 * const command = new ListTrafficDistributionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficDistributionGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TrafficDistributionGroupSummaryList: [ // TrafficDistributionGroupSummaryList
 * //     { // TrafficDistributionGroupSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       InstanceArn: "STRING_VALUE",
 * //       Status: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED" || "PENDING_DELETION" || "DELETION_FAILED" || "UPDATE_IN_PROGRESS",
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTrafficDistributionGroupsCommandInput - {@link ListTrafficDistributionGroupsCommandInput}
 * @returns {@link ListTrafficDistributionGroupsCommandOutput}
 * @see {@link ListTrafficDistributionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListTrafficDistributionGroupsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListTrafficDistributionGroupsCommand extends $Command
  .classBuilder<
    ListTrafficDistributionGroupsCommandInput,
    ListTrafficDistributionGroupsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListTrafficDistributionGroups", {})
  .n("ConnectClient", "ListTrafficDistributionGroupsCommand")
  .sc(ListTrafficDistributionGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrafficDistributionGroupsRequest;
      output: ListTrafficDistributionGroupsResponse;
    };
    sdk: {
      input: ListTrafficDistributionGroupsCommandInput;
      output: ListTrafficDistributionGroupsCommandOutput;
    };
  };
}
