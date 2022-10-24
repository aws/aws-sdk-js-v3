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
  CreateDirectoryConfigRequest,
  CreateDirectoryConfigRequestFilterSensitiveLog,
  CreateDirectoryConfigResult,
  CreateDirectoryConfigResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDirectoryConfigCommand,
  serializeAws_json1_1CreateDirectoryConfigCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDirectoryConfigCommandInput extends CreateDirectoryConfigRequest {}
export interface CreateDirectoryConfigCommandOutput extends CreateDirectoryConfigResult, __MetadataBearer {}

/**
 * <p>Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CreateDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class CreateDirectoryConfigCommand extends $Command<
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
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

  constructor(readonly input: CreateDirectoryConfigCommandInput) {
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
  ): Handler<CreateDirectoryConfigCommandInput, CreateDirectoryConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDirectoryConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateDirectoryConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDirectoryConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectoryConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDirectoryConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDirectoryConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDirectoryConfigCommandOutput> {
    return deserializeAws_json1_1CreateDirectoryConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
