// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type {
  GetSensitivityInspectionTemplateRequest,
  GetSensitivityInspectionTemplateResponse,
} from "../models/models_0";
import { GetSensitivityInspectionTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSensitivityInspectionTemplateCommand}.
 */
export interface GetSensitivityInspectionTemplateCommandInput extends GetSensitivityInspectionTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetSensitivityInspectionTemplateCommand}.
 */
export interface GetSensitivityInspectionTemplateCommandOutput
  extends GetSensitivityInspectionTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetSensitivityInspectionTemplateCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetSensitivityInspectionTemplateCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // GetSensitivityInspectionTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSensitivityInspectionTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetSensitivityInspectionTemplateResponse
 * //   description: "STRING_VALUE",
 * //   excludes: { // SensitivityInspectionTemplateExcludes
 * //     managedDataIdentifierIds: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   includes: { // SensitivityInspectionTemplateIncludes
 * //     allowListIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     customDataIdentifierIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     managedDataIdentifierIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   name: "STRING_VALUE",
 * //   sensitivityInspectionTemplateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSensitivityInspectionTemplateCommandInput - {@link GetSensitivityInspectionTemplateCommandInput}
 * @returns {@link GetSensitivityInspectionTemplateCommandOutput}
 * @see {@link GetSensitivityInspectionTemplateCommandInput} for command's `input` shape.
 * @see {@link GetSensitivityInspectionTemplateCommandOutput} for command's `response` shape.
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
export class GetSensitivityInspectionTemplateCommand extends $Command
  .classBuilder<
    GetSensitivityInspectionTemplateCommandInput,
    GetSensitivityInspectionTemplateCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetSensitivityInspectionTemplate", {})
  .n("Macie2Client", "GetSensitivityInspectionTemplateCommand")
  .sc(GetSensitivityInspectionTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSensitivityInspectionTemplateRequest;
      output: GetSensitivityInspectionTemplateResponse;
    };
    sdk: {
      input: GetSensitivityInspectionTemplateCommandInput;
      output: GetSensitivityInspectionTemplateCommandOutput;
    };
  };
}
