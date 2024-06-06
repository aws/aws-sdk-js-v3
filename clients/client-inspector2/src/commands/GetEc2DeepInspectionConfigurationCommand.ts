// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  GetEc2DeepInspectionConfigurationRequest,
  GetEc2DeepInspectionConfigurationResponse,
} from "../models/models_0";
import {
  de_GetEc2DeepInspectionConfigurationCommand,
  se_GetEc2DeepInspectionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEc2DeepInspectionConfigurationCommand}.
 */
export interface GetEc2DeepInspectionConfigurationCommandInput extends GetEc2DeepInspectionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetEc2DeepInspectionConfigurationCommand}.
 */
export interface GetEc2DeepInspectionConfigurationCommandOutput
  extends GetEc2DeepInspectionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the activation status of Amazon Inspector deep inspection and custom paths associated with your account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetEc2DeepInspectionConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetEc2DeepInspectionConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = {};
 * const command = new GetEc2DeepInspectionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEc2DeepInspectionConfigurationResponse
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
 * @param GetEc2DeepInspectionConfigurationCommandInput - {@link GetEc2DeepInspectionConfigurationCommandInput}
 * @returns {@link GetEc2DeepInspectionConfigurationCommandOutput}
 * @see {@link GetEc2DeepInspectionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEc2DeepInspectionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class GetEc2DeepInspectionConfigurationCommand extends $Command
  .classBuilder<
    GetEc2DeepInspectionConfigurationCommandInput,
    GetEc2DeepInspectionConfigurationCommandOutput,
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
  .s("Inspector2", "GetEc2DeepInspectionConfiguration", {})
  .n("Inspector2Client", "GetEc2DeepInspectionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetEc2DeepInspectionConfigurationCommand)
  .de(de_GetEc2DeepInspectionConfigurationCommand)
  .build() {}
