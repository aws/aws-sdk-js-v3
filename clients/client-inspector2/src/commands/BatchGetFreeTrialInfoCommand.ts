// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetFreeTrialInfoRequest, BatchGetFreeTrialInfoResponse } from "../models/models_0";
import { BatchGetFreeTrialInfo$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetFreeTrialInfoCommand}.
 */
export interface BatchGetFreeTrialInfoCommandInput extends BatchGetFreeTrialInfoRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFreeTrialInfoCommand}.
 */
export interface BatchGetFreeTrialInfoCommandOutput extends BatchGetFreeTrialInfoResponse, __MetadataBearer {}

/**
 * Gets free trial status for multiple Amazon Web Services accounts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetFreeTrialInfoCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetFreeTrialInfoCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetFreeTrialInfoRequest
 *   accountIds: [ // MeteringAccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetFreeTrialInfoCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFreeTrialInfoResponse
 * //   accounts: [ // FreeTrialAccountInfoList // required
 * //     { // FreeTrialAccountInfo
 * //       accountId: "STRING_VALUE", // required
 * //       freeTrialInfo: [ // FreeTrialInfoList // required
 * //         { // FreeTrialInfo
 * //           type: "STRING_VALUE", // required
 * //           start: new Date("TIMESTAMP"), // required
 * //           end: new Date("TIMESTAMP"), // required
 * //           status: "STRING_VALUE", // required
 * //           cloudProvider: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failedAccounts: [ // FreeTrialInfoErrorList // required
 * //     { // FreeTrialInfoError
 * //       accountId: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFreeTrialInfoCommandInput - {@link BatchGetFreeTrialInfoCommandInput}
 * @returns {@link BatchGetFreeTrialInfoCommandOutput}
 * @see {@link BatchGetFreeTrialInfoCommandInput} for command's `input` shape.
 * @see {@link BatchGetFreeTrialInfoCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class BatchGetFreeTrialInfoCommand extends command<BatchGetFreeTrialInfoCommandInput, BatchGetFreeTrialInfoCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetFreeTrialInfo",
  BatchGetFreeTrialInfo$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFreeTrialInfoRequest;
      output: BatchGetFreeTrialInfoResponse;
    };
    sdk: {
      input: BatchGetFreeTrialInfoCommandInput;
      output: BatchGetFreeTrialInfoCommandOutput;
    };
  };
}
