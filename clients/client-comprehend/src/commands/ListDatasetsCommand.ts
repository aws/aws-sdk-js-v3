// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { ListDatasets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandInput extends ListDatasetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandOutput extends ListDatasetsResponse, __MetadataBearer {}

/**
 * List the datasets that you have configured in this Region. For more information about datasets, see [Flywheel overview](https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html) in the *Amazon Comprehend Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDatasetsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDatasetsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListDatasetsRequest
 *   FlywheelArn: "STRING_VALUE",
 *   Filter: { // DatasetFilter
 *     Status: "CREATING" || "COMPLETED" || "FAILED",
 *     DatasetType: "TRAIN" || "TEST",
 *     CreationTimeAfter: new Date("TIMESTAMP"),
 *     CreationTimeBefore: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetsResponse
 * //   DatasetPropertiesList: [ // DatasetPropertiesList
 * //     { // DatasetProperties
 * //       DatasetArn: "STRING_VALUE",
 * //       DatasetName: "STRING_VALUE",
 * //       DatasetType: "TRAIN" || "TEST",
 * //       DatasetS3Uri: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "CREATING" || "COMPLETED" || "FAILED",
 * //       Message: "STRING_VALUE",
 * //       NumberOfDocuments: Number("long"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetsCommandInput - {@link ListDatasetsCommandInput}
 * @returns {@link ListDatasetsCommandOutput}
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidFilterException} (client fault)
 *
 * The filter specified for the operation is invalid. Specify a different filter.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. Check the ARN and try your request again.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class ListDatasetsCommand extends command<ListDatasetsCommandInput, ListDatasetsCommandOutput>(
  _ep0,
  _mw0,
  "ListDatasets",
  ListDatasets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetsRequest;
      output: ListDatasetsResponse;
    };
    sdk: {
      input: ListDatasetsCommandInput;
      output: ListDatasetsCommandOutput;
    };
  };
}
