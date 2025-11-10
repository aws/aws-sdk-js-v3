// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateResourceSetRequest, UpdateResourceSetResponse } from "../models/models_0";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { UpdateResourceSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceSetCommand}.
 */
export interface UpdateResourceSetCommandInput extends UpdateResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceSetCommand}.
 */
export interface UpdateResourceSetCommandOutput extends UpdateResourceSetResponse, __MetadataBearer {}

/**
 * <p>Updates a resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, UpdateResourceSetCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, UpdateResourceSetCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // UpdateResourceSetRequest
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
 * };
 * const command = new UpdateResourceSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourceSetResponse
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
 * @param UpdateResourceSetCommandInput - {@link UpdateResourceSetCommandInput}
 * @returns {@link UpdateResourceSetCommandOutput}
 * @see {@link UpdateResourceSetCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceSetCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
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
export class UpdateResourceSetCommand extends $Command
  .classBuilder<
    UpdateResourceSetCommandInput,
    UpdateResourceSetCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "UpdateResourceSet", {})
  .n("Route53RecoveryReadinessClient", "UpdateResourceSetCommand")
  .sc(UpdateResourceSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceSetRequest;
      output: UpdateResourceSetResponse;
    };
    sdk: {
      input: UpdateResourceSetCommandInput;
      output: UpdateResourceSetCommandOutput;
    };
  };
}
