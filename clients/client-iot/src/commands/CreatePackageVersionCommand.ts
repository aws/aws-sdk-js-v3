// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreatePackageVersionRequest, CreatePackageVersionResponse } from "../models/models_0";
import { CreatePackageVersion } from "../schemas/schemas_12_Package";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePackageVersionCommand}.
 */
export interface CreatePackageVersionCommandInput extends CreatePackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePackageVersionCommand}.
 */
export interface CreatePackageVersionCommandOutput extends CreatePackageVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version for an existing IoT software package.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePackageVersion</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreatePackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreatePackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreatePackageVersionRequest
 *   packageName: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   attributes: { // ResourceAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   artifact: { // PackageVersionArtifact
 *     s3Location: { // S3Location
 *       bucket: "STRING_VALUE",
 *       key: "STRING_VALUE",
 *       version: "STRING_VALUE",
 *     },
 *   },
 *   recipe: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePackageVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePackageVersionResponse
 * //   packageVersionArn: "STRING_VALUE",
 * //   packageName: "STRING_VALUE",
 * //   versionName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   attributes: { // ResourceAttributes
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   status: "DRAFT" || "PUBLISHED" || "DEPRECATED",
 * //   errorReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePackageVersionCommandInput - {@link CreatePackageVersionCommandInput}
 * @returns {@link CreatePackageVersionCommandOutput}
 * @see {@link CreatePackageVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePackageVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quota has been exceeded.</p>
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
export class CreatePackageVersionCommand extends $Command
  .classBuilder<
    CreatePackageVersionCommandInput,
    CreatePackageVersionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreatePackageVersion", {})
  .n("IoTClient", "CreatePackageVersionCommand")
  .sc(CreatePackageVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePackageVersionRequest;
      output: CreatePackageVersionResponse;
    };
    sdk: {
      input: CreatePackageVersionCommandInput;
      output: CreatePackageVersionCommandOutput;
    };
  };
}
