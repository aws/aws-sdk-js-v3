// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetPlatformApplicationAttributesInput,
  GetPlatformApplicationAttributesResponse,
} from "../models/models_0";
import { GetPlatformApplicationAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPlatformApplicationAttributesCommand}.
 */
export interface GetPlatformApplicationAttributesCommandInput extends GetPlatformApplicationAttributesInput {}
/**
 * @public
 *
 * The output of {@link GetPlatformApplicationAttributesCommand}.
 */
export interface GetPlatformApplicationAttributesCommandOutput extends GetPlatformApplicationAttributesResponse, __MetadataBearer {}

/**
 * Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see [Using Amazon SNS Mobile Push Notifications](https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetPlatformApplicationAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetPlatformApplicationAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // GetPlatformApplicationAttributesInput
 *   PlatformApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new GetPlatformApplicationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetPlatformApplicationAttributesResponse
 * //   Attributes: { // MapStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPlatformApplicationAttributesCommandInput - {@link GetPlatformApplicationAttributesCommandInput}
 * @returns {@link GetPlatformApplicationAttributesCommandOutput}
 * @see {@link GetPlatformApplicationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetPlatformApplicationAttributesCommandOutput} for command's `response` shape.
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
export class GetPlatformApplicationAttributesCommand extends command<GetPlatformApplicationAttributesCommandInput, GetPlatformApplicationAttributesCommandOutput>(
  _ep0,
  _mw0,
  "GetPlatformApplicationAttributes",
  GetPlatformApplicationAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlatformApplicationAttributesInput;
      output: GetPlatformApplicationAttributesResponse;
    };
    sdk: {
      input: GetPlatformApplicationAttributesCommandInput;
      output: GetPlatformApplicationAttributesCommandOutput;
    };
  };
}
