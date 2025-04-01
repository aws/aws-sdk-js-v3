// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  UpdatePackageRequest,
  UpdatePackageRequestFilterSensitiveLog,
  UpdatePackageResponse,
} from "../models/models_2";
import { de_UpdatePackageCommand, se_UpdatePackageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackageCommand}.
 */
export interface UpdatePackageCommandInput extends UpdatePackageRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageCommand}.
 */
export interface UpdatePackageCommandOutput extends UpdatePackageResponse, __MetadataBearer {}

/**
 * <p>Updates the supported fields for a specific software package.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdatePackage</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdatePackageCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdatePackageCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdatePackageRequest
 *   packageName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   defaultVersionName: "STRING_VALUE",
 *   unsetDefaultVersion: true || false,
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePackageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePackageCommandInput - {@link UpdatePackageCommandInput}
 * @returns {@link UpdatePackageCommandOutput}
 * @see {@link UpdatePackageCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdatePackageCommand extends $Command
  .classBuilder<
    UpdatePackageCommandInput,
    UpdatePackageCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdatePackage", {})
  .n("IoTClient", "UpdatePackageCommand")
  .f(UpdatePackageRequestFilterSensitiveLog, void 0)
  .ser(se_UpdatePackageCommand)
  .de(de_UpdatePackageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePackageRequest;
      output: {};
    };
    sdk: {
      input: UpdatePackageCommandInput;
      output: UpdatePackageCommandOutput;
    };
  };
}
