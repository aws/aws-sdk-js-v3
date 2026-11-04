// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePredefinedAttributeRequest } from "../models/models_0";
import { CreatePredefinedAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePredefinedAttributeCommand}.
 */
export interface CreatePredefinedAttributeCommandInput extends CreatePredefinedAttributeRequest {}
/**
 * @public
 *
 * The output of {@link CreatePredefinedAttributeCommand}.
 */
export interface CreatePredefinedAttributeCommandOutput extends __MetadataBearer {}

/**
 * Creates a new predefined attribute for the specified Connect Customer instance. A *predefined attribute* is made up of a name and a value.
 *
 * For the predefined attributes per instance quota, see [Connect Customer quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#connect-quotas).
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - Create an attribute for routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see [Create predefined attributes for routing contacts to agents](https://docs.aws.amazon.com/connect/latest/adminguide/predefined-attributes.html).
 * - Create an attribute for business unit name that has a list of predefined business unit names used in your organization. This is a use case where information for a contact varies between transfers or conferences. For more information, see [Use contact segment attributes](https://docs.aws.amazon.com/connect/latest/adminguide/use-contact-segment-attributes.html).
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreatePredefinedAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreatePredefinedAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreatePredefinedAttributeRequest
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
 * const command = new CreatePredefinedAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreatePredefinedAttributeCommandInput - {@link CreatePredefinedAttributeCommandInput}
 * @returns {@link CreatePredefinedAttributeCommandOutput}
 * @see {@link CreatePredefinedAttributeCommandInput} for command's `input` shape.
 * @see {@link CreatePredefinedAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
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
export class CreatePredefinedAttributeCommand extends command<CreatePredefinedAttributeCommandInput, CreatePredefinedAttributeCommandOutput>(
  _ep0,
  _mw0,
  "CreatePredefinedAttribute",
  CreatePredefinedAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePredefinedAttributeRequest;
      output: {};
    };
    sdk: {
      input: CreatePredefinedAttributeCommandInput;
      output: CreatePredefinedAttributeCommandOutput;
    };
  };
}
