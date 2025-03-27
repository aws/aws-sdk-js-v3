// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  UpdateSensitivityInspectionTemplateRequest,
  UpdateSensitivityInspectionTemplateResponse,
} from "../models/models_1";
import {
  de_UpdateSensitivityInspectionTemplateCommand,
  se_UpdateSensitivityInspectionTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSensitivityInspectionTemplateCommand}.
 */
export interface UpdateSensitivityInspectionTemplateCommandInput extends UpdateSensitivityInspectionTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSensitivityInspectionTemplateCommand}.
 */
export interface UpdateSensitivityInspectionTemplateCommandOutput
  extends UpdateSensitivityInspectionTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Updates the settings for the sensitivity inspection template for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateSensitivityInspectionTemplateCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateSensitivityInspectionTemplateCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // UpdateSensitivityInspectionTemplateRequest
 *   description: "STRING_VALUE",
 *   excludes: { // SensitivityInspectionTemplateExcludes
 *     managedDataIdentifierIds: [ // __listOf__string
 *       "STRING_VALUE",
 *     ],
 *   },
 *   id: "STRING_VALUE", // required
 *   includes: { // SensitivityInspectionTemplateIncludes
 *     allowListIds: [
 *       "STRING_VALUE",
 *     ],
 *     customDataIdentifierIds: [
 *       "STRING_VALUE",
 *     ],
 *     managedDataIdentifierIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateSensitivityInspectionTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSensitivityInspectionTemplateCommandInput - {@link UpdateSensitivityInspectionTemplateCommandInput}
 * @returns {@link UpdateSensitivityInspectionTemplateCommandOutput}
 * @see {@link UpdateSensitivityInspectionTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSensitivityInspectionTemplateCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class UpdateSensitivityInspectionTemplateCommand extends $Command
  .classBuilder<
    UpdateSensitivityInspectionTemplateCommandInput,
    UpdateSensitivityInspectionTemplateCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "UpdateSensitivityInspectionTemplate", {})
  .n("Macie2Client", "UpdateSensitivityInspectionTemplateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSensitivityInspectionTemplateCommand)
  .de(de_UpdateSensitivityInspectionTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSensitivityInspectionTemplateRequest;
      output: {};
    };
    sdk: {
      input: UpdateSensitivityInspectionTemplateCommandInput;
      output: UpdateSensitivityInspectionTemplateCommandOutput;
    };
  };
}
