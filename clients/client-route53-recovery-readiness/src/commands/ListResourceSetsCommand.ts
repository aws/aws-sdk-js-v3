// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourceSetsRequest, ListResourceSetsResponse } from "../models/models_0";
import { de_ListResourceSetsCommand, se_ListResourceSetsCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ListResourceSetsCommand}.
 */
export interface ListResourceSetsCommandInput extends ListResourceSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceSetsCommand}.
 */
export interface ListResourceSetsCommandOutput extends ListResourceSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the resource sets in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListResourceSetsCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, ListResourceSetsCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // ListResourceSetsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceSetsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ResourceSets: [ // __listOfResourceSetOutput
 * //     { // ResourceSetOutput
 * //       ResourceSetArn: "STRING_VALUE", // required
 * //       ResourceSetName: "STRING_VALUE", // required
 * //       ResourceSetType: "STRING_VALUE", // required
 * //       Resources: [ // __listOfResource // required
 * //         { // Resource
 * //           ComponentId: "STRING_VALUE",
 * //           DnsTargetResource: { // DNSTargetResource
 * //             DomainName: "STRING_VALUE",
 * //             HostedZoneArn: "STRING_VALUE",
 * //             RecordSetId: "STRING_VALUE",
 * //             RecordType: "STRING_VALUE",
 * //             TargetResource: { // TargetResource
 * //               NLBResource: { // NLBResource
 * //                 Arn: "STRING_VALUE",
 * //               },
 * //               R53Resource: { // R53ResourceRecord
 * //                 DomainName: "STRING_VALUE",
 * //                 RecordSetId: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //           ReadinessScopes: [ // __listOf__string
 * //             "STRING_VALUE",
 * //           ],
 * //           ResourceArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResourceSetsCommandInput - {@link ListResourceSetsCommandInput}
 * @returns {@link ListResourceSetsCommandOutput}
 * @see {@link ListResourceSetsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSetsCommandOutput} for command's `response` shape.
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
export class ListResourceSetsCommand extends $Command
  .classBuilder<
    ListResourceSetsCommandInput,
    ListResourceSetsCommandOutput,
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
  .s("Route53RecoveryReadiness", "ListResourceSets", {})
  .n("Route53RecoveryReadinessClient", "ListResourceSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceSetsCommand)
  .de(de_ListResourceSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceSetsRequest;
      output: ListResourceSetsResponse;
    };
    sdk: {
      input: ListResourceSetsCommandInput;
      output: ListResourceSetsCommandOutput;
    };
  };
}
