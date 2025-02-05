// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionsRequest, GetUserDefinedFunctionsResponse } from "../models/models_2";
import { de_GetUserDefinedFunctionsCommand, se_GetUserDefinedFunctionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserDefinedFunctionsCommand}.
 */
export interface GetUserDefinedFunctionsCommandInput extends GetUserDefinedFunctionsRequest {}
/**
 * @public
 *
 * The output of {@link GetUserDefinedFunctionsCommand}.
 */
export interface GetUserDefinedFunctionsCommandOutput extends GetUserDefinedFunctionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple function definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetUserDefinedFunctionsRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE",
 *   Pattern: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetUserDefinedFunctionsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserDefinedFunctionsResponse
 * //   UserDefinedFunctions: [ // UserDefinedFunctionList
 * //     { // UserDefinedFunction
 * //       FunctionName: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       ClassName: "STRING_VALUE",
 * //       OwnerName: "STRING_VALUE",
 * //       OwnerType: "USER" || "ROLE" || "GROUP",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       ResourceUris: [ // ResourceUriList
 * //         { // ResourceUri
 * //           ResourceType: "JAR" || "FILE" || "ARCHIVE",
 * //           Uri: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CatalogId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUserDefinedFunctionsCommandInput - {@link GetUserDefinedFunctionsCommandInput}
 * @returns {@link GetUserDefinedFunctionsCommandOutput}
 * @see {@link GetUserDefinedFunctionsCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetUserDefinedFunctionsCommand extends $Command
  .classBuilder<
    GetUserDefinedFunctionsCommandInput,
    GetUserDefinedFunctionsCommandOutput,
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
  .s("AWSGlue", "GetUserDefinedFunctions", {})
  .n("GlueClient", "GetUserDefinedFunctionsCommand")
  .f(void 0, void 0)
  .ser(se_GetUserDefinedFunctionsCommand)
  .de(de_GetUserDefinedFunctionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserDefinedFunctionsRequest;
      output: GetUserDefinedFunctionsResponse;
    };
    sdk: {
      input: GetUserDefinedFunctionsCommandInput;
      output: GetUserDefinedFunctionsCommandOutput;
    };
  };
}
