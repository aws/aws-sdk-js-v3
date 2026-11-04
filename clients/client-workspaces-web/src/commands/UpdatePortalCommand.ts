// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePortalRequest, UpdatePortalResponse } from "../models/models_0";
import { UpdatePortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePortalCommand}.
 */
export interface UpdatePortalCommandInput extends UpdatePortalRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePortalCommand}.
 */
export interface UpdatePortalCommandOutput extends UpdatePortalResponse, __MetadataBearer {}

/**
 * Updates a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdatePortalCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdatePortalCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdatePortalRequest
 *   portalArn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   authenticationType: "STRING_VALUE",
 *   instanceType: "STRING_VALUE",
 *   maxConcurrentSessions: Number("int"),
 *   portalCustomDomain: "STRING_VALUE",
 * };
 * const command = new UpdatePortalCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePortalResponse
 * //   portal: { // Portal
 * //     portalArn: "STRING_VALUE", // required
 * //     rendererType: "STRING_VALUE",
 * //     browserType: "STRING_VALUE",
 * //     portalStatus: "STRING_VALUE",
 * //     portalEndpoint: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     browserSettingsArn: "STRING_VALUE",
 * //     dataProtectionSettingsArn: "STRING_VALUE",
 * //     userSettingsArn: "STRING_VALUE",
 * //     networkSettingsArn: "STRING_VALUE",
 * //     sessionLoggerArn: "STRING_VALUE",
 * //     trustStoreArn: "STRING_VALUE",
 * //     statusReason: "STRING_VALUE",
 * //     userAccessLoggingSettingsArn: "STRING_VALUE",
 * //     authenticationType: "STRING_VALUE",
 * //     ipAccessSettingsArn: "STRING_VALUE",
 * //     customerManagedKey: "STRING_VALUE",
 * //     additionalEncryptionContext: { // EncryptionContextMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     instanceType: "STRING_VALUE",
 * //     maxConcurrentSessions: Number("int"),
 * //     portalCustomDomain: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePortalCommandInput - {@link UpdatePortalCommandInput}
 * @returns {@link UpdatePortalCommandOutput}
 * @see {@link UpdatePortalCommandInput} for command's `input` shape.
 * @see {@link UpdatePortalCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
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
export class UpdatePortalCommand extends command<UpdatePortalCommandInput, UpdatePortalCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePortal",
  UpdatePortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePortalRequest;
      output: UpdatePortalResponse;
    };
    sdk: {
      input: UpdatePortalCommandInput;
      output: UpdatePortalCommandOutput;
    };
  };
}
