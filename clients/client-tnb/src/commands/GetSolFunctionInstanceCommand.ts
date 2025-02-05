// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSolFunctionInstanceInput,
  GetSolFunctionInstanceOutput,
  GetSolFunctionInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSolFunctionInstanceCommand, se_GetSolFunctionInstanceCommand } from "../protocols/Aws_restJson1";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "GetSolFunctionInstance", {})
  .n("TnbClient", "GetSolFunctionInstanceCommand")
  .f(void 0, GetSolFunctionInstanceOutputFilterSensitiveLog)
  .ser(se_GetSolFunctionInstanceCommand)
  .de(de_GetSolFunctionInstanceCommand)
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
