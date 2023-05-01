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

import { DeleteDBProxyEndpointRequest, DeleteDBProxyEndpointResponse } from "../models/models_0";
import { de_DeleteDBProxyEndpointCommand, se_DeleteDBProxyEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DeleteDBProxyEndpointCommand}.
 */
export interface DeleteDBProxyEndpointCommandInput extends DeleteDBProxyEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDBProxyEndpointCommand}.
 */
export interface DeleteDBProxyEndpointCommandOutput extends DeleteDBProxyEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the
 *         endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write
 *         or read-only operations, or using a different VPC than the DB proxy's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBProxyEndpointRequest
 *   DBProxyEndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteDBProxyEndpointCommandInput - {@link DeleteDBProxyEndpointCommandInput}
 * @returns {@link DeleteDBProxyEndpointCommandOutput}
 * @see {@link DeleteDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyEndpointNotFoundFault} (client fault)
 *  <p>The DB proxy endpoint doesn't exist.</p>
 *
 * @throws {@link InvalidDBProxyEndpointStateFault} (client fault)
 *  <p>You can't perform this operation while the DB proxy endpoint is in a particular state.</p>
 *
 *
 */
export class DeleteDBProxyEndpointCommand extends $Command<
  DeleteDBProxyEndpointCommandInput,
  DeleteDBProxyEndpointCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DeleteDBProxyEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBProxyEndpointCommandInput, DeleteDBProxyEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBProxyEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBProxyEndpointCommand";
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
  private serialize(input: DeleteDBProxyEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDBProxyEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBProxyEndpointCommandOutput> {
    return de_DeleteDBProxyEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
