// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDatabaseRequest } from "../models/models_0";
import { DeleteDatabase$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamWriteClientResolvedConfig,
} from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a given Timestream database. <i>This is an irreversible
 *             operation. After a database is deleted, the time-series data from its tables cannot be
 *             recovered.</i>
 *          </p>
 *          <note>
 *             <p>All tables in the database must be deleted first, or a ValidationException error will
 *             be thrown. </p>
 *             <p>Due to the nature of distributed retries, the operation can return either success or
 *             a ResourceNotFoundException. Clients should consider them equivalent.</p>
 *          </note>
 *          <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a>
 *          for details.</p>
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
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> An invalid or malformed request.</p>
 *
 * @throws {@link TimestreamWriteServiceException}
 * <p>Base exception class for all service exceptions from TimestreamWrite service.</p>
 *
 *
 * @public
 */
export class DeleteDatabaseCommand extends $Command
  .classBuilder<
    DeleteDatabaseCommandInput,
    DeleteDatabaseCommandOutput,
    TimestreamWriteClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamWriteClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "DeleteDatabase", {})
  .n("TimestreamWriteClient", "DeleteDatabaseCommand")
  .sc(DeleteDatabase$)
  .build() {
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
