// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateChallengeRequest,
  CreateChallengeResponse,
  CreateChallengeResponseFilterSensitiveLog,
} from "../models/models_0";
import { PcaConnectorScepClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PcaConnectorScepClient";
import { de_CreateChallengeCommand, se_CreateChallengeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChallengeCommand}.
 */
export interface CreateChallengeCommandInput extends CreateChallengeRequest {}
/**
 * @public
 *
 * The output of {@link CreateChallengeCommand}.
 */
export interface CreateChallengeCommandOutput extends CreateChallengeResponse, __MetadataBearer {}

/**
 * <p>For general-purpose connectors. Creates a <i>challenge password</i> for the specified connector. The SCEP protocol uses a challenge password to authenticate a request before issuing a certificate from a certificate authority (CA). Your SCEP clients include the challenge password as part of their certificate request to Connector for SCEP. To retrieve the connector Amazon Resource Names (ARNs) for the connectors in your account, call <a href="https://docs.aws.amazon.com/C4SCEP_API/pca-connector-scep/latest/APIReference/API_ListConnectors.html">ListConnectors</a>.</p>
 *          <p>To create additional challenge passwords for the connector, call <code>CreateChallenge</code> again. We recommend frequently rotating your challenge passwords.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorScepClient, CreateChallengeCommand } from "@aws-sdk/client-pca-connector-scep"; // ES Modules import
 * // const { PcaConnectorScepClient, CreateChallengeCommand } = require("@aws-sdk/client-pca-connector-scep"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PcaConnectorScepClient(config);
 * const input = { // CreateChallengeRequest
 *   ConnectorArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateChallengeCommand(input);
 * const response = await client.send(command);
 * // { // CreateChallengeResponse
 * //   Challenge: { // Challenge
 * //     Arn: "STRING_VALUE",
 * //     ConnectorArn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     Password: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChallengeCommandInput - {@link CreateChallengeCommandInput}
 * @returns {@link CreateChallengeCommandOutput}
 * @see {@link CreateChallengeCommandInput} for command's `input` shape.
 * @see {@link CreateChallengeCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorScepClientResolvedConfig | config} for PcaConnectorScepClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You can receive this error if you attempt to perform an operation and you don't have
 *       the required permissions. This can be caused by insufficient permissions in policies
 *       attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen
 *       because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP)
 *       that affects your Amazon Web Services account.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can't be completed for one of the following reasons because the requested
 *       resource was being concurrently modified by another request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with
 *       an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might be incorrectly specified, or it might have a status other than <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class CreateChallengeCommand extends $Command
  .classBuilder<
    CreateChallengeCommandInput,
    CreateChallengeCommandOutput,
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
  .s("PcaConnectorScep", "CreateChallenge", {})
  .n("PcaConnectorScepClient", "CreateChallengeCommand")
  .f(void 0, CreateChallengeResponseFilterSensitiveLog)
  .ser(se_CreateChallengeCommand)
  .de(de_CreateChallengeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChallengeRequest;
      output: CreateChallengeResponse;
    };
    sdk: {
      input: CreateChallengeCommandInput;
      output: CreateChallengeCommandOutput;
    };
  };
}
