// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateUserAccessLoggingSettingsRequest,
  CreateUserAccessLoggingSettingsResponse,
} from "../models/models_0";
import { CreateUserAccessLoggingSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateUserAccessLoggingSettingsCommandOutput extends CreateUserAccessLoggingSettingsResponse, __MetadataBearer {}

/**
 * Creates a user access logging settings resource that can be associated with a web portal.
 *
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
export class CreateUserAccessLoggingSettingsCommand extends command<CreateUserAccessLoggingSettingsCommandInput, CreateUserAccessLoggingSettingsCommandOutput>(
  _ep0,
  _mw0,
  "CreateUserAccessLoggingSettings",
  CreateUserAccessLoggingSettings$
) {
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
