// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteUsageProfileRequest, DeleteUsageProfileResponse } from "../models/models_1";
import { DeleteUsageProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUsageProfileCommand}.
 */
export interface DeleteUsageProfileCommandInput extends DeleteUsageProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUsageProfileCommand}.
 */
export interface DeleteUsageProfileCommandOutput extends DeleteUsageProfileResponse, __MetadataBearer {}

/**
 * <p>Deletes the Glue specified usage profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteUsageProfileCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteUsageProfileCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteUsageProfileRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteUsageProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUsageProfileCommandInput - {@link DeleteUsageProfileCommandInput}
 * @returns {@link DeleteUsageProfileCommandOutput}
 * @see {@link DeleteUsageProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteUsageProfileCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not available in the region.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteUsageProfileCommand extends $Command
  .classBuilder<
    DeleteUsageProfileCommandInput,
    DeleteUsageProfileCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteUsageProfile", {})
  .n("GlueClient", "DeleteUsageProfileCommand")
  .sc(DeleteUsageProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUsageProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteUsageProfileCommandInput;
      output: DeleteUsageProfileCommandOutput;
    };
  };
}
