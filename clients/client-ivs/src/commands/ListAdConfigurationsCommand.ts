// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAdConfigurationsRequest, ListAdConfigurationsResponse } from "../models/models_0";
import { ListAdConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAdConfigurationsCommand}.
 */
export interface ListAdConfigurationsCommandInput extends ListAdConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAdConfigurationsCommand}.
 */
export interface ListAdConfigurationsCommandOutput extends ListAdConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all ad configurations in your account, in the AWS region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListAdConfigurationsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListAdConfigurationsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // ListAdConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAdConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAdConfigurationsResponse
 * //   adConfigurations: [ // AdConfigurationList // required
 * //     { // AdConfigurationSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       mediaTailorPlaybackConfigurations: [ // MediaTailorPlaybackConfigurationsList // required
 * //         { // MediaTailorPlaybackConfiguration
 * //           playbackConfigurationArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdConfigurationsCommandInput - {@link ListAdConfigurationsCommandInput}
 * @returns {@link ListAdConfigurationsCommandOutput}
 * @see {@link ListAdConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAdConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class ListAdConfigurationsCommand extends command<ListAdConfigurationsCommandInput, ListAdConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAdConfigurations",
  ListAdConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdConfigurationsRequest;
      output: ListAdConfigurationsResponse;
    };
    sdk: {
      input: ListAdConfigurationsCommandInput;
      output: ListAdConfigurationsCommandOutput;
    };
  };
}
