// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { ListChangesetsRequest, ListChangesetsResponse } from "../models/models_0";
import { de_ListChangesetsCommand, se_ListChangesetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChangesetsCommand}.
 */
export interface ListChangesetsCommandInput extends ListChangesetsRequest {}
/**
 * @public
 *
 * The output of {@link ListChangesetsCommand}.
 */
export interface ListChangesetsCommandOutput extends ListChangesetsResponse, __MetadataBearer {}

/**
 * <p>Lists the FinSpace Changesets for a Dataset.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListChangesetsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListChangesetsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceDataClient(config);
 * const input = { // ListChangesetsRequest
 *   datasetId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListChangesetsCommand(input);
 * const response = await client.send(command);
 * // { // ListChangesetsResponse
 * //   changesets: [ // ChangesetList
 * //     { // ChangesetSummary
 * //       changesetId: "STRING_VALUE",
 * //       changesetArn: "STRING_VALUE",
 * //       datasetId: "STRING_VALUE",
 * //       changeType: "REPLACE" || "APPEND" || "MODIFY",
 * //       sourceParams: { // SourceParams
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       formatParams: { // FormatParams
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       createTime: Number("long"),
 * //       status: "PENDING" || "FAILED" || "SUCCESS" || "RUNNING" || "STOP_REQUESTED",
 * //       errorInfo: { // ChangesetErrorInfo
 * //         errorMessage: "STRING_VALUE",
 * //         errorCategory: "VALIDATION" || "SERVICE_QUOTA_EXCEEDED" || "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "THROTTLING" || "INTERNAL_SERVICE_EXCEPTION" || "CANCELLED" || "USER_RECOVERABLE",
 * //       },
 * //       activeUntilTimestamp: Number("long"),
 * //       activeFromTimestamp: Number("long"),
 * //       updatesChangesetId: "STRING_VALUE",
 * //       updatedByChangesetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChangesetsCommandInput - {@link ListChangesetsCommandInput}
 * @returns {@link ListChangesetsCommandOutput}
 * @see {@link ListChangesetsCommandInput} for command's `input` shape.
 * @see {@link ListChangesetsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 * @public
 */
export class ListChangesetsCommand extends $Command
  .classBuilder<
    ListChangesetsCommandInput,
    ListChangesetsCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroPublicAPI", "ListChangesets", {})
  .n("FinspaceDataClient", "ListChangesetsCommand")
  .f(void 0, void 0)
  .ser(se_ListChangesetsCommand)
  .de(de_ListChangesetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChangesetsRequest;
      output: ListChangesetsResponse;
    };
    sdk: {
      input: ListChangesetsCommandInput;
      output: ListChangesetsCommandOutput;
    };
  };
}
