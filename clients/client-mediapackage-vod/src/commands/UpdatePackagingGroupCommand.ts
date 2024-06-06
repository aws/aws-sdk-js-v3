// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { UpdatePackagingGroupRequest, UpdatePackagingGroupResponse } from "../models/models_0";
import { de_UpdatePackagingGroupCommand, se_UpdatePackagingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackagingGroupCommand}.
 */
export interface UpdatePackagingGroupCommandInput extends UpdatePackagingGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackagingGroupCommand}.
 */
export interface UpdatePackagingGroupCommandOutput extends UpdatePackagingGroupResponse, __MetadataBearer {}

/**
 * Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, UpdatePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, UpdatePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const input = { // UpdatePackagingGroupRequest
 *   Authorization: { // Authorization
 *     CdnIdentifierSecret: "STRING_VALUE", // required
 *     SecretsRoleArn: "STRING_VALUE", // required
 *   },
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new UpdatePackagingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePackagingGroupResponse
 * //   ApproximateAssetCount: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   Authorization: { // Authorization
 * //     CdnIdentifierSecret: "STRING_VALUE", // required
 * //     SecretsRoleArn: "STRING_VALUE", // required
 * //   },
 * //   CreatedAt: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   EgressAccessLogs: { // EgressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePackagingGroupCommandInput - {@link UpdatePackagingGroupCommandInput}
 * @returns {@link UpdatePackagingGroupCommandOutput}
 * @see {@link UpdatePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdatePackagingGroupCommandOutput} for command's `response` shape.
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
export class UpdatePackagingGroupCommand extends $Command
  .classBuilder<
    UpdatePackagingGroupCommandInput,
    UpdatePackagingGroupCommandOutput,
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
  .s("MediaPackageVod", "UpdatePackagingGroup", {})
  .n("MediaPackageVodClient", "UpdatePackagingGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePackagingGroupCommand)
  .de(de_UpdatePackagingGroupCommand)
  .build() {}
