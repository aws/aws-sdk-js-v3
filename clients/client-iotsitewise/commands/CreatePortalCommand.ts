import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreatePortalRequest, CreatePortalResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreatePortalCommand,
  serializeAws_restJson1CreatePortalCommand,
} from "../protocols/Aws_restJson1";
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

export type CreatePortalCommandInput = CreatePortalRequest;
export type CreatePortalCommandOutput = CreatePortalResponse & __MetadataBearer;

/**
 * <p>Creates a portal, which can contain projects and dashboards. AWS IoT SiteWise Monitor uses AWS SSO or IAM
 *       to authenticate portal users and manage user permissions.</p>
 *          <note>
 *             <p>Before you can sign in to a new portal, you must add at least one identity to that
 *         portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal
 *           administrators</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 *          </note>
 */
export class CreatePortalCommand extends $Command<
  CreatePortalCommandInput,
  CreatePortalCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePortalCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePortalCommandInput, CreatePortalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "CreatePortalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePortalRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePortalResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePortalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePortalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePortalCommandOutput> {
    return deserializeAws_restJson1CreatePortalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
