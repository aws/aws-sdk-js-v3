// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUsageLimitRequest, CreateUsageLimitResponse } from "../models/models_0";
import { CreateUsageLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateUsageLimitCommand}.
 */
export interface CreateUsageLimitCommandInput extends CreateUsageLimitRequest {}
/**
 * @public
 *
 * The output of {@link CreateUsageLimitCommand}.
 */
export interface CreateUsageLimitCommandOutput extends CreateUsageLimitResponse, __MetadataBearer {}

/**
 * Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateUsageLimitCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateUsageLimitCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // CreateUsageLimitRequest
 *   resourceArn: "STRING_VALUE", // required
 *   usageType: "STRING_VALUE", // required
 *   amount: Number("long"), // required
 *   period: "STRING_VALUE",
 *   breachAction: "STRING_VALUE",
 * };
 * const command = new CreateUsageLimitCommand(input);
 * const response = await client.send(command);
 * // { // CreateUsageLimitResponse
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
 * @param CreateUsageLimitCommandInput - {@link CreateUsageLimitCommandInput}
 * @returns {@link CreateUsageLimitCommandOutput}
 * @see {@link CreateUsageLimitCommandInput} for command's `input` shape.
 * @see {@link CreateUsageLimitCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service limit was exceeded.
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
export class CreateUsageLimitCommand extends command<CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput>(
  _ep0,
  _mw0,
  "CreateUsageLimit",
  CreateUsageLimit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUsageLimitRequest;
      output: CreateUsageLimitResponse;
    };
    sdk: {
      input: CreateUsageLimitCommandInput;
      output: CreateUsageLimitCommandOutput;
    };
  };
}
