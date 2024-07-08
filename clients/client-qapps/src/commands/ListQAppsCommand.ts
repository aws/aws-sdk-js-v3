// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListQAppsInput, ListQAppsOutput } from "../models/models_0";
import { de_ListQAppsCommand, se_ListQAppsCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQAppsCommand}.
 */
export interface ListQAppsCommandInput extends ListQAppsInput {}
/**
 * @public
 *
 * The output of {@link ListQAppsCommand}.
 */
export interface ListQAppsCommandOutput extends ListQAppsOutput, __MetadataBearer {}

/**
 * <p>Lists the Amazon Q Apps owned by or associated with the user either because
 *       they created it or because they used it from the library in the past. The user
 *       identity is extracted from the credentials used to invoke this operation..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, ListQAppsCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, ListQAppsCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // ListQAppsInput
 *   instanceId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListQAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListQAppsOutput
 * //   apps: [ // UserAppsList // required
 * //     { // UserAppItem
 * //       appId: "STRING_VALUE", // required
 * //       appArn: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       canEdit: true || false,
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQAppsCommandInput - {@link ListQAppsCommandInput}
 * @returns {@link ListQAppsCommandOutput}
 * @see {@link ListQAppsCommandInput} for command's `input` shape.
 * @see {@link ListQAppsCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
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
export class ListQAppsCommand extends $Command
  .classBuilder<
    ListQAppsCommandInput,
    ListQAppsCommandOutput,
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
  .s("QAppsService", "ListQApps", {})
  .n("QAppsClient", "ListQAppsCommand")
  .f(void 0, void 0)
  .ser(se_ListQAppsCommand)
  .de(de_ListQAppsCommand)
  .build() {}
