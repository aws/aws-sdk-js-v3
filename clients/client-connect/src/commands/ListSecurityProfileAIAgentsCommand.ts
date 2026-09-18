// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSecurityProfileAIAgentsRequest, ListSecurityProfileAIAgentsResponse } from "../models/models_2";
import { ListSecurityProfileAIAgents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSecurityProfileAIAgentsCommand}.
 */
export interface ListSecurityProfileAIAgentsCommandInput extends ListSecurityProfileAIAgentsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityProfileAIAgentsCommand}.
 */
export interface ListSecurityProfileAIAgentsCommandOutput extends ListSecurityProfileAIAgentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the allowed AI agents in a specific security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityProfileAIAgentsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityProfileAIAgentsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListSecurityProfileAIAgentsRequest
 *   SecurityProfileId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSecurityProfileAIAgentsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityProfileAIAgentsResponse
 * //   AllowedAIAgents: [ // AllowedAIAgents
 * //     { // AIAgent
 * //       Arn: "STRING_VALUE",
 * //       Type: "THIRD_PARTY",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityProfileAIAgentsCommandInput - {@link ListSecurityProfileAIAgentsCommandInput}
 * @returns {@link ListSecurityProfileAIAgentsCommandOutput}
 * @see {@link ListSecurityProfileAIAgentsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfileAIAgentsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListSecurityProfileAIAgentsCommand extends command<ListSecurityProfileAIAgentsCommandInput, ListSecurityProfileAIAgentsCommandOutput>(
  _ep0,
  _mw0,
  "ListSecurityProfileAIAgents",
  ListSecurityProfileAIAgents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityProfileAIAgentsRequest;
      output: ListSecurityProfileAIAgentsResponse;
    };
    sdk: {
      input: ListSecurityProfileAIAgentsCommandInput;
      output: ListSecurityProfileAIAgentsCommandOutput;
    };
  };
}
