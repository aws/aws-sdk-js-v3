// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResumeResourceRequest } from "../models/models_0";
import { ResumeResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResumeResourceCommand}.
 */
export interface ResumeResourceCommandInput extends ResumeResourceRequest {}
/**
 * @public
 *
 * The output of {@link ResumeResourceCommand}.
 */
export interface ResumeResourceCommandOutput extends __MetadataBearer {}

/**
 * Resumes a stopped monitor resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ResumeResourceCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ResumeResourceCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ResumeResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ResumeResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeResourceCommandInput - {@link ResumeResourceCommandInput}
 * @returns {@link ResumeResourceCommandOutput}
 * @see {@link ResumeResourceCommandInput} for command's `input` shape.
 * @see {@link ResumeResourceCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of resources per account has been exceeded.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class ResumeResourceCommand extends command<ResumeResourceCommandInput, ResumeResourceCommandOutput>(
  _ep0,
  _mw0,
  "ResumeResource",
  ResumeResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeResourceRequest;
      output: {};
    };
    sdk: {
      input: ResumeResourceCommandInput;
      output: ResumeResourceCommandOutput;
    };
  };
}
