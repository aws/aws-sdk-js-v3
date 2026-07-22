// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListChannelsRequest, ListChannelsResponse } from "../models/models_0";
import { ListChannels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandInput extends ListChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandOutput extends ListChannelsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListChannelsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListChannelsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // ListChannelsRequest
 *   filterByName: "STRING_VALUE",
 *   filterByRecordingConfigurationArn: "STRING_VALUE",
 *   filterByPlaybackRestrictionPolicyArn: "STRING_VALUE",
 *   filterByAdConfigurationArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsResponse
 * //   channels: [ // ChannelList // required
 * //     { // ChannelSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       latencyMode: "STRING_VALUE",
 * //       authorized: true || false,
 * //       recordingConfigurationArn: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       insecureIngest: true || false,
 * //       type: "BASIC" || "STANDARD" || "ADVANCED_SD" || "ADVANCED_HD",
 * //       preset: "HIGHER_BANDWIDTH_DELIVERY" || "CONSTRAINED_BANDWIDTH_DELIVERY",
 * //       playbackRestrictionPolicyArn: "STRING_VALUE",
 * //       adConfigurationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsCommandInput - {@link ListChannelsCommandInput}
 * @returns {@link ListChannelsCommandOutput}
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class ListChannelsCommand extends command<ListChannelsCommandInput, ListChannelsCommandOutput>(
  _ep0,
  _mw0,
  "ListChannels",
  ListChannels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelsRequest;
      output: ListChannelsResponse;
    };
    sdk: {
      input: ListChannelsCommandInput;
      output: ListChannelsCommandOutput;
    };
  };
}
