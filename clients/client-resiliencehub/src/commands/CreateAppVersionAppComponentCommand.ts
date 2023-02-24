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
  CreateAppVersionAppComponentRequest,
  CreateAppVersionAppComponentRequestFilterSensitiveLog,
  CreateAppVersionAppComponentResponse,
  CreateAppVersionAppComponentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateAppVersionAppComponentCommand,
  serializeAws_restJson1CreateAppVersionAppComponentCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface CreateAppVersionAppComponentCommandInput extends CreateAppVersionAppComponentRequest {}
export interface CreateAppVersionAppComponentCommandOutput
  extends CreateAppVersionAppComponentResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new Application Component in the AWS Resilience Hub application.</p>
 *          <note>
 *             <p>This API updates the AWS Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the AWS Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, CreateAppVersionAppComponentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, CreateAppVersionAppComponentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new CreateAppVersionAppComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppVersionAppComponentCommandInput} for command's `input` shape.
 * @see {@link CreateAppVersionAppComponentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class CreateAppVersionAppComponentCommand extends $Command<
  CreateAppVersionAppComponentCommandInput,
  CreateAppVersionAppComponentCommandOutput,
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

  constructor(readonly input: CreateAppVersionAppComponentCommandInput) {
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
  ): Handler<CreateAppVersionAppComponentCommandInput, CreateAppVersionAppComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppVersionAppComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "CreateAppVersionAppComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppVersionAppComponentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAppVersionAppComponentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAppVersionAppComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAppVersionAppComponentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAppVersionAppComponentCommandOutput> {
    return deserializeAws_restJson1CreateAppVersionAppComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
