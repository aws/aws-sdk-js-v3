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
  DescribeClientBrandingRequest,
  DescribeClientBrandingRequestFilterSensitiveLog,
  DescribeClientBrandingResult,
  DescribeClientBrandingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeClientBrandingCommand,
  serializeAws_json1_1DescribeClientBrandingCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface DescribeClientBrandingCommandInput extends DescribeClientBrandingRequest {}
export interface DescribeClientBrandingCommandOutput extends DescribeClientBrandingResult, __MetadataBearer {}

/**
 * <p>Describes the specified client branding. Client branding allows you to customize the log
 *          in page of various device types for your users. You can add your company logo, the support
 *          email address, support link, link to reset password, and a custom message for users trying
 *          to sign in.</p>
 *          <note>
 *             <p>Only device types that have branding information configured will be shown in the
 *             response.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeClientBrandingCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeClientBrandingCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeClientBrandingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientBrandingCommandInput} for command's `input` shape.
 * @see {@link DescribeClientBrandingCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class DescribeClientBrandingCommand extends $Command<
  DescribeClientBrandingCommandInput,
  DescribeClientBrandingCommandOutput,
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

  constructor(readonly input: DescribeClientBrandingCommandInput) {
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
  ): Handler<DescribeClientBrandingCommandInput, DescribeClientBrandingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClientBrandingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeClientBrandingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClientBrandingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeClientBrandingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClientBrandingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeClientBrandingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClientBrandingCommandOutput> {
    return deserializeAws_json1_1DescribeClientBrandingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
