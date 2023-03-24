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
  ListServiceInstancesInput,
  ListServiceInstancesOutput,
  ListServiceInstancesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListServiceInstancesCommand,
  serializeAws_json1_0ListServiceInstancesCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 *
 * The input for {@link ListServiceInstancesCommand}.
 */
export interface ListServiceInstancesCommandInput extends ListServiceInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceInstancesCommand}.
 */
export interface ListServiceInstancesCommandOutput extends ListServiceInstancesOutput, __MetadataBearer {}

/**
 * @public
 * <p>List service instances with summary data. This action lists service instances of all services in the
 *    Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceInstancesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceInstancesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = {
 *   serviceName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [
 *     {
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   sortBy: "STRING_VALUE",
 *   sortOrder: "STRING_VALUE",
 * };
 * const command = new ListServiceInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListServiceInstancesCommandInput - {@link ListServiceInstancesCommandInput}
 * @returns {@link ListServiceInstancesCommandOutput}
 * @see {@link ListServiceInstancesCommandInput} for command's `input` shape.
 * @see {@link ListServiceInstancesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 *
 */
export class ListServiceInstancesCommand extends $Command<
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListServiceInstancesCommandInput) {
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
  ): Handler<ListServiceInstancesCommandInput, ListServiceInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServiceInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListServiceInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListServiceInstancesOutputFilterSensitiveLog,
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
  private serialize(input: ListServiceInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListServiceInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServiceInstancesCommandOutput> {
    return deserializeAws_json1_0ListServiceInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
