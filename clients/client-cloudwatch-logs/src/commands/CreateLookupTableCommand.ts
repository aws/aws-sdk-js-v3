// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLookupTableRequest, CreateLookupTableResponse } from "../models/models_0";
import { CreateLookupTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a lookup table by uploading CSV data or from CloudWatch Logs query results. You can use lookup tables to enrich log data in CloudWatch Logs queries with reference data such as user details, application names, or error descriptions.
 *
 * The table name must be unique within your account and Region. You must specify either `tableBody` or `queryId`, but not both. If you use `tableBody`, the CSV content must include a header row with column names, use UTF-8 encoding, and not exceed 10 MB.
 *
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
 *   tableBody: "STRING_VALUE",
 *   queryId: "STRING_VALUE",
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have reached the maximum number of resources that can be created.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the parameters for the request is not valid.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class CreateLookupTableCommand extends command<CreateLookupTableCommandInput, CreateLookupTableCommandOutput>(
  _ep0,
  _mw0,
  "CreateLookupTable",
  CreateLookupTable$
) {
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
