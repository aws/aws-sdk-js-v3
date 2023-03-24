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

import { ListReusableDelegationSetsRequest, ListReusableDelegationSetsResponse } from "../models/models_0";
import {
  deserializeAws_restXmlListReusableDelegationSetsCommand,
  serializeAws_restXmlListReusableDelegationSetsCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 *
 * The input for {@link ListReusableDelegationSetsCommand}.
 */
export interface ListReusableDelegationSetsCommandInput extends ListReusableDelegationSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListReusableDelegationSetsCommand}.
 */
export interface ListReusableDelegationSetsCommandOutput extends ListReusableDelegationSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of the reusable delegation sets that are associated with the current
 * 				Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListReusableDelegationSetsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListReusableDelegationSetsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = {
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListReusableDelegationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListReusableDelegationSetsCommandInput - {@link ListReusableDelegationSetsCommandInput}
 * @returns {@link ListReusableDelegationSetsCommandOutput}
 * @see {@link ListReusableDelegationSetsCommandInput} for command's `input` shape.
 * @see {@link ListReusableDelegationSetsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 *
 */
export class ListReusableDelegationSetsCommand extends $Command<
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: ListReusableDelegationSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReusableDelegationSetsCommandInput, ListReusableDelegationSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReusableDelegationSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListReusableDelegationSetsCommand";
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
  private serialize(input: ListReusableDelegationSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListReusableDelegationSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListReusableDelegationSetsCommandOutput> {
    return deserializeAws_restXmlListReusableDelegationSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
