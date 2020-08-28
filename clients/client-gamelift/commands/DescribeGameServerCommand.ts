import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameServerInput, DescribeGameServerOutput } from "../models/index";
import {
  deserializeAws_json1_1DescribeGameServerCommand,
  serializeAws_json1_1DescribeGameServerCommand,
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

export type DescribeGameServerCommandInput = DescribeGameServerInput;
export type DescribeGameServerCommandOutput = DescribeGameServerOutput & __MetadataBearer;

export class DescribeGameServerCommand extends $Command<
  DescribeGameServerCommandInput,
  DescribeGameServerCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGameServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGameServerCommandInput, DescribeGameServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeGameServerInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameServerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGameServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGameServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGameServerCommandOutput> {
    return deserializeAws_json1_1DescribeGameServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
