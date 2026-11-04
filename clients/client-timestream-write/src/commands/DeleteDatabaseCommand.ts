// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDatabaseRequest } from "../models/models_0";
import { DeleteDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDatabaseCommand}.
 */
export interface DeleteDatabaseCommandInput extends DeleteDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatabaseCommand}.
 */
export interface DeleteDatabaseCommandOutput extends __MetadataBearer {}

/**
 * Deletes a given Timestream database. *This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.*
 *
 * > **Note:**
 * >
 * > All tables in the database must be deleted first, or a ValidationException error will be thrown.
 * >
 * > Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.
 *
 * See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html) for details.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DeleteDatabaseCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DeleteDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = { // DeleteDatabaseRequest
 *   DatabaseName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatabaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatabaseCommandInput - {@link DeleteDatabaseCommandInput}
 * @returns {@link DeleteDatabaseCommandOutput}
 * @see {@link DeleteDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Timestream was unable to fully process this request because of an internal server error.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * The requested endpoint was not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might not be specified correctly, or its status might not be ACTIVE.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests were made by a user and they exceeded the service quotas. The request was throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An invalid or malformed request.
 *
 * @throws {@link TimestreamWriteServiceException}
 *
 * Base exception class for all service exceptions from TimestreamWrite service.
 *
 * @public
 */
export class DeleteDatabaseCommand extends command<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDatabase",
  DeleteDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatabaseRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatabaseCommandInput;
      output: DeleteDatabaseCommandOutput;
    };
  };
}
