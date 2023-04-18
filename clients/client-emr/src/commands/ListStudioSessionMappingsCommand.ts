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
import { ListStudioSessionMappingsInput, ListStudioSessionMappingsOutput } from "../models/models_0";
import { de_ListStudioSessionMappingsCommand, se_ListStudioSessionMappingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListStudioSessionMappingsCommand}.
 */
export interface ListStudioSessionMappingsCommandInput extends ListStudioSessionMappingsInput {}
/**
 * @public
 *
 * The output of {@link ListStudioSessionMappingsCommand}.
 */
export interface ListStudioSessionMappingsCommandOutput extends ListStudioSessionMappingsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all user or group session mappings for the Amazon EMR Studio
 *          specified by <code>StudioId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudioSessionMappingsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStudioSessionMappingsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListStudioSessionMappingsInput
 *   StudioId: "STRING_VALUE",
 *   IdentityType: "USER" || "GROUP",
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListStudioSessionMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListStudioSessionMappingsCommandInput - {@link ListStudioSessionMappingsCommandInput}
 * @returns {@link ListStudioSessionMappingsCommandOutput}
 * @see {@link ListStudioSessionMappingsCommandInput} for command's `input` shape.
 * @see {@link ListStudioSessionMappingsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 *
 */
export class ListStudioSessionMappingsCommand extends $Command<
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListStudioSessionMappingsCommandInput) {
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
  ): Handler<ListStudioSessionMappingsCommandInput, ListStudioSessionMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStudioSessionMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListStudioSessionMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListStudioSessionMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStudioSessionMappingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStudioSessionMappingsCommandOutput> {
    return de_ListStudioSessionMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
