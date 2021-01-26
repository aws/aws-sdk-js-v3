import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDevEndpointRequest, GetDevEndpointResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDevEndpointCommand,
  serializeAws_json1_1GetDevEndpointCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetDevEndpointCommandInput = GetDevEndpointRequest;
export type GetDevEndpointCommandOutput = GetDevEndpointResponse & __MetadataBearer;

/**
 * <p>Retrieves information about a specified development endpoint.</p>
 *          <note>
 *             <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only
 *         a private IP address, and the public IP address field is not populated. When you create a
 *         non-VPC development endpoint, AWS Glue returns only a public IP address.</p>
 *          </note>
 */
export class GetDevEndpointCommand extends $Command<
  GetDevEndpointCommandInput,
  GetDevEndpointCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDevEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevEndpointCommandInput, GetDevEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDevEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDevEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDevEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevEndpointCommandOutput> {
    return deserializeAws_json1_1GetDevEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
