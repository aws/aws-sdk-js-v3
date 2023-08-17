// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateListenerRequest, CreateListenerResponse } from "../models/models_0";
import { de_CreateListenerCommand, se_CreateListenerCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandInput extends CreateListenerRequest {}
/**
 * @public
 *
 * The output of {@link CreateListenerCommand}.
 */
export interface CreateListenerCommandOutput extends CreateListenerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must
 *    add one or more listeners. A listener is a process that checks for connection requests to your
 *    services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the
 *    <i>Amazon VPC Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, CreateListenerCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, CreateListenerCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // CreateListenerRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   protocol: "STRING_VALUE", // required
 *   port: Number("int"),
 *   defaultAction: { // RuleAction Union: only one key present
 *     forward: { // ForwardAction
 *       targetGroups: [ // WeightedTargetGroupList // required
 *         { // WeightedTargetGroup
 *           targetGroupIdentifier: "STRING_VALUE", // required
 *           weight: Number("int"),
 *         },
 *       ],
 *     },
 *     fixedResponse: { // FixedResponseAction
 *       statusCode: Number("int"), // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * // { // CreateListenerResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   protocol: "STRING_VALUE",
 * //   port: Number("int"),
 * //   serviceArn: "STRING_VALUE",
 * //   serviceId: "STRING_VALUE",
 * //   defaultAction: { // RuleAction Union: only one key present
 * //     forward: { // ForwardAction
 * //       targetGroups: [ // WeightedTargetGroupList // required
 * //         { // WeightedTargetGroup
 * //           targetGroupIdentifier: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     fixedResponse: { // FixedResponseAction
 * //       statusCode: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateListenerCommandInput - {@link CreateListenerCommandInput}
 * @returns {@link CreateListenerCommandOutput}
 * @see {@link CreateListenerCommandInput} for command's `input` shape.
 * @see {@link CreateListenerCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
 */
export class CreateListenerCommand extends $Command<
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
  VPCLatticeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateListenerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VPCLatticeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateListenerCommandInput, CreateListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateListenerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "CreateListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateListenerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateListenerCommandOutput> {
    return de_CreateListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
