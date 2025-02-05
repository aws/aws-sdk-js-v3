// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateUserAccessLoggingSettingsRequest,
  CreateUserAccessLoggingSettingsRequestFilterSensitiveLog,
  CreateUserAccessLoggingSettingsResponse,
} from "../models/models_0";
import {
  de_CreateUserAccessLoggingSettingsCommand,
  se_CreateUserAccessLoggingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "CreateUserAccessLoggingSettings", {})
  .n("WorkSpacesWebClient", "CreateUserAccessLoggingSettingsCommand")
  .f(CreateUserAccessLoggingSettingsRequestFilterSensitiveLog, void 0)
  .ser(se_CreateUserAccessLoggingSettingsCommand)
  .de(de_CreateUserAccessLoggingSettingsCommand)
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
