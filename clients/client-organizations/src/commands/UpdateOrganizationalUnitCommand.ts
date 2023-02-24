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
  UpdateOrganizationalUnitRequest,
  UpdateOrganizationalUnitRequestFilterSensitiveLog,
  UpdateOrganizationalUnitResponse,
  UpdateOrganizationalUnitResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1UpdateOrganizationalUnitCommand,
  serializeAws_json1_1UpdateOrganizationalUnitCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateOrganizationalUnitCommandInput extends UpdateOrganizationalUnitRequest {}
export interface UpdateOrganizationalUnitCommandOutput extends UpdateOrganizationalUnitResponse, __MetadataBearer {}

/**
 * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child
 *             OUs and accounts remain in place, and any attached policies of the OU remain
 *             attached.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, UpdateOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, UpdateOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new UpdateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class UpdateOrganizationalUnitCommand extends $Command<
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: UpdateOrganizationalUnitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOrganizationalUnitCommandInput, UpdateOrganizationalUnitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateOrganizationalUnitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "UpdateOrganizationalUnitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateOrganizationalUnitRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateOrganizationalUnitResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateOrganizationalUnitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateOrganizationalUnitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateOrganizationalUnitCommandOutput> {
    return deserializeAws_json1_1UpdateOrganizationalUnitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
