// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSecurityProfilesRequest, ListSecurityProfilesResponse } from "../models/models_1";
import { ListSecurityProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSecurityProfilesCommand}.
 */
export interface ListSecurityProfilesCommandInput extends ListSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityProfilesCommand}.
 */
export interface ListSecurityProfilesCommandOutput extends ListSecurityProfilesResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric.
 *
 * Requires permission to access the [ListSecurityProfiles](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * > **Note:** `dimensionName` and `metricName` cannot be used in the same request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSecurityProfilesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSecurityProfilesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListSecurityProfilesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   dimensionName: "STRING_VALUE",
 *   metricName: "STRING_VALUE",
 * };
 * const command = new ListSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityProfilesResponse
 * //   securityProfileIdentifiers: [ // SecurityProfileIdentifiers
 * //     { // SecurityProfileIdentifier
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityProfilesCommandInput - {@link ListSecurityProfilesCommandInput}
 * @returns {@link ListSecurityProfilesCommandOutput}
 * @see {@link ListSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesCommandOutput} for command's `response` shape.
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
export class ListSecurityProfilesCommand extends command<ListSecurityProfilesCommandInput, ListSecurityProfilesCommandOutput>(
  _ep0,
  _mw0,
  "ListSecurityProfiles",
  ListSecurityProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityProfilesRequest;
      output: ListSecurityProfilesResponse;
    };
    sdk: {
      input: ListSecurityProfilesCommandInput;
      output: ListSecurityProfilesCommandOutput;
    };
  };
}
