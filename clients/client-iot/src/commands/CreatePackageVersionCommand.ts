// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePackageVersionRequest, CreatePackageVersionResponse } from "../models/models_0";
import { CreatePackageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new version for an existing IoT software package.
 *
 * Requires permission to access the [CreatePackageVersion](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) and [GetIndexingConfiguration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) actions.
 *
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
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreatePackageVersionCommand extends command<CreatePackageVersionCommandInput, CreatePackageVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreatePackageVersion",
  CreatePackageVersion$
) {
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
