// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessLogSubscriptionRequest, CreateAccessLogSubscriptionResponse } from "../models/models_0";
import {
  de_CreateAccessLogSubscriptionCommand,
  se_CreateAccessLogSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessLogSubscriptionCommand}.
 */
export interface CreateAccessLogSubscriptionCommandInput extends CreateAccessLogSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessLogSubscriptionCommand}.
 */
export interface CreateAccessLogSubscriptionCommandOutput
  extends CreateAccessLogSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner
 *    can use the access logs to audit the services in the network. The service network owner can only
 *    see access logs from clients and services that are associated with their service network. Access
 *    log entries represent traffic originated from VPCs associated with that network. For more
 *    information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the
 *     <i>Amazon VPC Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateAccessLogSubscriptionCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateAccessLogSubscriptionCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateAccessLogSubscriptionRequest
 *   clientToken: "STRING_VALUE",
 *   resourceIdentifier: "STRING_VALUE", // required
 *   destinationArn: "STRING_VALUE", // required
 *   serviceNetworkLogType: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAccessLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessLogSubscriptionResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   resourceId: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   serviceNetworkLogType: "STRING_VALUE",
 * //   destinationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAccessLogSubscriptionCommandInput - {@link CreateAccessLogSubscriptionCommandInput}
 * @returns {@link CreateAccessLogSubscriptionCommandOutput}
 * @see {@link CreateAccessLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateAccessLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 * @public
 */
export class CreateAccessLogSubscriptionCommand extends $Command
  .classBuilder<
    CreateAccessLogSubscriptionCommandInput,
    CreateAccessLogSubscriptionCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "CreateAccessLogSubscription", {})
  .n("VPCLatticeClient", "CreateAccessLogSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_CreateAccessLogSubscriptionCommand)
  .de(de_CreateAccessLogSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessLogSubscriptionRequest;
      output: CreateAccessLogSubscriptionResponse;
    };
    sdk: {
      input: CreateAccessLogSubscriptionCommandInput;
      output: CreateAccessLogSubscriptionCommandOutput;
    };
  };
}
