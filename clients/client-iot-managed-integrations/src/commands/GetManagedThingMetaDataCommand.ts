// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { GetManagedThingMetaDataRequest, GetManagedThingMetaDataResponse } from "../models/models_0";
import { GetManagedThingMetaData } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedThingMetaDataCommand}.
 */
export interface GetManagedThingMetaDataCommandInput extends GetManagedThingMetaDataRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedThingMetaDataCommand}.
 */
export interface GetManagedThingMetaDataCommandOutput extends GetManagedThingMetaDataResponse, __MetadataBearer {}

/**
 * <p>Get the metadata information for a managed thing.</p> <note> <p>The <code>managedThing</code> <code>metadata</code> parameter is used for associating attributes with a <code>managedThing</code> that can be used for grouping over-the-air (OTA) tasks. Name value pairs in <code>metadata</code> can be used in the <code>OtaTargetQueryString</code> parameter for the <code>CreateOtaTask</code> API operation.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetManagedThingMetaDataCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetManagedThingMetaDataCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetManagedThingMetaDataRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetManagedThingMetaDataCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedThingMetaDataResponse
 * //   ManagedThingId: "STRING_VALUE",
 * //   MetaData: { // MetaData
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedThingMetaDataCommandInput - {@link GetManagedThingMetaDataCommandInput}
 * @returns {@link GetManagedThingMetaDataCommandOutput}
 * @see {@link GetManagedThingMetaDataCommandInput} for command's `input` shape.
 * @see {@link GetManagedThingMetaDataCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class GetManagedThingMetaDataCommand extends $Command
  .classBuilder<
    GetManagedThingMetaDataCommandInput,
    GetManagedThingMetaDataCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetManagedThingMetaData", {})
  .n("IoTManagedIntegrationsClient", "GetManagedThingMetaDataCommand")
  .sc(GetManagedThingMetaData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedThingMetaDataRequest;
      output: GetManagedThingMetaDataResponse;
    };
    sdk: {
      input: GetManagedThingMetaDataCommandInput;
      output: GetManagedThingMetaDataCommandOutput;
    };
  };
}
