// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccessPointRequest, GetAccessPointResponse } from "../models/models_0";
import { GetAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccessPointCommand}.
 */
export interface GetAccessPointCommandInput extends GetAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointCommand}.
 */
export interface GetAccessPointCommandOutput extends GetAccessPointResponse, __MetadataBearer {}

/**
 * <p>Returns resource information for an S3 File System Access Point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, GetAccessPointCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, GetAccessPointCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // GetAccessPointRequest
 *   accessPointId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointResponse
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
 * @param GetAccessPointCommandInput - {@link GetAccessPointCommandInput}
 * @returns {@link GetAccessPointCommandOutput}
 * @see {@link GetAccessPointCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointCommandOutput} for command's `response` shape.
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
export class GetAccessPointCommand extends command<GetAccessPointCommandInput, GetAccessPointCommandOutput>(
  _ep0,
  _mw0,
  "GetAccessPoint",
  GetAccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccessPointRequest;
      output: GetAccessPointResponse;
    };
    sdk: {
      input: GetAccessPointCommandInput;
      output: GetAccessPointCommandOutput;
    };
  };
}
