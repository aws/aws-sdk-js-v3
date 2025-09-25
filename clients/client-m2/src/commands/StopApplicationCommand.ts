// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { StopApplicationRequest, StopApplicationResponse } from "../models/models_0";
import { StopApplication } from "../schemas/schemas_1_Batch";

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
 * <p>Stops a running application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, StopApplicationCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, StopApplicationCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // StopApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 *   forceStop: true || false,
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
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class StopApplicationCommand extends $Command
  .classBuilder<
    StopApplicationCommandInput,
    StopApplicationCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "StopApplication", {})
  .n("M2Client", "StopApplicationCommand")
  .sc(StopApplication)
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
