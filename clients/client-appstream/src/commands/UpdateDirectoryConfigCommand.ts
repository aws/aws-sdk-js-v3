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
  UpdateDirectoryConfigRequest,
  UpdateDirectoryConfigRequestFilterSensitiveLog,
  UpdateDirectoryConfigResult,
  UpdateDirectoryConfigResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDirectoryConfigCommand,
  serializeAws_json1_1UpdateDirectoryConfigCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateDirectoryConfigCommandInput extends UpdateDirectoryConfigRequest {}
export interface UpdateDirectoryConfigCommandOutput extends UpdateDirectoryConfigResult, __MetadataBearer {}

/**
 * <p>Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new UpdateDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class UpdateDirectoryConfigCommand extends $Command<
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
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

  constructor(readonly input: UpdateDirectoryConfigCommandInput) {
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
  ): Handler<UpdateDirectoryConfigCommandInput, UpdateDirectoryConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDirectoryConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "UpdateDirectoryConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDirectoryConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDirectoryConfigResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDirectoryConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDirectoryConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDirectoryConfigCommandOutput> {
    return deserializeAws_json1_1UpdateDirectoryConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
