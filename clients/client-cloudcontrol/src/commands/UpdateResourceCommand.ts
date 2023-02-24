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

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import {
  UpdateResourceInput,
  UpdateResourceInputFilterSensitiveLog,
  UpdateResourceOutput,
  UpdateResourceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateResourceCommand,
  serializeAws_json1_0UpdateResourceCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateResourceCommandInput extends UpdateResourceInput {}
export interface UpdateResourceCommandOutput extends UpdateResourceOutput, __MetadataBearer {}

/**
 * <p>Updates the specified property values in the resource.</p>
 *          <p>You specify your resource property updates as a list of patch operations contained in a
 *       JSON patch document that adheres to the <a href="https://datatracker.ietf.org/doc/html/rfc6902">
 *                <i>RFC 6902 - JavaScript Object
 *           Notation (JSON) Patch</i>
 *             </a> standard.</p>
 *          <p>For details on how Cloud Control API performs resource update operations, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html">Updating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 *          <p>After you have initiated a resource update request, you can monitor the progress of your
 *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
 *         <code>ProgressEvent</code> returned by <code>UpdateResource</code>.</p>
 *          <p>For more information about the properties of a specific resource, refer to the related
 *       topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, UpdateResourceCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, UpdateResourceCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * const client = new CloudControlClient(config);
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 */
export class UpdateResourceCommand extends $Command<
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
  CloudControlClientResolvedConfig
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

  constructor(readonly input: UpdateResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResourceCommandInput, UpdateResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudControlClient";
    const commandName = "UpdateResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceCommandOutput> {
    return deserializeAws_json1_0UpdateResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
