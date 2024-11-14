// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListResourceRequestsInput,
  ListResourceRequestsOutput,
  ListResourceRequestsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListResourceRequestsCommand, se_ListResourceRequestsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceRequestsCommand}.
 */
export interface ListResourceRequestsCommandInput extends ListResourceRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListResourceRequestsCommand}.
 */
export interface ListResourceRequestsCommandOutput extends ListResourceRequestsOutput, __MetadataBearer {}

/**
 * <p>Returns existing resource operation requests. This includes requests of all status types.
 *       For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-list">Listing active resource operation requests</a> in the
 *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 *          <note>
 *             <p>Resource operation requests expire after 7 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, ListResourceRequestsCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, ListResourceRequestsCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * const client = new CloudControlClient(config);
 * const input = { // ListResourceRequestsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ResourceRequestStatusFilter: { // ResourceRequestStatusFilter
 *     Operations: [ // Operations
 *       "STRING_VALUE",
 *     ],
 *     OperationStatuses: [ // OperationStatuses
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListResourceRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceRequestsOutput
 * //   ResourceRequestStatusSummaries: [ // ResourceRequestStatusSummaries
 * //     { // ProgressEvent
 * //       TypeName: "STRING_VALUE",
 * //       Identifier: "STRING_VALUE",
 * //       RequestToken: "STRING_VALUE",
 * //       HooksRequestToken: "STRING_VALUE",
 * //       Operation: "STRING_VALUE",
 * //       OperationStatus: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       ResourceModel: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       RetryAfter: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceRequestsCommandInput - {@link ListResourceRequestsCommandInput}
 * @returns {@link ListResourceRequestsCommandOutput}
 * @see {@link ListResourceRequestsCommandInput} for command's `input` shape.
 * @see {@link ListResourceRequestsCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link CloudControlServiceException}
 * <p>Base exception class for all service exceptions from CloudControl service.</p>
 *
 * @public
 */
export class ListResourceRequestsCommand extends $Command
  .classBuilder<
    ListResourceRequestsCommandInput,
    ListResourceRequestsCommandOutput,
    CloudControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudApiService", "ListResourceRequests", {})
  .n("CloudControlClient", "ListResourceRequestsCommand")
  .f(void 0, ListResourceRequestsOutputFilterSensitiveLog)
  .ser(se_ListResourceRequestsCommand)
  .de(de_ListResourceRequestsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceRequestsInput;
      output: ListResourceRequestsOutput;
    };
    sdk: {
      input: ListResourceRequestsCommandInput;
      output: ListResourceRequestsCommandOutput;
    };
  };
}
