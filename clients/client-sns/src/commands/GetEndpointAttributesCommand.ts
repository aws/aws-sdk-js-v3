// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEndpointAttributesInput, GetEndpointAttributesResponse } from "../models/models_0";
import { GetEndpointAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEndpointAttributesCommand}.
 */
export interface GetEndpointAttributesCommandInput extends GetEndpointAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetEndpointAttributesCommand}.
 */
export interface GetEndpointAttributesCommandOutput extends GetEndpointAttributesResponse, __MetadataBearer {}

/**
 * Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more information, see [Using Amazon SNS Mobile Push Notifications](https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetEndpointAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetEndpointAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetEndpointAttributesInput
 *   EndpointArn: "STRING_VALUE", // required
 * };
 * const command = new GetEndpointAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetEndpointAttributesResponse
 * //   Attributes: { // MapStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEndpointAttributesCommandInput - {@link GetEndpointAttributesCommandInput}
 * @returns {@link GetEndpointAttributesCommandOutput}
 * @see {@link GetEndpointAttributesCommandInput} for command's `input` shape.
 * @see {@link GetEndpointAttributesCommandOutput} for command's `response` shape.
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
export class GetEndpointAttributesCommand extends command<GetEndpointAttributesCommandInput, GetEndpointAttributesCommandOutput>(
  _ep0,
  _mw0,
  "GetEndpointAttributes",
  GetEndpointAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEndpointAttributesInput;
      output: GetEndpointAttributesResponse;
    };
    sdk: {
      input: GetEndpointAttributesCommandInput;
      output: GetEndpointAttributesCommandOutput;
    };
  };
}
