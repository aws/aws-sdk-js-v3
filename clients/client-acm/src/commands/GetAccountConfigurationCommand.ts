// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountConfigurationResponse } from "../models/models_0";
import { GetAccountConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountConfigurationCommand}.
 */
export interface GetAccountConfigurationCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountConfigurationCommand}.
 */
export interface GetAccountConfigurationCommandOutput extends GetAccountConfigurationResponse, __MetadataBearer {}

/**
 * Returns the account configuration options associated with an Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, GetAccountConfigurationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, GetAccountConfigurationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = {};
 * const command = new GetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountConfigurationResponse
 * //   ExpiryEvents: { // ExpiryEventsConfiguration
 * //     DaysBeforeExpiry: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountConfigurationCommandInput - {@link GetAccountConfigurationCommandInput}
 * @returns {@link GetAccountConfigurationCommandOutput}
 * @see {@link GetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have access required to perform this action.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class GetAccountConfigurationCommand extends command<GetAccountConfigurationCommandInput, GetAccountConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountConfiguration",
  GetAccountConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountConfigurationResponse;
    };
    sdk: {
      input: GetAccountConfigurationCommandInput;
      output: GetAccountConfigurationCommandOutput;
    };
  };
}
