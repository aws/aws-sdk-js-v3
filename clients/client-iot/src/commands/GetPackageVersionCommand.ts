// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { GetPackageVersionRequest, GetPackageVersionResponse } from "../models/models_1";
import { GetPackageVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPackageVersionCommand}.
 */
export interface GetPackageVersionCommandInput extends GetPackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageVersionCommand}.
 */
export interface GetPackageVersionCommandOutput extends GetPackageVersionResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified package version. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPackageVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetPackageVersionRequest
 *   packageName: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 * };
 * const command = new GetPackageVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageVersionResponse
 * //   packageVersionArn: "STRING_VALUE",
 * //   packageName: "STRING_VALUE",
 * //   versionName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   attributes: { // ResourceAttributes
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   artifact: { // PackageVersionArtifact
 * //     s3Location: { // S3Location
 * //       bucket: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //     },
 * //   },
 * //   status: "DRAFT" || "PUBLISHED" || "DEPRECATED",
 * //   errorReason: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * //   sbom: { // Sbom
 * //     s3Location: {
 * //       bucket: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //     },
 * //   },
 * //   sbomValidationStatus: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //   recipe: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPackageVersionCommandInput - {@link GetPackageVersionCommandInput}
 * @returns {@link GetPackageVersionCommandOutput}
 * @see {@link GetPackageVersionCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionCommandOutput} for command's `response` shape.
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
export class GetPackageVersionCommand extends $Command
  .classBuilder<
    GetPackageVersionCommandInput,
    GetPackageVersionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetPackageVersion", {})
  .n("IoTClient", "GetPackageVersionCommand")
  .sc(GetPackageVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPackageVersionRequest;
      output: GetPackageVersionResponse;
    };
    sdk: {
      input: GetPackageVersionCommandInput;
      output: GetPackageVersionCommandOutput;
    };
  };
}
