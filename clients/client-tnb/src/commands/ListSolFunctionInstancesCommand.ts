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
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
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
  .ep({
    ...commonParams,
  })
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
  .build() {}
