// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSubscriptionAttributesInput, GetSubscriptionAttributesResponse } from "../models/models_0";
import { GetSubscriptionAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSubscriptionAttributesCommand}.
 */
export interface GetSubscriptionAttributesCommandInput extends GetSubscriptionAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionAttributesCommand}.
 */
export interface GetSubscriptionAttributesCommandOutput extends GetSubscriptionAttributesResponse, __MetadataBearer {}

/**
 * Returns all of the properties of a subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetSubscriptionAttributesInput
 *   SubscriptionArn: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionAttributesResponse
 * //   Attributes: { // SubscriptionAttributesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSubscriptionAttributesCommandInput - {@link GetSubscriptionAttributesCommandInput}
 * @returns {@link GetSubscriptionAttributesCommandOutput}
 * @see {@link GetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionAttributesCommandOutput} for command's `response` shape.
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
export class GetSubscriptionAttributesCommand extends command<GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput>(
  _ep0,
  _mw0,
  "GetSubscriptionAttributes",
  GetSubscriptionAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubscriptionAttributesInput;
      output: GetSubscriptionAttributesResponse;
    };
    sdk: {
      input: GetSubscriptionAttributesCommandInput;
      output: GetSubscriptionAttributesCommandOutput;
    };
  };
}
