// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListInstancesRequest, ListInstancesResponse } from "../models/models_2";
import { ListInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandInput extends ListInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandOutput extends ListInstancesResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances
 *    that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance
 *    API was invoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstancesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstancesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListInstancesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstancesResponse
 * //   InstanceSummaryList: [ // InstanceSummaryList
 * //     { // InstanceSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       IdentityManagementType: "SAML" || "CONNECT_MANAGED" || "EXISTING_DIRECTORY",
 * //       InstanceAlias: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       ServiceRole: "STRING_VALUE",
 * //       InstanceStatus: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED",
 * //       InboundCallsEnabled: true || false,
 * //       OutboundCallsEnabled: true || false,
 * //       InstanceAccessUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstancesCommandInput - {@link ListInstancesCommandInput}
 * @returns {@link ListInstancesCommandOutput}
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListInstancesCommand extends $Command
  .classBuilder<
    ListInstancesCommandInput,
    ListInstancesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListInstances", {})
  .n("ConnectClient", "ListInstancesCommand")
  .sc(ListInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstancesRequest;
      output: ListInstancesResponse;
    };
    sdk: {
      input: ListInstancesCommandInput;
      output: ListInstancesCommandOutput;
    };
  };
}
