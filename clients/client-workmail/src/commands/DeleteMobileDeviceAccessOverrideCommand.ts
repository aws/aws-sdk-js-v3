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

import {
  DeleteMobileDeviceAccessOverrideRequest,
  DeleteMobileDeviceAccessOverrideRequestFilterSensitiveLog,
  DeleteMobileDeviceAccessOverrideResponse,
  DeleteMobileDeviceAccessOverrideResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteMobileDeviceAccessOverrideCommand,
  serializeAws_json1_1DeleteMobileDeviceAccessOverrideCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface DeleteMobileDeviceAccessOverrideCommandInput extends DeleteMobileDeviceAccessOverrideRequest {}
export interface DeleteMobileDeviceAccessOverrideCommandOutput
  extends DeleteMobileDeviceAccessOverrideResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p>
 *          <note>
 *             <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteMobileDeviceAccessOverrideCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteMobileDeviceAccessOverrideCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeleteMobileDeviceAccessOverrideCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMobileDeviceAccessOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteMobileDeviceAccessOverrideCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class DeleteMobileDeviceAccessOverrideCommand extends $Command<
  DeleteMobileDeviceAccessOverrideCommandInput,
  DeleteMobileDeviceAccessOverrideCommandOutput,
  WorkMailClientResolvedConfig
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

  constructor(readonly input: DeleteMobileDeviceAccessOverrideCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMobileDeviceAccessOverrideCommandInput, DeleteMobileDeviceAccessOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMobileDeviceAccessOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "DeleteMobileDeviceAccessOverrideCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMobileDeviceAccessOverrideRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteMobileDeviceAccessOverrideResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteMobileDeviceAccessOverrideCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMobileDeviceAccessOverrideCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteMobileDeviceAccessOverrideCommandOutput> {
    return deserializeAws_json1_1DeleteMobileDeviceAccessOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
