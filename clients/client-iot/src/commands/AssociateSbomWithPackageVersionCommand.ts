// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateSbomWithPackageVersionRequest,
  AssociateSbomWithPackageVersionResponse,
} from "../models/models_0";
import { AssociateSbomWithPackageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface AssociateSbomWithPackageVersionCommandOutput extends AssociateSbomWithPackageVersionResponse, __MetadataBearer {}

/**
 * Associates the selected software bill of materials (SBOM) with a specific software package version.
 *
 * Requires permission to access the [AssociateSbomWithPackageVersion](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AssociateSbomWithPackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AssociateSbomWithPackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
export class AssociateSbomWithPackageVersionCommand extends command<AssociateSbomWithPackageVersionCommandInput, AssociateSbomWithPackageVersionCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSbomWithPackageVersion",
  AssociateSbomWithPackageVersion$
) {
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
