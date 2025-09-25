// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSchemaRequest, DescribeSchemaResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSchema } from "../schemas/schemas_3_Dataset";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSchemaCommand}.
 */
export interface DescribeSchemaCommandInput extends DescribeSchemaRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSchemaCommand}.
 */
export interface DescribeSchemaCommandOutput extends DescribeSchemaResponse, __MetadataBearer {}

/**
 * <p>Describes a schema. For more information on schemas, see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeSchemaRequest
 *   schemaArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeSchemaCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSchemaResponse
 * //   schema: { // DatasetSchema
 * //     name: "STRING_VALUE",
 * //     schemaArn: "STRING_VALUE",
 * //     schema: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     domain: "ECOMMERCE" || "VIDEO_ON_DEMAND",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSchemaCommandInput - {@link DescribeSchemaCommandInput}
 * @returns {@link DescribeSchemaCommandOutput}
 * @see {@link DescribeSchemaCommandInput} for command's `input` shape.
 * @see {@link DescribeSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
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
export class DescribeSchemaCommand extends $Command
  .classBuilder<
    DescribeSchemaCommandInput,
    DescribeSchemaCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DescribeSchema", {})
  .n("PersonalizeClient", "DescribeSchemaCommand")
  .sc(DescribeSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSchemaRequest;
      output: DescribeSchemaResponse;
    };
    sdk: {
      input: DescribeSchemaCommandInput;
      output: DescribeSchemaCommandOutput;
    };
  };
}
