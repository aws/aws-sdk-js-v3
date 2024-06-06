// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  UpdatePackageVersionRequest,
  UpdatePackageVersionRequestFilterSensitiveLog,
  UpdatePackageVersionResponse,
} from "../models/models_2";
import { de_UpdatePackageVersionCommand, se_UpdatePackageVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackageVersionCommand}.
 */
export interface UpdatePackageVersionCommandInput extends UpdatePackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageVersionCommand}.
 */
export interface UpdatePackageVersionCommandOutput extends UpdatePackageVersionResponse, __MetadataBearer {}

/**
 * <p>Updates the supported fields for a specific package version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdatePackageVersion</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdatePackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdatePackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdatePackageVersionRequest
 *   packageName: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   attributes: { // ResourceAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   action: "PUBLISH" || "DEPRECATE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePackageVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePackageVersionCommandInput - {@link UpdatePackageVersionCommandInput}
 * @returns {@link UpdatePackageVersionCommandOutput}
 * @see {@link UpdatePackageVersionCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource with the same name already exists.</p>
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
 * @public
 */
export class UpdatePackageVersionCommand extends $Command
  .classBuilder<
    UpdatePackageVersionCommandInput,
    UpdatePackageVersionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdatePackageVersion", {})
  .n("IoTClient", "UpdatePackageVersionCommand")
  .f(UpdatePackageVersionRequestFilterSensitiveLog, void 0)
  .ser(se_UpdatePackageVersionCommand)
  .de(de_UpdatePackageVersionCommand)
  .build() {}
