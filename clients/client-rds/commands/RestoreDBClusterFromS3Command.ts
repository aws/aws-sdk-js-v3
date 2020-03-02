import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient";
import {
  RestoreDBClusterFromS3Message,
  RestoreDBClusterFromS3Result
} from "../models/index";
import {
  deserializeAws_queryRestoreDBClusterFromS3Command,
  serializeAws_queryRestoreDBClusterFromS3Command
} from "../protocols/Aws_query";
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

export type RestoreDBClusterFromS3CommandInput = RestoreDBClusterFromS3Message;
export type RestoreDBClusterFromS3CommandOutput = RestoreDBClusterFromS3Result &
  __MetadataBearer;

export class RestoreDBClusterFromS3Command extends $Command<
  RestoreDBClusterFromS3CommandInput,
  RestoreDBClusterFromS3CommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBClusterFromS3CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RestoreDBClusterFromS3CommandInput,
    RestoreDBClusterFromS3CommandOutput
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
    input: RestoreDBClusterFromS3CommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterFromS3Command(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterFromS3CommandOutput> {
    return deserializeAws_queryRestoreDBClusterFromS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
