// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTargetsForSecurityProfileRequest, ListTargetsForSecurityProfileResponse } from "../models/models_2";
import { ListTargetsForSecurityProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTargetsForSecurityProfileCommand}.
 */
export interface ListTargetsForSecurityProfileCommandInput extends ListTargetsForSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsForSecurityProfileCommand}.
 */
export interface ListTargetsForSecurityProfileCommandOutput extends ListTargetsForSecurityProfileResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists the targets (thing groups) associated with a given Device Defender security profile.
 *
 * Requires permission to access the [ListTargetsForSecurityProfile](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTargetsForSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTargetsForSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListTargetsForSecurityProfileRequest
 *   securityProfileName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTargetsForSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsForSecurityProfileResponse
 * //   securityProfileTargets: [ // SecurityProfileTargets
 * //     { // SecurityProfileTarget
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsForSecurityProfileCommandInput - {@link ListTargetsForSecurityProfileCommandInput}
 * @returns {@link ListTargetsForSecurityProfileCommandOutput}
 * @see {@link ListTargetsForSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListTargetsForSecurityProfileCommand extends command<ListTargetsForSecurityProfileCommandInput, ListTargetsForSecurityProfileCommandOutput>(
  _ep0,
  _mw0,
  "ListTargetsForSecurityProfile",
  ListTargetsForSecurityProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetsForSecurityProfileRequest;
      output: ListTargetsForSecurityProfileResponse;
    };
    sdk: {
      input: ListTargetsForSecurityProfileCommandInput;
      output: ListTargetsForSecurityProfileCommandOutput;
    };
  };
}
