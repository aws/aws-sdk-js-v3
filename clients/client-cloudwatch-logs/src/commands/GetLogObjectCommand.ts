// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLogObjectRequest, GetLogObjectResponse, GetLogObjectResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetLogObjectCommand, se_GetLogObjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLogObjectCommand}.
 */
export interface GetLogObjectCommandInput extends GetLogObjectRequest {}
/**
 * @public
 *
 * The output of {@link GetLogObjectCommand}.
 */
export interface GetLogObjectCommandOutput extends GetLogObjectResponse, __MetadataBearer {}

/**
 * <p>Retrieves a large logging object (LLO) and streams it back. This API is used to fetch the
 *       content of large portions of log events that have been ingested through the
 *       PutOpenTelemetryLogs API. When log events contain fields that would cause the total event size
 *       to exceed 1MB, CloudWatch Logs automatically processes up to 10 fields, starting with the
 *       largest fields. Each field is truncated as needed to keep the total event size as close to 1MB
 *       as possible. The excess portions are stored as Large Log Objects (LLOs) and these fields are
 *       processed separately and LLO reference system fields (in the format
 *         <code>@ptr.$[path.to.field]</code>) are added. The path in the reference field reflects the
 *       original JSON structure where the large field was located. For example, this could be
 *         <code>@ptr.$['input']['message']</code>, <code>@ptr.$['AAA']['BBB']['CCC']['DDD']</code>,
 *         <code>@ptr.$['AAA']</code>, or any other path matching your log structure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogObjectCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogObjectCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLogObjectRequest
 *   unmask: true || false,
 *   logObjectPointer: "STRING_VALUE", // required
 * };
 * const command = new GetLogObjectCommand(input);
 * const response = await client.send(command);
 * // { // GetLogObjectResponse
 * //   fieldStream: { // GetLogObjectResponseStream Union: only one key present
 * //     fields: { // FieldsData
 * //       data: new Uint8Array(),
 * //     },
 * //     InternalStreamingException: { // InternalStreamingException
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLogObjectCommandInput - {@link GetLogObjectCommandInput}
 * @returns {@link GetLogObjectCommandOutput}
 * @see {@link GetLogObjectCommandInput} for command's `input` shape.
 * @see {@link GetLogObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class GetLogObjectCommand extends $Command
  .classBuilder<
    GetLogObjectCommandInput,
    GetLogObjectCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "GetLogObject", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("CloudWatchLogsClient", "GetLogObjectCommand")
  .f(void 0, GetLogObjectResponseFilterSensitiveLog)
  .ser(se_GetLogObjectCommand)
  .de(de_GetLogObjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLogObjectRequest;
      output: GetLogObjectResponse;
    };
    sdk: {
      input: GetLogObjectCommandInput;
      output: GetLogObjectCommandOutput;
    };
  };
}
