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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  DeleteTestGridProjectRequest,
  DeleteTestGridProjectRequestFilterSensitiveLog,
  DeleteTestGridProjectResult,
  DeleteTestGridProjectResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteTestGridProjectCommand,
  serializeAws_json1_1DeleteTestGridProjectCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteTestGridProjectCommandInput extends DeleteTestGridProjectRequest {}
export interface DeleteTestGridProjectCommandOutput extends DeleteTestGridProjectResult, __MetadataBearer {}

/**
 * <p> Deletes a Selenium testing project and all content generated under it. </p>
 *          <important>
 *             <p>You cannot undo this operation.</p>
 *          </important>
 *          <note>
 *             <p>You cannot delete a project if it has active sessions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteTestGridProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class DeleteTestGridProjectCommand extends $Command<
  DeleteTestGridProjectCommandInput,
  DeleteTestGridProjectCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: DeleteTestGridProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTestGridProjectCommandInput, DeleteTestGridProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTestGridProjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "DeleteTestGridProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTestGridProjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTestGridProjectResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTestGridProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTestGridProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTestGridProjectCommandOutput> {
    return deserializeAws_json1_1DeleteTestGridProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
