// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateUserAccessLoggingSettingsRequest,
  CreateUserAccessLoggingSettingsResponse,
} from "../models/models_0";
import { CreateUserAccessLoggingSettings } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserAccessLoggingSettingsCommand}.
 */
export interface CreateUserAccessLoggingSettingsCommandInput extends CreateUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserAccessLoggingSettingsCommand}.
 */
export interface CreateUserAccessLoggingSettingsCommandOutput
  extends CreateUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Creates a user access logging settings resource that can be associated with a web
 *          portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, CreateUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, CreateUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // CreateUserAccessLoggingSettingsRequest
 *   kinesisStreamArn: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserAccessLoggingSettingsResponse
 * //   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateUserAccessLoggingSettingsCommandInput - {@link CreateUserAccessLoggingSettingsCommandInput}
 * @returns {@link CreateUserAccessLoggingSettingsCommandOutput}
 * @see {@link CreateUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class CreateUserAccessLoggingSettingsCommand extends $Command
  .classBuilder<
    CreateUserAccessLoggingSettingsCommandInput,
    CreateUserAccessLoggingSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "CreateUserAccessLoggingSettings", {})
  .n("WorkSpacesWebClient", "CreateUserAccessLoggingSettingsCommand")
  .sc(CreateUserAccessLoggingSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserAccessLoggingSettingsRequest;
      output: CreateUserAccessLoggingSettingsResponse;
    };
    sdk: {
      input: CreateUserAccessLoggingSettingsCommandInput;
      output: CreateUserAccessLoggingSettingsCommandOutput;
    };
  };
}
