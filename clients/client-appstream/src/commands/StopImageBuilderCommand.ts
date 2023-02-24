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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  StopImageBuilderRequest,
  StopImageBuilderRequestFilterSensitiveLog,
  StopImageBuilderResult,
  StopImageBuilderResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopImageBuilderCommand,
  serializeAws_json1_1StopImageBuilderCommand,
} from "../protocols/Aws_json1_1";

export interface StopImageBuilderCommandInput extends StopImageBuilderRequest {}
export interface StopImageBuilderCommandOutput extends StopImageBuilderResult, __MetadataBearer {}

/**
 * <p>Stops the specified image builder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StopImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StopImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new StopImageBuilderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopImageBuilderCommandInput} for command's `input` shape.
 * @see {@link StopImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class StopImageBuilderCommand extends $Command<
  StopImageBuilderCommandInput,
  StopImageBuilderCommandOutput,
  AppStreamClientResolvedConfig
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

  constructor(readonly input: StopImageBuilderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopImageBuilderCommandInput, StopImageBuilderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopImageBuilderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "StopImageBuilderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopImageBuilderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopImageBuilderResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopImageBuilderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopImageBuilderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopImageBuilderCommandOutput> {
    return deserializeAws_json1_1StopImageBuilderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
