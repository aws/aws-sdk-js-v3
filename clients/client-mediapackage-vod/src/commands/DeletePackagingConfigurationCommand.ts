// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MediaPackageVodClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MediaPackageVodClient";
import type { DeletePackagingConfigurationRequest, DeletePackagingConfigurationResponse } from "../models/models_0";
import { DeletePackagingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePackagingConfigurationCommand}.
 */
export interface DeletePackagingConfigurationCommandInput extends DeletePackagingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePackagingConfigurationCommand}.
 */
export interface DeletePackagingConfigurationCommandOutput extends DeletePackagingConfigurationResponse, __MetadataBearer {}

/**
 * Deletes a MediaPackage VOD PackagingConfiguration resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DeletePackagingConfigurationCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DeletePackagingConfigurationCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * // import type { MediaPackageVodClientConfig } from "@aws-sdk/client-mediapackage-vod";
 * const config = {}; // type is MediaPackageVodClientConfig
 * const client = new MediaPackageVodClient(config);
 * const input = { // DeletePackagingConfigurationRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeletePackagingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePackagingConfigurationCommandInput - {@link DeletePackagingConfigurationCommandInput}
 * @returns {@link DeletePackagingConfigurationCommandOutput}
 * @see {@link DeletePackagingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePackagingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 *
 * @public
 */
export class DeletePackagingConfigurationCommand extends $Command
  .classBuilder<
    DeletePackagingConfigurationCommandInput,
    DeletePackagingConfigurationCommandOutput,
    MediaPackageVodClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageVodClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaPackageVod", "DeletePackagingConfiguration", {})
  .n("MediaPackageVodClient", "DeletePackagingConfigurationCommand")
  .sc(DeletePackagingConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePackagingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeletePackagingConfigurationCommandInput;
      output: DeletePackagingConfigurationCommandOutput;
    };
  };
}
