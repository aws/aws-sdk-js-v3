// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  TerminateSolNetworkInstanceInput,
  TerminateSolNetworkInstanceInputFilterSensitiveLog,
  TerminateSolNetworkInstanceOutput,
  TerminateSolNetworkInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_TerminateSolNetworkInstanceCommand,
  se_TerminateSolNetworkInstanceCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateSolNetworkInstanceCommand}.
 */
export interface TerminateSolNetworkInstanceCommandInput extends TerminateSolNetworkInstanceInput {}
/**
 * @public
 *
 * The output of {@link TerminateSolNetworkInstanceCommand}.
 */
export interface TerminateSolNetworkInstanceCommandOutput extends TerminateSolNetworkInstanceOutput, __MetadataBearer {}

/**
 * <p>Terminates a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 *          <p>You must terminate a network instance before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, TerminateSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, TerminateSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // TerminateSolNetworkInstanceInput
 *   nsInstanceId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TerminateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * // { // TerminateSolNetworkInstanceOutput
 * //   nsLcmOpOccId: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TerminateSolNetworkInstanceCommandInput - {@link TerminateSolNetworkInstanceCommandInput}
 * @returns {@link TerminateSolNetworkInstanceCommandOutput}
 * @see {@link TerminateSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link TerminateSolNetworkInstanceCommandOutput} for command's `response` shape.
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
 * @example Terminate a Sol Network Instance
 * ```javascript
 * //
 * const input = {
 *   nsInstanceId: "ni-0d5b823eb5c2a9241",
 *   tags: {
 *     Name: "Resource"
 *   }
 * };
 * const command = new TerminateSolNetworkInstanceCommand(input);
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
 * @public
 */
export class TerminateSolNetworkInstanceCommand extends $Command
  .classBuilder<
    TerminateSolNetworkInstanceCommandInput,
    TerminateSolNetworkInstanceCommandOutput,
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
  .s("TNB", "TerminateSolNetworkInstance", {})
  .n("TnbClient", "TerminateSolNetworkInstanceCommand")
  .f(TerminateSolNetworkInstanceInputFilterSensitiveLog, TerminateSolNetworkInstanceOutputFilterSensitiveLog)
  .ser(se_TerminateSolNetworkInstanceCommand)
  .de(de_TerminateSolNetworkInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateSolNetworkInstanceInput;
      output: TerminateSolNetworkInstanceOutput;
    };
    sdk: {
      input: TerminateSolNetworkInstanceCommandInput;
      output: TerminateSolNetworkInstanceCommandOutput;
    };
  };
}
