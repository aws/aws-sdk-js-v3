// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePackageVersionRequest, UpdatePackageVersionResponse } from "../models/models_2";
import { UpdatePackageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the supported fields for a specific package version.
 *
 * Requires permission to access the [UpdatePackageVersion](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) and [GetIndexingConfiguration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) actions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdatePackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdatePackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdatePackageVersionRequest
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
 *   action: "PUBLISH" || "DEPRECATE",
 *   recipe: "STRING_VALUE",
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
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
export class UpdatePackageVersionCommand extends command<UpdatePackageVersionCommandInput, UpdatePackageVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePackageVersion",
  UpdatePackageVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePackageVersionRequest;
      output: {};
    };
    sdk: {
      input: UpdatePackageVersionCommandInput;
      output: UpdatePackageVersionCommandOutput;
    };
  };
}
