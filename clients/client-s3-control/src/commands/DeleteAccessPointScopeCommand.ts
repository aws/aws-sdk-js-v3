// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep4, _mw1, command } from "../commandBuilder";
import type { DeleteAccessPointScopeRequest } from "../models/models_0";
import { DeleteAccessPointScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessPointScopeCommand}.
 */
export interface DeleteAccessPointScopeCommandInput extends DeleteAccessPointScopeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessPointScopeCommand}.
 */
export interface DeleteAccessPointScopeCommandOutput extends __MetadataBearer {}

/**
 * Deletes an existing access point scope for a directory bucket.
 *
 * > **Note:** When you delete the scope of an access point, all prefixes and permissions are deleted.
 *
 * To use this operation, you must have the permission to perform the `s3express:DeleteAccessPointScope` action.
 *
 * For information about REST API errors, see [REST error responses](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#RESTErrorResponses).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessPointScopeCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessPointScopeCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessPointScopeRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessPointScopeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessPointScopeCommandInput - {@link DeleteAccessPointScopeCommandInput}
 * @returns {@link DeleteAccessPointScopeCommandOutput}
 * @see {@link DeleteAccessPointScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointScopeCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DeleteAccessPointScopeCommand extends command<DeleteAccessPointScopeCommandInput, DeleteAccessPointScopeCommandOutput>(
  _ep4,
  _mw1,
  "DeleteAccessPointScope",
  DeleteAccessPointScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessPointScopeRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessPointScopeCommandInput;
      output: DeleteAccessPointScopeCommandOutput;
    };
  };
}
