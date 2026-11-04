// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTestSourcesRequest, PutTestSourcesResponse } from "../models/models_0";
import { PutTestSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTestSourcesCommand}.
 */
export interface PutTestSourcesCommandInput extends PutTestSourcesRequest {}
/**
 * @public
 *
 * The output of {@link PutTestSourcesCommand}.
 */
export interface PutTestSourcesCommandOutput extends PutTestSourcesResponse, __MetadataBearer {}

/**
 * Adds or updates the monitoring sources on a test. The operation is transactional — either every source is written or the call fails and nothing is written.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, PutTestSourcesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, PutTestSourcesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // PutTestSourcesRequest
 *   testId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   testSources: [ // TestSourceInputList // required
 *     { // TestSourceInput Union: only one key present
 *       successCriteriaAlarm: { // SuccessCriteriaAlarmInput
 *         alarmArn: "STRING_VALUE", // required
 *       },
 *       observabilityAlarm: { // ObservabilityAlarmInput
 *         alarmArn: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new PutTestSourcesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTestSourcesCommandInput - {@link PutTestSourcesCommandInput}
 * @returns {@link PutTestSourcesCommandOutput}
 * @see {@link PutTestSourcesCommandInput} for command's `input` shape.
 * @see {@link PutTestSourcesCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Conflict — resource already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Service quota exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class PutTestSourcesCommand extends command<PutTestSourcesCommandInput, PutTestSourcesCommandOutput>(
  _ep0,
  _mw0,
  "PutTestSources",
  PutTestSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTestSourcesRequest;
      output: {};
    };
    sdk: {
      input: PutTestSourcesCommandInput;
      output: PutTestSourcesCommandOutput;
    };
  };
}
