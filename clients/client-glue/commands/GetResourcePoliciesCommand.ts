import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetResourcePoliciesRequest, GetResourcePoliciesResponse } from "../models/index";
import {
  deserializeAws_json1_1GetResourcePoliciesCommand,
  serializeAws_json1_1GetResourcePoliciesCommand,
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

export type GetResourcePoliciesCommandInput = GetResourcePoliciesRequest;
export type GetResourcePoliciesCommandOutput = GetResourcePoliciesResponse & __MetadataBearer;

export class GetResourcePoliciesCommand extends $Command<
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourcePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetResourcePoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResourcePoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourcePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourcePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourcePoliciesCommandOutput> {
    return deserializeAws_json1_1GetResourcePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
