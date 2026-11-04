// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNamespaceRequest, CreateNamespaceResponse } from "../models/models_0";
import { CreateNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNamespaceCommand}.
 */
export interface CreateNamespaceCommandInput extends CreateNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateNamespaceCommand}.
 */
export interface CreateNamespaceCommandOutput extends CreateNamespaceResponse, __MetadataBearer {}

/**
 * Creates a namespace. A namespace is a logical grouping of tables within your table bucket, which you can use to organize tables. For more information, see [Create a namespace](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-namespace-create.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:CreateNamespace` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, CreateNamespaceCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, CreateNamespaceCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // CreateNamespaceRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: [ // NamespaceList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateNamespaceResponse
 * //   tableBucketARN: "STRING_VALUE", // required
 * //   namespace: [ // NamespaceList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateNamespaceCommandInput - {@link CreateNamespaceCommandInput}
 * @returns {@link CreateNamespaceCommandOutput}
 * @see {@link CreateNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateNamespaceCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is invalid or malformed.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because there is a conflict with a previous write. You can retry the request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request failed due to an internal server error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link S3TablesServiceException}
 *
 * Base exception class for all service exceptions from S3Tables service.
 *
 * @public
 */
export class CreateNamespaceCommand extends command<CreateNamespaceCommandInput, CreateNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "CreateNamespace",
  CreateNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNamespaceRequest;
      output: CreateNamespaceResponse;
    };
    sdk: {
      input: CreateNamespaceCommandInput;
      output: CreateNamespaceCommandOutput;
    };
  };
}
