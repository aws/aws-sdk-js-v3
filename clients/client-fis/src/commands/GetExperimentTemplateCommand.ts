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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import {
  GetExperimentTemplateRequest,
  GetExperimentTemplateRequestFilterSensitiveLog,
  GetExperimentTemplateResponse,
  GetExperimentTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetExperimentTemplateCommand,
  serializeAws_restJson1GetExperimentTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface GetExperimentTemplateCommandInput extends GetExperimentTemplateRequest {}
export interface GetExperimentTemplateCommandOutput extends GetExperimentTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link GetExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 */
export class GetExperimentTemplateCommand extends $Command<
  GetExperimentTemplateCommandInput,
  GetExperimentTemplateCommandOutput,
  FisClientResolvedConfig
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

  constructor(readonly input: GetExperimentTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExperimentTemplateCommandInput, GetExperimentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExperimentTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "GetExperimentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExperimentTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetExperimentTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExperimentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExperimentTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExperimentTemplateCommandOutput> {
    return deserializeAws_restJson1GetExperimentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
