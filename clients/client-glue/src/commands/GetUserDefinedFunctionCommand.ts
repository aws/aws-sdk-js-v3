// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionRequest, GetUserDefinedFunctionResponse } from "../models/models_2";
import { de_GetUserDefinedFunctionCommand, se_GetUserDefinedFunctionCommand } from "../protocols/Aws_json1_1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetUserDefinedFunction", {})
  .n("GlueClient", "GetUserDefinedFunctionCommand")
  .f(void 0, void 0)
  .ser(se_GetUserDefinedFunctionCommand)
  .de(de_GetUserDefinedFunctionCommand)
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
