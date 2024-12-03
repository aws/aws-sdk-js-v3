// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteIntegrationTablePropertiesRequest, DeleteIntegrationTablePropertiesResponse } from "../models/models_1";
import {
  de_DeleteIntegrationTablePropertiesCommand,
  se_DeleteIntegrationTablePropertiesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationTablePropertiesCommand}.
 */
export interface DeleteIntegrationTablePropertiesCommandInput extends DeleteIntegrationTablePropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationTablePropertiesCommand}.
 */
export interface DeleteIntegrationTablePropertiesCommandOutput
  extends DeleteIntegrationTablePropertiesResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the table properties that have been created for the tables that need to be replicated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteIntegrationTablePropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteIntegrationTablePropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DeleteIntegrationTablePropertiesRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationTablePropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntegrationTablePropertiesCommandInput - {@link DeleteIntegrationTablePropertiesCommandInput}
 * @returns {@link DeleteIntegrationTablePropertiesCommandOutput}
 * @see {@link DeleteIntegrationTablePropertiesCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationTablePropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class DeleteIntegrationTablePropertiesCommand extends $Command
  .classBuilder<
    DeleteIntegrationTablePropertiesCommandInput,
    DeleteIntegrationTablePropertiesCommandOutput,
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
  .s("AWSGlue", "DeleteIntegrationTableProperties", {})
  .n("GlueClient", "DeleteIntegrationTablePropertiesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIntegrationTablePropertiesCommand)
  .de(de_DeleteIntegrationTablePropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationTablePropertiesRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationTablePropertiesCommandInput;
      output: DeleteIntegrationTablePropertiesCommandOutput;
    };
  };
}
