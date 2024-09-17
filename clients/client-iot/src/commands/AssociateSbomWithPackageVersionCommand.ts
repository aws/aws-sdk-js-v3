// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AssociateSbomWithPackageVersionRequest, AssociateSbomWithPackageVersionResponse } from "../models/models_0";
import {
  de_AssociateSbomWithPackageVersionCommand,
  se_AssociateSbomWithPackageVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSbomWithPackageVersionCommand}.
 */
export interface AssociateSbomWithPackageVersionCommandInput extends AssociateSbomWithPackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSbomWithPackageVersionCommand}.
 */
export interface AssociateSbomWithPackageVersionCommandOutput
  extends AssociateSbomWithPackageVersionResponse,
    __MetadataBearer {}

/**
 * <p>Associates a software bill of materials (SBOM) with a specific software package version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateSbomWithPackageVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AssociateSbomWithPackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AssociateSbomWithPackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // AssociateSbomWithPackageVersionRequest
 *   packageName: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   sbom: { // Sbom
 *     s3Location: { // S3Location
 *       bucket: "STRING_VALUE",
 *       key: "STRING_VALUE",
 *       version: "STRING_VALUE",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AssociateSbomWithPackageVersionCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSbomWithPackageVersionResponse
 * //   packageName: "STRING_VALUE",
 * //   versionName: "STRING_VALUE",
 * //   sbom: { // Sbom
 * //     s3Location: { // S3Location
 * //       bucket: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //     },
 * //   },
 * //   sbomValidationStatus: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * // };
 *
 * ```
 *
 * @param AssociateSbomWithPackageVersionCommandInput - {@link AssociateSbomWithPackageVersionCommandInput}
 * @returns {@link AssociateSbomWithPackageVersionCommandOutput}
 * @see {@link AssociateSbomWithPackageVersionCommandInput} for command's `input` shape.
 * @see {@link AssociateSbomWithPackageVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
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
export class AssociateSbomWithPackageVersionCommand extends $Command
  .classBuilder<
    AssociateSbomWithPackageVersionCommandInput,
    AssociateSbomWithPackageVersionCommandOutput,
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
  .s("AWSIotService", "AssociateSbomWithPackageVersion", {})
  .n("IoTClient", "AssociateSbomWithPackageVersionCommand")
  .f(void 0, void 0)
  .ser(se_AssociateSbomWithPackageVersionCommand)
  .de(de_AssociateSbomWithPackageVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSbomWithPackageVersionRequest;
      output: AssociateSbomWithPackageVersionResponse;
    };
    sdk: {
      input: AssociateSbomWithPackageVersionCommandInput;
      output: AssociateSbomWithPackageVersionCommandOutput;
    };
  };
}
