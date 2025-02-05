// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetChallengeMetadataRequest, GetChallengeMetadataResponse } from "../models/models_0";
import { PcaConnectorScepClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorScepClient";
import { de_GetChallengeMetadataCommand, se_GetChallengeMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChallengeMetadataCommand}.
 */
export interface GetChallengeMetadataCommandInput extends GetChallengeMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetChallengeMetadataCommand}.
 */
export interface GetChallengeMetadataCommandOutput extends GetChallengeMetadataResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the specified <a href="https://docs.aws.amazon.com/C4SCEP_API/pca-connector-scep/latest/APIReference/API_Challenge.html">Challenge</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorScepClient, GetChallengeMetadataCommand } from "@aws-sdk/client-pca-connector-scep"; // ES Modules import
 * // const { PcaConnectorScepClient, GetChallengeMetadataCommand } = require("@aws-sdk/client-pca-connector-scep"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PcaConnectorScepClient(config);
 * const input = { // GetChallengeMetadataRequest
 *   ChallengeArn: "STRING_VALUE", // required
 * };
 * const command = new GetChallengeMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetChallengeMetadataResponse
 * //   ChallengeMetadata: { // ChallengeMetadata
 * //     Arn: "STRING_VALUE",
 * //     ConnectorArn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChallengeMetadataCommandInput - {@link GetChallengeMetadataCommandInput}
 * @returns {@link GetChallengeMetadataCommandOutput}
 * @see {@link GetChallengeMetadataCommandInput} for command's `input` shape.
 * @see {@link GetChallengeMetadataCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetChallengeMetadataCommand extends $Command
  .classBuilder<
    GetChallengeMetadataCommandInput,
    GetChallengeMetadataCommandOutput,
    PcaConnectorScepClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PcaConnectorScepClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PcaConnectorScep", "GetChallengeMetadata", {})
  .n("PcaConnectorScepClient", "GetChallengeMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetChallengeMetadataCommand)
  .de(de_GetChallengeMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChallengeMetadataRequest;
      output: GetChallengeMetadataResponse;
    };
    sdk: {
      input: GetChallengeMetadataCommandInput;
      output: GetChallengeMetadataCommandOutput;
    };
  };
}
