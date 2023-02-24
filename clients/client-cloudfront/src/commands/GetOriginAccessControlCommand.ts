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
  GetOriginAccessControlRequest,
  GetOriginAccessControlRequestFilterSensitiveLog,
  GetOriginAccessControlResult,
  GetOriginAccessControlResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetOriginAccessControlCommand,
  serializeAws_restXmlGetOriginAccessControlCommand,
} from "../protocols/Aws_restXml";

export interface GetOriginAccessControlCommandInput extends GetOriginAccessControlRequest {}
export interface GetOriginAccessControlCommandOutput extends GetOriginAccessControlResult, __MetadataBearer {}

/**
 * <p>Gets a CloudFront origin access control, including its unique identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginAccessControlCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetOriginAccessControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOriginAccessControlCommandInput} for command's `input` shape.
 * @see {@link GetOriginAccessControlCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class GetOriginAccessControlCommand extends $Command<
  GetOriginAccessControlCommandInput,
  GetOriginAccessControlCommandOutput,
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

  constructor(readonly input: GetOriginAccessControlCommandInput) {
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
  ): Handler<GetOriginAccessControlCommandInput, GetOriginAccessControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOriginAccessControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetOriginAccessControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOriginAccessControlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetOriginAccessControlResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOriginAccessControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetOriginAccessControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOriginAccessControlCommandOutput> {
    return deserializeAws_restXmlGetOriginAccessControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
