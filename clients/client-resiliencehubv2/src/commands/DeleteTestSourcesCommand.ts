// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTestSourcesRequest, DeleteTestSourcesResponse } from "../models/models_0";
import { DeleteTestSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTestSourcesCommand}.
 */
export interface DeleteTestSourcesCommandInput extends DeleteTestSourcesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTestSourcesCommand}.
 */
export interface DeleteTestSourcesCommandOutput extends DeleteTestSourcesResponse, __MetadataBearer {}

/**
 * <p>Removes monitoring sources from a test. The operation is transactional and idempotent — removing a source that is not attached is a no-op.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteTestSourcesCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteTestSourcesCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteTestSourcesRequest
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
 * const command = new DeleteTestSourcesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTestSourcesCommandInput - {@link DeleteTestSourcesCommandInput}
 * @returns {@link DeleteTestSourcesCommandOutput}
 * @see {@link DeleteTestSourcesCommandInput} for command's `input` shape.
 * @see {@link DeleteTestSourcesCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class DeleteTestSourcesCommand extends command<DeleteTestSourcesCommandInput, DeleteTestSourcesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTestSources",
  DeleteTestSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTestSourcesRequest;
      output: {};
    };
    sdk: {
      input: DeleteTestSourcesCommandInput;
      output: DeleteTestSourcesCommandOutput;
    };
  };
}
