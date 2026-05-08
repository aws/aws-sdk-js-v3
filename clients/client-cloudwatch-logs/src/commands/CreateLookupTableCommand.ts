// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateLookupTableRequest, CreateLookupTableResponse } from "../models/models_0";
import { CreateLookupTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLookupTableCommand}.
 */
export interface CreateLookupTableCommandInput extends CreateLookupTableRequest {}
/**
 * @public
 *
 * The output of {@link CreateLookupTableCommand}.
 */
export interface CreateLookupTableCommandOutput extends CreateLookupTableResponse, __MetadataBearer {}

/**
 * <p>Creates a lookup table by uploading CSV data. You can use lookup tables to enrich log
 *       data in CloudWatch Logs Insights queries with reference data such as user details, application
 *       names, or error descriptions.</p>
 *          <p>The table name must be unique within your account and Region. The CSV content must include
 *       a header row with column names, use UTF-8 encoding, and not exceed 10 MB.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateLookupTableCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateLookupTableCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateLookupTableRequest
 *   lookupTableName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tableBody: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLookupTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateLookupTableResponse
 * //   lookupTableArn: "STRING_VALUE",
 * //   createdAt: Number("long"),
 * // };
 *
 * ```
 *
 * @param CreateLookupTableCommandInput - {@link CreateLookupTableCommandInput}
 * @returns {@link CreateLookupTableCommandOutput}
 * @see {@link CreateLookupTableCommandInput} for command's `input` shape.
 * @see {@link CreateLookupTableCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class CreateLookupTableCommand extends $Command
  .classBuilder<
    CreateLookupTableCommandInput,
    CreateLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "CreateLookupTable", {})
  .n("CloudWatchLogsClient", "CreateLookupTableCommand")
  .sc(CreateLookupTable$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLookupTableRequest;
      output: CreateLookupTableResponse;
    };
    sdk: {
      input: CreateLookupTableCommandInput;
      output: CreateLookupTableCommandOutput;
    };
  };
}
