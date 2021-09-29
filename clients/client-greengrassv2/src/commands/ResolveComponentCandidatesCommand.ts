import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ResolveComponentCandidatesRequest, ResolveComponentCandidatesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ResolveComponentCandidatesCommand,
  serializeAws_restJson1ResolveComponentCandidatesCommand,
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

export interface ResolveComponentCandidatesCommandInput extends ResolveComponentCandidatesRequest {}
export interface ResolveComponentCandidatesCommandOutput extends ResolveComponentCandidatesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of components that meet the component, version, and platform requirements
 *       of a deployment. Greengrass core devices call this operation when they receive a deployment to
 *       identify the components to install.</p>
 *          <p>This operation identifies components that meet all dependency requirements for a
 *       deployment. If the requirements conflict, then this operation returns an error and the
 *       deployment fails. For example, this occurs if component <code>A</code> requires version
 *         <code>>2.0.0</code> and component <code>B</code> requires version <code><2.0.0</code>
 *       of a component dependency.</p>
 *          <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's
 *       digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't
 *       match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p>
 *          <important>
 *             <p>To use this operation, you must use the data plane API endpoint and authenticate with an
 *         IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ResolveComponentCandidatesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ResolveComponentCandidatesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ResolveComponentCandidatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveComponentCandidatesCommandInput} for command's `input` shape.
 * @see {@link ResolveComponentCandidatesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResolveComponentCandidatesCommand extends $Command<
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResolveComponentCandidatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResolveComponentCandidatesCommandInput, ResolveComponentCandidatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ResolveComponentCandidatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResolveComponentCandidatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResolveComponentCandidatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResolveComponentCandidatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ResolveComponentCandidatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResolveComponentCandidatesCommandOutput> {
    return deserializeAws_restJson1ResolveComponentCandidatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
