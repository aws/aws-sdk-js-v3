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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  DeleteTrafficDistributionGroupRequest,
  DeleteTrafficDistributionGroupRequestFilterSensitiveLog,
  DeleteTrafficDistributionGroupResponse,
  DeleteTrafficDistributionGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTrafficDistributionGroupCommand,
  serializeAws_restJson1DeleteTrafficDistributionGroupCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteTrafficDistributionGroupCommandInput extends DeleteTrafficDistributionGroupRequest {}
export interface DeleteTrafficDistributionGroupCommandOutput
  extends DeleteTrafficDistributionGroupResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is
 *    created.</p>
 *          <p>For more information about deleting traffic distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/delete-traffic-distribution-groups.html">Delete traffic distribution groups</a> in
 *    the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteTrafficDistributionGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteTrafficDistributionGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteTrafficDistributionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficDistributionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficDistributionGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class DeleteTrafficDistributionGroupCommand extends $Command<
  DeleteTrafficDistributionGroupCommandInput,
  DeleteTrafficDistributionGroupCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: DeleteTrafficDistributionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTrafficDistributionGroupCommandInput, DeleteTrafficDistributionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTrafficDistributionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DeleteTrafficDistributionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficDistributionGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficDistributionGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteTrafficDistributionGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteTrafficDistributionGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficDistributionGroupCommandOutput> {
    return deserializeAws_restJson1DeleteTrafficDistributionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
