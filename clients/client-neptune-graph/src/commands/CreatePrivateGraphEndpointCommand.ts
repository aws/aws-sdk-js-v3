// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePrivateGraphEndpointInput, CreatePrivateGraphEndpointOutput } from "../models/models_0";
import { CreatePrivateGraphEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePrivateGraphEndpointCommand}.
 */
export interface CreatePrivateGraphEndpointCommandInput extends CreatePrivateGraphEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreatePrivateGraphEndpointCommand}.
 */
export interface CreatePrivateGraphEndpointCommandOutput extends CreatePrivateGraphEndpointOutput, __MetadataBearer {}

/**
 * Create a private graph endpoint to allow private access to the graph from within a VPC. You can attach security groups to the private graph endpoint.
 *
 * > **Note:** VPC endpoint charges apply.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CreatePrivateGraphEndpointCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CreatePrivateGraphEndpointCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // CreatePrivateGraphEndpointInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   vpcId: "STRING_VALUE",
 *   subnetIds: [ // SubnetIds
 *     "STRING_VALUE",
 *   ],
 *   vpcSecurityGroupIds: [ // SecurityGroupIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreatePrivateGraphEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivateGraphEndpointOutput
 * //   vpcId: "STRING_VALUE", // required
 * //   subnetIds: [ // SubnetIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED", // required
 * //   vpcEndpointId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePrivateGraphEndpointCommandInput - {@link CreatePrivateGraphEndpointCommandInput}
 * @returns {@link CreatePrivateGraphEndpointCommandOutput}
 * @see {@link CreatePrivateGraphEndpointCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateGraphEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Raised when a conflict is encountered.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * A failure occurred on the server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be located.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service quota was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception was interrupted by throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A resource could not be validated.
 *
 * @throws {@link NeptuneGraphServiceException}
 *
 * Base exception class for all service exceptions from NeptuneGraph service.
 *
 * @public
 */
export class CreatePrivateGraphEndpointCommand extends command<CreatePrivateGraphEndpointCommandInput, CreatePrivateGraphEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreatePrivateGraphEndpoint",
  CreatePrivateGraphEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrivateGraphEndpointInput;
      output: CreatePrivateGraphEndpointOutput;
    };
    sdk: {
      input: CreatePrivateGraphEndpointCommandInput;
      output: CreatePrivateGraphEndpointCommandOutput;
    };
  };
}
