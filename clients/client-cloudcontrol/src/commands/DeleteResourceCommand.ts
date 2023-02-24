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
  DeleteResourceInput,
  DeleteResourceInputFilterSensitiveLog,
  DeleteResourceOutput,
  DeleteResourceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DeleteResourceCommand,
  serializeAws_json1_0DeleteResourceCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteResourceCommandInput extends DeleteResourceInput {}
export interface DeleteResourceCommandOutput extends DeleteResourceOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html">Deleting a
 *         resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 *          <p>After you have initiated a resource deletion request, you can monitor the progress of your
 *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
 *         <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, DeleteResourceCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, DeleteResourceCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * const client = new CloudControlClient(config);
 * const command = new DeleteResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 */
export class DeleteResourceCommand extends $Command<
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
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

  constructor(readonly input: DeleteResourceCommandInput) {
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
  ): Handler<DeleteResourceCommandInput, DeleteResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudControlClient";
    const commandName = "DeleteResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteResourceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourceCommandOutput> {
    return deserializeAws_json1_0DeleteResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
