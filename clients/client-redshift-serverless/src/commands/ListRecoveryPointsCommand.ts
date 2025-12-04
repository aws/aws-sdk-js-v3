// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRecoveryPointsRequest, ListRecoveryPointsResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { ListRecoveryPoints } from "../schemas/schemas_0";

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
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "ListRecoveryPoints", {})
  .n("RedshiftServerlessClient", "ListRecoveryPointsCommand")
  .sc(ListRecoveryPoints)
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
