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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  CreateConditionalForwarderRequest,
  CreateConditionalForwarderRequestFilterSensitiveLog,
  CreateConditionalForwarderResult,
  CreateConditionalForwarderResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateConditionalForwarderCommand,
  serializeAws_json1_1CreateConditionalForwarderCommand,
} from "../protocols/Aws_json1_1";

export interface CreateConditionalForwarderCommandInput extends CreateConditionalForwarderRequest {}
export interface CreateConditionalForwarderCommandOutput extends CreateConditionalForwarderResult, __MetadataBearer {}

/**
 * <p>Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional
 *       forwarders are required in order to set up a trust relationship with another domain. The
 *       conditional forwarder points to the trusted domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link CreateConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class CreateConditionalForwarderCommand extends $Command<
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
  DirectoryServiceClientResolvedConfig
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

  constructor(readonly input: CreateConditionalForwarderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConditionalForwarderCommandInput, CreateConditionalForwarderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConditionalForwarderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CreateConditionalForwarderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConditionalForwarderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConditionalForwarderResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConditionalForwarderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateConditionalForwarderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConditionalForwarderCommandOutput> {
    return deserializeAws_json1_1CreateConditionalForwarderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
