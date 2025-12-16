// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AssociateDataProtectionSettingsRequest,
  AssociateDataProtectionSettingsResponse,
} from "../models/models_0";
import { AssociateDataProtectionSettings$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDataProtectionSettingsCommand}.
 */
export interface AssociateDataProtectionSettingsCommandInput extends AssociateDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDataProtectionSettingsCommand}.
 */
export interface AssociateDataProtectionSettingsCommandOutput
  extends AssociateDataProtectionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Associates a data protection settings resource with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateDataProtectionSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   dataProtectionSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateDataProtectionSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   dataProtectionSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateDataProtectionSettingsCommandInput - {@link AssociateDataProtectionSettingsCommandInput}
 * @returns {@link AssociateDataProtectionSettingsCommandOutput}
 * @see {@link AssociateDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateDataProtectionSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class AssociateDataProtectionSettingsCommand extends $Command
  .classBuilder<
    AssociateDataProtectionSettingsCommandInput,
    AssociateDataProtectionSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "AssociateDataProtectionSettings", {})
  .n("WorkSpacesWebClient", "AssociateDataProtectionSettingsCommand")
  .sc(AssociateDataProtectionSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDataProtectionSettingsRequest;
      output: AssociateDataProtectionSettingsResponse;
    };
    sdk: {
      input: AssociateDataProtectionSettingsCommandInput;
      output: AssociateDataProtectionSettingsCommandOutput;
    };
  };
}
