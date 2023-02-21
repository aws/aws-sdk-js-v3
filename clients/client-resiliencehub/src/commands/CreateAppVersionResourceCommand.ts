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

import {
  CreateAppVersionResourceRequest,
  CreateAppVersionResourceRequestFilterSensitiveLog,
  CreateAppVersionResourceResponse,
  CreateAppVersionResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateAppVersionResourceCommand,
  serializeAws_restJson1CreateAppVersionResourceCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface CreateAppVersionResourceCommandInput extends CreateAppVersionResourceRequest {}
export interface CreateAppVersionResourceCommandOutput extends CreateAppVersionResourceResponse, __MetadataBearer {}

/**
 * <p>Adds a resource to the AWS Resilience Hub applicationand assigns it to the specified
 *       Application Components. If you specify a new Application Component, AWS Resilience Hub will automatically
 *       create the Application Component.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This action has no effect outside AWS Resilience Hub.</p>
 *                </li>
 *                <li>
 *                   <p>This API updates the AWS Resilience Hub application draft version. To use this resource
 *             for running resiliency assessments, you must publish the AWS Resilience Hub application using
 *             the <code>PublishAppVersion</code> API.</p>
 *                </li>
 *                <li>
 *                   <p>To update application version with new <code>physicalResourceID</code>, you must
 *             call <code>ResolveAppVersionResources</code> API.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, CreateAppVersionResourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, CreateAppVersionResourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new CreateAppVersionResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppVersionResourceCommandInput} for command's `input` shape.
 * @see {@link CreateAppVersionResourceCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class CreateAppVersionResourceCommand extends $Command<
  CreateAppVersionResourceCommandInput,
  CreateAppVersionResourceCommandOutput,
  ResiliencehubClientResolvedConfig
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

  constructor(readonly input: CreateAppVersionResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppVersionResourceCommandInput, CreateAppVersionResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppVersionResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "CreateAppVersionResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppVersionResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAppVersionResourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAppVersionResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAppVersionResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppVersionResourceCommandOutput> {
    return deserializeAws_restJson1CreateAppVersionResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
