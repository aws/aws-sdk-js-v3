// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListViewVersionsRequest,
  ListViewVersionsResponse,
  ListViewVersionsResponseFilterSensitiveLog,
} from "../models/models_2";
import { de_ListViewVersionsCommand, se_ListViewVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListViewVersionsCommand}.
 */
export interface ListViewVersionsCommandInput extends ListViewVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListViewVersionsCommand}.
 */
export interface ListViewVersionsCommandOutput extends ListViewVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns all the available versions for the specified Amazon Connect instance and view
 *    identifier.</p>
 *          <p>Results will be sorted from highest to lowest.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListViewVersionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListViewVersionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListViewVersionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListViewVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListViewVersionsResponse
 * //   ViewVersionSummaryList: [ // ViewVersionSummaryList
 * //     { // ViewVersionSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //       Version: Number("int"),
 * //       VersionDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListViewVersionsCommandInput - {@link ListViewVersionsCommandInput}
 * @returns {@link ListViewVersionsCommandOutput}
 * @see {@link ListViewVersionsCommandInput} for command's `input` shape.
 * @see {@link ListViewVersionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Displayed when rate-related API limits are exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListViewVersionsCommand extends $Command
  .classBuilder<
    ListViewVersionsCommandInput,
    ListViewVersionsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListViewVersions", {})
  .n("ConnectClient", "ListViewVersionsCommand")
  .f(void 0, ListViewVersionsResponseFilterSensitiveLog)
  .ser(se_ListViewVersionsCommand)
  .de(de_ListViewVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListViewVersionsRequest;
      output: ListViewVersionsResponse;
    };
    sdk: {
      input: ListViewVersionsCommandInput;
      output: ListViewVersionsCommandOutput;
    };
  };
}
