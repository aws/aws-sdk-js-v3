// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAccessRequestRequest, StartAccessRequestResponse } from "../models/models_1";
import { StartAccessRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAccessRequestCommand}.
 */
export interface StartAccessRequestCommandInput extends StartAccessRequestRequest {}
/**
 * @public
 *
 * The output of {@link StartAccessRequestCommand}.
 */
export interface StartAccessRequestCommandOutput extends StartAccessRequestResponse, __MetadataBearer {}

/**
 * Starts the workflow for just-in-time node access sessions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAccessRequestCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAccessRequestCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // StartAccessRequestRequest
 *   Reason: "STRING_VALUE", // required
 *   Targets: [ // Targets // required
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartAccessRequestCommand(input);
 * const response = await client.send(command);
 * // { // StartAccessRequestResponse
 * //   AccessRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAccessRequestCommandInput - {@link StartAccessRequestCommandInput}
 * @returns {@link StartAccessRequestCommandOutput}
 * @see {@link StartAccessRequestCommandInput} for command's `input` shape.
 * @see {@link StartAccessRequestCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The requester doesn't have permissions to perform the requested operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified parameter to be shared could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds the service quota. Service quotas, also referred to as limits, are the maximum number of service resources or operations for your Amazon Web Services account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because the service is throttling requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Verify that you entered valid contents for the command and try again.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class StartAccessRequestCommand extends command<StartAccessRequestCommandInput, StartAccessRequestCommandOutput>(
  _ep0,
  _mw0,
  "StartAccessRequest",
  StartAccessRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAccessRequestRequest;
      output: StartAccessRequestResponse;
    };
    sdk: {
      input: StartAccessRequestCommandInput;
      output: StartAccessRequestCommandOutput;
    };
  };
}
