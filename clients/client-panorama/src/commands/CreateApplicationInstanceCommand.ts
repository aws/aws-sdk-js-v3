// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateApplicationInstanceRequest, CreateApplicationInstanceResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_CreateApplicationInstanceCommand, se_CreateApplicationInstanceCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "CreateApplicationInstance", {})
  .n("PanoramaClient", "CreateApplicationInstanceCommand")
  .f(void 0, void 0)
  .ser(se_CreateApplicationInstanceCommand)
  .de(de_CreateApplicationInstanceCommand)
  .build() {}
