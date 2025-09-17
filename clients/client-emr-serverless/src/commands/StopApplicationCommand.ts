// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopApplicationRequest, StopApplicationResponse } from "../models/models_0";
import { de_StopApplicationCommand, se_StopApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopApplicationCommand}.
 */
export interface StopApplicationCommandInput extends StopApplicationRequest {}
/**
 * @public
 *
 * The output of {@link StopApplicationCommand}.
 */
export interface StopApplicationCommandOutput extends StopApplicationResponse, __MetadataBearer {}

/**
 * <p>Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, StopApplicationCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, StopApplicationCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // StopApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new StopApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopApplicationCommandInput - {@link StopApplicationCommandInput}
 * @returns {@link StopApplicationCommandOutput}
 * @see {@link StopApplicationCommandInput} for command's `input` shape.
 * @see {@link StopApplicationCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 *
 * @public
 */
export class StopApplicationCommand extends $Command
  .classBuilder<
    StopApplicationCommandInput,
    StopApplicationCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsToledoWebService", "StopApplication", {})
  .n("EMRServerlessClient", "StopApplicationCommand")
  .f(void 0, void 0)
  .ser(se_StopApplicationCommand)
  .de(de_StopApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopApplicationRequest;
      output: {};
    };
    sdk: {
      input: StopApplicationCommandInput;
      output: StopApplicationCommandOutput;
    };
  };
}
