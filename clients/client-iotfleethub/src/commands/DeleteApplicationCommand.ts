// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetHubClient";
import { DeleteApplicationRequest, DeleteApplicationResponse } from "../models/models_0";
import { DeleteApplication } from "../schemas/schemas_1_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandInput extends DeleteApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandOutput extends DeleteApplicationResponse, __MetadataBearer {}

/**
 * <p>Deletes a Fleet Hub for IoT Device Management web application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetHubClient, DeleteApplicationCommand } from "@aws-sdk/client-iotfleethub"; // ES Modules import
 * // const { IoTFleetHubClient, DeleteApplicationCommand } = require("@aws-sdk/client-iotfleethub"); // CommonJS import
 * // import type { IoTFleetHubClientConfig } from "@aws-sdk/client-iotfleethub";
 * const config = {}; // type is IoTFleetHubClientConfig
 * const client = new IoTFleetHubClient(config);
 * const input = { // DeleteApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationCommandInput - {@link DeleteApplicationCommandInput}
 * @returns {@link DeleteApplicationCommandOutput}
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetHubClientResolvedConfig | config} for IoTFleetHubClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTFleetHubServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetHub service.</p>
 *
 *
 * @public
 */
export class DeleteApplicationCommand extends $Command
  .classBuilder<
    DeleteApplicationCommandInput,
    DeleteApplicationCommandOutput,
    IoTFleetHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTFleetHub", "DeleteApplication", {})
  .n("IoTFleetHubClient", "DeleteApplicationCommand")
  .sc(DeleteApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationCommandInput;
      output: DeleteApplicationCommandOutput;
    };
  };
}
