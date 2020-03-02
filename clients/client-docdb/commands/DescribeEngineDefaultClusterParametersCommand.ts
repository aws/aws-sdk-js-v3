import {
  DocDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DocDBClient";
import {
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult
} from "../models/index";
import {
  deserializeAws_queryDescribeEngineDefaultClusterParametersCommand,
  serializeAws_queryDescribeEngineDefaultClusterParametersCommand
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

export type DescribeEngineDefaultClusterParametersCommandInput = DescribeEngineDefaultClusterParametersMessage;
export type DescribeEngineDefaultClusterParametersCommandOutput = DescribeEngineDefaultClusterParametersResult &
  __MetadataBearer;

export class DescribeEngineDefaultClusterParametersCommand extends $Command<
  DescribeEngineDefaultClusterParametersCommandInput,
  DescribeEngineDefaultClusterParametersCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: DescribeEngineDefaultClusterParametersCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeEngineDefaultClusterParametersCommandInput,
    DescribeEngineDefaultClusterParametersCommandOutput
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
    input: DescribeEngineDefaultClusterParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEngineDefaultClusterParametersCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEngineDefaultClusterParametersCommandOutput> {
    return deserializeAws_queryDescribeEngineDefaultClusterParametersCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
