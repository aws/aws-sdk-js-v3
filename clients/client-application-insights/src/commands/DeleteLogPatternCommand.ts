// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLogPatternRequest, DeleteLogPatternResponse } from "../models/models_0";
import { DeleteLogPattern$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLogPatternCommand}.
 */
export interface DeleteLogPatternCommandInput extends DeleteLogPatternRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLogPatternCommand}.
 */
export interface DeleteLogPatternCommandOutput extends DeleteLogPatternResponse, __MetadataBearer {}

/**
 * Removes the specified log pattern from a `LogPatternSet`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DeleteLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DeleteLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DeleteLogPatternRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   PatternSetName: "STRING_VALUE", // required
 *   PatternName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLogPatternCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLogPatternCommandInput - {@link DeleteLogPatternCommandInput}
 * @returns {@link DeleteLogPatternCommandOutput}
 * @see {@link DeleteLogPatternCommandInput} for command's `input` shape.
 * @see {@link DeleteLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not understood by the server.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource does not exist in the customer account.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The parameter is not valid.
 *
 * @throws {@link ApplicationInsightsServiceException}
 *
 * Base exception class for all service exceptions from ApplicationInsights service.
 *
 * @public
 */
export class DeleteLogPatternCommand extends command<DeleteLogPatternCommandInput, DeleteLogPatternCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLogPattern",
  DeleteLogPattern$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLogPatternRequest;
      output: {};
    };
    sdk: {
      input: DeleteLogPatternCommandInput;
      output: DeleteLogPatternCommandOutput;
    };
  };
}
