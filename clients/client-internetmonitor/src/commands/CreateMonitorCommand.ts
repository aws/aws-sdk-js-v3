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

import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import {
  CreateMonitorInput,
  CreateMonitorInputFilterSensitiveLog,
  CreateMonitorOutput,
  CreateMonitorOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMonitorCommand,
  serializeAws_restJson1CreateMonitorCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandInput extends CreateMonitorInput {}
/**
 * The output of {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandOutput extends CreateMonitorOutput, __MetadataBearer {}

/**
 * <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Virtual Private Clouds (VPCs),
 * 			Amazon CloudFront distributions, and WorkSpaces directories. </p>
 *          <p>After you create a monitor, you can view the internet performance for your application, scoped to a location, as well as any health events that are
 * 			impairing traffic. Internet Monitor can also diagnose whether the impairment is on the Amazon Web Services network or is an issue with an internet service provider (ISP).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, CreateMonitorCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, CreateMonitorCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const command = new CreateMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateMonitorCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 *
 */
export class CreateMonitorCommand extends $Command<
  CreateMonitorCommandInput,
  CreateMonitorCommandOutput,
  InternetMonitorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: CreateMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InternetMonitorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMonitorCommandInput, CreateMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateMonitorCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InternetMonitorClient";
    const commandName = "CreateMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMonitorInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMonitorOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMonitorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMonitorCommandOutput> {
    return deserializeAws_restJson1CreateMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
