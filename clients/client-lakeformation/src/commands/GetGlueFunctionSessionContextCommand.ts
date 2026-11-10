// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGlueFunctionSessionContextRequest, GetGlueFunctionSessionContextResponse } from "../models/models_0";
import { GetGlueFunctionSessionContext$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGlueFunctionSessionContextCommand}.
 */
export interface GetGlueFunctionSessionContextCommandInput extends GetGlueFunctionSessionContextRequest {}
/**
 * @public
 *
 * The output of {@link GetGlueFunctionSessionContextCommand}.
 */
export interface GetGlueFunctionSessionContextCommandOutput extends GetGlueFunctionSessionContextResponse, __MetadataBearer {}

/**
 * <p>Returns a session context for one or more user-defined functions that an integrated analytics engine runs
 *       together in a job. You must have the <code>EXECUTE</code> permission on every function in the list.</p>
 *          <p>While the session context is in use, if you don't have full <code>SELECT</code> permission on a table, the
 *       job can read the table only if every function in the session has the <code>SELECT</code> permission on it.
 *       Lake Formation enforces this check.</p>
 *          <p>To use this operation, you must have the <code>lakeformation:GetDataAccess</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetGlueFunctionSessionContextCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetGlueFunctionSessionContextCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetGlueFunctionSessionContextRequest
 *   UserDefinedFunctionArns: [ // ResourceArnList // required
 *     "STRING_VALUE",
 *   ],
 *   DurationSeconds: Number("int"),
 * };
 * const command = new GetGlueFunctionSessionContextCommand(input);
 * const response = await client.send(command);
 * // { // GetGlueFunctionSessionContextResponse
 * //   SessionContextId: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetGlueFunctionSessionContextCommandInput - {@link GetGlueFunctionSessionContextCommandInput}
 * @returns {@link GetGlueFunctionSessionContextCommandOutput}
 * @see {@link GetGlueFunctionSessionContextCommandInput} for command's `input` shape.
 * @see {@link GetGlueFunctionSessionContextCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class GetGlueFunctionSessionContextCommand extends command<GetGlueFunctionSessionContextCommandInput, GetGlueFunctionSessionContextCommandOutput>(
  _ep0,
  _mw0,
  "GetGlueFunctionSessionContext",
  GetGlueFunctionSessionContext$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGlueFunctionSessionContextRequest;
      output: GetGlueFunctionSessionContextResponse;
    };
    sdk: {
      input: GetGlueFunctionSessionContextCommandInput;
      output: GetGlueFunctionSessionContextCommandOutput;
    };
  };
}
