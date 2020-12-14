import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDevEndpointsRequest, GetDevEndpointsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDevEndpointsCommand,
  serializeAws_json1_1GetDevEndpointsCommand,
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

export type GetDevEndpointsCommandInput = GetDevEndpointsRequest;
export type GetDevEndpointsCommandOutput = GetDevEndpointsResponse & __MetadataBearer;

/**
 * <p>Retrieves all the development endpoints in this AWS account.</p>
 *          <note>
 *             <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address
 *       and the public IP address field is not populated. When you create a non-VPC development
 *       endpoint, AWS Glue returns only a public IP address.</p>
 *          </note>
 */
export class GetDevEndpointsCommand extends $Command<
  GetDevEndpointsCommandInput,
  GetDevEndpointsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDevEndpointsCommandInput) {
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
  ): Handler<GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDevEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDevEndpointsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDevEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevEndpointsCommandOutput> {
    return deserializeAws_json1_1GetDevEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
