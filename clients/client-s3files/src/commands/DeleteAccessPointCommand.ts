// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessPointRequest } from "../models/models_0";
import { DeleteAccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessPointCommand}.
 */
export interface DeleteAccessPointCommandInput extends DeleteAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessPointCommand}.
 */
export interface DeleteAccessPointCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an S3 File System Access Point. This operation is irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, DeleteAccessPointCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, DeleteAccessPointCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // DeleteAccessPointRequest
 *   accessPointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessPointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessPointCommandInput - {@link DeleteAccessPointCommandInput}
 * @returns {@link DeleteAccessPointCommandOutput}
 * @see {@link DeleteAccessPointCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointCommandOutput} for command's `response` shape.
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
export class DeleteAccessPointCommand extends command<DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessPoint",
  DeleteAccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPointRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessPointCommandInput;
      output: DeleteAccessPointCommandOutput;
    };
  };
}
