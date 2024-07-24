// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLibraryItemInput, CreateLibraryItemOutput } from "../models/models_0";
import { de_CreateLibraryItemCommand, se_CreateLibraryItemCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLibraryItemCommand}.
 */
export interface CreateLibraryItemCommandInput extends CreateLibraryItemInput {}
/**
 * @public
 *
 * The output of {@link CreateLibraryItemCommand}.
 */
export interface CreateLibraryItemCommandOutput extends CreateLibraryItemOutput, __MetadataBearer {}

/**
 * <p>Creates a new library item for an Amazon Q App, allowing it to be discovered and
 *       used by other allowed users. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, CreateLibraryItemCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, CreateLibraryItemCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // CreateLibraryItemInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   appVersion: Number("int"), // required
 *   categories: [ // CategoryIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateLibraryItemCommand(input);
 * const response = await client.send(command);
 * // { // CreateLibraryItemOutput
 * //   libraryItemId: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   ratingCount: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CreateLibraryItemCommandInput - {@link CreateLibraryItemCommandInput}
 * @returns {@link CreateLibraryItemCommandOutput}
 * @see {@link CreateLibraryItemCommandInput} for command's `input` shape.
 * @see {@link CreateLibraryItemCommandOutput} for command's `response` shape.
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
export class CreateLibraryItemCommand extends $Command
  .classBuilder<
    CreateLibraryItemCommandInput,
    CreateLibraryItemCommandOutput,
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
  .s("QAppsService", "CreateLibraryItem", {})
  .n("QAppsClient", "CreateLibraryItemCommand")
  .f(void 0, void 0)
  .ser(se_CreateLibraryItemCommand)
  .de(de_CreateLibraryItemCommand)
  .build() {}
