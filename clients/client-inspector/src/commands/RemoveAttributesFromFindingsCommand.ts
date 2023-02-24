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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import {
  RemoveAttributesFromFindingsRequest,
  RemoveAttributesFromFindingsRequestFilterSensitiveLog,
  RemoveAttributesFromFindingsResponse,
  RemoveAttributesFromFindingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RemoveAttributesFromFindingsCommand,
  serializeAws_json1_1RemoveAttributesFromFindingsCommand,
} from "../protocols/Aws_json1_1";

export interface RemoveAttributesFromFindingsCommandInput extends RemoveAttributesFromFindingsRequest {}
export interface RemoveAttributesFromFindingsCommandOutput
  extends RemoveAttributesFromFindingsResponse,
    __MetadataBearer {}

/**
 * <p>Removes entire attributes (key and value pairs) from the findings that are specified
 *          by the ARNs of the findings where an attribute with the specified key exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RemoveAttributesFromFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, RemoveAttributesFromFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new RemoveAttributesFromFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAttributesFromFindingsCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesFromFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class RemoveAttributesFromFindingsCommand extends $Command<
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
  InspectorClientResolvedConfig
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

  constructor(readonly input: RemoveAttributesFromFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveAttributesFromFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "RemoveAttributesFromFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAttributesFromFindingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveAttributesFromFindingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveAttributesFromFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveAttributesFromFindingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveAttributesFromFindingsCommandOutput> {
    return deserializeAws_json1_1RemoveAttributesFromFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
