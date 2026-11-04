// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedThingMetaDataRequest, GetManagedThingMetaDataResponse } from "../models/models_0";
import { GetManagedThingMetaData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get the metadata information for a managed thing.
 *
 * > **Note:** The `managedThing` `metadata` parameter is used for associating attributes with a `managedThing` that can be used for grouping over-the-air (OTA) tasks. Name value pairs in `metadata` can be used in the `OtaTargetQueryString` parameter for the `CreateOtaTask` API operation.
 *
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class GetManagedThingMetaDataCommand extends command<GetManagedThingMetaDataCommandInput, GetManagedThingMetaDataCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedThingMetaData",
  GetManagedThingMetaData$
) {
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
