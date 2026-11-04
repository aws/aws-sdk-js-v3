// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUserAccessLoggingSettingsRequest, GetUserAccessLoggingSettingsResponse } from "../models/models_0";
import { GetUserAccessLoggingSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetUserAccessLoggingSettingsCommandOutput extends GetUserAccessLoggingSettingsResponse, __MetadataBearer {}

/**
 * Gets user access logging settings.
 *
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
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class GetUserAccessLoggingSettingsCommand extends command<GetUserAccessLoggingSettingsCommandInput, GetUserAccessLoggingSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetUserAccessLoggingSettings",
  GetUserAccessLoggingSettings$
) {
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
