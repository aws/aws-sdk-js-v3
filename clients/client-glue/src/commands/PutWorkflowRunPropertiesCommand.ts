// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutWorkflowRunPropertiesRequest, PutWorkflowRunPropertiesResponse } from "../models/models_2";
import { de_PutWorkflowRunPropertiesCommand, se_PutWorkflowRunPropertiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutWorkflowRunPropertiesCommand}.
 */
export interface PutWorkflowRunPropertiesCommandInput extends PutWorkflowRunPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link PutWorkflowRunPropertiesCommand}.
 */
export interface PutWorkflowRunPropertiesCommandOutput extends PutWorkflowRunPropertiesResponse, __MetadataBearer {}

/**
 * <p>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutWorkflowRunPropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // PutWorkflowRunPropertiesRequest
 *   Name: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 *   RunProperties: { // WorkflowRunProperties // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWorkflowRunPropertiesCommandInput - {@link PutWorkflowRunPropertiesCommandInput}
 * @returns {@link PutWorkflowRunPropertiesCommandOutput}
 * @see {@link PutWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutWorkflowRunPropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class PutWorkflowRunPropertiesCommand extends $Command
  .classBuilder<
    PutWorkflowRunPropertiesCommandInput,
    PutWorkflowRunPropertiesCommandOutput,
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
  .s("AWSGlue", "PutWorkflowRunProperties", {})
  .n("GlueClient", "PutWorkflowRunPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_PutWorkflowRunPropertiesCommand)
  .de(de_PutWorkflowRunPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWorkflowRunPropertiesRequest;
      output: {};
    };
    sdk: {
      input: PutWorkflowRunPropertiesCommandInput;
      output: PutWorkflowRunPropertiesCommandOutput;
    };
  };
}
