// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InstantiateSolNetworkInstanceInput, InstantiateSolNetworkInstanceOutput } from "../models/models_0";
import { InstantiateSolNetworkInstance } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InstantiateSolNetworkInstanceCommand}.
 */
export interface InstantiateSolNetworkInstanceCommandInput extends InstantiateSolNetworkInstanceInput {}
/**
 * @public
 *
 * The output of {@link InstantiateSolNetworkInstanceCommand}.
 */
export interface InstantiateSolNetworkInstanceCommandOutput
  extends InstantiateSolNetworkInstanceOutput,
    __MetadataBearer {}

/**
 * <p>Instantiates a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 *          <p>Before you can instantiate a network instance, you have to create a network instance.
 *          For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_CreateSolNetworkInstance.html">CreateSolNetworkInstance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, InstantiateSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, InstantiateSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // InstantiateSolNetworkInstanceInput
 *   nsInstanceId: "STRING_VALUE", // required
 *   dryRun: true || false,
 *   additionalParamsForNs: "DOCUMENT_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new InstantiateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * // { // InstantiateSolNetworkInstanceOutput
 * //   nsLcmOpOccId: "STRING_VALUE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param InstantiateSolNetworkInstanceCommandInput - {@link InstantiateSolNetworkInstanceCommandInput}
 * @returns {@link InstantiateSolNetworkInstanceCommandOutput}
 * @see {@link InstantiateSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link InstantiateSolNetworkInstanceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quotas have been exceeded.</p>
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
 * @example Instantiate a Sol Network Instance
 * ```javascript
 * //
 * const input = {
 *   nsInstanceId: "ni-0d5b823eb5c2a9241",
 *   tags: {
 *     Name: "Resource"
 *   }
 * };
 * const command = new InstantiateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241",
 *   tags: {
 *     Name: "Resource"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Instantiate a Sol Network Instance with Overrides
 * ```javascript
 * //
 * const input = {
 *   additionalParamsForNs: {
 *     availability_zone: "us-west-2a",
 *     cidr_block: "10.0.0.0/16"
 *   },
 *   nsInstanceId: "ni-0d5b823eb5c2a9241"
 * };
 * const command = new InstantiateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InstantiateSolNetworkInstanceCommand extends $Command
  .classBuilder<
    InstantiateSolNetworkInstanceCommandInput,
    InstantiateSolNetworkInstanceCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "InstantiateSolNetworkInstance", {})
  .n("TnbClient", "InstantiateSolNetworkInstanceCommand")
  .sc(InstantiateSolNetworkInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InstantiateSolNetworkInstanceInput;
      output: InstantiateSolNetworkInstanceOutput;
    };
    sdk: {
      input: InstantiateSolNetworkInstanceCommandInput;
      output: InstantiateSolNetworkInstanceCommandOutput;
    };
  };
}
