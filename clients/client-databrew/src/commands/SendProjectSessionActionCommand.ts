// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendProjectSessionActionRequest, SendProjectSessionActionResponse } from "../models/models_0";
import { SendProjectSessionAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendProjectSessionActionCommand}.
 */
export interface SendProjectSessionActionCommandInput extends SendProjectSessionActionRequest {}
/**
 * @public
 *
 * The output of {@link SendProjectSessionActionCommand}.
 */
export interface SendProjectSessionActionCommandOutput extends SendProjectSessionActionResponse, __MetadataBearer {}

/**
 * <p>Performs a recipe step within an interactive DataBrew session that's currently
 *             open.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, SendProjectSessionActionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, SendProjectSessionActionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // SendProjectSessionActionRequest
 *   Preview: true || false,
 *   Name: "STRING_VALUE", // required
 *   RecipeStep: { // RecipeStep
 *     Action: { // RecipeAction
 *       Operation: "STRING_VALUE", // required
 *       Parameters: { // ParameterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     ConditionExpressions: [ // ConditionExpressionList
 *       { // ConditionExpression
 *         Condition: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *         TargetColumn: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   StepIndex: Number("int"),
 *   ClientSessionId: "STRING_VALUE",
 *   ViewFrame: { // ViewFrame
 *     StartColumnIndex: Number("int"), // required
 *     ColumnRange: Number("int"),
 *     HiddenColumns: [ // HiddenColumnList
 *       "STRING_VALUE",
 *     ],
 *     StartRowIndex: Number("int"),
 *     RowRange: Number("int"),
 *     Analytics: "ENABLE" || "DISABLE",
 *   },
 * };
 * const command = new SendProjectSessionActionCommand(input);
 * const response = await client.send(command);
 * // { // SendProjectSessionActionResponse
 * //   Result: "STRING_VALUE",
 * //   Name: "STRING_VALUE", // required
 * //   ActionId: Number("int"),
 * // };
 *
 * ```
 *
 * @param SendProjectSessionActionCommandInput - {@link SendProjectSessionActionCommandInput}
 * @returns {@link SendProjectSessionActionCommandOutput}
 * @see {@link SendProjectSessionActionCommandInput} for command's `input` shape.
 * @see {@link SendProjectSessionActionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class SendProjectSessionActionCommand extends $Command
  .classBuilder<
    SendProjectSessionActionCommandInput,
    SendProjectSessionActionCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "SendProjectSessionAction", {})
  .n("DataBrewClient", "SendProjectSessionActionCommand")
  .sc(SendProjectSessionAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendProjectSessionActionRequest;
      output: SendProjectSessionActionResponse;
    };
    sdk: {
      input: SendProjectSessionActionCommandInput;
      output: SendProjectSessionActionCommandOutput;
    };
  };
}
