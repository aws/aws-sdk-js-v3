// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePackageRequest, DeletePackageResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DeletePackageCommand, se_DeletePackageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePackageCommand}.
 */
export interface DeletePackageCommandInput extends DeletePackageRequest {}
/**
 * @public
 *
 * The output of {@link DeletePackageCommand}.
 */
export interface DeletePackageCommandOutput extends DeletePackageResponse, __MetadataBearer {}

/**
 * <p>Deletes a package.</p>
 *          <note>
 *             <p>To delete a package, you need permission to call <code>s3:DeleteObject</code> in addition to permissions for
 *         the AWS Panorama API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DeletePackageCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DeletePackageCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DeletePackageRequest
 *   PackageId: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DeletePackageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePackageCommandInput - {@link DeletePackageCommandInput}
 * @returns {@link DeletePackageCommandOutput}
 * @see {@link DeletePackageCommandInput} for command's `input` shape.
 * @see {@link DeletePackageCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class DeletePackageCommand extends $Command
  .classBuilder<
    DeletePackageCommandInput,
    DeletePackageCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "DeletePackage", {})
  .n("PanoramaClient", "DeletePackageCommand")
  .f(void 0, void 0)
  .ser(se_DeletePackageCommand)
  .de(de_DeletePackageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePackageRequest;
      output: {};
    };
    sdk: {
      input: DeletePackageCommandInput;
      output: DeletePackageCommandOutput;
    };
  };
}
