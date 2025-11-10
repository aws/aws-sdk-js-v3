// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHoursOfOperationOverrideRequest } from "../models/models_1";
import { DeleteHoursOfOperationOverride } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHoursOfOperationOverrideCommand}.
 */
export interface DeleteHoursOfOperationOverrideCommandInput extends DeleteHoursOfOperationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHoursOfOperationOverrideCommand}.
 */
export interface DeleteHoursOfOperationOverrideCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an hours of operation override in an Amazon Connect hours of operation
 *    resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteHoursOfOperationOverrideCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteHoursOfOperationOverrideCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteHoursOfOperationOverrideRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   HoursOfOperationOverrideId: "STRING_VALUE", // required
 * };
 * const command = new DeleteHoursOfOperationOverrideCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHoursOfOperationOverrideCommandInput - {@link DeleteHoursOfOperationOverrideCommandInput}
 * @returns {@link DeleteHoursOfOperationOverrideCommandOutput}
 * @see {@link DeleteHoursOfOperationOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteHoursOfOperationOverrideCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteHoursOfOperationOverrideCommand extends $Command
  .classBuilder<
    DeleteHoursOfOperationOverrideCommandInput,
    DeleteHoursOfOperationOverrideCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteHoursOfOperationOverride", {})
  .n("ConnectClient", "DeleteHoursOfOperationOverrideCommand")
  .sc(DeleteHoursOfOperationOverride)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHoursOfOperationOverrideRequest;
      output: {};
    };
    sdk: {
      input: DeleteHoursOfOperationOverrideCommandInput;
      output: DeleteHoursOfOperationOverrideCommandOutput;
    };
  };
}
