// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DisassociateSbomFromPackageVersionRequest,
  DisassociateSbomFromPackageVersionResponse,
} from "../models/models_1";
import {
  de_DisassociateSbomFromPackageVersionCommand,
  se_DisassociateSbomFromPackageVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSbomFromPackageVersionCommand}.
 */
export interface DisassociateSbomFromPackageVersionCommandInput extends DisassociateSbomFromPackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSbomFromPackageVersionCommand}.
 */
export interface DisassociateSbomFromPackageVersionCommandOutput
  extends DisassociateSbomFromPackageVersionResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the selected software bill of materials (SBOM) from a specific software package version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisassociateSbomWithPackageVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DisassociateSbomFromPackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DisassociateSbomFromPackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DisassociateSbomFromPackageVersionRequest
 *   packageName: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateSbomFromPackageVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSbomFromPackageVersionCommandInput - {@link DisassociateSbomFromPackageVersionCommandInput}
 * @returns {@link DisassociateSbomFromPackageVersionCommandOutput}
 * @see {@link DisassociateSbomFromPackageVersionCommandInput} for command's `input` shape.
 * @see {@link DisassociateSbomFromPackageVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateSbomFromPackageVersionCommand extends $Command
  .classBuilder<
    DisassociateSbomFromPackageVersionCommandInput,
    DisassociateSbomFromPackageVersionCommandOutput,
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
  .s("AWSIotService", "DisassociateSbomFromPackageVersion", {})
  .n("IoTClient", "DisassociateSbomFromPackageVersionCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateSbomFromPackageVersionCommand)
  .de(de_DisassociateSbomFromPackageVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSbomFromPackageVersionRequest;
      output: {};
    };
    sdk: {
      input: DisassociateSbomFromPackageVersionCommandInput;
      output: DisassociateSbomFromPackageVersionCommandOutput;
    };
  };
}
