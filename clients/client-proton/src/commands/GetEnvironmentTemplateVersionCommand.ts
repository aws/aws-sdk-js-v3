// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEnvironmentTemplateVersionInput,
  GetEnvironmentTemplateVersionOutput,
  GetEnvironmentTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetEnvironmentTemplateVersionCommand,
  se_GetEnvironmentTemplateVersionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentTemplateVersionCommand}.
 */
export interface GetEnvironmentTemplateVersionCommandInput extends GetEnvironmentTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentTemplateVersionCommand}.
 */
export interface GetEnvironmentTemplateVersionCommandOutput
  extends GetEnvironmentTemplateVersionOutput,
    __MetadataBearer {}

/**
 * <p>Get detailed data for a major or minor version of an environment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // GetEnvironmentTemplateVersionInput
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE", // required
 *   minorVersion: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentTemplateVersionOutput
 * //   environmentTemplateVersion: { // EnvironmentTemplateVersion
 * //     templateName: "STRING_VALUE", // required
 * //     majorVersion: "STRING_VALUE", // required
 * //     minorVersion: "STRING_VALUE", // required
 * //     recommendedMinorVersion: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     statusMessage: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     schema: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnvironmentTemplateVersionCommandInput - {@link GetEnvironmentTemplateVersionCommandInput}
 * @returns {@link GetEnvironmentTemplateVersionCommandOutput}
 * @see {@link GetEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 * @public
 */
export class GetEnvironmentTemplateVersionCommand extends $Command
  .classBuilder<
    GetEnvironmentTemplateVersionCommandInput,
    GetEnvironmentTemplateVersionCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "GetEnvironmentTemplateVersion", {})
  .n("ProtonClient", "GetEnvironmentTemplateVersionCommand")
  .f(void 0, GetEnvironmentTemplateVersionOutputFilterSensitiveLog)
  .ser(se_GetEnvironmentTemplateVersionCommand)
  .de(de_GetEnvironmentTemplateVersionCommand)
  .build() {}
