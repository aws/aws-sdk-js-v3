// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSolNetworkInstancesInput, ListSolNetworkInstancesOutput } from "../models/models_0";
import { ListSolNetworkInstances$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkInstancesCommand}.
 */
export interface ListSolNetworkInstancesCommandInput extends ListSolNetworkInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkInstancesCommand}.
 */
export interface ListSolNetworkInstancesCommandOutput extends ListSolNetworkInstancesOutput, __MetadataBearer {}

/**
 * <p>Lists your network instances.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkInstancesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkInstancesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkInstancesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkInstancesOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkInstances: [ // ListSolNetworkInstanceResources
 * //     { // ListSolNetworkInstanceInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       nsInstanceName: "STRING_VALUE", // required
 * //       nsInstanceDescription: "STRING_VALUE", // required
 * //       nsdId: "STRING_VALUE", // required
 * //       nsdInfoId: "STRING_VALUE", // required
 * //       nsState: "INSTANTIATED" || "NOT_INSTANTIATED" || "UPDATED" || "IMPAIRED" || "UPDATE_FAILED" || "STOPPED" || "DELETED" || "INSTANTIATE_IN_PROGRESS" || "INTENT_TO_UPDATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "TERMINATE_IN_PROGRESS", // required
 * //       metadata: { // ListSolNetworkInstanceMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkInstancesCommandInput - {@link ListSolNetworkInstancesCommandInput}
 * @returns {@link ListSolNetworkInstancesCommandOutput}
 * @see {@link ListSolNetworkInstancesCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkInstancesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 *
 * @example List Sol Network Instantiate instances
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListSolNetworkInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkInstances: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-instance/ni-07aa863e53460a2a6",
 *       id: "ni-07aa863e53460a2a6",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       nsInstanceDescription: "Network service for CITY",
 *       nsInstanceName: "CITY Instance",
 *       nsState: "INSTANTIATED",
 *       nsdId: "e851fd14-abe3-4535-85e6-6060636fd519",
 *       nsdInfoId: "np-0d5b823eb5c2a9241"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List Sol Network Instances with nextToken and maxResults
 * ```javascript
 * //
 * const input = {
 *   maxResults: 25,
 *   nextToken: ""
 * };
 * const command = new ListSolNetworkInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkInstances: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-instance/ni-07aa863e53460a2a6",
 *       id: "ni-07aa863e53460a2a6",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       nsInstanceDescription: "Network service for CITY",
 *       nsInstanceName: "CITY Instance",
 *       nsState: "INSTANTIATED",
 *       nsdId: "e851fd14-abe3-4535-85e6-6060636fd519",
 *       nsdInfoId: "np-0d5b823eb5c2a9241"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSolNetworkInstancesCommand extends $Command
  .classBuilder<
    ListSolNetworkInstancesCommandInput,
    ListSolNetworkInstancesCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "ListSolNetworkInstances", {})
  .n("TnbClient", "ListSolNetworkInstancesCommand")
  .sc(ListSolNetworkInstances$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolNetworkInstancesInput;
      output: ListSolNetworkInstancesOutput;
    };
    sdk: {
      input: ListSolNetworkInstancesCommandInput;
      output: ListSolNetworkInstancesCommandOutput;
    };
  };
}
