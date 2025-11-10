// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSolFunctionInstanceInput, GetSolFunctionInstanceOutput } from "../models/models_0";
import { GetSolFunctionInstance } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolFunctionInstanceCommand}.
 */
export interface GetSolFunctionInstanceCommandInput extends GetSolFunctionInstanceInput {}
/**
 * @public
 *
 * The output of {@link GetSolFunctionInstanceCommand}.
 */
export interface GetSolFunctionInstanceCommandOutput extends GetSolFunctionInstanceOutput, __MetadataBearer {}

/**
 * <p>Gets the details of a network function instance, including the instantiation state and
 *          metadata from the function package descriptor in the network function package.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolFunctionInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolFunctionInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // GetSolFunctionInstanceInput
 *   vnfInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetSolFunctionInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetSolFunctionInstanceOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsInstanceId: "STRING_VALUE", // required
 * //   vnfPkgId: "STRING_VALUE", // required
 * //   vnfdId: "STRING_VALUE", // required
 * //   vnfProvider: "STRING_VALUE",
 * //   vnfProductName: "STRING_VALUE",
 * //   vnfdVersion: "STRING_VALUE",
 * //   instantiationState: "INSTANTIATED" || "NOT_INSTANTIATED", // required
 * //   instantiatedVnfInfo: { // GetSolVnfInfo
 * //     vnfState: "STARTED" || "STOPPED",
 * //     vnfcResourceInfo: [ // GetSolVnfcResourceInfoList
 * //       { // GetSolVnfcResourceInfo
 * //         metadata: { // GetSolVnfcResourceInfoMetadata
 * //           nodeGroup: "STRING_VALUE",
 * //           cluster: "STRING_VALUE",
 * //           helmChart: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   metadata: { // GetSolFunctionInstanceMetadata
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModified: new Date("TIMESTAMP"), // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSolFunctionInstanceCommandInput - {@link GetSolFunctionInstanceCommandInput}
 * @returns {@link GetSolFunctionInstanceCommandOutput}
 * @see {@link GetSolFunctionInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSolFunctionInstanceCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
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
 * @example Get a Sol Network Function Instance details
 * ```javascript
 * //
 * const input = {
 *   vnfInstanceId: "fi-b9439c34c1ef86c54"
 * };
 * const command = new GetSolFunctionInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:function-instance/fi-b9439c34c1ef86c54",
 *   id: "fi-b9439c34c1ef86c54",
 *   instantiatedVnfInfo: {
 *     vnfState: "STARTED",
 *     vnfcResourceInfo: [
 *       {
 *         metadata: {
 *           cluster: "TestCluster",
 *           helmChart: "VnfHelmChart01",
 *           nodeGroup: "Core-EKS-TEST01-EKSNodeGroup-94BNRKWRV6MP"
 *         }
 *       }
 *     ]
 *   },
 *   instantiationState: "INSTANTIATED",
 *   metadata: {
 *     createdAt: "2022-06-10T19:48:33Z",
 *     lastModified: "2022-06-10T19:48:33Z"
 *   },
 *   nsInstanceId: "ni-07aa863e53460a2a6",
 *   vnfPkgId: "fp-07aa863e53460a2a6",
 *   vnfProductName: "VNFBuilder-AMF",
 *   vnfProvider: "VNFBuilder",
 *   vnfdId: "6625a858-2157-4d74-9197-a6ff67d51f3e",
 *   vnfdVersion: "1.0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSolFunctionInstanceCommand extends $Command
  .classBuilder<
    GetSolFunctionInstanceCommandInput,
    GetSolFunctionInstanceCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "GetSolFunctionInstance", {})
  .n("TnbClient", "GetSolFunctionInstanceCommand")
  .sc(GetSolFunctionInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSolFunctionInstanceInput;
      output: GetSolFunctionInstanceOutput;
    };
    sdk: {
      input: GetSolFunctionInstanceCommandInput;
      output: GetSolFunctionInstanceCommandOutput;
    };
  };
}
