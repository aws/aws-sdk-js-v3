// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  ListAssociatedRoute53HealthChecksRequest,
  ListAssociatedRoute53HealthChecksResponse,
} from "../models/models_0";
import {
  de_ListAssociatedRoute53HealthChecksCommand,
  se_ListAssociatedRoute53HealthChecksCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedRoute53HealthChecksCommand}.
 */
export interface ListAssociatedRoute53HealthChecksCommandInput extends ListAssociatedRoute53HealthChecksRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedRoute53HealthChecksCommand}.
 */
export interface ListAssociatedRoute53HealthChecksCommandOutput
  extends ListAssociatedRoute53HealthChecksResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of all Amazon Route 53 health checks associated with a specific routing control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, ListAssociatedRoute53HealthChecksCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, ListAssociatedRoute53HealthChecksCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // ListAssociatedRoute53HealthChecksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RoutingControlArn: "STRING_VALUE", // required
 * };
 * const command = new ListAssociatedRoute53HealthChecksCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedRoute53HealthChecksResponse
 * //   HealthCheckIds: [ // __listOf__stringMax36PatternS
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedRoute53HealthChecksCommandInput - {@link ListAssociatedRoute53HealthChecksCommandInput}
 * @returns {@link ListAssociatedRoute53HealthChecksCommandOutput}
 * @see {@link ListAssociatedRoute53HealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedRoute53HealthChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 */
export class ListAssociatedRoute53HealthChecksCommand extends $Command<
  ListAssociatedRoute53HealthChecksCommandInput,
  ListAssociatedRoute53HealthChecksCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
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
  constructor(readonly input: ListAssociatedRoute53HealthChecksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryControlConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedRoute53HealthChecksCommandInput, ListAssociatedRoute53HealthChecksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssociatedRoute53HealthChecksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "ListAssociatedRoute53HealthChecksCommand";
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
  private serialize(
    input: ListAssociatedRoute53HealthChecksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAssociatedRoute53HealthChecksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssociatedRoute53HealthChecksCommandOutput> {
    return de_ListAssociatedRoute53HealthChecksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
