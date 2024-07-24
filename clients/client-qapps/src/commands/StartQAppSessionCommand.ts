// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartQAppSessionInput, StartQAppSessionOutput } from "../models/models_0";
import { de_StartQAppSessionCommand, se_StartQAppSessionCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartQAppSessionCommand}.
 */
export interface StartQAppSessionCommandInput extends StartQAppSessionInput {}
/**
 * @public
 *
 * The output of {@link StartQAppSessionCommand}.
 */
export interface StartQAppSessionCommandOutput extends StartQAppSessionOutput, __MetadataBearer {}

/**
 * <p>Starts a new session for an Amazon Q App, allowing inputs to be provided
 *       and the app to be run.</p>
 *          <note>
 *             <p>Each Q App session will be condensed into a single conversation
 *       in the web experience.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, StartQAppSessionCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, StartQAppSessionCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // StartQAppSessionInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   appVersion: Number("int"), // required
 *   initialValues: [ // CardValueList
 *     { // CardValue
 *       cardId: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartQAppSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartQAppSessionOutput
 * //   sessionId: "STRING_VALUE", // required
 * //   sessionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQAppSessionCommandInput - {@link StartQAppSessionCommandInput}
 * @returns {@link StartQAppSessionCommandOutput}
 * @see {@link StartQAppSessionCommandInput} for command's `input` shape.
 * @see {@link StartQAppSessionCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because
 *       it would exceed the service's quota or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many
 *       requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 * @public
 */
export class StartQAppSessionCommand extends $Command
  .classBuilder<
    StartQAppSessionCommandInput,
    StartQAppSessionCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "StartQAppSession", {})
  .n("QAppsClient", "StartQAppSessionCommand")
  .f(void 0, void 0)
  .ser(se_StartQAppSessionCommand)
  .de(de_StartQAppSessionCommand)
  .build() {}
