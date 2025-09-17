// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDatabaseRequest, CreateDatabaseResponse } from "../models/models_0";
import { de_CreateDatabaseCommand, se_CreateDatabaseCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatabaseCommand}.
 */
export interface CreateDatabaseCommandInput extends CreateDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatabaseCommand}.
 */
export interface CreateDatabaseCommandOutput extends CreateDatabaseResponse, __MetadataBearer {}

/**
 * <p>Creates a new Timestream database. If the KMS key is not
 *          specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For
 *          details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, CreateDatabaseCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, CreateDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = { // CreateDatabaseRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatabaseResponse
 * //   Database: { // Database
 * //     Arn: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     TableCount: Number("long"),
 * //     KmsKeyId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDatabaseCommandInput - {@link CreateDatabaseCommandInput}
 * @returns {@link CreateDatabaseCommandOutput}
 * @see {@link CreateDatabaseCommandInput} for command's `input` shape.
 * @see {@link CreateDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Timestream was unable to process this request because it contains resource that
 *          already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The instance quota of resource exceeded for this account.</p>
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
export class CreateDatabaseCommand extends $Command
  .classBuilder<
    CreateDatabaseCommandInput,
    CreateDatabaseCommandOutput,
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
  .s("Timestream_20181101", "CreateDatabase", {})
  .n("TimestreamWriteClient", "CreateDatabaseCommand")
  .f(void 0, void 0)
  .ser(se_CreateDatabaseCommand)
  .de(de_CreateDatabaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatabaseRequest;
      output: CreateDatabaseResponse;
    };
    sdk: {
      input: CreateDatabaseCommandInput;
      output: CreateDatabaseCommandOutput;
    };
  };
}
