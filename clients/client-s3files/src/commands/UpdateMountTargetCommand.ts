// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateMountTargetRequest, UpdateMountTargetResponse } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { UpdateMountTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMountTargetCommand}.
 */
export interface UpdateMountTargetCommandInput extends UpdateMountTargetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMountTargetCommand}.
 */
export interface UpdateMountTargetCommandOutput extends UpdateMountTargetResponse, __MetadataBearer {}

/**
 * <p>Updates the mount target resource, specifically security group configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, UpdateMountTargetCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, UpdateMountTargetCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // UpdateMountTargetRequest
 *   mountTargetId: "STRING_VALUE", // required
 *   securityGroups: [ // SecurityGroups // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateMountTargetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMountTargetResponse
 * //   availabilityZoneId: "STRING_VALUE",
 * //   ownerId: "STRING_VALUE", // required
 * //   mountTargetId: "STRING_VALUE", // required
 * //   fileSystemId: "STRING_VALUE",
 * //   subnetId: "STRING_VALUE", // required
 * //   ipv4Address: "STRING_VALUE",
 * //   ipv6Address: "STRING_VALUE",
 * //   networkInterfaceId: "STRING_VALUE",
 * //   vpcId: "STRING_VALUE",
 * //   securityGroups: [ // SecurityGroups
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "available" || "creating" || "deleting" || "deleted" || "error" || "updating",
 * //   statusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMountTargetCommandInput - {@link UpdateMountTargetCommandInput}
 * @returns {@link UpdateMountTargetCommandOutput}
 * @see {@link UpdateMountTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateMountTargetCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
 *
 * @public
 */
export class UpdateMountTargetCommand extends $Command
  .classBuilder<
    UpdateMountTargetCommandInput,
    UpdateMountTargetCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "UpdateMountTarget", {})
  .n("S3FilesClient", "UpdateMountTargetCommand")
  .sc(UpdateMountTarget$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMountTargetRequest;
      output: UpdateMountTargetResponse;
    };
    sdk: {
      input: UpdateMountTargetCommandInput;
      output: UpdateMountTargetCommandOutput;
    };
  };
}
