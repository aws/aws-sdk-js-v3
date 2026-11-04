// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUsageLimitsRequest, ListUsageLimitsResponse } from "../models/models_0";
import { ListUsageLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUsageLimitsCommand}.
 */
export interface ListUsageLimitsCommandInput extends ListUsageLimitsRequest {}
/**
 * @public
 *
 * The output of {@link ListUsageLimitsCommand}.
 */
export interface ListUsageLimitsCommandOutput extends ListUsageLimitsResponse, __MetadataBearer {}

/**
 * Lists all usage limits within Amazon Redshift Serverless.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListUsageLimitsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListUsageLimitsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListUsageLimitsRequest
 *   resourceArn: "STRING_VALUE",
 *   usageType: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUsageLimitsCommand(input);
 * const response = await client.send(command);
 * // { // ListUsageLimitsResponse
 * //   usageLimits: [ // UsageLimits
 * //     { // UsageLimit
 * //       usageLimitId: "STRING_VALUE",
 * //       usageLimitArn: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       usageType: "STRING_VALUE",
 * //       amount: Number("long"),
 * //       period: "STRING_VALUE",
 * //       breachAction: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsageLimitsCommandInput - {@link ListUsageLimitsCommandInput}
 * @returns {@link ListUsageLimitsCommandOutput}
 * @see {@link ListUsageLimitsCommandInput} for command's `input` shape.
 * @see {@link ListUsageLimitsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *
 * The provided pagination token is invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link RedshiftServerlessServiceException}
 *
 * Base exception class for all service exceptions from RedshiftServerless service.
 *
 * @public
 */
export class ListUsageLimitsCommand extends command<ListUsageLimitsCommandInput, ListUsageLimitsCommandOutput>(
  _ep0,
  _mw0,
  "ListUsageLimits",
  ListUsageLimits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsageLimitsRequest;
      output: ListUsageLimitsResponse;
    };
    sdk: {
      input: ListUsageLimitsCommandInput;
      output: ListUsageLimitsCommandOutput;
    };
  };
}
