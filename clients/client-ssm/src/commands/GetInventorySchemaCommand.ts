// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/models_1";
import { de_GetInventorySchemaCommand, se_GetInventorySchemaCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class GetInventorySchemaCommand extends $Command
  .classBuilder<
    GetInventorySchemaCommandInput,
    GetInventorySchemaCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetInventorySchema", {})
  .n("SSMClient", "GetInventorySchemaCommand")
  .f(void 0, void 0)
  .ser(se_GetInventorySchemaCommand)
  .de(de_GetInventorySchemaCommand)
  .build() {
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
