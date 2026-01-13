// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutMLConfigurationRequest } from "../models/models_0";
import { PutMLConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMLConfigurationCommand}.
 */
export interface PutMLConfigurationCommandInput extends PutMLConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutMLConfigurationCommand}.
 */
export interface PutMLConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Assigns information about an ML configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, PutMLConfigurationCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, PutMLConfigurationCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // PutMLConfigurationRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 *   defaultOutputLocation: { // MLOutputConfiguration
 *     destination: { // Destination
 *       s3Destination: { // S3ConfigMap
 *         s3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutMLConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMLConfigurationCommandInput - {@link PutMLConfigurationCommandInput}
 * @returns {@link PutMLConfigurationCommandOutput}
 * @see {@link PutMLConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutMLConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class PutMLConfigurationCommand extends $Command
  .classBuilder<
    PutMLConfigurationCommandInput,
    PutMLConfigurationCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "PutMLConfiguration", {})
  .n("CleanRoomsMLClient", "PutMLConfigurationCommand")
  .sc(PutMLConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMLConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutMLConfigurationCommandInput;
      output: PutMLConfigurationCommandOutput;
    };
  };
}
