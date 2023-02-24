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

import { DeleteEndpointConfigInput, DeleteEndpointConfigInputFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteEndpointConfigCommand,
  serializeAws_json1_1DeleteEndpointConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface DeleteEndpointConfigCommandInput extends DeleteEndpointConfigInput {}
export interface DeleteEndpointConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API
 *             deletes only the specified configuration. It does not delete endpoints created using the
 *             configuration. </p>
 *          <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
 *             live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations
 *             are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an
 *             endpoint that is active or being created or updated you may lose visibility into the
 *             instance type the endpoint is using. The endpoint must be deleted in order to stop
 *             incurring charges.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEndpointConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEndpointConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteEndpointConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class DeleteEndpointConfigCommand extends $Command<
  DeleteEndpointConfigCommandInput,
  DeleteEndpointConfigCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: DeleteEndpointConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEndpointConfigCommandInput, DeleteEndpointConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEndpointConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteEndpointConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEndpointConfigInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEndpointConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEndpointConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEndpointConfigCommandOutput> {
    return deserializeAws_json1_1DeleteEndpointConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
