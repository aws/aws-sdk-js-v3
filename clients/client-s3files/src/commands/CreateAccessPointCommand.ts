// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAccessPointRequest, CreateAccessPointResponse } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { CreateAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessPointCommand}.
 */
export interface CreateAccessPointCommandInput extends CreateAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPointCommand}.
 */
export interface CreateAccessPointCommandOutput extends CreateAccessPointResponse, __MetadataBearer {}

/**
 * <p>Creates an S3 File System Access Point for application-specific access with POSIX user identity and root directory enforcement. Access points provide a way to manage access to shared datasets in multi-tenant scenarios.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, CreateAccessPointCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, CreateAccessPointCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // CreateAccessPointRequest
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   fileSystemId: "STRING_VALUE", // required
 *   posixUser: { // PosixUser
 *     uid: Number("long"), // required
 *     gid: Number("long"), // required
 *     secondaryGids: [ // SecondaryGids
 *       Number("long"),
 *     ],
 *   },
 *   rootDirectory: { // RootDirectory
 *     path: "STRING_VALUE",
 *     creationPermissions: { // CreationPermissions
 *       ownerUid: Number("long"), // required
 *       ownerGid: Number("long"), // required
 *       permissions: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPointResponse
 * //   accessPointArn: "STRING_VALUE", // required
 * //   accessPointId: "STRING_VALUE", // required
 * //   clientToken: "STRING_VALUE", // required
 * //   fileSystemId: "STRING_VALUE", // required
 * //   status: "available" || "creating" || "deleting" || "deleted" || "error" || "updating", // required
 * //   ownerId: "STRING_VALUE", // required
 * //   posixUser: { // PosixUser
 * //     uid: Number("long"), // required
 * //     gid: Number("long"), // required
 * //     secondaryGids: [ // SecondaryGids
 * //       Number("long"),
 * //     ],
 * //   },
 * //   rootDirectory: { // RootDirectory
 * //     path: "STRING_VALUE",
 * //     creationPermissions: { // CreationPermissions
 * //       ownerUid: Number("long"), // required
 * //       ownerGid: Number("long"), // required
 * //       permissions: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccessPointCommandInput - {@link CreateAccessPointCommandInput}
 * @returns {@link CreateAccessPointCommandOutput}
 * @see {@link CreateAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointCommandOutput} for command's `response` shape.
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
export class CreateAccessPointCommand extends $Command
  .classBuilder<
    CreateAccessPointCommandInput,
    CreateAccessPointCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "CreateAccessPoint", {})
  .n("S3FilesClient", "CreateAccessPointCommand")
  .sc(CreateAccessPoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessPointRequest;
      output: CreateAccessPointResponse;
    };
    sdk: {
      input: CreateAccessPointCommandInput;
      output: CreateAccessPointCommandOutput;
    };
  };
}
