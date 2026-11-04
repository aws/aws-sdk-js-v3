// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetQueryInput, GetQueryOutput } from "../models/models_0";
import { GetQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueryCommand}.
 */
export interface GetQueryCommandInput extends GetQueryInput {}
/**
 * @public
 *
 * The output of {@link GetQueryCommand}.
 */
export interface GetQueryCommandOutput extends GetQueryOutput, __MetadataBearer {}

/**
 * Retrieves the status of a specified query.
 *
 * > **Note:** When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have the `neptune-graph:GetQueryStatus` IAM action attached.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetQueryCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetQueryCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetQueryInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryOutput
 * //   id: "STRING_VALUE",
 * //   queryString: "STRING_VALUE",
 * //   waited: Number("int"),
 * //   elapsed: Number("int"),
 * //   state: "RUNNING" || "WAITING" || "CANCELLING",
 * // };
 *
 * ```
 *
 * @param GetQueryCommandInput - {@link GetQueryCommandInput}
 * @returns {@link GetQueryCommandOutput}
 * @see {@link GetQueryCommandInput} for command's `input` shape.
 * @see {@link GetQueryCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Raised in case of an authentication or authorization failure.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * A failure occurred on the server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be located.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception was interrupted by throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A resource could not be validated.
 *
 * @throws {@link NeptuneGraphServiceException}
 *
 * Base exception class for all service exceptions from NeptuneGraph service.
 *
 * @public
 */
export class GetQueryCommand extends command<GetQueryCommandInput, GetQueryCommandOutput>(
  _ep1,
  _mw0,
  "GetQuery",
  GetQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryInput;
      output: GetQueryOutput;
    };
    sdk: {
      input: GetQueryCommandInput;
      output: GetQueryCommandOutput;
    };
  };
}
