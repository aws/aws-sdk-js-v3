// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDatabaseRequest, DescribeDatabaseResponse } from "../models/models_0";
import { DescribeDatabase } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatabaseCommand}.
 */
export interface DescribeDatabaseCommandInput extends DescribeDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatabaseCommand}.
 */
export interface DescribeDatabaseCommandOutput extends DescribeDatabaseResponse, __MetadataBearer {}

/**
 * <p>Returns information about the database, including the database name, time that the
 *          database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service
 *             quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a>
 *          for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DescribeDatabaseCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DescribeDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = { // DescribeDatabaseRequest
 *   DatabaseName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatabaseResponse
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
 * @param DescribeDatabaseCommandInput - {@link DescribeDatabaseCommandInput}
 * @returns {@link DescribeDatabaseCommandOutput}
 * @see {@link DescribeDatabaseCommandInput} for command's `input` shape.
 * @see {@link DescribeDatabaseCommandOutput} for command's `response` shape.
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
export class DescribeDatabaseCommand extends $Command
  .classBuilder<
    DescribeDatabaseCommandInput,
    DescribeDatabaseCommandOutput,
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
  .s("Timestream_20181101", "DescribeDatabase", {})
  .n("TimestreamWriteClient", "DescribeDatabaseCommand")
  .sc(DescribeDatabase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatabaseRequest;
      output: DescribeDatabaseResponse;
    };
    sdk: {
      input: DescribeDatabaseCommandInput;
      output: DescribeDatabaseCommandOutput;
    };
  };
}
