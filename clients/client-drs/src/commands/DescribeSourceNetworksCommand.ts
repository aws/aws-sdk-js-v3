// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeSourceNetworksRequest,
  DescribeSourceNetworksResponse,
  DescribeSourceNetworksResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeSourceNetworksCommand, se_DescribeSourceNetworksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSourceNetworksCommand}.
 */
export interface DescribeSourceNetworksCommandInput extends DescribeSourceNetworksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSourceNetworksCommand}.
 */
export interface DescribeSourceNetworksCommandOutput extends DescribeSourceNetworksResponse, __MetadataBearer {}

/**
 * <p>Lists all Source Networks or multiple Source Networks filtered by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeSourceNetworksCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeSourceNetworksCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DescribeSourceNetworksRequest
 *   filters: { // DescribeSourceNetworksRequestFilters
 *     sourceNetworkIDs: [ // DescribeSourceNetworksRequestFiltersIDs
 *       "STRING_VALUE",
 *     ],
 *     originAccountID: "STRING_VALUE",
 *     originRegion: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSourceNetworksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSourceNetworksResponse
 * //   items: [ // SourceNetworksList
 * //     { // SourceNetwork
 * //       sourceNetworkID: "STRING_VALUE",
 * //       sourceVpcID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       replicationStatus: "STRING_VALUE",
 * //       replicationStatusDetails: "STRING_VALUE",
 * //       cfnStackName: "STRING_VALUE",
 * //       sourceRegion: "STRING_VALUE",
 * //       sourceAccountID: "STRING_VALUE",
 * //       lastRecovery: { // RecoveryLifeCycle
 * //         apiCallDateTime: new Date("TIMESTAMP"),
 * //         jobID: "STRING_VALUE",
 * //         lastRecoveryResult: "STRING_VALUE",
 * //       },
 * //       launchedVpcID: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSourceNetworksCommandInput - {@link DescribeSourceNetworksCommandInput}
 * @returns {@link DescribeSourceNetworksCommandOutput}
 * @see {@link DescribeSourceNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceNetworksCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class DescribeSourceNetworksCommand extends $Command
  .classBuilder<
    DescribeSourceNetworksCommandInput,
    DescribeSourceNetworksCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "DescribeSourceNetworks", {})
  .n("DrsClient", "DescribeSourceNetworksCommand")
  .f(void 0, DescribeSourceNetworksResponseFilterSensitiveLog)
  .ser(se_DescribeSourceNetworksCommand)
  .de(de_DescribeSourceNetworksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSourceNetworksRequest;
      output: DescribeSourceNetworksResponse;
    };
    sdk: {
      input: DescribeSourceNetworksCommandInput;
      output: DescribeSourceNetworksCommandOutput;
    };
  };
}
