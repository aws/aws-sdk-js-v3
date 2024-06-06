// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  UpdateOrgEc2DeepInspectionConfigurationRequest,
  UpdateOrgEc2DeepInspectionConfigurationResponse,
} from "../models/models_1";
import {
  de_UpdateOrgEc2DeepInspectionConfigurationCommand,
  se_UpdateOrgEc2DeepInspectionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrgEc2DeepInspectionConfigurationCommand}.
 */
export interface UpdateOrgEc2DeepInspectionConfigurationCommandInput
  extends UpdateOrgEc2DeepInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrgEc2DeepInspectionConfigurationCommand}.
 */
export interface UpdateOrgEc2DeepInspectionConfigurationCommandOutput
  extends UpdateOrgEc2DeepInspectionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the Amazon Inspector deep inspection custom paths for your organization. You must be an Amazon Inspector delegated administrator to use this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateOrgEc2DeepInspectionConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateOrgEc2DeepInspectionConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // UpdateOrgEc2DeepInspectionConfigurationRequest
 *   orgPackagePaths: [ // PathList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateOrgEc2DeepInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOrgEc2DeepInspectionConfigurationCommandInput - {@link UpdateOrgEc2DeepInspectionConfigurationCommandInput}
 * @returns {@link UpdateOrgEc2DeepInspectionConfigurationCommandOutput}
 * @see {@link UpdateOrgEc2DeepInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateOrgEc2DeepInspectionConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateOrgEc2DeepInspectionConfigurationCommand extends $Command
  .classBuilder<
    UpdateOrgEc2DeepInspectionConfigurationCommandInput,
    UpdateOrgEc2DeepInspectionConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "UpdateOrgEc2DeepInspectionConfiguration", {})
  .n("Inspector2Client", "UpdateOrgEc2DeepInspectionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateOrgEc2DeepInspectionConfigurationCommand)
  .de(de_UpdateOrgEc2DeepInspectionConfigurationCommand)
  .build() {}
