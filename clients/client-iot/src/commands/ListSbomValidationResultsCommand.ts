// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSbomValidationResultsRequest, ListSbomValidationResultsResponse } from "../models/models_1";
import { ListSbomValidationResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSbomValidationResultsCommand}.
 */
export interface ListSbomValidationResultsCommandInput extends ListSbomValidationResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListSbomValidationResultsCommand}.
 */
export interface ListSbomValidationResultsCommandOutput extends ListSbomValidationResultsResponse, __MetadataBearer {}

/**
 * The validation results for all software bill of materials (SBOM) attached to a specific software package version.
 *
 * Requires permission to access the [ListSbomValidationResults](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSbomValidationResultsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSbomValidationResultsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListSbomValidationResultsRequest
 *   packageName: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   validationResult: "FAILED" || "SUCCEEDED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSbomValidationResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListSbomValidationResultsResponse
 * //   validationResultSummaries: [ // SbomValidationResultSummaryList
 * //     { // SbomValidationResultSummary
 * //       fileName: "STRING_VALUE",
 * //       validationResult: "FAILED" || "SUCCEEDED",
 * //       errorCode: "INCOMPATIBLE_FORMAT" || "FILE_SIZE_LIMIT_EXCEEDED",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSbomValidationResultsCommandInput - {@link ListSbomValidationResultsCommandInput}
 * @returns {@link ListSbomValidationResultsCommandOutput}
 * @see {@link ListSbomValidationResultsCommandInput} for command's `input` shape.
 * @see {@link ListSbomValidationResultsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListSbomValidationResultsCommand extends command<ListSbomValidationResultsCommandInput, ListSbomValidationResultsCommandOutput>(
  _ep0,
  _mw0,
  "ListSbomValidationResults",
  ListSbomValidationResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSbomValidationResultsRequest;
      output: ListSbomValidationResultsResponse;
    };
    sdk: {
      input: ListSbomValidationResultsCommandInput;
      output: ListSbomValidationResultsCommandOutput;
    };
  };
}
