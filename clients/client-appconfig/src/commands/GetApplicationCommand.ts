// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Application, GetApplicationRequest } from "../models/models_0";
import { GetApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends Application, __MetadataBearer {}

/**
 * <p>Retrieves information about an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetApplicationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetApplicationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // GetApplicationRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // Application
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To list details of an application
 * ```javascript
 * // The following get-application example lists the details of the specified application.
 * const input = {
 *   ApplicationId: "339ohji"
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Id: "339ohji",
 *   Name: "example-application"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetApplicationCommand extends $Command
  .classBuilder<
    GetApplicationCommandInput,
    GetApplicationCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "GetApplication", {})
  .n("AppConfigClient", "GetApplicationCommand")
  .sc(GetApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationRequest;
      output: Application;
    };
    sdk: {
      input: GetApplicationCommandInput;
      output: GetApplicationCommandOutput;
    };
  };
}
