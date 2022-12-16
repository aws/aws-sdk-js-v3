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
  CreateOriginAccessControlRequest,
  CreateOriginAccessControlRequestFilterSensitiveLog,
  CreateOriginAccessControlResult,
  CreateOriginAccessControlResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateOriginAccessControlCommand,
  serializeAws_restXmlCreateOriginAccessControlCommand,
} from "../protocols/Aws_restXml";

export interface CreateOriginAccessControlCommandInput extends CreateOriginAccessControlRequest {}
export interface CreateOriginAccessControlCommandOutput extends CreateOriginAccessControlResult, __MetadataBearer {}

/**
 * <p>Creates a new origin access control in CloudFront. After you create an origin access
 * 			control, you can add it to an origin in a CloudFront distribution so that CloudFront sends
 * 			authenticated (signed) requests to the origin.</p>
 *          <p>For an Amazon S3 origin, this makes it possible to block public access to the Amazon S3 bucket
 * 			so that viewers (users) can access the content in the bucket only through CloudFront.</p>
 *          <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Restricting access to an Amazon S3 origin</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateOriginAccessControlCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateOriginAccessControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOriginAccessControlCommandInput} for command's `input` shape.
 * @see {@link CreateOriginAccessControlCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class CreateOriginAccessControlCommand extends $Command<
  CreateOriginAccessControlCommandInput,
  CreateOriginAccessControlCommandOutput,
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

  constructor(readonly input: CreateOriginAccessControlCommandInput) {
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
  ): Handler<CreateOriginAccessControlCommandInput, CreateOriginAccessControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOriginAccessControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateOriginAccessControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOriginAccessControlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateOriginAccessControlResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOriginAccessControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateOriginAccessControlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOriginAccessControlCommandOutput> {
    return deserializeAws_restXmlCreateOriginAccessControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
