// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteResolverQueryLogConfigRequest, DeleteResolverQueryLogConfigResponse } from "../models/models_0";
import {
  de_DeleteResolverQueryLogConfigCommand,
  se_DeleteResolverQueryLogConfigCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResolverQueryLogConfigCommand}.
 */
export interface DeleteResolverQueryLogConfigCommandInput extends DeleteResolverQueryLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResolverQueryLogConfigCommand}.
 */
export interface DeleteResolverQueryLogConfigCommandOutput
  extends DeleteResolverQueryLogConfigResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are
 * 			associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and
 * 			the other accounts have associated VPCs with the shared configuration.</p>
 *          <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p>
 *          <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing
 * 			the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs
 * 			that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically
 * 			disassociated from the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // DeleteResolverQueryLogConfigRequest
 *   ResolverQueryLogConfigId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResolverQueryLogConfigResponse
 * //   ResolverQueryLogConfig: { // ResolverQueryLogConfig
 * //     Id: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Status: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //     ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //     AssociationCount: Number("int"),
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     DestinationArn: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteResolverQueryLogConfigCommandInput - {@link DeleteResolverQueryLogConfigCommandInput}
 * @returns {@link DeleteResolverQueryLogConfigCommandOutput}
 * @see {@link DeleteResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class DeleteResolverQueryLogConfigCommand extends $Command
  .classBuilder<
    DeleteResolverQueryLogConfigCommandInput,
    DeleteResolverQueryLogConfigCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "DeleteResolverQueryLogConfig", {})
  .n("Route53ResolverClient", "DeleteResolverQueryLogConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteResolverQueryLogConfigCommand)
  .de(de_DeleteResolverQueryLogConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResolverQueryLogConfigRequest;
      output: DeleteResolverQueryLogConfigResponse;
    };
    sdk: {
      input: DeleteResolverQueryLogConfigCommandInput;
      output: DeleteResolverQueryLogConfigCommandOutput;
    };
  };
}
