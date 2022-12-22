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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  CreateStreamingDistributionWithTagsRequest,
  CreateStreamingDistributionWithTagsRequestFilterSensitiveLog,
  CreateStreamingDistributionWithTagsResult,
  CreateStreamingDistributionWithTagsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand,
  serializeAws_restXmlCreateStreamingDistributionWithTagsCommand,
} from "../protocols/Aws_restXml";

export interface CreateStreamingDistributionWithTagsCommandInput extends CreateStreamingDistributionWithTagsRequest {}
export interface CreateStreamingDistributionWithTagsCommandOutput
  extends CreateStreamingDistributionWithTagsResult,
    __MetadataBearer {}

/**
 * <p>This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP)
 * 			distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion
 * 			forum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateStreamingDistributionWithTagsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateStreamingDistributionWithTagsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateStreamingDistributionWithTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingDistributionWithTagsCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingDistributionWithTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class CreateStreamingDistributionWithTagsCommand extends $Command<
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: CreateStreamingDistributionWithTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStreamingDistributionWithTagsCommandInput, CreateStreamingDistributionWithTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStreamingDistributionWithTagsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateStreamingDistributionWithTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamingDistributionWithTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingDistributionWithTagsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateStreamingDistributionWithTagsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateStreamingDistributionWithTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput> {
    return deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
