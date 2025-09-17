// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecoveryPointsRequest, ListRecoveryPointsResponse } from "../models/models_0";
import { de_ListRecoveryPointsCommand, se_ListRecoveryPointsCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecoveryPointsCommand}.
 */
export interface ListRecoveryPointsCommandInput extends ListRecoveryPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPointsCommand}.
 */
export interface ListRecoveryPointsCommandOutput extends ListRecoveryPointsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of recovery points.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListRecoveryPointsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListRecoveryPointsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListRecoveryPointsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   namespaceName: "STRING_VALUE",
 *   namespaceArn: "STRING_VALUE",
 * };
 * const command = new ListRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPointsResponse
 * //   recoveryPoints: [ // RecoveryPointList
 * //     { // RecoveryPoint
 * //       recoveryPointId: "STRING_VALUE",
 * //       recoveryPointCreateTime: new Date("TIMESTAMP"),
 * //       totalSizeInMegaBytes: Number("double"),
 * //       namespaceName: "STRING_VALUE",
 * //       workgroupName: "STRING_VALUE",
 * //       namespaceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecoveryPointsCommandInput - {@link ListRecoveryPointsCommandInput}
 * @returns {@link ListRecoveryPointsCommandOutput}
 * @see {@link ListRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class ListRecoveryPointsCommand extends $Command
  .classBuilder<
    ListRecoveryPointsCommandInput,
    ListRecoveryPointsCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "ListRecoveryPoints", {})
  .n("RedshiftServerlessClient", "ListRecoveryPointsCommand")
  .f(void 0, void 0)
  .ser(se_ListRecoveryPointsCommand)
  .de(de_ListRecoveryPointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecoveryPointsRequest;
      output: ListRecoveryPointsResponse;
    };
    sdk: {
      input: ListRecoveryPointsCommandInput;
      output: ListRecoveryPointsCommandOutput;
    };
  };
}
