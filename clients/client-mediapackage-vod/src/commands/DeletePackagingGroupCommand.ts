// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { DeletePackagingGroupRequest, DeletePackagingGroupResponse } from "../models/models_0";
import { de_DeletePackagingGroupCommand, se_DeletePackagingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePackagingGroupCommand}.
 */
export interface DeletePackagingGroupCommandInput extends DeletePackagingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeletePackagingGroupCommand}.
 */
export interface DeletePackagingGroupCommandOutput extends DeletePackagingGroupResponse, __MetadataBearer {}

/**
 * Deletes a MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DeletePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DeletePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const input = { // DeletePackagingGroupRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeletePackagingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePackagingGroupCommandInput - {@link DeletePackagingGroupCommandInput}
 * @returns {@link DeletePackagingGroupCommandOutput}
 * @see {@link DeletePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link DeletePackagingGroupCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeletePackagingGroupCommand extends $Command
  .classBuilder<
    DeletePackagingGroupCommandInput,
    DeletePackagingGroupCommandOutput,
    MediaPackageVodClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaPackageVodClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaPackageVod", "DeletePackagingGroup", {})
  .n("MediaPackageVodClient", "DeletePackagingGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeletePackagingGroupCommand)
  .de(de_DeletePackagingGroupCommand)
  .build() {}
