// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxClusterNodesRequest, ListKxClusterNodesResponse } from "../models/models_0";
import { de_ListKxClusterNodesCommand, se_ListKxClusterNodesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxClusterNodesCommand}.
 */
export interface ListKxClusterNodesCommandInput extends ListKxClusterNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListKxClusterNodesCommand}.
 */
export interface ListKxClusterNodesCommandOutput extends ListKxClusterNodesResponse, __MetadataBearer {}

/**
 * <p>Lists all the nodes in a kdb cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxClusterNodesCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxClusterNodesCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceClient(config);
 * const input = { // ListKxClusterNodesRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKxClusterNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListKxClusterNodesResponse
 * //   nodes: [ // KxNodeSummaries
 * //     { // KxNode
 * //       nodeId: "STRING_VALUE",
 * //       availabilityZoneId: "STRING_VALUE",
 * //       launchTime: new Date("TIMESTAMP"),
 * //       status: "RUNNING" || "PROVISIONING",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxClusterNodesCommandInput - {@link ListKxClusterNodesCommandInput}
 * @returns {@link ListKxClusterNodesCommandOutput}
 * @see {@link ListKxClusterNodesCommandInput} for command's `input` shape.
 * @see {@link ListKxClusterNodesCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 * @public
 */
export class ListKxClusterNodesCommand extends $Command
  .classBuilder<
    ListKxClusterNodesCommandInput,
    ListKxClusterNodesCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "ListKxClusterNodes", {})
  .n("FinspaceClient", "ListKxClusterNodesCommand")
  .f(void 0, void 0)
  .ser(se_ListKxClusterNodesCommand)
  .de(de_ListKxClusterNodesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxClusterNodesRequest;
      output: ListKxClusterNodesResponse;
    };
    sdk: {
      input: ListKxClusterNodesCommandInput;
      output: ListKxClusterNodesCommandOutput;
    };
  };
}
