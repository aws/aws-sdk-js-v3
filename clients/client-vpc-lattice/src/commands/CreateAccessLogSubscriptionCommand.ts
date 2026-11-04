// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccessLogSubscriptionRequest, CreateAccessLogSubscriptionResponse } from "../models/models_0";
import { CreateAccessLogSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateAccessLogSubscriptionCommandOutput extends CreateAccessLogSubscriptionResponse, __MetadataBearer {}

/**
 * Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner can only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network. For more information, see [Access logs](https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html) in the *Amazon VPC Lattice User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateAccessLogSubscriptionCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateAccessLogSubscriptionCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
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
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link VPCLatticeServiceException}
 *
 * Base exception class for all service exceptions from VPCLattice service.
 *
 * @public
 */
export class CreateAccessLogSubscriptionCommand extends command<CreateAccessLogSubscriptionCommandInput, CreateAccessLogSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccessLogSubscription",
  CreateAccessLogSubscription$
) {
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
