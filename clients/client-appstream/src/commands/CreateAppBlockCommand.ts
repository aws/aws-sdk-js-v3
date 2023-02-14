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
  CreateAppBlockRequest,
  CreateAppBlockRequestFilterSensitiveLog,
  CreateAppBlockResult,
  CreateAppBlockResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAppBlockCommand,
  serializeAws_json1_1CreateAppBlockCommand,
} from "../protocols/Aws_json1_1";

export interface CreateAppBlockCommandInput extends CreateAppBlockRequest {}
export interface CreateAppBlockCommandOutput extends CreateAppBlockResult, __MetadataBearer {}

/**
 * <p>Creates an app block.</p>
 *          <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the
 *             virtual hard disk in an S3 bucket. It also stores the setup script with details about
 *             how to mount the virtual hard disk. The virtual hard disk includes the application
 *             binaries and other files necessary to launch your applications. Multiple applications
 *             can be assigned to a single app block.</p>
 *          <p>This is only supported for Elastic fleets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateAppBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAppBlockCommandInput} for command's `input` shape.
 * @see {@link CreateAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class CreateAppBlockCommand extends $Command<
  CreateAppBlockCommandInput,
  CreateAppBlockCommandOutput,
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

  constructor(readonly input: CreateAppBlockCommandInput) {
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
  ): Handler<CreateAppBlockCommandInput, CreateAppBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateAppBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAppBlockRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAppBlockResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAppBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAppBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppBlockCommandOutput> {
    return deserializeAws_json1_1CreateAppBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
