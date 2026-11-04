// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListExplainabilityExportsRequest, ListExplainabilityExportsResponse } from "../models/models_0";
import { ListExplainabilityExports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListExplainabilityExportsCommand}.
 */
export interface ListExplainabilityExportsCommandInput extends ListExplainabilityExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListExplainabilityExportsCommand}.
 */
export interface ListExplainabilityExportsCommandOutput extends ListExplainabilityExportsResponse, __MetadataBearer {}

/**
 * Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This operation returns a summary for each Explainability export. You can filter the list using an array of Filter objects.
 *
 * To retrieve the complete set of properties for a particular Explainability export, use the ARN with the DescribeExplainability operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListExplainabilityExportsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListExplainabilityExportsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListExplainabilityExportsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListExplainabilityExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListExplainabilityExportsResponse
 * //   ExplainabilityExports: [ // ExplainabilityExports
 * //     { // ExplainabilityExportSummary
 * //       ExplainabilityExportArn: "STRING_VALUE",
 * //       ExplainabilityExportName: "STRING_VALUE",
 * //       Destination: { // DataDestination
 * //         S3Config: { // S3Config
 * //           Path: "STRING_VALUE", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //           KMSKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExplainabilityExportsCommandInput - {@link ListExplainabilityExportsCommandInput}
 * @returns {@link ListExplainabilityExportsCommandOutput}
 * @see {@link ListExplainabilityExportsCommandInput} for command's `input` shape.
 * @see {@link ListExplainabilityExportsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The token is not valid. Tokens expire after 24 hours.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class ListExplainabilityExportsCommand extends command<ListExplainabilityExportsCommandInput, ListExplainabilityExportsCommandOutput>(
  _ep0,
  _mw0,
  "ListExplainabilityExports",
  ListExplainabilityExports$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExplainabilityExportsRequest;
      output: ListExplainabilityExportsResponse;
    };
    sdk: {
      input: ListExplainabilityExportsCommandInput;
      output: ListExplainabilityExportsCommandOutput;
    };
  };
}
