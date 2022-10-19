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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  CreateInstanceRequest,
  CreateInstanceRequestFilterSensitiveLog,
  CreateInstanceResponse,
  CreateInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateInstanceCommand,
  serializeAws_restJson1CreateInstanceCommand,
} from "../protocols/Aws_restJson1";

export interface CreateInstanceCommandInput extends CreateInstanceRequest {}
export interface CreateInstanceCommandOutput extends CreateInstanceResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Initiates an Amazon Connect instance with all the supported channels enabled. It does
 *    not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It
 *    also does not allow for any configurations on features, such as Contact Lens for Amazon Connect. </p>
 *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
 * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
 * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class CreateInstanceCommand extends $Command<
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: CreateInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInstanceCommandInput, CreateInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceCommandOutput> {
    return deserializeAws_restJson1CreateInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
