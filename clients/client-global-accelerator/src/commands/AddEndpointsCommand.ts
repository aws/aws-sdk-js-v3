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
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  AddEndpointsRequest,
  AddEndpointsRequestFilterSensitiveLog,
  AddEndpointsResponse,
  AddEndpointsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddEndpointsCommand,
  serializeAws_json1_1AddEndpointsCommand,
} from "../protocols/Aws_json1_1";

export interface AddEndpointsCommandInput extends AddEndpointsRequest {}
export interface AddEndpointsCommandOutput extends AddEndpointsResponse, __MetadataBearer {}

/**
 * <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The
 * 			alternative options are to add endpoints when you create an endpoint group (with the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API)
 * 			or when you update an endpoint group (with the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p>
 * 		       <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p>
 * 			      <ul>
 *             <li>
 *                <p>It's faster, because Global Accelerator only has to resolve the new endpoints that
 * 					you're adding.</p>
 *             </li>
 *             <li>
 *                <p>It's more convenient, because you don't need to specify all of the current
 * 					endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AddEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AddEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new AddEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddEndpointsCommandInput} for command's `input` shape.
 * @see {@link AddEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class AddEndpointsCommand extends $Command<
  AddEndpointsCommandInput,
  AddEndpointsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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

  constructor(readonly input: AddEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddEndpointsCommandInput, AddEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AddEndpointsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "AddEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddEndpointsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddEndpointsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddEndpointsCommandOutput> {
    return deserializeAws_json1_1AddEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
