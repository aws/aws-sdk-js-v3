// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServiceRequest, CreateServiceResponse } from "../models/models_0";
import { CreateService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandInput extends CreateServiceRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandOutput extends CreateServiceResponse, __MetadataBearer {}

/**
 * Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).
 *
 * For more information, see [Services](https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html) in the *Amazon VPC Lattice User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateServiceCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateServiceCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateServiceRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   customDomainName: "STRING_VALUE",
 *   certificateArn: "STRING_VALUE",
 *   authType: "STRING_VALUE",
 *   idleTimeoutSeconds: Number("int"),
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   customDomainName: "STRING_VALUE",
 * //   certificateArn: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   authType: "STRING_VALUE",
 * //   idleTimeoutSeconds: Number("int"),
 * //   dnsEntry: { // DnsEntry
 * //     domainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateServiceCommandInput - {@link CreateServiceCommandInput}
 * @returns {@link CreateServiceCommandOutput}
 * @see {@link CreateServiceCommandInput} for command's `input` shape.
 * @see {@link CreateServiceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
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
export class CreateServiceCommand extends command<CreateServiceCommandInput, CreateServiceCommandOutput>(
  _ep0,
  _mw0,
  "CreateService",
  CreateService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceRequest;
      output: CreateServiceResponse;
    };
    sdk: {
      input: CreateServiceCommandInput;
      output: CreateServiceCommandOutput;
    };
  };
}
