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
  UpdateCloudFrontOriginAccessIdentityRequest,
  UpdateCloudFrontOriginAccessIdentityRequestFilterSensitiveLog,
  UpdateCloudFrontOriginAccessIdentityResult,
  UpdateCloudFrontOriginAccessIdentityResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand,
  serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";

export interface UpdateCloudFrontOriginAccessIdentityCommandInput extends UpdateCloudFrontOriginAccessIdentityRequest {}
export interface UpdateCloudFrontOriginAccessIdentityCommandOutput
  extends UpdateCloudFrontOriginAccessIdentityResult,
    __MetadataBearer {}

/**
 * <p>Update an origin access identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class UpdateCloudFrontOriginAccessIdentityCommand extends $Command<
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
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

  constructor(readonly input: UpdateCloudFrontOriginAccessIdentityCommandInput) {
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
  ): Handler<UpdateCloudFrontOriginAccessIdentityCommandInput, UpdateCloudFrontOriginAccessIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCloudFrontOriginAccessIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateCloudFrontOriginAccessIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCloudFrontOriginAccessIdentityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCloudFrontOriginAccessIdentityResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCloudFrontOriginAccessIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> {
    return deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
