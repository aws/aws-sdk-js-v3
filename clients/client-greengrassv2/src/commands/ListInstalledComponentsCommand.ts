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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  ListInstalledComponentsRequest,
  ListInstalledComponentsRequestFilterSensitiveLog,
  ListInstalledComponentsResponse,
  ListInstalledComponentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListInstalledComponentsCommand,
  serializeAws_restJson1ListInstalledComponentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListInstalledComponentsCommandInput extends ListInstalledComponentsRequest {}
export interface ListInstalledComponentsCommandOutput extends ListInstalledComponentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of the components that a Greengrass core device runs. By default,
 *       this list doesn't include components that are deployed as dependencies of other components. To
 *       include dependencies in the response, set the <code>topologyFilter</code> parameter to
 *         <code>ALL</code>.</p>
 *          <note>
 *             <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core
 *         software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then
 *         the reported status of that device might not reflect its current status. The status timestamp
 *         indicates when the device status was last updated.</p>
 *             <p>Core devices send status updates at the following times:</p>
 *             <ul>
 *                <li>
 *                   <p>When the IoT Greengrass Core software starts</p>
 *                </li>
 *                <li>
 *                   <p>When the core device receives a deployment from the Amazon Web Services Cloud</p>
 *                </li>
 *                <li>
 *                   <p>When the status of any component on the core device becomes <code>BROKEN</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p>
 *                </li>
 *                <li>
 *                   <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and
 *             cloud deployment</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListInstalledComponentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListInstalledComponentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListInstalledComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstalledComponentsCommandInput} for command's `input` shape.
 * @see {@link ListInstalledComponentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 */
export class ListInstalledComponentsCommand extends $Command<
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
  GreengrassV2ClientResolvedConfig
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

  constructor(readonly input: ListInstalledComponentsCommandInput) {
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
  ): Handler<ListInstalledComponentsCommandInput, ListInstalledComponentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstalledComponentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ListInstalledComponentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstalledComponentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInstalledComponentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstalledComponentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstalledComponentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstalledComponentsCommandOutput> {
    return deserializeAws_restJson1ListInstalledComponentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
