// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSessionsRequest, DescribeSessionsResponse } from "../models/models_0";
import { DescribeSessions } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSessionsCommand}.
 */
export interface DescribeSessionsCommandInput extends DescribeSessionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSessionsCommand}.
 */
export interface DescribeSessionsCommandOutput extends DescribeSessionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of all active sessions (both connected and disconnected) or terminated
 *    sessions from the past 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeSessionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeSessionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeSessionsRequest
 *   State: "Active" || "History", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // SessionFilterList
 *     { // SessionFilter
 *       key: "InvokedAfter" || "InvokedBefore" || "Target" || "Owner" || "Status" || "SessionId" || "AccessType", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DescribeSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSessionsResponse
 * //   Sessions: [ // SessionList
 * //     { // Session
 * //       SessionId: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       Status: "Connected" || "Connecting" || "Disconnected" || "Terminated" || "Terminating" || "Failed",
 * //       StartDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       DocumentName: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //       Details: "STRING_VALUE",
 * //       OutputUrl: { // SessionManagerOutputUrl
 * //         S3OutputUrl: "STRING_VALUE",
 * //         CloudWatchOutputUrl: "STRING_VALUE",
 * //       },
 * //       MaxSessionDuration: "STRING_VALUE",
 * //       AccessType: "Standard" || "JustInTime",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSessionsCommandInput - {@link DescribeSessionsCommandInput}
 * @returns {@link DescribeSessionsCommandOutput}
 * @see {@link DescribeSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSessionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeSessionsCommand extends $Command
  .classBuilder<
    DescribeSessionsCommandInput,
    DescribeSessionsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribeSessions", {})
  .n("SSMClient", "DescribeSessionsCommand")
  .sc(DescribeSessions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSessionsRequest;
      output: DescribeSessionsResponse;
    };
    sdk: {
      input: DescribeSessionsCommandInput;
      output: DescribeSessionsCommandOutput;
    };
  };
}
