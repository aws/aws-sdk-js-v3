// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeProtectConfigurationsRequest, DescribeProtectConfigurationsResult } from "../models/models_0";
import { DescribeProtectConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeProtectConfigurationsCommand}.
 */
export interface DescribeProtectConfigurationsCommandInput extends DescribeProtectConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProtectConfigurationsCommand}.
 */
export interface DescribeProtectConfigurationsCommandOutput extends DescribeProtectConfigurationsResult, __MetadataBearer {}

/**
 * <p>Retrieves the protect configurations that match any of filters. If a filter isn’t provided then all protect configurations are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeProtectConfigurationsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeProtectConfigurationsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeProtectConfigurationsRequest
 *   ProtectConfigurationIds: [ // ProtectConfigurationIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // ProtectConfigurationFilterList
 *     { // ProtectConfigurationFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeProtectConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProtectConfigurationsResult
 * //   ProtectConfigurations: [ // ProtectConfigurationInformationList
 * //     { // ProtectConfigurationInformation
 * //       ProtectConfigurationArn: "STRING_VALUE", // required
 * //       ProtectConfigurationId: "STRING_VALUE", // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //       AccountDefault: true || false, // required
 * //       DeletionProtectionEnabled: true || false, // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProtectConfigurationsCommandInput - {@link DescribeProtectConfigurationsCommandInput}
 * @returns {@link DescribeProtectConfigurationsCommandOutput}
 * @see {@link DescribeProtectConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class DescribeProtectConfigurationsCommand extends command<DescribeProtectConfigurationsCommandInput, DescribeProtectConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeProtectConfigurations",
  DescribeProtectConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProtectConfigurationsRequest;
      output: DescribeProtectConfigurationsResult;
    };
    sdk: {
      input: DescribeProtectConfigurationsCommandInput;
      output: DescribeProtectConfigurationsCommandOutput;
    };
  };
}
