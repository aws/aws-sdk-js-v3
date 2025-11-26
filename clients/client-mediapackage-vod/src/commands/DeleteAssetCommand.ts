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
import type { DeleteAssetRequest, DeleteAssetResponse } from "../models/models_0";
import { DeleteAsset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssetCommand}.
 */
export interface DeleteAssetCommandInput extends DeleteAssetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssetCommand}.
 */
export interface DeleteAssetCommandOutput extends DeleteAssetResponse, __MetadataBearer {}

/**
 * Deletes an existing MediaPackage VOD Asset resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DeleteAssetCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DeleteAssetCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * // import type { MediaPackageVodClientConfig } from "@aws-sdk/client-mediapackage-vod";
 * const config = {}; // type is MediaPackageVodClientConfig
 * const client = new MediaPackageVodClient(config);
 * const input = { // DeleteAssetRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssetCommandInput - {@link DeleteAssetCommandInput}
 * @returns {@link DeleteAssetCommandOutput}
 * @see {@link DeleteAssetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetCommandOutput} for command's `response` shape.
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
export class DeleteAssetCommand extends $Command
  .classBuilder<
    DeleteAssetCommandInput,
    DeleteAssetCommandOutput,
    MediaPackageVodClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageVodClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaPackageVod", "DeleteAsset", {})
  .n("MediaPackageVodClient", "DeleteAssetCommand")
  .sc(DeleteAsset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssetRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssetCommandInput;
      output: DeleteAssetCommandOutput;
    };
  };
}
