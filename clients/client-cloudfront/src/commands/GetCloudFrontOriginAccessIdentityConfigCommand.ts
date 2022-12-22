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
  GetCloudFrontOriginAccessIdentityConfigRequest,
  GetCloudFrontOriginAccessIdentityConfigRequestFilterSensitiveLog,
  GetCloudFrontOriginAccessIdentityConfigResult,
  GetCloudFrontOriginAccessIdentityConfigResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand,
  serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand,
} from "../protocols/Aws_restXml";

export interface GetCloudFrontOriginAccessIdentityConfigCommandInput
  extends GetCloudFrontOriginAccessIdentityConfigRequest {}
export interface GetCloudFrontOriginAccessIdentityConfigCommandOutput
  extends GetCloudFrontOriginAccessIdentityConfigResult,
    __MetadataBearer {}

/**
 * <p>Get the configuration information about an origin access identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCloudFrontOriginAccessIdentityConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCloudFrontOriginAccessIdentityConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetCloudFrontOriginAccessIdentityConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCloudFrontOriginAccessIdentityConfigCommandInput} for command's `input` shape.
 * @see {@link GetCloudFrontOriginAccessIdentityConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class GetCloudFrontOriginAccessIdentityConfigCommand extends $Command<
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput,
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

  constructor(readonly input: GetCloudFrontOriginAccessIdentityConfigCommandInput) {
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
  ): Handler<
    GetCloudFrontOriginAccessIdentityConfigCommandInput,
    GetCloudFrontOriginAccessIdentityConfigCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetCloudFrontOriginAccessIdentityConfigCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetCloudFrontOriginAccessIdentityConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCloudFrontOriginAccessIdentityConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCloudFrontOriginAccessIdentityConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput> {
    return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
