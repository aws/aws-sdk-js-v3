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
  GetResourceInput,
  GetResourceInputFilterSensitiveLog,
  GetResourceOutput,
  GetResourceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetResourceCommand,
  serializeAws_json1_0GetResourceCommand,
} from "../protocols/Aws_json1_0";

export interface GetResourceCommandInput extends GetResourceInput {}
export interface GetResourceCommandOutput extends GetResourceOutput, __MetadataBearer {}

/**
 * <p>Returns information about the current state of the specified resource. For details, see
 *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html">Reading a resource's current state</a>.</p>
 *          <p>You can use this action to return information about an existing resource in your account
 *       and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, GetResourceCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, GetResourceCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * const client = new CloudControlClient(config);
 * const command = new GetResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceCommandInput} for command's `input` shape.
 * @see {@link GetResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 */
export class GetResourceCommand extends $Command<
  GetResourceCommandInput,
  GetResourceCommandOutput,
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

  constructor(readonly input: GetResourceCommandInput) {
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
  ): Handler<GetResourceCommandInput, GetResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetResourceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudControlClient";
    const commandName = "GetResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceCommandOutput> {
    return deserializeAws_json1_0GetResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
