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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeleteLaunchTemplateVersionsRequest,
  DeleteLaunchTemplateVersionsRequestFilterSensitiveLog,
  DeleteLaunchTemplateVersionsResult,
  DeleteLaunchTemplateVersionsResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteLaunchTemplateVersionsCommand,
  serializeAws_ec2DeleteLaunchTemplateVersionsCommand,
} from "../protocols/Aws_ec2";

export interface DeleteLaunchTemplateVersionsCommandInput extends DeleteLaunchTemplateVersionsRequest {}
export interface DeleteLaunchTemplateVersionsCommandOutput
  extends DeleteLaunchTemplateVersionsResult,
    __MetadataBearer {}

/**
 * <p>Deletes one or more versions of a launch template. You cannot delete the default
 *             version of a launch template; you must first assign a different version as the default.
 *             If the default version is the only version for the launch template, you must delete the
 *             entire launch template using <a>DeleteLaunchTemplate</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLaunchTemplateVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLaunchTemplateVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteLaunchTemplateVersionsCommand extends $Command<
  DeleteLaunchTemplateVersionsCommandInput,
  DeleteLaunchTemplateVersionsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DeleteLaunchTemplateVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLaunchTemplateVersionsCommandInput, DeleteLaunchTemplateVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteLaunchTemplateVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteLaunchTemplateVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLaunchTemplateVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLaunchTemplateVersionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLaunchTemplateVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteLaunchTemplateVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLaunchTemplateVersionsCommandOutput> {
    return deserializeAws_ec2DeleteLaunchTemplateVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
