// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetTelemetryMetadataRequest, GetTelemetryMetadataResponse } from "../models/models_0";
import { de_GetTelemetryMetadataCommand, se_GetTelemetryMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTelemetryMetadataCommand}.
 */
export interface GetTelemetryMetadataCommandInput extends GetTelemetryMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetTelemetryMetadataCommand}.
 */
export interface GetTelemetryMetadataCommandOutput extends GetTelemetryMetadataResponse, __MetadataBearer {}

/**
 * <p>Information about the data that is collected for the specified assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetTelemetryMetadataCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetTelemetryMetadataCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // GetTelemetryMetadataRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 * };
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetTelemetryMetadataResponse
 * //   telemetryMetadata: [ // TelemetryMetadataList // required
 * //     { // TelemetryMetadata
 * //       messageType: "STRING_VALUE", // required
 * //       count: Number("long"), // required
 * //       dataSize: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTelemetryMetadataCommandInput - {@link GetTelemetryMetadataCommandInput}
 * @returns {@link GetTelemetryMetadataCommandOutput}
 * @see {@link GetTelemetryMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryMetadataCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 */
export class GetTelemetryMetadataCommand extends $Command
  .classBuilder<
    GetTelemetryMetadataCommandInput,
    GetTelemetryMetadataCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "GetTelemetryMetadata", {})
  .n("InspectorClient", "GetTelemetryMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetTelemetryMetadataCommand)
  .de(de_GetTelemetryMetadataCommand)
  .build() {}
