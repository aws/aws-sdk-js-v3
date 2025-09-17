// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTableRequest } from "../models/models_0";
import { de_DeleteTableCommand, se_DeleteTableCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTableCommand}.
 */
export interface DeleteTableCommandInput extends DeleteTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableCommand}.
 */
export interface DeleteTableCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a given Timestream table. This is an irreversible operation. After a
 *             Timestream database table is deleted, the time-series data stored in the table
 *          cannot be recovered. </p>
 *          <note>
 *             <p>Due to the nature of distributed retries, the operation can return either success or
 *             a ResourceNotFoundException. Clients should consider them equivalent.</p>
 *          </note>
 *          <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code
 *             sample</a> for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DeleteTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DeleteTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = { // DeleteTableRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableCommandInput - {@link DeleteTableCommandInput}
 * @returns {@link DeleteTableCommandOutput}
 * @see {@link DeleteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTableCommandOutput} for command's `response` shape.
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
export class DeleteTableCommand extends $Command
  .classBuilder<
    DeleteTableCommandInput,
    DeleteTableCommandOutput,
    TimestreamWriteClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamWriteClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "DeleteTable", {})
  .n("TimestreamWriteClient", "DeleteTableCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTableCommand)
  .de(de_DeleteTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableCommandInput;
      output: DeleteTableCommandOutput;
    };
  };
}
