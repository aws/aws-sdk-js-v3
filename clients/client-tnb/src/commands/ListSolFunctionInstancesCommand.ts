// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSolFunctionInstancesInput, ListSolFunctionInstancesOutput } from "../models/models_0";
import { de_ListSolFunctionInstancesCommand, se_ListSolFunctionInstancesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolFunctionInstancesCommand}.
 */
export interface ListSolFunctionInstancesCommandInput extends ListSolFunctionInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListSolFunctionInstancesCommand}.
 */
export interface ListSolFunctionInstancesCommandOutput extends ListSolFunctionInstancesOutput, __MetadataBearer {}

/**
 * <p>Lists network function instances.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolFunctionInstancesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolFunctionInstancesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // ListSolFunctionInstancesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolFunctionInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolFunctionInstancesOutput
 * //   nextToken: "STRING_VALUE",
 * //   functionInstances: [ // ListSolFunctionInstanceResources
 * //     { // ListSolFunctionInstanceInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       nsInstanceId: "STRING_VALUE", // required
 * //       vnfPkgId: "STRING_VALUE", // required
 * //       vnfPkgName: "STRING_VALUE",
 * //       instantiationState: "INSTANTIATED" || "NOT_INSTANTIATED", // required
 * //       instantiatedVnfInfo: { // GetSolInstantiatedVnfInfo
 * //         vnfState: "STARTED" || "STOPPED",
 * //       },
 * //       metadata: { // ListSolFunctionInstanceMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolFunctionInstancesCommandInput - {@link ListSolFunctionInstancesCommandInput}
 * @returns {@link ListSolFunctionInstancesCommandOutput}
 * @see {@link ListSolFunctionInstancesCommandInput} for command's `input` shape.
 * @see {@link ListSolFunctionInstancesCommandOutput} for command's `response` shape.
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
 * @example List Sol Function instances
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListSolFunctionInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   functionInstances: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:function-instance/fi-b9439c34c1ef86c54",
 *       id: "fi-b9439c34c1ef86c54",
 *       instantiatedVnfInfo: {
 *         vnfState: "STARTED"
 *       },
 *       instantiationState: "INSTANTIATED",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       nsInstanceId: "ni-07aa863e53460a2a6",
 *       vnfPkgId: "fp-07aa863e53460a2a6"
 *     },
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:function-instance/fi-b9439c34c1efabcd1",
 *       id: "fi-b9439c34c1efabcd1",
 *       instantiatedVnfInfo: {
 *         vnfState: "STOPPED"
 *       },
 *       instantiationState: "INSTANTIATED",
 *       metadata: {
 *         createdAt: "2022-06-10T11:48:34Z",
 *         lastModified: "2023-06-28T21:48:33Z"
 *       },
 *       nsInstanceId: "ni-07aa863e53460a123",
 *       vnfPkgId: "fp-146a863e53460a2a6"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List Sol Function Instances with nextToken and maxResults
 * ```javascript
 * //
 * const input = {
 *   maxResults: 25,
 *   nextToken: ""
 * };
 * const command = new ListSolFunctionInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   functionInstances: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:function-instance/fi-b9439c34c1ef86c54",
 *       id: "fi-b9439c34c1ef86c54",
 *       instantiatedVnfInfo: {
 *         vnfState: "STARTED"
 *       },
 *       instantiationState: "INSTANTIATED",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       nsInstanceId: "ni-07aa863e53460a2a6",
 *       vnfPkgId: "fp-07aa863e53460a2a6"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSolFunctionInstancesCommand extends $Command
  .classBuilder<
    ListSolFunctionInstancesCommandInput,
    ListSolFunctionInstancesCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "ListSolFunctionInstances", {})
  .n("TnbClient", "ListSolFunctionInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListSolFunctionInstancesCommand)
  .de(de_ListSolFunctionInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolFunctionInstancesInput;
      output: ListSolFunctionInstancesOutput;
    };
    sdk: {
      input: ListSolFunctionInstancesCommandInput;
      output: ListSolFunctionInstancesCommandOutput;
    };
  };
}
