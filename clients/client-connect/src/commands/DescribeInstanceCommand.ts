// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeInstanceRequest, DescribeInstanceResponse } from "../models/models_1";
import { DescribeInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceCommand}.
 */
export interface DescribeInstanceCommandInput extends DescribeInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceCommand}.
 */
export interface DescribeInstanceCommandOutput extends DescribeInstanceResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns the current state of the specified instance identifier. It tracks the instance while it is being created
 *    and returns an error status, if applicable. </p>
 *          <p>If an instance is not created successfully, the instance status reason field returns details relevant to the
 *    reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceResponse
 * //   Instance: { // Instance
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     IdentityManagementType: "SAML" || "CONNECT_MANAGED" || "EXISTING_DIRECTORY",
 * //     InstanceAlias: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     ServiceRole: "STRING_VALUE",
 * //     InstanceStatus: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED",
 * //     StatusReason: { // InstanceStatusReason
 * //       Message: "STRING_VALUE",
 * //     },
 * //     InboundCallsEnabled: true || false,
 * //     OutboundCallsEnabled: true || false,
 * //     InstanceAccessUrl: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   ReplicationConfiguration: { // ReplicationConfiguration
 * //     ReplicationStatusSummaryList: [ // ReplicationStatusSummaryList
 * //       { // ReplicationStatusSummary
 * //         Region: "STRING_VALUE",
 * //         ReplicationStatus: "INSTANCE_REPLICATION_COMPLETE" || "INSTANCE_REPLICATION_IN_PROGRESS" || "INSTANCE_REPLICATION_FAILED" || "INSTANCE_REPLICA_DELETING" || "INSTANCE_REPLICATION_DELETION_FAILED" || "RESOURCE_REPLICATION_NOT_STARTED",
 * //         ReplicationStatusReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SourceRegion: "STRING_VALUE",
 * //     GlobalSignInEndpoint: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceCommandInput - {@link DescribeInstanceCommandInput}
 * @returns {@link DescribeInstanceCommandOutput}
 * @see {@link DescribeInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceCommand extends $Command
  .classBuilder<
    DescribeInstanceCommandInput,
    DescribeInstanceCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeInstance", {})
  .n("ConnectClient", "DescribeInstanceCommand")
  .sc(DescribeInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceRequest;
      output: DescribeInstanceResponse;
    };
    sdk: {
      input: DescribeInstanceCommandInput;
      output: DescribeInstanceCommandOutput;
    };
  };
}
