// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEndpointResponse, CreatePlatformEndpointInput } from "../models/models_0";
import { CreatePlatformEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePlatformEndpointCommand}.
 */
export interface CreatePlatformEndpointCommandInput extends CreatePlatformEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreatePlatformEndpointCommand}.
 */
export interface CreatePlatformEndpointCommandOutput extends CreateEndpointResponse, __MetadataBearer {}

/**
 * Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. `CreatePlatformEndpoint` requires the `PlatformApplicationArn` that is returned from `CreatePlatformApplication`. You can use the returned `EndpointArn` to send a message to a mobile app or by the `Subscribe` action for subscription to a topic. The `CreatePlatformEndpoint` action is idempotent, so if the requester already owns an endpoint with the same device token and attributes, that endpoint's ARN is returned without creating a new endpoint. For more information, see [Using Amazon SNS Mobile Push Notifications](https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html).
 *
 * When using `CreatePlatformEndpoint` with Baidu, two attributes must be provided: ChannelId and UserId. The token field must also contain the ChannelId. For more information, see [Creating an Amazon SNS Endpoint for Baidu](https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreatePlatformEndpointCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreatePlatformEndpointCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // CreatePlatformEndpointInput
 *   PlatformApplicationArn: "STRING_VALUE", // required
 *   Token: "STRING_VALUE", // required
 *   CustomUserData: "STRING_VALUE",
 *   Attributes: { // MapStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePlatformEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateEndpointResponse
 * //   EndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePlatformEndpointCommandInput - {@link CreatePlatformEndpointCommandInput}
 * @returns {@link CreatePlatformEndpointCommandOutput}
 * @see {@link CreatePlatformEndpointCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformEndpointCommandOutput} for command's `response` shape.
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
export class CreatePlatformEndpointCommand extends command<CreatePlatformEndpointCommandInput, CreatePlatformEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreatePlatformEndpoint",
  CreatePlatformEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlatformEndpointInput;
      output: CreateEndpointResponse;
    };
    sdk: {
      input: CreatePlatformEndpointCommandInput;
      output: CreatePlatformEndpointCommandOutput;
    };
  };
}
