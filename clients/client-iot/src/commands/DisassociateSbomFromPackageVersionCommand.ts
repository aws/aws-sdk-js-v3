// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateSbomFromPackageVersionRequest,
  DisassociateSbomFromPackageVersionResponse,
} from "../models/models_1";
import { DisassociateSbomFromPackageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DisassociateSbomFromPackageVersionCommandOutput extends DisassociateSbomFromPackageVersionResponse, __MetadataBearer {}

/**
 * Disassociates the selected software bill of materials (SBOM) from a specific software package version.
 *
 * Requires permission to access the [DisassociateSbomWithPackageVersion](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DisassociateSbomFromPackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DisassociateSbomFromPackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
export class DisassociateSbomFromPackageVersionCommand extends command<DisassociateSbomFromPackageVersionCommandInput, DisassociateSbomFromPackageVersionCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateSbomFromPackageVersion",
  DisassociateSbomFromPackageVersion$
) {
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
