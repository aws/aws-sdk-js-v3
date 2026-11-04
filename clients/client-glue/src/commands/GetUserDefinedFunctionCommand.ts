// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUserDefinedFunctionRequest, GetUserDefinedFunctionResponse } from "../models/models_2";
import { GetUserDefinedFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUserDefinedFunctionCommand}.
 */
export interface GetUserDefinedFunctionCommandInput extends GetUserDefinedFunctionRequest {}
/**
 * @public
 *
 * The output of {@link GetUserDefinedFunctionCommand}.
 */
export interface GetUserDefinedFunctionCommandOutput extends GetUserDefinedFunctionResponse, __MetadataBearer {}

/**
 * Retrieves a specified function definition from the Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetUserDefinedFunctionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new GetUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * // { // GetUserDefinedFunctionResponse
 * //   UserDefinedFunction: { // UserDefinedFunction
 * //     FunctionName: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     ClassName: "STRING_VALUE",
 * //     OwnerName: "STRING_VALUE",
 * //     FunctionType: "REGULAR_FUNCTION" || "AGGREGATE_FUNCTION" || "STORED_PROCEDURE",
 * //     OwnerType: "USER" || "ROLE" || "GROUP",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     ResourceUris: [ // ResourceUriList
 * //       { // ResourceUri
 * //         ResourceType: "JAR" || "FILE" || "ARCHIVE",
 * //         Uri: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CatalogId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserDefinedFunctionCommandInput - {@link GetUserDefinedFunctionCommandInput}
 * @returns {@link GetUserDefinedFunctionCommandOutput}
 * @see {@link GetUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class GetUserDefinedFunctionCommand extends command<GetUserDefinedFunctionCommandInput, GetUserDefinedFunctionCommandOutput>(
  _ep0,
  _mw0,
  "GetUserDefinedFunction",
  GetUserDefinedFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserDefinedFunctionRequest;
      output: GetUserDefinedFunctionResponse;
    };
    sdk: {
      input: GetUserDefinedFunctionCommandInput;
      output: GetUserDefinedFunctionCommandOutput;
    };
  };
}
