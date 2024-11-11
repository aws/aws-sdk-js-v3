// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  UpdateEc2DeepInspectionConfigurationRequest,
  UpdateEc2DeepInspectionConfigurationResponse,
} from "../models/models_1";
import {
  de_UpdateEc2DeepInspectionConfigurationCommand,
  se_UpdateEc2DeepInspectionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEc2DeepInspectionConfigurationCommand}.
 */
export interface UpdateEc2DeepInspectionConfigurationCommandInput extends UpdateEc2DeepInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEc2DeepInspectionConfigurationCommand}.
 */
export interface UpdateEc2DeepInspectionConfigurationCommandOutput
  extends UpdateEc2DeepInspectionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Activates, deactivates Amazon Inspector deep inspection, or updates custom paths for your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateEc2DeepInspectionConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateEc2DeepInspectionConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // UpdateEc2DeepInspectionConfigurationRequest
 *   activateDeepInspection: true || false,
 *   packagePaths: [ // PathList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateEc2DeepInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEc2DeepInspectionConfigurationResponse
 * //   packagePaths: [ // PathList
 * //     "STRING_VALUE",
 * //   ],
 * //   orgPackagePaths: [
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEc2DeepInspectionConfigurationCommandInput - {@link UpdateEc2DeepInspectionConfigurationCommandInput}
 * @returns {@link UpdateEc2DeepInspectionConfigurationCommandOutput}
 * @see {@link UpdateEc2DeepInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateEc2DeepInspectionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class UpdateEc2DeepInspectionConfigurationCommand extends $Command
  .classBuilder<
    UpdateEc2DeepInspectionConfigurationCommandInput,
    UpdateEc2DeepInspectionConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "UpdateEc2DeepInspectionConfiguration", {})
  .n("Inspector2Client", "UpdateEc2DeepInspectionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEc2DeepInspectionConfigurationCommand)
  .de(de_UpdateEc2DeepInspectionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEc2DeepInspectionConfigurationRequest;
      output: UpdateEc2DeepInspectionConfigurationResponse;
    };
    sdk: {
      input: UpdateEc2DeepInspectionConfigurationCommandInput;
      output: UpdateEc2DeepInspectionConfigurationCommandOutput;
    };
  };
}
