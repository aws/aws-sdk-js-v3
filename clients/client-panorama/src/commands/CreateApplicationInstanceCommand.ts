// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateApplicationInstanceRequest, CreateApplicationInstanceResponse } from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { CreateApplicationInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationInstanceCommand}.
 */
export interface CreateApplicationInstanceCommandInput extends CreateApplicationInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationInstanceCommand}.
 */
export interface CreateApplicationInstanceCommandOutput extends CreateApplicationInstanceResponse, __MetadataBearer {}

/**
 * <p>Creates an application instance and deploys it to a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, CreateApplicationInstanceCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, CreateApplicationInstanceCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // CreateApplicationInstanceRequest
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ManifestPayload: { // ManifestPayload Union: only one key present
 *     PayloadData: "STRING_VALUE",
 *   },
 *   ManifestOverridesPayload: { // ManifestOverridesPayload Union: only one key present
 *     PayloadData: "STRING_VALUE",
 *   },
 *   ApplicationInstanceIdToReplace: "STRING_VALUE",
 *   RuntimeRoleArn: "STRING_VALUE",
 *   DefaultRuntimeContextDevice: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateApplicationInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationInstanceResponse
 * //   ApplicationInstanceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateApplicationInstanceCommandInput - {@link CreateApplicationInstanceCommandInput}
 * @returns {@link CreateApplicationInstanceCommandOutput}
 * @see {@link CreateApplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a limit to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class CreateApplicationInstanceCommand extends $Command
  .classBuilder<
    CreateApplicationInstanceCommandInput,
    CreateApplicationInstanceCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "CreateApplicationInstance", {})
  .n("PanoramaClient", "CreateApplicationInstanceCommand")
  .sc(CreateApplicationInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationInstanceRequest;
      output: CreateApplicationInstanceResponse;
    };
    sdk: {
      input: CreateApplicationInstanceCommandInput;
      output: CreateApplicationInstanceCommandOutput;
    };
  };
}
