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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import {
  ListManagedEndpointsRequest,
  ListManagedEndpointsResponse,
  ListManagedEndpointsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListManagedEndpointsCommand, se_ListManagedEndpointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListManagedEndpointsCommand}.
 */
export interface ListManagedEndpointsCommandInput extends ListManagedEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedEndpointsCommand}.
 */
export interface ListManagedEndpointsCommandOutput extends ListManagedEndpointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway
 *          that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with
 *          your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListManagedEndpointsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListManagedEndpointsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // ListManagedEndpointsRequest
 *   virtualClusterId: "STRING_VALUE", // required
 *   createdBefore: new Date("TIMESTAMP"),
 *   createdAfter: new Date("TIMESTAMP"),
 *   types: [ // EndpointTypes
 *     "STRING_VALUE",
 *   ],
 *   states: [ // EndpointStates
 *     "CREATING" || "ACTIVE" || "TERMINATING" || "TERMINATED" || "TERMINATED_WITH_ERRORS",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListManagedEndpointsCommandInput - {@link ListManagedEndpointsCommandInput}
 * @returns {@link ListManagedEndpointsCommandOutput}
 * @see {@link ListManagedEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListManagedEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 *
 */
export class ListManagedEndpointsCommand extends $Command<
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: ListManagedEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListManagedEndpointsCommandInput, ListManagedEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListManagedEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "ListManagedEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListManagedEndpointsResponseFilterSensitiveLog,
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
  private serialize(input: ListManagedEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListManagedEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListManagedEndpointsCommandOutput> {
    return de_ListManagedEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
