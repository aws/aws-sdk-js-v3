// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPoolOriginationIdentitiesRequest, ListPoolOriginationIdentitiesResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { ListPoolOriginationIdentities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPoolOriginationIdentitiesCommand}.
 */
export interface ListPoolOriginationIdentitiesCommandInput extends ListPoolOriginationIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListPoolOriginationIdentitiesCommand}.
 */
export interface ListPoolOriginationIdentitiesCommandOutput extends ListPoolOriginationIdentitiesResult, __MetadataBearer {}

/**
 * <p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ListPoolOriginationIdentitiesCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ListPoolOriginationIdentitiesCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // ListPoolOriginationIdentitiesRequest
 *   PoolId: "STRING_VALUE", // required
 *   Filters: [ // PoolOriginationIdentitiesFilterList
 *     { // PoolOriginationIdentitiesFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPoolOriginationIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListPoolOriginationIdentitiesResult
 * //   PoolArn: "STRING_VALUE",
 * //   PoolId: "STRING_VALUE",
 * //   OriginationIdentities: [ // OriginationIdentityMetadataList
 * //     { // OriginationIdentityMetadata
 * //       OriginationIdentityArn: "STRING_VALUE", // required
 * //       OriginationIdentity: "STRING_VALUE", // required
 * //       IsoCountryCode: "STRING_VALUE", // required
 * //       NumberCapabilities: [ // NumberCapabilityList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       PhoneNumber: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPoolOriginationIdentitiesCommandInput - {@link ListPoolOriginationIdentitiesCommandInput}
 * @returns {@link ListPoolOriginationIdentitiesCommandOutput}
 * @see {@link ListPoolOriginationIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListPoolOriginationIdentitiesCommandOutput} for command's `response` shape.
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
export class ListPoolOriginationIdentitiesCommand extends $Command
  .classBuilder<
    ListPoolOriginationIdentitiesCommandInput,
    ListPoolOriginationIdentitiesCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "ListPoolOriginationIdentities", {})
  .n("PinpointSMSVoiceV2Client", "ListPoolOriginationIdentitiesCommand")
  .sc(ListPoolOriginationIdentities$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPoolOriginationIdentitiesRequest;
      output: ListPoolOriginationIdentitiesResult;
    };
    sdk: {
      input: ListPoolOriginationIdentitiesCommandInput;
      output: ListPoolOriginationIdentitiesCommandOutput;
    };
  };
}
