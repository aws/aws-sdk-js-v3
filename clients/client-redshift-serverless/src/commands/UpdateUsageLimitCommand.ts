// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUsageLimitRequest, UpdateUsageLimitResponse } from "../models/models_0";
import { UpdateUsageLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUsageLimitCommand}.
 */
export interface UpdateUsageLimitCommandInput extends UpdateUsageLimitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUsageLimitCommand}.
 */
export interface UpdateUsageLimitCommandOutput extends UpdateUsageLimitResponse, __MetadataBearer {}

/**
 * Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateUsageLimitCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateUsageLimitCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateUsageLimitRequest
 *   usageLimitId: "STRING_VALUE", // required
 *   amount: Number("long"),
 *   breachAction: "STRING_VALUE",
 * };
 * const command = new UpdateUsageLimitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUsageLimitResponse
 * //   usageLimit: { // UsageLimit
 * //     usageLimitId: "STRING_VALUE",
 * //     usageLimitArn: "STRING_VALUE",
 * //     resourceArn: "STRING_VALUE",
 * //     usageType: "STRING_VALUE",
 * //     amount: Number("long"),
 * //     period: "STRING_VALUE",
 * //     breachAction: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUsageLimitCommandInput - {@link UpdateUsageLimitCommandInput}
 * @returns {@link UpdateUsageLimitCommandOutput}
 * @see {@link UpdateUsageLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateUsageLimitCommandOutput} for command's `response` shape.
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
export class UpdateUsageLimitCommand extends command<UpdateUsageLimitCommandInput, UpdateUsageLimitCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUsageLimit",
  UpdateUsageLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUsageLimitRequest;
      output: UpdateUsageLimitResponse;
    };
    sdk: {
      input: UpdateUsageLimitCommandInput;
      output: UpdateUsageLimitCommandOutput;
    };
  };
}
