// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { UpdateVpcIngressConnectionRequest, UpdateVpcIngressConnectionResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateVpcIngressConnectionCommand,
  serializeAws_json1_0UpdateVpcIngressConnectionCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link UpdateVpcIngressConnectionCommand}.
 */
export interface UpdateVpcIngressConnectionCommandInput extends UpdateVpcIngressConnectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVpcIngressConnectionCommand}.
 */
export interface UpdateVpcIngressConnectionCommandOutput extends UpdateVpcIngressConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p>
 *          <ul>
 *             <li>
 *                <p>
 *           AVAILABLE
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *           FAILED_CREATION
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *           FAILED_UPDATE
 *         </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, UpdateVpcIngressConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, UpdateVpcIngressConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new UpdateVpcIngressConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateVpcIngressConnectionCommandInput - {@link UpdateVpcIngressConnectionCommandInput}
 * @returns {@link UpdateVpcIngressConnectionCommandOutput}
 * @see {@link UpdateVpcIngressConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcIngressConnectionCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>You can't perform this action when the resource is in its current state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 *
 */
export class UpdateVpcIngressConnectionCommand extends $Command<
  UpdateVpcIngressConnectionCommandInput,
  UpdateVpcIngressConnectionCommandOutput,
  AppRunnerClientResolvedConfig
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
  constructor(readonly input: UpdateVpcIngressConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVpcIngressConnectionCommandInput, UpdateVpcIngressConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateVpcIngressConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "UpdateVpcIngressConnectionCommand";
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
  private serialize(input: UpdateVpcIngressConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateVpcIngressConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateVpcIngressConnectionCommandOutput> {
    return deserializeAws_json1_0UpdateVpcIngressConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
