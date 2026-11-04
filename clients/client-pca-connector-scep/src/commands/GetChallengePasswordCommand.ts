// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChallengePasswordRequest, GetChallengePasswordResponse } from "../models/models_0";
import { GetChallengePassword$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetChallengePasswordCommand}.
 */
export interface GetChallengePasswordCommandInput extends GetChallengePasswordRequest {}
/**
 * @public
 *
 * The output of {@link GetChallengePasswordCommand}.
 */
export interface GetChallengePasswordCommandOutput extends GetChallengePasswordResponse, __MetadataBearer {}

/**
 * Retrieves the challenge password for the specified [Challenge](https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_Challenge.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PcaConnectorScepClient, GetChallengePasswordCommand } from "@aws-sdk/client-pca-connector-scep"; // ES Modules import
 * // const { PcaConnectorScepClient, GetChallengePasswordCommand } = require("@aws-sdk/client-pca-connector-scep"); // CommonJS import
 * // import type { PcaConnectorScepClientConfig } from "@aws-sdk/client-pca-connector-scep";
 * const config = {}; // type is PcaConnectorScepClientConfig
 * const client = new PcaConnectorScepClient(config);
 * const input = { // GetChallengePasswordRequest
 *   ChallengeArn: "STRING_VALUE", // required
 * };
 * const command = new GetChallengePasswordCommand(input);
 * const response = await client.send(command);
 * // { // GetChallengePasswordResponse
 * //   Password: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChallengePasswordCommandInput - {@link GetChallengePasswordCommandInput}
 * @returns {@link GetChallengePasswordCommandOutput}
 * @see {@link GetChallengePasswordCommandInput} for command's `input` shape.
 * @see {@link GetChallengePasswordCommandOutput} for command's `response` shape.
 * @see {@link PcaConnectorScepClientResolvedConfig | config} for PcaConnectorScepClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You can receive this error if you attempt to perform an operation and you don't have the required permissions. This can be caused by insufficient permissions in policies attached to your Amazon Web Services Identity and Access Management (IAM) principal. It can also happen because of restrictions in place from an Amazon Web Services Organizations service control policy (SCP) that affects your Amazon Web Services account.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent resource. The resource might be incorrectly specified, or it might have a status other than `ACTIVE`.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An input validation error occurred. For example, invalid characters in a name tag, or an invalid pagination token.
 *
 * @throws {@link PcaConnectorScepServiceException}
 *
 * Base exception class for all service exceptions from PcaConnectorScep service.
 *
 * @public
 */
export class GetChallengePasswordCommand extends command<GetChallengePasswordCommandInput, GetChallengePasswordCommandOutput>(
  _ep0,
  _mw0,
  "GetChallengePassword",
  GetChallengePassword$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChallengePasswordRequest;
      output: GetChallengePasswordResponse;
    };
    sdk: {
      input: GetChallengePasswordCommandInput;
      output: GetChallengePasswordCommandOutput;
    };
  };
}
