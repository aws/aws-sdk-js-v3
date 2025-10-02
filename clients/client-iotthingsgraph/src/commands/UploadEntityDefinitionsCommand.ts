// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UploadEntityDefinitionsRequest, UploadEntityDefinitionsResponse } from "../models/models_0";
import { de_UploadEntityDefinitionsCommand, se_UploadEntityDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UploadEntityDefinitionsCommand}.
 */
export interface UploadEntityDefinitionsCommandInput extends UploadEntityDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link UploadEntityDefinitionsCommand}.
 */
export interface UploadEntityDefinitionsCommandOutput extends UploadEntityDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if
 *       <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter  is set to
 *          <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true,
 *       all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p>
 *          <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users
 *       can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the
 *          <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p>
 *          <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p>
 *          <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>,
 *          <code>Mapping</code>, <code>Enum</code>.
 *          </p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, UploadEntityDefinitionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, UploadEntityDefinitionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // UploadEntityDefinitionsRequest
 *   document: { // DefinitionDocument
 *     language: "GRAPHQL", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   syncWithPublicNamespace: true || false,
 *   deprecateExistingEntities: true || false,
 * };
 * const command = new UploadEntityDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // UploadEntityDefinitionsResponse
 * //   uploadId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UploadEntityDefinitionsCommandInput - {@link UploadEntityDefinitionsCommandInput}
 * @returns {@link UploadEntityDefinitionsCommandOutput}
 * @see {@link UploadEntityDefinitionsCommandInput} for command's `input` shape.
 * @see {@link UploadEntityDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class UploadEntityDefinitionsCommand extends $Command
  .classBuilder<
    UploadEntityDefinitionsCommandInput,
    UploadEntityDefinitionsCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "UploadEntityDefinitions", {})
  .n("IoTThingsGraphClient", "UploadEntityDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_UploadEntityDefinitionsCommand)
  .de(de_UploadEntityDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadEntityDefinitionsRequest;
      output: UploadEntityDefinitionsResponse;
    };
    sdk: {
      input: UploadEntityDefinitionsCommandInput;
      output: UploadEntityDefinitionsCommandOutput;
    };
  };
}
