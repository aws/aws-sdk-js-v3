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
  CreateIpGroupRequest,
  CreateIpGroupRequestFilterSensitiveLog,
  CreateIpGroupResult,
  CreateIpGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateIpGroupCommand,
  serializeAws_json1_1CreateIpGroupCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface CreateIpGroupCommandInput extends CreateIpGroupRequest {}
export interface CreateIpGroupCommandOutput extends CreateIpGroupResult, __MetadataBearer {}

/**
 * <p>Creates an IP access control group.</p>
 *          <p>An IP access control group provides you with the ability to control the IP addresses
 *          from which users are allowed to access their WorkSpaces. To specify the CIDR address
 *          ranges, add rules to your IP access control group and then associate the group with your
 *          directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p>
 *          <p>There is a default IP access control group associated with your directory. If you don't
 *          associate an IP access control group with your directory, the default group is used. The
 *          default group includes a default rule that allows users to access their WorkSpaces from
 *          anywhere. You cannot modify the default IP access control group for your directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateIpGroupCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateIpGroupCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateIpGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIpGroupCommandInput} for command's `input` shape.
 * @see {@link CreateIpGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class CreateIpGroupCommand extends $Command<
  CreateIpGroupCommandInput,
  CreateIpGroupCommandOutput,
  WorkSpacesClientResolvedConfig
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

  constructor(readonly input: CreateIpGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIpGroupCommandInput, CreateIpGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateIpGroupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateIpGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIpGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateIpGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIpGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateIpGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIpGroupCommandOutput> {
    return deserializeAws_json1_1CreateIpGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
