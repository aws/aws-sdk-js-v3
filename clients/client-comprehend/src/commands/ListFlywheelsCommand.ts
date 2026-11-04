// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFlywheelsRequest, ListFlywheelsResponse } from "../models/models_0";
import { ListFlywheels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFlywheelsCommand}.
 */
export interface ListFlywheelsCommandInput extends ListFlywheelsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlywheelsCommand}.
 */
export interface ListFlywheelsCommandOutput extends ListFlywheelsResponse, __MetadataBearer {}

/**
 * Gets a list of the flywheels that you have created.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListFlywheelsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListFlywheelsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListFlywheelsRequest
 *   Filter: { // FlywheelFilter
 *     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 *     CreationTimeAfter: new Date("TIMESTAMP"),
 *     CreationTimeBefore: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlywheelsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlywheelsResponse
 * //   FlywheelSummaryList: [ // FlywheelSummaryList
 * //     { // FlywheelSummary
 * //       FlywheelArn: "STRING_VALUE",
 * //       ActiveModelArn: "STRING_VALUE",
 * //       DataLakeS3Uri: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //       ModelType: "DOCUMENT_CLASSIFIER" || "ENTITY_RECOGNIZER",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LatestFlywheelIteration: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlywheelsCommandInput - {@link ListFlywheelsCommandInput}
 * @returns {@link ListFlywheelsCommandOutput}
 * @see {@link ListFlywheelsCommandInput} for command's `input` shape.
 * @see {@link ListFlywheelsCommandOutput} for command's `response` shape.
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
export class ListFlywheelsCommand extends command<ListFlywheelsCommandInput, ListFlywheelsCommandOutput>(
  _ep0,
  _mw0,
  "ListFlywheels",
  ListFlywheels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlywheelsRequest;
      output: ListFlywheelsResponse;
    };
    sdk: {
      input: ListFlywheelsCommandInput;
      output: ListFlywheelsCommandOutput;
    };
  };
}
