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
import { GetOriginAccessControlConfigRequest, GetOriginAccessControlConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetOriginAccessControlConfigCommand,
  serializeAws_restXmlGetOriginAccessControlConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link GetOriginAccessControlConfigCommand}.
 */
export interface GetOriginAccessControlConfigCommandInput extends GetOriginAccessControlConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginAccessControlConfigCommand}.
 */
export interface GetOriginAccessControlConfigCommandOutput
  extends GetOriginAccessControlConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a CloudFront origin access control configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginAccessControlConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginAccessControlConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetOriginAccessControlConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetOriginAccessControlConfigCommandInput - {@link GetOriginAccessControlConfigCommandInput}
 * @returns {@link GetOriginAccessControlConfigCommandOutput}
 * @see {@link GetOriginAccessControlConfigCommandInput} for command's `input` shape.
 * @see {@link GetOriginAccessControlConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchOriginAccessControl} (client fault)
 *  <p>The origin access control does not exist.</p>
 *
 *
 */
export class GetOriginAccessControlConfigCommand extends $Command<
  GetOriginAccessControlConfigCommandInput,
  GetOriginAccessControlConfigCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetOriginAccessControlConfigCommandInput) {
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
  ): Handler<GetOriginAccessControlConfigCommandInput, GetOriginAccessControlConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOriginAccessControlConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetOriginAccessControlConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetOriginAccessControlConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetOriginAccessControlConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOriginAccessControlConfigCommandOutput> {
    return deserializeAws_restXmlGetOriginAccessControlConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
