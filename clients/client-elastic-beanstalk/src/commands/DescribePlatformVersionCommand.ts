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
  DescribePlatformVersionRequest,
  DescribePlatformVersionRequestFilterSensitiveLog,
  DescribePlatformVersionResult,
  DescribePlatformVersionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribePlatformVersionCommand,
  serializeAws_queryDescribePlatformVersionCommand,
} from "../protocols/Aws_query";

export interface DescribePlatformVersionCommandInput extends DescribePlatformVersionRequest {}
export interface DescribePlatformVersionCommandOutput extends DescribePlatformVersionResult, __MetadataBearer {}

/**
 * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of
 *       platform versions.</p>
 *          <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk
 *         Platforms Glossary</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribePlatformVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribePlatformVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribePlatformVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlatformVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePlatformVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class DescribePlatformVersionCommand extends $Command<
  DescribePlatformVersionCommandInput,
  DescribePlatformVersionCommandOutput,
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

  constructor(readonly input: DescribePlatformVersionCommandInput) {
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
  ): Handler<DescribePlatformVersionCommandInput, DescribePlatformVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePlatformVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribePlatformVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePlatformVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePlatformVersionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePlatformVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribePlatformVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlatformVersionCommandOutput> {
    return deserializeAws_queryDescribePlatformVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
