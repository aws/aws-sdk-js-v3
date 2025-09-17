// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateCustomEntityTypeRequest, CreateCustomEntityTypeResponse } from "../models/models_1";
import { de_CreateCustomEntityTypeCommand, se_CreateCustomEntityTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomEntityTypeCommand}.
 */
export interface CreateCustomEntityTypeCommandInput extends CreateCustomEntityTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomEntityTypeCommand}.
 */
export interface CreateCustomEntityTypeCommandOutput extends CreateCustomEntityTypeResponse, __MetadataBearer {}

/**
 * <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p>
 *          <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCustomEntityTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCustomEntityTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateCustomEntityTypeRequest
 *   Name: "STRING_VALUE", // required
 *   RegexString: "STRING_VALUE", // required
 *   ContextWords: [ // ContextWords
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCustomEntityTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomEntityTypeResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomEntityTypeCommandInput - {@link CreateCustomEntityTypeCommandInput}
 * @returns {@link CreateCustomEntityTypeCommandOutput}
 * @see {@link CreateCustomEntityTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateCustomEntityTypeCommand extends $Command
  .classBuilder<
    CreateCustomEntityTypeCommandInput,
    CreateCustomEntityTypeCommandOutput,
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
  .s("AWSGlue", "CreateCustomEntityType", {})
  .n("GlueClient", "CreateCustomEntityTypeCommand")
  .f(void 0, void 0)
  .ser(se_CreateCustomEntityTypeCommand)
  .de(de_CreateCustomEntityTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomEntityTypeRequest;
      output: CreateCustomEntityTypeResponse;
    };
    sdk: {
      input: CreateCustomEntityTypeCommandInput;
      output: CreateCustomEntityTypeCommandOutput;
    };
  };
}
