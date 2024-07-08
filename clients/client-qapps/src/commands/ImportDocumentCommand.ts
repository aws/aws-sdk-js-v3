// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportDocumentInput, ImportDocumentOutput } from "../models/models_0";
import { de_ImportDocumentCommand, se_ImportDocumentCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportDocumentCommand}.
 */
export interface ImportDocumentCommandInput extends ImportDocumentInput {}
/**
 * @public
 *
 * The output of {@link ImportDocumentCommand}.
 */
export interface ImportDocumentCommandOutput extends ImportDocumentOutput, __MetadataBearer {}

/**
 * <p>Uploads a file that can then be used either as a default in a
 *       <code>FileUploadCard</code> from Q App definition or as a file that
 *       is used inside a single Q App run. The purpose of the document is
 *       determined by a scope parameter that indicates whether it is at the
 *       app definition level or at the app session level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, ImportDocumentCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, ImportDocumentCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // ImportDocumentInput
 *   instanceId: "STRING_VALUE", // required
 *   cardId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   fileContentsBase64: "STRING_VALUE", // required
 *   fileName: "STRING_VALUE", // required
 *   scope: "APPLICATION" || "SESSION", // required
 *   sessionId: "STRING_VALUE",
 * };
 * const command = new ImportDocumentCommand(input);
 * const response = await client.send(command);
 * // { // ImportDocumentOutput
 * //   fileId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportDocumentCommandInput - {@link ImportDocumentCommandInput}
 * @returns {@link ImportDocumentCommandOutput}
 * @see {@link ImportDocumentCommandInput} for command's `input` shape.
 * @see {@link ImportDocumentCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link ContentTooLargeException} (client fault)
 *  <p>The requested operation could not be completed because
 *       the content exceeds the maximum allowed size.</p>
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
export class ImportDocumentCommand extends $Command
  .classBuilder<
    ImportDocumentCommandInput,
    ImportDocumentCommandOutput,
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
  .s("QAppsService", "ImportDocument", {})
  .n("QAppsClient", "ImportDocumentCommand")
  .f(void 0, void 0)
  .ser(se_ImportDocumentCommand)
  .de(de_ImportDocumentCommand)
  .build() {}
