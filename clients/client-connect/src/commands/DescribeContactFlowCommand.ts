// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeContactFlowRequest, DescribeContactFlowResponse } from "../models/models_1";
import { DescribeContactFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeContactFlowCommand}.
 */
export interface DescribeContactFlowCommandInput extends DescribeContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactFlowCommand}.
 */
export interface DescribeContactFlowCommandOutput extends DescribeContactFlowResponse, __MetadataBearer {}

/**
 * Describes the specified flow.
 *
 * You can also create and update flows using the [Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html).
 *
 * Use the `$SAVED` alias in the request to describe the `SAVED` content of a Flow. For example, `arn:aws:.../contact-flow/\{id\}:$SAVED`. After a flow is published, `$SAVED` needs to be supplied to view saved content that has not been published.
 *
 * Use `arn:aws:.../contact-flow/\{id\}:\{version\}` to retrieve the content of a specific flow version.
 *
 * In the response, **Status** indicates the flow status as either `SAVED` or `PUBLISHED`. The `PUBLISHED` status will initiate validation on the content. `SAVED` does not initiate validation of the content. `SAVED` | `PUBLISHED`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeContactFlowRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactFlowCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactFlowResponse
 * //   ContactFlow: { // ContactFlow
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER" || "CAMPAIGN",
 * //     State: "ACTIVE" || "ARCHIVED",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     Description: "STRING_VALUE",
 * //     Content: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     FlowContentSha256: "STRING_VALUE",
 * //     Version: Number("long"),
 * //     VersionDescription: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContactFlowCommandInput - {@link DescribeContactFlowCommandInput}
 * @returns {@link DescribeContactFlowCommandOutput}
 * @see {@link DescribeContactFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ContactFlowNotPublishedException} (client fault)
 *
 * The flow has not been published.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DescribeContactFlowCommand extends command<DescribeContactFlowCommandInput, DescribeContactFlowCommandOutput>(
  _ep0,
  _mw0,
  "DescribeContactFlow",
  DescribeContactFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactFlowRequest;
      output: DescribeContactFlowResponse;
    };
    sdk: {
      input: DescribeContactFlowCommandInput;
      output: DescribeContactFlowCommandOutput;
    };
  };
}
