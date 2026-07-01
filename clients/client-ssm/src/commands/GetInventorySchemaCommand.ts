// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/models_0";
import { GetInventorySchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInventorySchemaCommand}.
 */
export interface GetInventorySchemaCommandInput extends GetInventorySchemaRequest {}
/**
 * @public
 *
 * The output of {@link GetInventorySchemaCommand}.
 */
export interface GetInventorySchemaCommandOutput extends GetInventorySchemaResult, __MetadataBearer {}

/**
 * <p>Return a list of inventory type names for the account, or return a list of attribute names
 *    for a specific Inventory item type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventorySchemaCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventorySchemaCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetInventorySchemaRequest
 *   TypeName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Aggregator: true || false,
 *   SubType: true || false,
 * };
 * const command = new GetInventorySchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetInventorySchemaResult
 * //   Schemas: [ // InventoryItemSchemaResultList
 * //     { // InventoryItemSchema
 * //       TypeName: "STRING_VALUE", // required
 * //       Version: "STRING_VALUE",
 * //       Attributes: [ // InventoryItemAttributeList // required
 * //         { // InventoryItemAttribute
 * //           Name: "STRING_VALUE", // required
 * //           DataType: "string" || "number", // required
 * //         },
 * //       ],
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInventorySchemaCommandInput - {@link GetInventorySchemaCommandInput}
 * @returns {@link GetInventorySchemaCommandOutput}
 * @see {@link GetInventorySchemaCommandInput} for command's `input` shape.
 * @see {@link GetInventorySchemaCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetInventorySchemaCommand extends command<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput>(
  _ep0,
  _mw0,
  "GetInventorySchema",
  GetInventorySchema$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInventorySchemaRequest;
      output: GetInventorySchemaResult;
    };
    sdk: {
      input: GetInventorySchemaCommandInput;
      output: GetInventorySchemaCommandOutput;
    };
  };
}
