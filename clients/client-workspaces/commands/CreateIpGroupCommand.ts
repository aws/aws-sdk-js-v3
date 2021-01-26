import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CreateIpGroupRequest, CreateIpGroupResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateIpGroupCommand,
  serializeAws_json1_1CreateIpGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateIpGroupCommandInput = CreateIpGroupRequest;
export type CreateIpGroupCommandOutput = CreateIpGroupResult & __MetadataBearer;

/**
 * <p>Creates an IP access control group.</p>
 *          <p>An IP access control group provides you with the ability to control the IP addresses
 *          from which users are allowed to access their WorkSpaces. To specify the CIDR address
 *          ranges, add rules to your IP access control group and then associate the group with your
 *          directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p>
 *
 *          <p>There is a default IP access control group associated with your directory. If you don't
 *          associate an IP access control group with your directory, the default group is used. The
 *          default group includes a default rule that allows users to access their WorkSpaces from
 *          anywhere. You cannot modify the default IP access control group for your directory.</p>
 */
export class CreateIpGroupCommand extends $Command<
  CreateIpGroupCommandInput,
  CreateIpGroupCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateIpGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIpGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateIpGroupResult.filterSensitiveLog,
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
