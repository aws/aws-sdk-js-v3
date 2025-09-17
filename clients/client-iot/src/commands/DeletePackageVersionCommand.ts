// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeletePackageVersionRequest, DeletePackageVersionResponse } from "../models/models_1";
import { de_DeletePackageVersionCommand, se_DeletePackageVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a specific version from a software package.</p>
 *          <p>
 *             <b>Note:</b> If a package version is designated as default, you must remove the designation from the software package using the <a>UpdatePackage</a> action.</p>
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
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
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
export class DeletePackageVersionCommand extends $Command
  .classBuilder<
    DeletePackageVersionCommandInput,
    DeletePackageVersionCommandOutput,
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
  .s("AWSIotService", "DeletePackageVersion", {})
  .n("IoTClient", "DeletePackageVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeletePackageVersionCommand)
  .de(de_DeletePackageVersionCommand)
  .build() {
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
