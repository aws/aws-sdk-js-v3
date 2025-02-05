// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetBlueprintRequest, GetBlueprintResponse } from "../models/models_1";
import { de_GetBlueprintCommand, se_GetBlueprintCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintCommand}.
 */
export interface GetBlueprintCommandInput extends GetBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintCommand}.
 */
export interface GetBlueprintCommandOutput extends GetBlueprintResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetBlueprintRequest
 *   Name: "STRING_VALUE", // required
 *   IncludeBlueprint: true || false,
 *   IncludeParameterSpec: true || false,
 * };
 * const command = new GetBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintResponse
 * //   Blueprint: { // Blueprint
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedOn: new Date("TIMESTAMP"),
 * //     LastModifiedOn: new Date("TIMESTAMP"),
 * //     ParameterSpec: "STRING_VALUE",
 * //     BlueprintLocation: "STRING_VALUE",
 * //     BlueprintServiceLocation: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED",
 * //     ErrorMessage: "STRING_VALUE",
 * //     LastActiveDefinition: { // LastActiveDefinition
 * //       Description: "STRING_VALUE",
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       ParameterSpec: "STRING_VALUE",
 * //       BlueprintLocation: "STRING_VALUE",
 * //       BlueprintServiceLocation: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlueprintCommandInput - {@link GetBlueprintCommandInput}
 * @returns {@link GetBlueprintCommandOutput}
 * @see {@link GetBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class GetBlueprintCommand extends $Command
  .classBuilder<
    GetBlueprintCommandInput,
    GetBlueprintCommandOutput,
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
  .s("AWSGlue", "GetBlueprint", {})
  .n("GlueClient", "GetBlueprintCommand")
  .f(void 0, void 0)
  .ser(se_GetBlueprintCommand)
  .de(de_GetBlueprintCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlueprintRequest;
      output: GetBlueprintResponse;
    };
    sdk: {
      input: GetBlueprintCommandInput;
      output: GetBlueprintCommandOutput;
    };
  };
}
