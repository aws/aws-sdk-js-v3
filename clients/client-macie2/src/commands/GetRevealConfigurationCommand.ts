// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRevealConfigurationRequest, GetRevealConfigurationResponse } from "../models/models_0";
import { GetRevealConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRevealConfigurationCommand}.
 */
export interface GetRevealConfigurationCommandInput extends GetRevealConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetRevealConfigurationCommand}.
 */
export interface GetRevealConfigurationCommandOutput extends GetRevealConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetRevealConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetRevealConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = {};
 * const command = new GetRevealConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetRevealConfigurationResponse
 * //   configuration: { // RevealConfiguration
 * //     kmsKeyId: "STRING_VALUE",
 * //     status: "ENABLED" || "DISABLED", // required
 * //   },
 * //   retrievalConfiguration: { // RetrievalConfiguration
 * //     externalId: "STRING_VALUE",
 * //     retrievalMode: "CALLER_CREDENTIALS" || "ASSUME_ROLE", // required
 * //     roleName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRevealConfigurationCommandInput - {@link GetRevealConfigurationCommandInput}
 * @returns {@link GetRevealConfigurationCommandOutput}
 * @see {@link GetRevealConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRevealConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Provides information about an error that occurred due to insufficient access to a specified resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Provides information about an error that occurred due to an unknown internal server error, exception, or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Provides information about an error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Provides information about an error that occurred due to a syntax error in a request.
 *
 * @throws {@link Macie2ServiceException}
 *
 * Base exception class for all service exceptions from Macie2 service.
 *
 * @public
 */
export class GetRevealConfigurationCommand extends command<GetRevealConfigurationCommandInput, GetRevealConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetRevealConfiguration",
  GetRevealConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetRevealConfigurationResponse;
    };
    sdk: {
      input: GetRevealConfigurationCommandInput;
      output: GetRevealConfigurationCommandOutput;
    };
  };
}
