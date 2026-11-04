// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { TagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * Associates a set of tags with a report definition.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, TagResourceCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, TagResourceCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * // import type { CostAndUsageReportServiceClientConfig } from "@aws-sdk/client-cost-and-usage-report-service";
 * const config = {}; // type is CostAndUsageReportServiceClientConfig
 * const client = new CostAndUsageReportServiceClient(config);
 * const input = { // TagResourceRequest
 *   ReportName: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for CostAndUsageReportServiceClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * An error on the server occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified report (`ReportName`) in the request doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link CostAndUsageReportServiceServiceException}
 *
 * Base exception class for all service exceptions from CostAndUsageReportService service.
 *
 * @public
 */
export class TagResourceCommand extends command<TagResourceCommandInput, TagResourceCommandOutput>(
  _ep0,
  _mw0,
  "TagResource",
  TagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
