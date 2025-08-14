// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQAppSessionMetadataInput, UpdateQAppSessionMetadataOutput } from "../models/models_0";
import { de_UpdateQAppSessionMetadataCommand, se_UpdateQAppSessionMetadataCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQAppSessionMetadataCommand}.
 */
export interface UpdateQAppSessionMetadataCommandInput extends UpdateQAppSessionMetadataInput {}
/**
 * @public
 *
 * The output of {@link UpdateQAppSessionMetadataCommand}.
 */
export interface UpdateQAppSessionMetadataCommandOutput extends UpdateQAppSessionMetadataOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration metadata of a session for a given Q App <code>sessionId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, UpdateQAppSessionMetadataCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, UpdateQAppSessionMetadataCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // UpdateQAppSessionMetadataInput
 *   instanceId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   sessionName: "STRING_VALUE",
 *   sharingConfiguration: { // SessionSharingConfiguration
 *     enabled: true || false, // required
 *     acceptResponses: true || false,
 *     revealCards: true || false,
 *   },
 * };
 * const command = new UpdateQAppSessionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQAppSessionMetadataOutput
 * //   sessionId: "STRING_VALUE", // required
 * //   sessionArn: "STRING_VALUE", // required
 * //   sessionName: "STRING_VALUE",
 * //   sharingConfiguration: { // SessionSharingConfiguration
 * //     enabled: true || false, // required
 * //     acceptResponses: true || false,
 * //     revealCards: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateQAppSessionMetadataCommandInput - {@link UpdateQAppSessionMetadataCommandInput}
 * @returns {@link UpdateQAppSessionMetadataCommandOutput}
 * @see {@link UpdateQAppSessionMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateQAppSessionMetadataCommandOutput} for command's `response` shape.
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
 *  <p>The requested operation could not be completed because it would exceed the service's quota or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
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
 *
 * @example Updates an existing session metadata for an Amazon Q App
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   sessionId: "56ae47c3-10bc-4c2c-8b27-9b9fe23b3edb",
 *   sessionName: "Trip itinerary collection session",
 *   sharingConfiguration: {
 *     acceptResponses: true,
 *     enabled: true,
 *     revealCards: false
 *   }
 * };
 * const command = new UpdateQAppSessionMetadataCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionArn: "arn:aws:qapps:us-west-2:0123456789012:application/cbea8329-41c0-4566-a112-19250921a220/qapp/387ccac9-4717-489f-841f-729b7d7de355/session/56ae47c3-10bc-4c2c-8b27-9b9fe23b3edb",
 *   sessionId: "56ae47c3-10bc-4c2c-8b27-9b9fe23b3edb",
 *   sessionName: "Trip itinerary collection session",
 *   sharingConfiguration: {
 *     acceptResponses: true,
 *     enabled: true,
 *     revealCards: false
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateQAppSessionMetadataCommand extends $Command
  .classBuilder<
    UpdateQAppSessionMetadataCommandInput,
    UpdateQAppSessionMetadataCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "UpdateQAppSessionMetadata", {})
  .n("QAppsClient", "UpdateQAppSessionMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateQAppSessionMetadataCommand)
  .de(de_UpdateQAppSessionMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQAppSessionMetadataInput;
      output: UpdateQAppSessionMetadataOutput;
    };
    sdk: {
      input: UpdateQAppSessionMetadataCommandInput;
      output: UpdateQAppSessionMetadataCommandOutput;
    };
  };
}
