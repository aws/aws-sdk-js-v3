// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetQAppSessionMetadataInput, GetQAppSessionMetadataOutput } from "../models/models_0";
import type { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { GetQAppSessionMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQAppSessionMetadataCommand}.
 */
export interface GetQAppSessionMetadataCommandInput extends GetQAppSessionMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetQAppSessionMetadataCommand}.
 */
export interface GetQAppSessionMetadataCommandOutput extends GetQAppSessionMetadataOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current configuration of a Q App session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, GetQAppSessionMetadataCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, GetQAppSessionMetadataCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // GetQAppSessionMetadataInput
 *   instanceId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetQAppSessionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetQAppSessionMetadataOutput
 * //   sessionId: "STRING_VALUE", // required
 * //   sessionArn: "STRING_VALUE", // required
 * //   sessionName: "STRING_VALUE",
 * //   sharingConfiguration: { // SessionSharingConfiguration
 * //     enabled: true || false, // required
 * //     acceptResponses: true || false,
 * //     revealCards: true || false,
 * //   },
 * //   sessionOwner: true || false,
 * // };
 *
 * ```
 *
 * @param GetQAppSessionMetadataCommandInput - {@link GetQAppSessionMetadataCommandInput}
 * @returns {@link GetQAppSessionMetadataCommandOutput}
 * @see {@link GetQAppSessionMetadataCommandInput} for command's `input` shape.
 * @see {@link GetQAppSessionMetadataCommandOutput} for command's `response` shape.
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
 * @example Retrieves an existing session metadata for an Amazon Q App
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   sessionId: "56ae47c3-10bc-4c2c-8b27-9b9fe23b3edb"
 * };
 * const command = new GetQAppSessionMetadataCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionArn: "arn:aws:qapps:us-west-2:0123456789012:application/cbea8329-41c0-4566-a112-19250921a220/qapp/387ccac9-4717-489f-841f-729b7d7de355/session/56ae47c3-10bc-4c2c-8b27-9b9fe23b3edb",
 *   sessionId: "56ae47c3-10bc-4c2c-8b27-9b9fe23b3edb",
 *   sessionName: "Trip itinerary collection session",
 *   sessionOwner: true,
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
export class GetQAppSessionMetadataCommand extends $Command
  .classBuilder<
    GetQAppSessionMetadataCommandInput,
    GetQAppSessionMetadataCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "GetQAppSessionMetadata", {})
  .n("QAppsClient", "GetQAppSessionMetadataCommand")
  .sc(GetQAppSessionMetadata$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQAppSessionMetadataInput;
      output: GetQAppSessionMetadataOutput;
    };
    sdk: {
      input: GetQAppSessionMetadataCommandInput;
      output: GetQAppSessionMetadataCommandOutput;
    };
  };
}
