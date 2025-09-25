// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListChallengeMetadataRequest, ListChallengeMetadataResponse } from "../models/models_0";
import { PcaConnectorScepClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorScepClient";
import { ListChallengeMetadata } from "../schemas/schemas_2_Challenge";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChallengeMetadataCommand}.
 */
export interface ListChallengeMetadataCommandInput extends ListChallengeMetadataRequest {}
/**
 * @public
 *
 * The output of {@link ListChallengeMetadataCommand}.
 */
export interface ListChallengeMetadataCommandOutput extends ListChallengeMetadataResponse, __MetadataBearer {}

/**
 * <p>Retrieves the challenge metadata for the specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorScepClient, ListChallengeMetadataCommand } from "@aws-sdk/client-pca-connector-scep"; // ES Modules import
 * // const { PcaConnectorScepClient, ListChallengeMetadataCommand } = require("@aws-sdk/client-pca-connector-scep"); // CommonJS import
 * // import type { PcaConnectorScepClientConfig } from "@aws-sdk/client-pca-connector-scep";
 * const config = {}; // type is PcaConnectorScepClientConfig
 * const client = new PcaConnectorScepClient(config);
 * const input = { // ListChallengeMetadataRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new ListChallengeMetadataCommand(input);
 * const response = await client.send(command);
 * // { // ListChallengeMetadataResponse
 * //   Challenges: [ // ChallengeMetadataList
 * //     { // ChallengeMetadataSummary
 * //       Arn: "STRING_VALUE",
 * //       ConnectorArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChallengeMetadataCommandInput - {@link ListChallengeMetadataCommandInput}
 * @returns {@link ListChallengeMetadataCommandOutput}
 * @see {@link ListChallengeMetadataCommandInput} for command's `input` shape.
 * @see {@link ListChallengeMetadataCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorScepClientResolvedConfig | config} for PcaConnectorScepClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to perform an operation and you don't have
 *       the required permissions. This can be caused by insufficient permissions in policies
 *       attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *       because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *       that affects your Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *       an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might be incorrectly specified, or it might have a status other than <code>ACTIVE</code>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occurred. For example, invalid characters in a name tag, or an invalid pagination token.</p>
 *
 * @throws {@link PcaConnectorScepServiceException}
 * <p>Base exception class for all service exceptions from PcaConnectorScep service.</p>
 *
 *
 * @public
 */
export class ListChallengeMetadataCommand extends $Command
  .classBuilder<
    ListChallengeMetadataCommandInput,
    ListChallengeMetadataCommandOutput,
    PcaConnectorScepClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorScepClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PcaConnectorScep", "ListChallengeMetadata", {})
  .n("PcaConnectorScepClient", "ListChallengeMetadataCommand")
  .sc(ListChallengeMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChallengeMetadataRequest;
      output: ListChallengeMetadataResponse;
    };
    sdk: {
      input: ListChallengeMetadataCommandInput;
      output: ListChallengeMetadataCommandOutput;
    };
  };
}
