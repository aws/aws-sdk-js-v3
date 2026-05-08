// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMountTargetRequest, CreateMountTargetResponse } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { CreateMountTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMountTargetCommand}.
 */
export interface CreateMountTargetCommandInput extends CreateMountTargetRequest {}
/**
 * @public
 *
 * The output of {@link CreateMountTargetCommand}.
 */
export interface CreateMountTargetCommandOutput extends CreateMountTargetResponse, __MetadataBearer {}

/**
 * <p>Creates a mount target resource as an endpoint for mounting the S3 File System from compute resources in a specific Availability Zone and VPC. Mount targets provide network access to the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, CreateMountTargetCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, CreateMountTargetCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // CreateMountTargetRequest
 *   fileSystemId: "STRING_VALUE", // required
 *   subnetId: "STRING_VALUE", // required
 *   ipv4Address: "STRING_VALUE",
 *   ipv6Address: "STRING_VALUE",
 *   ipAddressType: "IPV4_ONLY" || "IPV6_ONLY" || "DUAL_STACK",
 *   securityGroups: [ // SecurityGroups
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateMountTargetCommand(input);
 * const response = await client.send(command);
 * // { // CreateMountTargetResponse
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
 * @param CreateMountTargetCommandInput - {@link CreateMountTargetCommandInput}
 * @returns {@link CreateMountTargetCommandOutput}
 * @see {@link CreateMountTargetCommandInput} for command's `input` shape.
 * @see {@link CreateMountTargetCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. This can occur when trying to create a resource that already exists or delete a resource that is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota. Review your service quotas and either delete resources or request a quota increase.</p>
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
export class CreateMountTargetCommand extends $Command
  .classBuilder<
    CreateMountTargetCommandInput,
    CreateMountTargetCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "CreateMountTarget", {})
  .n("S3FilesClient", "CreateMountTargetCommand")
  .sc(CreateMountTarget$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMountTargetRequest;
      output: CreateMountTargetResponse;
    };
    sdk: {
      input: CreateMountTargetCommandInput;
      output: CreateMountTargetCommandOutput;
    };
  };
}
