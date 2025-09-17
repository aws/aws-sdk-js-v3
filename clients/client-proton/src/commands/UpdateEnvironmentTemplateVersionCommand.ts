// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateEnvironmentTemplateVersionInput,
  UpdateEnvironmentTemplateVersionInputFilterSensitiveLog,
  UpdateEnvironmentTemplateVersionOutput,
  UpdateEnvironmentTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateEnvironmentTemplateVersionCommand,
  se_UpdateEnvironmentTemplateVersionCommand,
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
 * The input for {@link UpdateEnvironmentTemplateVersionCommand}.
 */
export interface UpdateEnvironmentTemplateVersionCommandInput extends UpdateEnvironmentTemplateVersionInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentTemplateVersionCommand}.
 */
export interface UpdateEnvironmentTemplateVersionCommandOutput
  extends UpdateEnvironmentTemplateVersionOutput,
    __MetadataBearer {}

/**
 * <p>Update a major or minor version of an environment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateEnvironmentTemplateVersionInput
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE", // required
 *   minorVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentTemplateVersionOutput
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
 * @param UpdateEnvironmentTemplateVersionCommandInput - {@link UpdateEnvironmentTemplateVersionCommandInput}
 * @returns {@link UpdateEnvironmentTemplateVersionCommandOutput}
 * @see {@link UpdateEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
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
 *
 * @public
 */
export class UpdateEnvironmentTemplateVersionCommand extends $Command
  .classBuilder<
    UpdateEnvironmentTemplateVersionCommandInput,
    UpdateEnvironmentTemplateVersionCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "UpdateEnvironmentTemplateVersion", {})
  .n("ProtonClient", "UpdateEnvironmentTemplateVersionCommand")
  .f(UpdateEnvironmentTemplateVersionInputFilterSensitiveLog, UpdateEnvironmentTemplateVersionOutputFilterSensitiveLog)
  .ser(se_UpdateEnvironmentTemplateVersionCommand)
  .de(de_UpdateEnvironmentTemplateVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentTemplateVersionInput;
      output: UpdateEnvironmentTemplateVersionOutput;
    };
    sdk: {
      input: UpdateEnvironmentTemplateVersionCommandInput;
      output: UpdateEnvironmentTemplateVersionCommandOutput;
    };
  };
}
