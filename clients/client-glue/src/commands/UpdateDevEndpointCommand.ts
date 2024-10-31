// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateDevEndpointRequest, UpdateDevEndpointResponse } from "../models/models_3";
import { de_UpdateDevEndpointCommand, se_UpdateDevEndpointCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDevEndpointCommand}.
 */
export interface UpdateDevEndpointCommandInput extends UpdateDevEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDevEndpointCommand}.
 */
export interface UpdateDevEndpointCommandOutput extends UpdateDevEndpointResponse, __MetadataBearer {}

/**
 * <p>Updates a specified development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateDevEndpointRequest
 *   EndpointName: "STRING_VALUE", // required
 *   PublicKey: "STRING_VALUE",
 *   AddPublicKeys: [ // PublicKeysList
 *     "STRING_VALUE",
 *   ],
 *   DeletePublicKeys: [
 *     "STRING_VALUE",
 *   ],
 *   CustomLibraries: { // DevEndpointCustomLibraries
 *     ExtraPythonLibsS3Path: "STRING_VALUE",
 *     ExtraJarsS3Path: "STRING_VALUE",
 *   },
 *   UpdateEtlLibraries: true || false,
 *   DeleteArguments: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   AddArguments: { // MapValue
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDevEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDevEndpointCommandInput - {@link UpdateDevEndpointCommandInput}
 * @returns {@link UpdateDevEndpointCommandOutput}
 * @see {@link UpdateDevEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class UpdateDevEndpointCommand extends $Command
  .classBuilder<
    UpdateDevEndpointCommandInput,
    UpdateDevEndpointCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateDevEndpoint", {})
  .n("GlueClient", "UpdateDevEndpointCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDevEndpointCommand)
  .de(de_UpdateDevEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDevEndpointRequest;
      output: {};
    };
    sdk: {
      input: UpdateDevEndpointCommandInput;
      output: UpdateDevEndpointCommandOutput;
    };
  };
}
