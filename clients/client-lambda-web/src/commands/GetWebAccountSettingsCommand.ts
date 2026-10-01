// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWebAccountSettingsRequest, GetWebAccountSettingsResponse } from "../models/models_0";
import { GetWebAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWebAccountSettingsCommand}.
 */
export interface GetWebAccountSettingsCommandInput extends GetWebAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetWebAccountSettingsCommand}.
 */
export interface GetWebAccountSettingsCommandOutput extends GetWebAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about your AWS Lambda Web Functions account settings for the current AWS Region, including the quotas that apply to web functions and your current usage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, GetWebAccountSettingsCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, GetWebAccountSettingsCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = {};
 * const command = new GetWebAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetWebAccountSettingsResponse
 * //   accountQuotas: { // AccountQuotas
 * //     maxTotalArmVCpus: Number("int"), // required
 * //     maxTotalRateLimit: Number("int"), // required
 * //     maxRevisionsPerFunction: Number("int"), // required
 * //     maxEndpointsPerFunction: Number("int"), // required
 * //   },
 * //   accountUsage: { // AccountUsage
 * //     functionCount: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWebAccountSettingsCommandInput - {@link GetWebAccountSettingsCommandInput}
 * @returns {@link GetWebAccountSettingsCommandOutput}
 * @see {@link GetWebAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetWebAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Reduce the frequency of requests and try again.</p>
 *
 * @throws {@link LambdaWebServiceException}
 * <p>Base exception class for all service exceptions from LambdaWeb service.</p>
 *
 *
 * @public
 */
export class GetWebAccountSettingsCommand extends command<GetWebAccountSettingsCommandInput, GetWebAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetWebAccountSettings",
  GetWebAccountSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetWebAccountSettingsResponse;
    };
    sdk: {
      input: GetWebAccountSettingsCommandInput;
      output: GetWebAccountSettingsCommandOutput;
    };
  };
}
