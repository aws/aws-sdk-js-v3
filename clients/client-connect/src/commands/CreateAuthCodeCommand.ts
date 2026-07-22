// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAuthCodeRequest, CreateAuthCodeResponse } from "../models/models_0";
import { CreateAuthCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAuthCodeCommand}.
 */
export interface CreateAuthCodeCommandInput extends CreateAuthCodeRequest {}
/**
 * @public
 *
 * The output of {@link CreateAuthCodeCommand}.
 */
export interface CreateAuthCodeCommandOutput extends CreateAuthCodeResponse, __MetadataBearer {}

/**
 * <p>Creates an authorization code for the specified Connect Customer instance. The authorization code can be used
 *    to establish a session with scoped permissions defined by the specified scope parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateAuthCodeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateAuthCodeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateAuthCodeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Scope: { // AuthScope
 *     SecurityProfileIds: [ // SecurityProfileIds
 *       "STRING_VALUE",
 *     ],
 *     EntityType: "CUSTOMER_PROFILE", // required
 *     EntityId: "STRING_VALUE",
 *     DomainName: "STRING_VALUE",
 *   },
 *   MaxSessionDurationMinutes: Number("int"),
 *   SessionInactivityDurationMinutes: Number("int"), // required
 * };
 * const command = new CreateAuthCodeCommand(input);
 * const response = await client.send(command);
 * // { // CreateAuthCodeResponse
 * //   AuthCode: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   EntityType: "CUSTOMER_PROFILE",
 * //   EntityId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAuthCodeCommandInput - {@link CreateAuthCodeCommandInput}
 * @returns {@link CreateAuthCodeCommandOutput}
 * @see {@link CreateAuthCodeCommandInput} for command's `input` shape.
 * @see {@link CreateAuthCodeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class CreateAuthCodeCommand extends command<CreateAuthCodeCommandInput, CreateAuthCodeCommandOutput>(
  _ep0,
  _mw0,
  "CreateAuthCode",
  CreateAuthCode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAuthCodeRequest;
      output: CreateAuthCodeResponse;
    };
    sdk: {
      input: CreateAuthCodeCommandInput;
      output: CreateAuthCodeCommandOutput;
    };
  };
}
