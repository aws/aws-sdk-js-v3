// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBackendRequest, GetBackendResponse } from "../models/models_0";
import { de_GetBackendCommand, se_GetBackendCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBackendCommand}.
 */
export interface GetBackendCommandInput extends GetBackendRequest {}
/**
 * @public
 *
 * The output of {@link GetBackendCommand}.
 */
export interface GetBackendCommandOutput extends GetBackendResponse, __MetadataBearer {}

/**
 * <p>Provides project-level details for your Amplify UI project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // GetBackendRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE",
 * };
 * const command = new GetBackendCommand(input);
 * const response = await client.send(command);
 * // { // GetBackendResponse
 * //   AmplifyFeatureFlags: "STRING_VALUE",
 * //   AmplifyMetaConfig: "STRING_VALUE",
 * //   AppId: "STRING_VALUE",
 * //   AppName: "STRING_VALUE",
 * //   BackendEnvironmentList: [ // ListOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackendCommandInput - {@link GetBackendCommandInput}
 * @returns {@link GetBackendCommandOutput}
 * @see {@link GetBackendCommandInput} for command's `input` shape.
 * @see {@link GetBackendCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 * @public
 */
export class GetBackendCommand extends $Command
  .classBuilder<
    GetBackendCommandInput,
    GetBackendCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyBackend", "GetBackend", {})
  .n("AmplifyBackendClient", "GetBackendCommand")
  .f(void 0, void 0)
  .ser(se_GetBackendCommand)
  .de(de_GetBackendCommand)
  .build() {}
