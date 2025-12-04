// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetUserAccessLoggingSettingsRequest, GetUserAccessLoggingSettingsResponse } from "../models/models_0";
import { GetUserAccessLoggingSettings } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserAccessLoggingSettingsCommand}.
 */
export interface GetUserAccessLoggingSettingsCommandInput extends GetUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetUserAccessLoggingSettingsCommand}.
 */
export interface GetUserAccessLoggingSettingsCommandOutput
  extends GetUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Gets user access logging settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetUserAccessLoggingSettingsRequest
 *   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new GetUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserAccessLoggingSettingsResponse
 * //   userAccessLoggingSettings: { // UserAccessLoggingSettings
 * //     userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     kinesisStreamArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserAccessLoggingSettingsCommandInput - {@link GetUserAccessLoggingSettingsCommandInput}
 * @returns {@link GetUserAccessLoggingSettingsCommandOutput}
 * @see {@link GetUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link GetUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
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
export class GetUserAccessLoggingSettingsCommand extends $Command
  .classBuilder<
    GetUserAccessLoggingSettingsCommandInput,
    GetUserAccessLoggingSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "GetUserAccessLoggingSettings", {})
  .n("WorkSpacesWebClient", "GetUserAccessLoggingSettingsCommand")
  .sc(GetUserAccessLoggingSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserAccessLoggingSettingsRequest;
      output: GetUserAccessLoggingSettingsResponse;
    };
    sdk: {
      input: GetUserAccessLoggingSettingsCommandInput;
      output: GetUserAccessLoggingSettingsCommandOutput;
    };
  };
}
