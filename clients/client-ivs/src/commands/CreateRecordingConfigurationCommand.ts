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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import {
  CreateRecordingConfigurationRequest,
  CreateRecordingConfigurationRequestFilterSensitiveLog,
  CreateRecordingConfigurationResponse,
  CreateRecordingConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateRecordingConfigurationCommand,
  serializeAws_restJson1CreateRecordingConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface CreateRecordingConfigurationCommandInput extends CreateRecordingConfigurationRequest {}
export interface CreateRecordingConfigurationCommandOutput
  extends CreateRecordingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p>
 *          <p>
 *             <b>Known issue:</b> In the us-east-1 region, if you use the
 *         Amazon Web Services CLI to create a recording configuration, it returns success even if the
 *       S3 bucket is in a different region. In this case, the <code>state</code> of the recording
 *       configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other
 *       regions, the CLI correctly returns failure if the bucket is in a different region.)</p>
 *          <p>
 *             <b>Workaround:</b> Ensure that your S3 bucket is in the same
 *       region as the recording configuration. If you create a recording configuration in a different
 *       region as your S3 bucket, delete that recording configuration and create a new one with an S3
 *       bucket from the correct region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreateRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreateRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new CreateRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 */
export class CreateRecordingConfigurationCommand extends $Command<
  CreateRecordingConfigurationCommandInput,
  CreateRecordingConfigurationCommandOutput,
  IvsClientResolvedConfig
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

  constructor(readonly input: CreateRecordingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRecordingConfigurationCommandInput, CreateRecordingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRecordingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "CreateRecordingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRecordingConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRecordingConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRecordingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRecordingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRecordingConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateRecordingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
