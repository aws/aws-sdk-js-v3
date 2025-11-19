// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEvaluationFormVersionsRequest, ListEvaluationFormVersionsResponse } from "../models/models_1";
import { ListEvaluationFormVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEvaluationFormVersionsCommand}.
 */
export interface ListEvaluationFormVersionsCommandInput extends ListEvaluationFormVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEvaluationFormVersionsCommand}.
 */
export interface ListEvaluationFormVersionsCommandOutput extends ListEvaluationFormVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists versions of an evaluation form in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListEvaluationFormVersionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListEvaluationFormVersionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListEvaluationFormVersionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEvaluationFormVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEvaluationFormVersionsResponse
 * //   EvaluationFormVersionSummaryList: [ // EvaluationFormVersionSummaryList // required
 * //     { // EvaluationFormVersionSummary
 * //       EvaluationFormArn: "STRING_VALUE", // required
 * //       EvaluationFormId: "STRING_VALUE", // required
 * //       EvaluationFormVersion: Number("int"), // required
 * //       Locked: true || false, // required
 * //       Status: "DRAFT" || "ACTIVE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       CreatedBy: "STRING_VALUE", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedBy: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEvaluationFormVersionsCommandInput - {@link ListEvaluationFormVersionsCommandInput}
 * @returns {@link ListEvaluationFormVersionsCommandOutput}
 * @see {@link ListEvaluationFormVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEvaluationFormVersionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListEvaluationFormVersionsCommand extends $Command
  .classBuilder<
    ListEvaluationFormVersionsCommandInput,
    ListEvaluationFormVersionsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListEvaluationFormVersions", {})
  .n("ConnectClient", "ListEvaluationFormVersionsCommand")
  .sc(ListEvaluationFormVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEvaluationFormVersionsRequest;
      output: ListEvaluationFormVersionsResponse;
    };
    sdk: {
      input: ListEvaluationFormVersionsCommandInput;
      output: ListEvaluationFormVersionsCommandOutput;
    };
  };
}
