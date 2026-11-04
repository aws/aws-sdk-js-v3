// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeletePerformanceAnalysisReportRequest,
  DeletePerformanceAnalysisReportResponse,
} from "../models/models_0";
import { DeletePerformanceAnalysisReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePerformanceAnalysisReportCommand}.
 */
export interface DeletePerformanceAnalysisReportCommandInput extends DeletePerformanceAnalysisReportRequest {}
/**
 * @public
 *
 * The output of {@link DeletePerformanceAnalysisReportCommand}.
 */
export interface DeletePerformanceAnalysisReportCommandOutput extends DeletePerformanceAnalysisReportResponse, __MetadataBearer {}

/**
 * Deletes a performance analysis report.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, DeletePerformanceAnalysisReportCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, DeletePerformanceAnalysisReportCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // DeletePerformanceAnalysisReportRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   AnalysisReportId: "STRING_VALUE", // required
 * };
 * const command = new DeletePerformanceAnalysisReportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePerformanceAnalysisReportCommandInput - {@link DeletePerformanceAnalysisReportCommandInput}
 * @returns {@link DeletePerformanceAnalysisReportCommandOutput}
 * @see {@link DeletePerformanceAnalysisReportCommandInput} for command's `input` shape.
 * @see {@link DeletePerformanceAnalysisReportCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * The request failed due to an unknown error.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * One of the arguments provided is invalid for this request.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * The user is not authorized to perform this request.
 *
 * @throws {@link PIServiceException}
 *
 * Base exception class for all service exceptions from PI service.
 *
 * @public
 */
export class DeletePerformanceAnalysisReportCommand extends command<DeletePerformanceAnalysisReportCommandInput, DeletePerformanceAnalysisReportCommandOutput>(
  _ep0,
  _mw0,
  "DeletePerformanceAnalysisReport",
  DeletePerformanceAnalysisReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePerformanceAnalysisReportRequest;
      output: {};
    };
    sdk: {
      input: DeletePerformanceAnalysisReportCommandInput;
      output: DeletePerformanceAnalysisReportCommandOutput;
    };
  };
}
