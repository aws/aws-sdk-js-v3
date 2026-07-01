// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCustomEntityTypeRequest, GetCustomEntityTypeResponse } from "../models/models_1";
import { GetCustomEntityType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomEntityTypeCommand}.
 */
export interface GetCustomEntityTypeCommandInput extends GetCustomEntityTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomEntityTypeCommand}.
 */
export interface GetCustomEntityTypeCommandOutput extends GetCustomEntityTypeResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a custom pattern by specifying its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCustomEntityTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCustomEntityTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetCustomEntityTypeRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetCustomEntityTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomEntityTypeResponse
 * //   Name: "STRING_VALUE",
 * //   RegexString: "STRING_VALUE",
 * //   ContextWords: [ // ContextWords
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCustomEntityTypeCommandInput - {@link GetCustomEntityTypeCommandInput}
 * @returns {@link GetCustomEntityTypeCommandOutput}
 * @see {@link GetCustomEntityTypeCommandInput} for command's `input` shape.
 * @see {@link GetCustomEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetCustomEntityTypeCommand extends command<GetCustomEntityTypeCommandInput, GetCustomEntityTypeCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomEntityType",
  GetCustomEntityType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomEntityTypeRequest;
      output: GetCustomEntityTypeResponse;
    };
    sdk: {
      input: GetCustomEntityTypeCommandInput;
      output: GetCustomEntityTypeCommandOutput;
    };
  };
}
