// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCrossAccountAuthorizationsRequest, ListCrossAccountAuthorizationsResponse } from "../models/models_0";
import {
  de_ListCrossAccountAuthorizationsCommand,
  se_ListCrossAccountAuthorizationsCommand,
} from "../protocols/Aws_restJson1";
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
 * The input for {@link ListCrossAccountAuthorizationsCommand}.
 */
export interface ListCrossAccountAuthorizationsCommandInput extends ListCrossAccountAuthorizationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCrossAccountAuthorizationsCommand}.
 */
export interface ListCrossAccountAuthorizationsCommandOutput
  extends ListCrossAccountAuthorizationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the cross-account readiness authorizations that are in place for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListCrossAccountAuthorizationsCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, ListCrossAccountAuthorizationsCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // ListCrossAccountAuthorizationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCrossAccountAuthorizationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCrossAccountAuthorizationsResponse
 * //   CrossAccountAuthorizations: [ // __listOfCrossAccountAuthorization
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCrossAccountAuthorizationsCommandInput - {@link ListCrossAccountAuthorizationsCommandInput}
 * @returns {@link ListCrossAccountAuthorizationsCommandOutput}
 * @see {@link ListCrossAccountAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link ListCrossAccountAuthorizationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListCrossAccountAuthorizationsCommand extends $Command
  .classBuilder<
    ListCrossAccountAuthorizationsCommandInput,
    ListCrossAccountAuthorizationsCommandOutput,
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
  .s("Route53RecoveryReadiness", "ListCrossAccountAuthorizations", {})
  .n("Route53RecoveryReadinessClient", "ListCrossAccountAuthorizationsCommand")
  .f(void 0, void 0)
  .ser(se_ListCrossAccountAuthorizationsCommand)
  .de(de_ListCrossAccountAuthorizationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCrossAccountAuthorizationsRequest;
      output: ListCrossAccountAuthorizationsResponse;
    };
    sdk: {
      input: ListCrossAccountAuthorizationsCommandInput;
      output: ListCrossAccountAuthorizationsCommandOutput;
    };
  };
}
