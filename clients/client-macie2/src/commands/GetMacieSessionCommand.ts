// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMacieSessionRequest, GetMacieSessionResponse } from "../models/models_0";
import { GetMacieSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMacieSessionCommand}.
 */
export interface GetMacieSessionCommandInput extends GetMacieSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetMacieSessionCommand}.
 */
export interface GetMacieSessionCommandOutput extends GetMacieSessionResponse, __MetadataBearer {}

/**
 * Retrieves the status and configuration settings for an Amazon Macie account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetMacieSessionCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetMacieSessionCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = {};
 * const command = new GetMacieSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetMacieSessionResponse
 * //   createdAt: new Date("TIMESTAMP"),
 * //   findingPublishingFrequency: "FIFTEEN_MINUTES" || "ONE_HOUR" || "SIX_HOURS",
 * //   serviceRole: "STRING_VALUE",
 * //   status: "PAUSED" || "ENABLED",
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMacieSessionCommandInput - {@link GetMacieSessionCommandInput}
 * @returns {@link GetMacieSessionCommandOutput}
 * @see {@link GetMacieSessionCommandInput} for command's `input` shape.
 * @see {@link GetMacieSessionCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Provides information about an error that occurred due to insufficient access to a specified resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Provides information about an error that occurred due to a versioning conflict for a specified resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Provides information about an error that occurred due to an unknown internal server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Provides information about an error that occurred because a specified resource wasn't found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Provides information about an error that occurred due to one or more service quotas for an account.
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
export class GetMacieSessionCommand extends command<GetMacieSessionCommandInput, GetMacieSessionCommandOutput>(
  _ep0,
  _mw0,
  "GetMacieSession",
  GetMacieSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetMacieSessionResponse;
    };
    sdk: {
      input: GetMacieSessionCommandInput;
      output: GetMacieSessionCommandOutput;
    };
  };
}
