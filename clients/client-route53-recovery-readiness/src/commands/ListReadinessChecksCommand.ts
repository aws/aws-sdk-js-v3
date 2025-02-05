// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReadinessChecksRequest, ListReadinessChecksResponse } from "../models/models_0";
import { de_ListReadinessChecksCommand, se_ListReadinessChecksCommand } from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReadinessChecksCommand}.
 */
export interface ListReadinessChecksCommandInput extends ListReadinessChecksRequest {}
/**
 * @public
 *
 * The output of {@link ListReadinessChecksCommand}.
 */
export interface ListReadinessChecksCommandOutput extends ListReadinessChecksResponse, __MetadataBearer {}

/**
 * <p>Lists the readiness checks for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListReadinessChecksCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, ListReadinessChecksCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // ListReadinessChecksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListReadinessChecksCommand(input);
 * const response = await client.send(command);
 * // { // ListReadinessChecksResponse
 * //   NextToken: "STRING_VALUE",
 * //   ReadinessChecks: [ // __listOfReadinessCheckOutput
 * //     { // ReadinessCheckOutput
 * //       ReadinessCheckArn: "STRING_VALUE", // required
 * //       ReadinessCheckName: "STRING_VALUE",
 * //       ResourceSet: "STRING_VALUE", // required
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReadinessChecksCommandInput - {@link ListReadinessChecksCommandInput}
 * @returns {@link ListReadinessChecksCommandOutput}
 * @see {@link ListReadinessChecksCommandInput} for command's `input` shape.
 * @see {@link ListReadinessChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 * @public
 */
export class ListReadinessChecksCommand extends $Command
  .classBuilder<
    ListReadinessChecksCommandInput,
    ListReadinessChecksCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryReadiness", "ListReadinessChecks", {})
  .n("Route53RecoveryReadinessClient", "ListReadinessChecksCommand")
  .f(void 0, void 0)
  .ser(se_ListReadinessChecksCommand)
  .de(de_ListReadinessChecksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReadinessChecksRequest;
      output: ListReadinessChecksResponse;
    };
    sdk: {
      input: ListReadinessChecksCommandInput;
      output: ListReadinessChecksCommandOutput;
    };
  };
}
