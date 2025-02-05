// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRunPropertiesRequest, GetWorkflowRunPropertiesResponse } from "../models/models_2";
import { de_GetWorkflowRunPropertiesCommand, se_GetWorkflowRunPropertiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowRunPropertiesCommand}.
 */
export interface GetWorkflowRunPropertiesCommandInput extends GetWorkflowRunPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowRunPropertiesCommand}.
 */
export interface GetWorkflowRunPropertiesCommandOutput extends GetWorkflowRunPropertiesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the workflow run properties which were set during the run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunPropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetWorkflowRunPropertiesRequest
 *   Name: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowRunPropertiesResponse
 * //   RunProperties: { // WorkflowRunProperties
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkflowRunPropertiesCommandInput - {@link GetWorkflowRunPropertiesCommandInput}
 * @returns {@link GetWorkflowRunPropertiesCommandOutput}
 * @see {@link GetWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunPropertiesCommandOutput} for command's `response` shape.
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
export class GetWorkflowRunPropertiesCommand extends $Command
  .classBuilder<
    GetWorkflowRunPropertiesCommandInput,
    GetWorkflowRunPropertiesCommandOutput,
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
  .s("AWSGlue", "GetWorkflowRunProperties", {})
  .n("GlueClient", "GetWorkflowRunPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowRunPropertiesCommand)
  .de(de_GetWorkflowRunPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowRunPropertiesRequest;
      output: GetWorkflowRunPropertiesResponse;
    };
    sdk: {
      input: GetWorkflowRunPropertiesCommandInput;
      output: GetWorkflowRunPropertiesCommandOutput;
    };
  };
}
