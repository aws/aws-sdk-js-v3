// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveApplicationInstanceRequest, RemoveApplicationInstanceResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_RemoveApplicationInstanceCommand, se_RemoveApplicationInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveApplicationInstanceCommand}.
 */
export interface RemoveApplicationInstanceCommandInput extends RemoveApplicationInstanceRequest {}
/**
 * @public
 *
 * The output of {@link RemoveApplicationInstanceCommand}.
 */
export interface RemoveApplicationInstanceCommandOutput extends RemoveApplicationInstanceResponse, __MetadataBearer {}

/**
 * <p>Removes an application instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, RemoveApplicationInstanceCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, RemoveApplicationInstanceCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PanoramaClient(config);
 * const input = { // RemoveApplicationInstanceRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 * };
 * const command = new RemoveApplicationInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveApplicationInstanceCommandInput - {@link RemoveApplicationInstanceCommandInput}
 * @returns {@link RemoveApplicationInstanceCommandOutput}
 * @see {@link RemoveApplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link RemoveApplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 * @public
 */
export class RemoveApplicationInstanceCommand extends $Command
  .classBuilder<
    RemoveApplicationInstanceCommandInput,
    RemoveApplicationInstanceCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "RemoveApplicationInstance", {})
  .n("PanoramaClient", "RemoveApplicationInstanceCommand")
  .f(void 0, void 0)
  .ser(se_RemoveApplicationInstanceCommand)
  .de(de_RemoveApplicationInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveApplicationInstanceRequest;
      output: {};
    };
    sdk: {
      input: RemoveApplicationInstanceCommandInput;
      output: RemoveApplicationInstanceCommandOutput;
    };
  };
}
