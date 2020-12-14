import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelPackageInput, DescribeModelPackageOutput } from "../models/models_1";
import {
  deserializeAws_json1_1DescribeModelPackageCommand,
  serializeAws_json1_1DescribeModelPackageCommand,
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

export type DescribeModelPackageCommandInput = DescribeModelPackageInput;
export type DescribeModelPackageCommandOutput = DescribeModelPackageOutput & __MetadataBearer;

/**
 * <p>Returns a description of the specified model package, which is used to create Amazon SageMaker
 *             models or list them on AWS Marketplace.</p>
 *         <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS
 *             Marketplace.</p>
 */
export class DescribeModelPackageCommand extends $Command<
  DescribeModelPackageCommandInput,
  DescribeModelPackageCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeModelPackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeModelPackageCommandInput, DescribeModelPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeModelPackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeModelPackageInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeModelPackageOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeModelPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeModelPackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeModelPackageCommandOutput> {
    return deserializeAws_json1_1DescribeModelPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
