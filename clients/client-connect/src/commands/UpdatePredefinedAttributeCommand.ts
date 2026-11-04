// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePredefinedAttributeRequest } from "../models/models_4";
import { UpdatePredefinedAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a predefined attribute for the specified Connect Customer instance. A *predefined attribute* is made up of a name and a value.
 *
 * For the predefined attributes per instance quota, see [Connect Customer quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#connect-quotas).
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - Update routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see [Create predefined attributes for routing contacts to agents](https://docs.aws.amazon.com/connect/latest/adminguide/predefined-attributes.html).
 * - Update an attribute for business unit name that has a list of predefined business unit names used in your organization. This is a use case where information for a contact varies between transfers or conferences. For more information, see [Use contact segment attributes](https://docs.aws.amazon.com/connect/latest/adminguide/use-contact-segment-attributes.html).
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdatePredefinedAttributeCommand extends command<UpdatePredefinedAttributeCommandInput, UpdatePredefinedAttributeCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePredefinedAttribute",
  UpdatePredefinedAttribute$
) {
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
