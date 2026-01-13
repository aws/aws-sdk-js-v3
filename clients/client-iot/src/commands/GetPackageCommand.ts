// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { GetPackageRequest, GetPackageResponse } from "../models/models_1";
import { GetPackage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPackageCommand}.
 */
export interface GetPackageCommandInput extends GetPackageRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageCommand}.
 */
export interface GetPackageCommandOutput extends GetPackageResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified software package.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPackage</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPackageCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPackageCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetPackageRequest
 *   packageName: "STRING_VALUE", // required
 * };
 * const command = new GetPackageCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageResponse
 * //   packageName: "STRING_VALUE",
 * //   packageArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   defaultVersionName: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPackageCommandInput - {@link GetPackageCommandInput}
 * @returns {@link GetPackageCommandOutput}
 * @see {@link GetPackageCommandInput} for command's `input` shape.
 * @see {@link GetPackageCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
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
export class GetPackageCommand extends $Command
  .classBuilder<
    GetPackageCommandInput,
    GetPackageCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetPackage", {})
  .n("IoTClient", "GetPackageCommand")
  .sc(GetPackage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPackageRequest;
      output: GetPackageResponse;
    };
    sdk: {
      input: GetPackageCommandInput;
      output: GetPackageCommandOutput;
    };
  };
}
