// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePredefinedAttributeRequest } from "../models/models_2";
import { UpdatePredefinedAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePredefinedAttributeCommand}.
 */
export interface UpdatePredefinedAttributeCommandInput extends UpdatePredefinedAttributeRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePredefinedAttributeCommand}.
 */
export interface UpdatePredefinedAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a predefined attribute for the specified Amazon Connect instance. A <i>predefined
 *     attribute</i> is made up of a name and a value.</p>
 *          <p>For the predefined attributes per instance quota, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#connect-quotas">Amazon Connect quotas</a>.</p>
 *          <p>
 *             <b>Use cases</b>
 *          </p>
 *          <p>Following are common uses cases for this API:</p>
 *          <ul>
 *             <li>
 *                <p>Update routing proficiency (for example, agent certification) that has predefined values
 *      (for example, a list of possible certifications). For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/predefined-attributes.html">Create
 *       predefined attributes for routing contacts to agents</a>.</p>
 *             </li>
 *             <li>
 *                <p>Update an attribute for business unit name that has a list of predefined business unit
 *      names used in your organization. This is a use case where information for a contact varies
 *      between transfers or conferences. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-contact-segment-attributes.html">Use contact segment
 *       attributes</a>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and
 *    quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdatePredefinedAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdatePredefinedAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdatePredefinedAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Values: { // PredefinedAttributeValues Union: only one key present
 *     StringList: [ // PredefinedAttributeStringValuesList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Purposes: [ // PredefinedAttributePurposeNameList
 *     "STRING_VALUE",
 *   ],
 *   AttributeConfiguration: { // InputPredefinedAttributeConfiguration
 *     EnableValueValidationOnAssociation: true || false,
 *   },
 * };
 * const command = new UpdatePredefinedAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePredefinedAttributeCommandInput - {@link UpdatePredefinedAttributeCommandInput}
 * @returns {@link UpdatePredefinedAttributeCommandOutput}
 * @see {@link UpdatePredefinedAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdatePredefinedAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdatePredefinedAttributeCommand extends $Command
  .classBuilder<
    UpdatePredefinedAttributeCommandInput,
    UpdatePredefinedAttributeCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdatePredefinedAttribute", {})
  .n("ConnectClient", "UpdatePredefinedAttributeCommand")
  .sc(UpdatePredefinedAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePredefinedAttributeRequest;
      output: {};
    };
    sdk: {
      input: UpdatePredefinedAttributeCommandInput;
      output: UpdatePredefinedAttributeCommandOutput;
    };
  };
}
