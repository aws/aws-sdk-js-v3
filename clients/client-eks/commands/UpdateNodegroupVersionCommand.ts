import {
  EKSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EKSClient";
import {
  UpdateNodegroupVersionRequest,
  UpdateNodegroupVersionResponse
} from "../models/index";
import {
  deserializeAws_restJson1UpdateNodegroupVersionCommand,
  serializeAws_restJson1UpdateNodegroupVersionCommand
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type UpdateNodegroupVersionCommandInput = UpdateNodegroupVersionRequest;
export type UpdateNodegroupVersionCommandOutput = UpdateNodegroupVersionResponse &
  __MetadataBearer;

export class UpdateNodegroupVersionCommand extends $Command<
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNodegroupVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateNodegroupVersionCommandInput,
    UpdateNodegroupVersionCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateNodegroupVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateNodegroupVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNodegroupVersionCommandOutput> {
    return deserializeAws_restJson1UpdateNodegroupVersionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
