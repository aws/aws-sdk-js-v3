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
  UpdateServiceInstanceInput,
  UpdateServiceInstanceInputFilterSensitiveLog,
  UpdateServiceInstanceOutput,
  UpdateServiceInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateServiceInstanceCommand,
  serializeAws_json1_0UpdateServiceInstanceCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface UpdateServiceInstanceCommandInput extends UpdateServiceInstanceInput {}
export interface UpdateServiceInstanceCommandOutput extends UpdateServiceInstanceOutput, __MetadataBearer {}

/**
 * <p>Update a service instance.</p>
 *          <p>There are a few modes for updating a service instance. The <code>deploymentType</code> field defines the mode.</p>
 *          <note>
 *             <p>You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is
 *         <code>IN_PROGRESS</code>.</p>
 *             <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceInstanceCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceInstanceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new UpdateServiceInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceInstanceCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class UpdateServiceInstanceCommand extends $Command<
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: UpdateServiceInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServiceInstanceCommandInput, UpdateServiceInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServiceInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "UpdateServiceInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceInstanceInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceInstanceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateServiceInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceInstanceCommandOutput> {
    return deserializeAws_json1_0UpdateServiceInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
