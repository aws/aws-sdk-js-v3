// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTrafficMirrorSessionsRequest, DescribeTrafficMirrorSessionsResult } from "../models/models_5";
import { DescribeTrafficMirrorSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTrafficMirrorSessionsCommand}.
 */
export interface DescribeTrafficMirrorSessionsCommandInput extends DescribeTrafficMirrorSessionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficMirrorSessionsCommand}.
 */
export interface DescribeTrafficMirrorSessionsCommandOutput extends DescribeTrafficMirrorSessionsResult, __MetadataBearer {}

/**
 * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorSessionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorSessionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeTrafficMirrorSessionsRequest
 *   TrafficMirrorSessionIds: [ // TrafficMirrorSessionIdList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeTrafficMirrorSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficMirrorSessionsResult
 * //   TrafficMirrorSessions: [ // TrafficMirrorSessionSet
 * //     { // TrafficMirrorSession
 * //       TrafficMirrorSessionId: "STRING_VALUE",
 * //       TrafficMirrorTargetId: "STRING_VALUE",
 * //       TrafficMirrorFilterId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       PacketLength: Number("int"),
 * //       SessionNumber: Number("int"),
 * //       VirtualNetworkId: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrafficMirrorSessionsCommandInput - {@link DescribeTrafficMirrorSessionsCommandInput}
 * @returns {@link DescribeTrafficMirrorSessionsCommandOutput}
 * @see {@link DescribeTrafficMirrorSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorSessionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeTrafficMirrorSessionsCommand extends command<DescribeTrafficMirrorSessionsCommandInput, DescribeTrafficMirrorSessionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrafficMirrorSessions",
  DescribeTrafficMirrorSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrafficMirrorSessionsRequest;
      output: DescribeTrafficMirrorSessionsResult;
    };
    sdk: {
      input: DescribeTrafficMirrorSessionsCommandInput;
      output: DescribeTrafficMirrorSessionsCommandOutput;
    };
  };
}
