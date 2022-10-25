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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  CreateDetectorRequest,
  CreateDetectorRequestFilterSensitiveLog,
  CreateDetectorResponse,
  CreateDetectorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateDetectorCommand,
  serializeAws_restJson1CreateDetectorCommand,
} from "../protocols/Aws_restJson1";

export interface CreateDetectorCommandInput extends CreateDetectorRequest {}
export interface CreateDetectorCommandOutput extends CreateDetectorResponse, __MetadataBearer {}

/**
 * <p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the
 *       GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
 *       you enable the service. You can have only one detector per account per Region. All data
 *       sources are enabled in a new detector by default.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class CreateDetectorCommand extends $Command<
  CreateDetectorCommandInput,
  CreateDetectorCommandOutput,
  GuardDutyClientResolvedConfig
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

  constructor(readonly input: CreateDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDetectorCommandInput, CreateDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "CreateDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDetectorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDetectorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDetectorCommandOutput> {
    return deserializeAws_restJson1CreateDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
