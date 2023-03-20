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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { UpdateAlertRequest, UpdateAlertResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAlertCommand,
  serializeAws_restJson1UpdateAlertCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateAlertCommand}.
 */
export interface UpdateAlertCommandInput extends UpdateAlertRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAlertCommand}.
 */
export interface UpdateAlertCommandOutput extends UpdateAlertResponse, __MetadataBearer {}

/**
 * @public
 * <p>Make changes to an existing alert.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, UpdateAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, UpdateAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new UpdateAlertCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateAlertCommandInput - {@link UpdateAlertCommandInput}
 * @returns {@link UpdateAlertCommandOutput}
 * @see {@link UpdateAlertCommandInput} for command's `input` shape.
 * @see {@link UpdateAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 *
 */
export class UpdateAlertCommand extends $Command<
  UpdateAlertCommandInput,
  UpdateAlertCommandOutput,
  LookoutMetricsClientResolvedConfig
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
  constructor(readonly input: UpdateAlertCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAlertCommandInput, UpdateAlertCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateAlertCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "UpdateAlertCommand";
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
  private serialize(input: UpdateAlertCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAlertCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAlertCommandOutput> {
    return deserializeAws_restJson1UpdateAlertCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
