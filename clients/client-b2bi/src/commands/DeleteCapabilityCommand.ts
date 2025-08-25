// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCapabilityRequest } from "../models/models_0";
import { de_DeleteCapabilityCommand, se_DeleteCapabilityCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCapabilityCommand}.
 */
export interface DeleteCapabilityCommandInput extends DeleteCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCapabilityCommand}.
 */
export interface DeleteCapabilityCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, DeleteCapabilityCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, DeleteCapabilityCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // DeleteCapabilityRequest
 *   capabilityId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCapabilityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCapabilityCommandInput - {@link DeleteCapabilityCommandInput}
 * @returns {@link DeleteCapabilityCommandOutput}
 * @see {@link DeleteCapabilityCommandInput} for command's `input` shape.
 * @see {@link DeleteCapabilityCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object. This exception can be thrown during standard EDI validation or when custom validation rules fail, such as when element length constraints are violated, invalid codes are used in code list validations, or required elements are missing based on configured element requirement rules.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 *
 * @example Sample DeleteCapabilty call
 * ```javascript
 * //
 * const input = {
 *   capabilityId: "ca-963a8121e4fc4e348"
 * };
 * const command = new DeleteCapabilityCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCapabilityCommand extends $Command
  .classBuilder<
    DeleteCapabilityCommandInput,
    DeleteCapabilityCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "DeleteCapability", {})
  .n("B2biClient", "DeleteCapabilityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCapabilityCommand)
  .de(de_DeleteCapabilityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCapabilityRequest;
      output: {};
    };
    sdk: {
      input: DeleteCapabilityCommandInput;
      output: DeleteCapabilityCommandOutput;
    };
  };
}
