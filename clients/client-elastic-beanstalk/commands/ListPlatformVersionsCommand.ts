import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ListPlatformVersionsRequest, ListPlatformVersionsResult } from "../models/models_0";
import {
  deserializeAws_queryListPlatformVersionsCommand,
  serializeAws_queryListPlatformVersionsCommand,
} from "../protocols/Aws_query";
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

export type ListPlatformVersionsCommandInput = ListPlatformVersionsRequest;
export type ListPlatformVersionsCommandOutput = ListPlatformVersionsResult & __MetadataBearer;

/**
 * <p>Lists the platform versions available for your account in an AWS Region. Provides
 *       summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform
 *       version.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 */
export class ListPlatformVersionsCommand extends $Command<
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPlatformVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPlatformVersionsCommandInput, ListPlatformVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "ListPlatformVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPlatformVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPlatformVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPlatformVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListPlatformVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPlatformVersionsCommandOutput> {
    return deserializeAws_queryListPlatformVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
