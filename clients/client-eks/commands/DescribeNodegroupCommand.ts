import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeNodegroupRequest, DescribeNodegroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeNodegroupCommand,
  serializeAws_restJson1DescribeNodegroupCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeNodegroupCommandInput = DescribeNodegroupRequest;
export type DescribeNodegroupCommandOutput = DescribeNodegroupResponse & __MetadataBearer;

/**
 * <p>Returns descriptive information about an Amazon EKS node group.</p>
 */
export class DescribeNodegroupCommand extends $Command<
  DescribeNodegroupCommandInput,
  DescribeNodegroupCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNodegroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeNodegroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNodegroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeNodegroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeNodegroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeNodegroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNodegroupCommandOutput> {
    return deserializeAws_restJson1DescribeNodegroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
