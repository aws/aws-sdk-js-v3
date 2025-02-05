// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateResourceSetRequest, CreateResourceSetResponse } from "../models/models_0";
import { de_CreateResourceSetCommand, se_CreateResourceSetCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateResourceSetCommand}.
 */
export interface CreateResourceSetCommandInput extends CreateResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceSetCommand}.
 */
export interface CreateResourceSetCommandOutput extends CreateResourceSetResponse, __MetadataBearer {}

/**
 * <p>Creates a resource set. A resource set is a set of resources of one type that span multiple cells. You can associate a resource set with a readiness check to monitor the resources for failover readiness.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateResourceSetCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, CreateResourceSetCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // CreateResourceSetRequest
 *   ResourceSetName: "STRING_VALUE", // required
 *   ResourceSetType: "STRING_VALUE", // required
 *   Resources: [ // __listOfResource // required
 *     { // Resource
 *       ComponentId: "STRING_VALUE",
 *       DnsTargetResource: { // DNSTargetResource
 *         DomainName: "STRING_VALUE",
 *         HostedZoneArn: "STRING_VALUE",
 *         RecordSetId: "STRING_VALUE",
 *         RecordType: "STRING_VALUE",
 *         TargetResource: { // TargetResource
 *           NLBResource: { // NLBResource
 *             Arn: "STRING_VALUE",
 *           },
 *           R53Resource: { // R53ResourceRecord
 *             DomainName: "STRING_VALUE",
 *             RecordSetId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       ReadinessScopes: [ // __listOf__string
 *         "STRING_VALUE",
 *       ],
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResourceSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceSetResponse
 * //   ResourceSetArn: "STRING_VALUE",
 * //   ResourceSetName: "STRING_VALUE",
 * //   ResourceSetType: "STRING_VALUE",
 * //   Resources: [ // __listOfResource
 * //     { // Resource
 * //       ComponentId: "STRING_VALUE",
 * //       DnsTargetResource: { // DNSTargetResource
 * //         DomainName: "STRING_VALUE",
 * //         HostedZoneArn: "STRING_VALUE",
 * //         RecordSetId: "STRING_VALUE",
 * //         RecordType: "STRING_VALUE",
 * //         TargetResource: { // TargetResource
 * //           NLBResource: { // NLBResource
 * //             Arn: "STRING_VALUE",
 * //           },
 * //           R53Resource: { // R53ResourceRecord
 * //             DomainName: "STRING_VALUE",
 * //             RecordSetId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       ReadinessScopes: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateResourceSetCommandInput - {@link CreateResourceSetCommandInput}
 * @returns {@link CreateResourceSetCommandOutput}
 * @see {@link CreateResourceSetCommandInput} for command's `input` shape.
 * @see {@link CreateResourceSetCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
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
export class CreateResourceSetCommand extends $Command
  .classBuilder<
    CreateResourceSetCommandInput,
    CreateResourceSetCommandOutput,
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
  .s("Route53RecoveryReadiness", "CreateResourceSet", {})
  .n("Route53RecoveryReadinessClient", "CreateResourceSetCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourceSetCommand)
  .de(de_CreateResourceSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceSetRequest;
      output: CreateResourceSetResponse;
    };
    sdk: {
      input: CreateResourceSetCommandInput;
      output: CreateResourceSetCommandOutput;
    };
  };
}
