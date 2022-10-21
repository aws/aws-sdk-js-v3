// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import {
  ListPlatformBranchesRequest,
  ListPlatformBranchesRequestFilterSensitiveLog,
  ListPlatformBranchesResult,
  ListPlatformBranchesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListPlatformBranchesCommand,
  serializeAws_queryListPlatformBranchesCommand,
} from "../protocols/Aws_query";

export interface ListPlatformBranchesCommandInput extends ListPlatformBranchesRequest {}
export interface ListPlatformBranchesCommandOutput extends ListPlatformBranchesResult, __MetadataBearer {}

/**
 * <p>Lists the platform branches available for your account in an AWS Region. Provides
 *       summary information about each platform branch.</p>
 *          <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ListPlatformBranchesCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ListPlatformBranchesCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ListPlatformBranchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlatformBranchesCommandInput} for command's `input` shape.
 * @see {@link ListPlatformBranchesCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class ListPlatformBranchesCommand extends $Command<
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListPlatformBranchesCommandInput) {
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
  ): Handler<ListPlatformBranchesCommandInput, ListPlatformBranchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPlatformBranchesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "ListPlatformBranchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPlatformBranchesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPlatformBranchesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPlatformBranchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListPlatformBranchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPlatformBranchesCommandOutput> {
    return deserializeAws_queryListPlatformBranchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
