// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { PutPolicyInput, PutPolicyOutput } from "../models/models_0";
import { de_PutPolicyCommand, se_PutPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPolicyCommand}.
 */
export interface PutPolicyCommandInput extends PutPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutPolicyCommand}.
 */
export interface PutPolicyCommandOutput extends PutPolicyOutput, __MetadataBearer {}

/**
 * <p>Updates the resource-based policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, PutPolicyCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, PutPolicyCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // PutPolicyInput
 *   arn: "STRING_VALUE", // required
 *   token: "STRING_VALUE",
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutPolicyOutput
 * //   arn: "STRING_VALUE", // required
 * //   token: "STRING_VALUE", // required
 * //   policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutPolicyCommandInput - {@link PutPolicyCommandInput}
 * @returns {@link PutPolicyCommandOutput}
 * @see {@link PutPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPolicyCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class PutPolicyCommand extends $Command
  .classBuilder<
    PutPolicyCommandInput,
    PutPolicyCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "PutPolicy", {})
  .n("EntityResolutionClient", "PutPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutPolicyCommand)
  .de(de_PutPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPolicyInput;
      output: PutPolicyOutput;
    };
    sdk: {
      input: PutPolicyCommandInput;
      output: PutPolicyCommandOutput;
    };
  };
}
