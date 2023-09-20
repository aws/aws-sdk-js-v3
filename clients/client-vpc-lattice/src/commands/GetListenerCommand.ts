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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetListenerRequest, GetListenerResponse } from "../models/models_0";
import { de_GetListenerCommand, se_GetListenerCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetListenerCommand}.
 */
export interface GetListenerCommandInput extends GetListenerRequest {}
/**
 * @public
 *
 * The output of {@link GetListenerCommand}.
 */
export interface GetListenerCommandOutput extends GetListenerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the specified listener for the specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, GetListenerCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, GetListenerCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // GetListenerRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   listenerIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetListenerCommand(input);
 * const response = await client.send(command);
 * // { // GetListenerResponse
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
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetListenerCommandInput - {@link GetListenerCommandInput}
 * @returns {@link GetListenerCommandOutput}
 * @see {@link GetListenerCommandInput} for command's `input` shape.
 * @see {@link GetListenerCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
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
 */
export class GetListenerCommand extends $Command<
  GetListenerCommandInput,
  GetListenerCommandOutput,
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
  constructor(readonly input: GetListenerCommandInput) {
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
  ): Handler<GetListenerCommandInput, GetListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetListenerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "GetListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MercuryControlPlane",
        operation: "GetListener",
      },
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
  private serialize(input: GetListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetListenerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetListenerCommandOutput> {
    return de_GetListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
