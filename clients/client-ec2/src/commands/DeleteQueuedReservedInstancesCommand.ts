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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeleteQueuedReservedInstancesRequest,
  DeleteQueuedReservedInstancesRequestFilterSensitiveLog,
  DeleteQueuedReservedInstancesResult,
  DeleteQueuedReservedInstancesResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteQueuedReservedInstancesCommand,
  serializeAws_ec2DeleteQueuedReservedInstancesCommand,
} from "../protocols/Aws_ec2";

export interface DeleteQueuedReservedInstancesCommandInput extends DeleteQueuedReservedInstancesRequest {}
export interface DeleteQueuedReservedInstancesCommandOutput
  extends DeleteQueuedReservedInstancesResult,
    __MetadataBearer {}

/**
 * <p>Deletes the queued purchases for the specified Reserved Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteQueuedReservedInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteQueuedReservedInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteQueuedReservedInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueuedReservedInstancesCommandInput} for command's `input` shape.
 * @see {@link DeleteQueuedReservedInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteQueuedReservedInstancesCommand extends $Command<
  DeleteQueuedReservedInstancesCommandInput,
  DeleteQueuedReservedInstancesCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DeleteQueuedReservedInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQueuedReservedInstancesCommandInput, DeleteQueuedReservedInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteQueuedReservedInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteQueuedReservedInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteQueuedReservedInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteQueuedReservedInstancesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteQueuedReservedInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteQueuedReservedInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteQueuedReservedInstancesCommandOutput> {
    return deserializeAws_ec2DeleteQueuedReservedInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
