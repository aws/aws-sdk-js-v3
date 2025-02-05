// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutLaunchActionRequest, PutLaunchActionResponse } from "../models/models_0";
import { de_PutLaunchActionCommand, se_PutLaunchActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLaunchActionCommand}.
 */
export interface PutLaunchActionCommandInput extends PutLaunchActionRequest {}
/**
 * @public
 *
 * The output of {@link PutLaunchActionCommand}.
 */
export interface PutLaunchActionCommandOutput extends PutLaunchActionResponse, __MetadataBearer {}

/**
 * <p>Puts a resource launch action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, PutLaunchActionCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, PutLaunchActionCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DrsClient(config);
 * const input = { // PutLaunchActionRequest
 *   resourceId: "STRING_VALUE", // required
 *   actionCode: "STRING_VALUE", // required
 *   order: Number("int"), // required
 *   actionId: "STRING_VALUE", // required
 *   optional: true || false, // required
 *   active: true || false, // required
 *   name: "STRING_VALUE", // required
 *   actionVersion: "STRING_VALUE", // required
 *   category: "STRING_VALUE", // required
 *   parameters: { // LaunchActionParameters
 *     "<keys>": { // LaunchActionParameter
 *       value: "STRING_VALUE",
 *       type: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE", // required
 * };
 * const command = new PutLaunchActionCommand(input);
 * const response = await client.send(command);
 * // { // PutLaunchActionResponse
 * //   resourceId: "STRING_VALUE",
 * //   actionId: "STRING_VALUE",
 * //   actionCode: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   active: true || false,
 * //   order: Number("int"),
 * //   actionVersion: "STRING_VALUE",
 * //   optional: true || false,
 * //   parameters: { // LaunchActionParameters
 * //     "<keys>": { // LaunchActionParameter
 * //       value: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutLaunchActionCommandInput - {@link PutLaunchActionCommandInput}
 * @returns {@link PutLaunchActionCommandOutput}
 * @see {@link PutLaunchActionCommandInput} for command's `input` shape.
 * @see {@link PutLaunchActionCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 * @public
 */
export class PutLaunchActionCommand extends $Command
  .classBuilder<
    PutLaunchActionCommandInput,
    PutLaunchActionCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "PutLaunchAction", {})
  .n("DrsClient", "PutLaunchActionCommand")
  .f(void 0, void 0)
  .ser(se_PutLaunchActionCommand)
  .de(de_PutLaunchActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLaunchActionRequest;
      output: PutLaunchActionResponse;
    };
    sdk: {
      input: PutLaunchActionCommandInput;
      output: PutLaunchActionCommandOutput;
    };
  };
}
