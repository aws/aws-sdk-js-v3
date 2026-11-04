// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDevEndpointRequest, CreateDevEndpointResponse } from "../models/models_1";
import { CreateDevEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDevEndpointCommand}.
 */
export interface CreateDevEndpointCommandInput extends CreateDevEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateDevEndpointCommand}.
 */
export interface CreateDevEndpointCommandOutput extends CreateDevEndpointResponse, __MetadataBearer {}

/**
 * Creates a new development endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateDevEndpointRequest
 *   EndpointName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   SecurityGroupIds: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   SubnetId: "STRING_VALUE",
 *   PublicKey: "STRING_VALUE",
 *   PublicKeys: [ // PublicKeysList
 *     "STRING_VALUE",
 *   ],
 *   NumberOfNodes: Number("int"),
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.4X" || "G.8X" || "G.025X" || "Z.2X" || "G.12X" || "G.16X" || "R.1X" || "R.2X" || "R.4X" || "R.8X",
 *   GlueVersion: "STRING_VALUE",
 *   NumberOfWorkers: Number("int"),
 *   ExtraPythonLibsS3Path: "STRING_VALUE",
 *   ExtraJarsS3Path: "STRING_VALUE",
 *   SecurityConfiguration: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Arguments: { // MapValue
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDevEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateDevEndpointResponse
 * //   EndpointName: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   SecurityGroupIds: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   SubnetId: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   YarnEndpointAddress: "STRING_VALUE",
 * //   ZeppelinRemoteSparkInterpreterPort: Number("int"),
 * //   NumberOfNodes: Number("int"),
 * //   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.4X" || "G.8X" || "G.025X" || "Z.2X" || "G.12X" || "G.16X" || "R.1X" || "R.2X" || "R.4X" || "R.8X",
 * //   GlueVersion: "STRING_VALUE",
 * //   NumberOfWorkers: Number("int"),
 * //   AvailabilityZone: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   ExtraPythonLibsS3Path: "STRING_VALUE",
 * //   ExtraJarsS3Path: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * //   SecurityConfiguration: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   Arguments: { // MapValue
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDevEndpointCommandInput - {@link CreateDevEndpointCommandInput}
 * @returns {@link CreateDevEndpointCommandOutput}
 * @see {@link CreateDevEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * The same unique identifier was associated with two different records.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A value could not be validated.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateDevEndpointCommand extends command<CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateDevEndpoint",
  CreateDevEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDevEndpointRequest;
      output: CreateDevEndpointResponse;
    };
    sdk: {
      input: CreateDevEndpointCommandInput;
      output: CreateDevEndpointCommandOutput;
    };
  };
}
