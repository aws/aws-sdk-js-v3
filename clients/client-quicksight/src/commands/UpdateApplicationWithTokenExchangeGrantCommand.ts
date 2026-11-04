// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateApplicationWithTokenExchangeGrantRequest,
  UpdateApplicationWithTokenExchangeGrantResponse,
} from "../models/models_5";
import { UpdateApplicationWithTokenExchangeGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApplicationWithTokenExchangeGrantCommand}.
 */
export interface UpdateApplicationWithTokenExchangeGrantCommandInput extends UpdateApplicationWithTokenExchangeGrantRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationWithTokenExchangeGrantCommand}.
 */
export interface UpdateApplicationWithTokenExchangeGrantCommandOutput extends UpdateApplicationWithTokenExchangeGrantResponse, __MetadataBearer {}

/**
 * Updates an Quick application with a token exchange grant. This operation only supports Quick applications that are registered with IAM Identity Center.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateApplicationWithTokenExchangeGrantCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateApplicationWithTokenExchangeGrantCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateApplicationWithTokenExchangeGrantRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new UpdateApplicationWithTokenExchangeGrantCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationWithTokenExchangeGrantResponse
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateApplicationWithTokenExchangeGrantCommandInput - {@link UpdateApplicationWithTokenExchangeGrantCommandInput}
 * @returns {@link UpdateApplicationWithTokenExchangeGrantCommandOutput}
 * @see {@link UpdateApplicationWithTokenExchangeGrantCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationWithTokenExchangeGrantCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class UpdateApplicationWithTokenExchangeGrantCommand extends command<UpdateApplicationWithTokenExchangeGrantCommandInput, UpdateApplicationWithTokenExchangeGrantCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApplicationWithTokenExchangeGrant",
  UpdateApplicationWithTokenExchangeGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationWithTokenExchangeGrantRequest;
      output: UpdateApplicationWithTokenExchangeGrantResponse;
    };
    sdk: {
      input: UpdateApplicationWithTokenExchangeGrantCommandInput;
      output: UpdateApplicationWithTokenExchangeGrantCommandOutput;
    };
  };
}
