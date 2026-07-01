// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceFunctionsRequest, ListServiceFunctionsResponse } from "../models/models_0";
import { ListServiceFunctions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceFunctionsCommand}.
 */
export interface ListServiceFunctionsCommandInput extends ListServiceFunctionsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceFunctionsCommand}.
 */
export interface ListServiceFunctionsCommandOutput extends ListServiceFunctionsResponse, __MetadataBearer {}

/**
 * <p>Lists service functions for a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListServiceFunctionsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListServiceFunctionsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListServiceFunctionsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceFunctionsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceFunctionsResponse
 * //   serviceFunctions: [ // ServiceFunctionList // required
 * //     { // ServiceFunction
 * //       serviceArn: "STRING_VALUE", // required
 * //       serviceFunctionId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       criticality: "PRIMARY" || "SUPPLEMENTAL", // required
 * //       resourceCount: Number("int"),
 * //       source: "AI_GENERATED" || "USER",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceFunctionsCommandInput - {@link ListServiceFunctionsCommandInput}
 * @returns {@link ListServiceFunctionsCommandOutput}
 * @see {@link ListServiceFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListServiceFunctionsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListServiceFunctionsCommand extends command<ListServiceFunctionsCommandInput, ListServiceFunctionsCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceFunctions",
  ListServiceFunctions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceFunctionsRequest;
      output: ListServiceFunctionsResponse;
    };
    sdk: {
      input: ListServiceFunctionsCommandInput;
      output: ListServiceFunctionsCommandOutput;
    };
  };
}
