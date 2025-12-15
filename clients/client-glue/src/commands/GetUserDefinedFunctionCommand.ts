// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetUserDefinedFunctionRequest, GetUserDefinedFunctionResponse } from "../models/models_2";
import { GetUserDefinedFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a specified function definition from the Data Catalog.</p>
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
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
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
export class GetUserDefinedFunctionCommand extends $Command
  .classBuilder<
    GetUserDefinedFunctionCommandInput,
    GetUserDefinedFunctionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetUserDefinedFunction", {})
  .n("GlueClient", "GetUserDefinedFunctionCommand")
  .sc(GetUserDefinedFunction$)
  .build() {
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
