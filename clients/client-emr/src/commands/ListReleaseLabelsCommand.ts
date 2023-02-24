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
  ListReleaseLabelsInput,
  ListReleaseLabelsInputFilterSensitiveLog,
  ListReleaseLabelsOutput,
  ListReleaseLabelsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListReleaseLabelsCommand,
  serializeAws_json1_1ListReleaseLabelsCommand,
} from "../protocols/Aws_json1_1";

export interface ListReleaseLabelsCommandInput extends ListReleaseLabelsInput {}
export interface ListReleaseLabelsCommandOutput extends ListReleaseLabelsOutput, __MetadataBearer {}

/**
 * <p>Retrieves release labels of EMR services in the region where the API is called.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListReleaseLabelsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListReleaseLabelsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListReleaseLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReleaseLabelsCommandInput} for command's `input` shape.
 * @see {@link ListReleaseLabelsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class ListReleaseLabelsCommand extends $Command<
  ListReleaseLabelsCommandInput,
  ListReleaseLabelsCommandOutput,
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

  constructor(readonly input: ListReleaseLabelsCommandInput) {
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
  ): Handler<ListReleaseLabelsCommandInput, ListReleaseLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReleaseLabelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListReleaseLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReleaseLabelsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListReleaseLabelsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReleaseLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReleaseLabelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReleaseLabelsCommandOutput> {
    return deserializeAws_json1_1ListReleaseLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
