// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetEndpointAttributesInput } from "../models/models_0";
import { SetEndpointAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetEndpointAttributesCommand}.
 */
export interface SetEndpointAttributesCommandInput extends SetEndpointAttributesInput {}
/**
 * @public
 *
 * The output of {@link SetEndpointAttributesCommand}.
 */
export interface SetEndpointAttributesCommandOutput extends __MetadataBearer {}

/**
 * Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see [Using Amazon SNS Mobile Push Notifications](https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetEndpointAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetEndpointAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // SetEndpointAttributesInput
 *   EndpointArn: "STRING_VALUE", // required
 *   Attributes: { // MapStringToString // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SetEndpointAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetEndpointAttributesCommandInput - {@link SetEndpointAttributesCommandInput}
 * @returns {@link SetEndpointAttributesCommandOutput}
 * @see {@link SetEndpointAttributesCommandInput} for command's `input` shape.
 * @see {@link SetEndpointAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Indicates that the requested resource does not exist.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class SetEndpointAttributesCommand extends command<SetEndpointAttributesCommandInput, SetEndpointAttributesCommandOutput>(
  _ep0,
  _mw0,
  "SetEndpointAttributes",
  SetEndpointAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetEndpointAttributesInput;
      output: {};
    };
    sdk: {
      input: SetEndpointAttributesCommandInput;
      output: SetEndpointAttributesCommandOutput;
    };
  };
}
