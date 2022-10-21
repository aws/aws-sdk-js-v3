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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  ListInstanceFleetsInput,
  ListInstanceFleetsInputFilterSensitiveLog,
  ListInstanceFleetsOutput,
  ListInstanceFleetsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListInstanceFleetsCommand,
  serializeAws_json1_1ListInstanceFleetsCommand,
} from "../protocols/Aws_json1_1";

export interface ListInstanceFleetsCommandInput extends ListInstanceFleetsInput {}
export interface ListInstanceFleetsCommandOutput extends ListInstanceFleetsOutput, __MetadataBearer {}

/**
 * <p>Lists all available details about the instance fleets in a cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceFleetsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstanceFleetsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListInstanceFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceFleetsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceFleetsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class ListInstanceFleetsCommand extends $Command<
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: ListInstanceFleetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceFleetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListInstanceFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceFleetsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceFleetsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListInstanceFleetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceFleetsCommandOutput> {
    return deserializeAws_json1_1ListInstanceFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
