// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSchemaRequest } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteSchema } from "../schemas/schemas_21_DeleteSchema";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSchemaCommand}.
 */
export interface DeleteSchemaCommandInput extends DeleteSchemaRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSchemaCommand}.
 */
export interface DeleteSchemaCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a schema. Before deleting a schema, you must delete all
 *       datasets referencing the schema. For more information on schemas, see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DeleteSchemaRequest
 *   schemaArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSchemaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSchemaCommandInput - {@link DeleteSchemaCommandInput}
 * @returns {@link DeleteSchemaCommandOutput}
 * @see {@link DeleteSchemaCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class DeleteSchemaCommand extends $Command
  .classBuilder<
    DeleteSchemaCommandInput,
    DeleteSchemaCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DeleteSchema", {})
  .n("PersonalizeClient", "DeleteSchemaCommand")
  .sc(DeleteSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSchemaRequest;
      output: {};
    };
    sdk: {
      input: DeleteSchemaCommandInput;
      output: DeleteSchemaCommandOutput;
    };
  };
}
