// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePackageVersionRequest, DeletePackageVersionResponse } from "../models/models_0";
import { DeletePackageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePackageVersionCommand}.
 */
export interface DeletePackageVersionCommandInput extends DeletePackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePackageVersionCommand}.
 */
export interface DeletePackageVersionCommandOutput extends DeletePackageVersionResponse, __MetadataBearer {}

/**
 * Deletes a specific version from a software package.
 *
 * **Note:** If a package version is designated as default, you must remove the designation from the software package using the UpdatePackage action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePackageVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePackageVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeletePackageVersionRequest
 *   packageName: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeletePackageVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePackageVersionCommandInput - {@link DeletePackageVersionCommandInput}
 * @returns {@link DeletePackageVersionCommandOutput}
 * @see {@link DeletePackageVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePackageVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
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
export class DeletePackageVersionCommand extends command<DeletePackageVersionCommandInput, DeletePackageVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeletePackageVersion",
  DeletePackageVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePackageVersionRequest;
      output: {};
    };
    sdk: {
      input: DeletePackageVersionCommandInput;
      output: DeletePackageVersionCommandOutput;
    };
  };
}
