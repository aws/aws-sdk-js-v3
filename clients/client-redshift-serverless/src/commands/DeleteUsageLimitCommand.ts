// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUsageLimitRequest, DeleteUsageLimitResponse } from "../models/models_0";
import { DeleteUsageLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUsageLimitCommand}.
 */
export interface DeleteUsageLimitCommandInput extends DeleteUsageLimitRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUsageLimitCommand}.
 */
export interface DeleteUsageLimitCommandOutput extends DeleteUsageLimitResponse, __MetadataBearer {}

/**
 * Deletes a usage limit from Amazon Redshift Serverless.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, DeleteUsageLimitCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, DeleteUsageLimitCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // DeleteUsageLimitRequest
 *   usageLimitId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUsageLimitCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUsageLimitResponse
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
 * @param DeleteUsageLimitCommandInput - {@link DeleteUsageLimitCommandInput}
 * @returns {@link DeleteUsageLimitCommandOutput}
 * @see {@link DeleteUsageLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteUsageLimitCommandOutput} for command's `response` shape.
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
export class DeleteUsageLimitCommand extends command<DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUsageLimit",
  DeleteUsageLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUsageLimitRequest;
      output: DeleteUsageLimitResponse;
    };
    sdk: {
      input: DeleteUsageLimitCommandInput;
      output: DeleteUsageLimitCommandOutput;
    };
  };
}
