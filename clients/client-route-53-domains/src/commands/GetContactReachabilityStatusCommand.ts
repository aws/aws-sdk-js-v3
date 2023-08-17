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

import { GetContactReachabilityStatusRequest, GetContactReachabilityStatusResponse } from "../models/models_0";
import {
  de_GetContactReachabilityStatusCommand,
  se_GetContactReachabilityStatusCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetContactReachabilityStatusCommand}.
 */
export interface GetContactReachabilityStatusCommandInput extends GetContactReachabilityStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetContactReachabilityStatusCommand}.
 */
export interface GetContactReachabilityStatusCommandOutput
  extends GetContactReachabilityStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>For operations that require confirmation that the email address for the registrant
 * 			contact is valid, such as registering a new domain, this operation returns information
 * 			about whether the registrant contact has responded.</p>
 *          <p>If you want us to resend the email, use the
 * 				<code>ResendContactReachabilityEmail</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetContactReachabilityStatusCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetContactReachabilityStatusCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // GetContactReachabilityStatusRequest
 *   domainName: "STRING_VALUE",
 * };
 * const command = new GetContactReachabilityStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetContactReachabilityStatusResponse
 * //   domainName: "STRING_VALUE",
 * //   status: "PENDING" || "DONE" || "EXPIRED",
 * // };
 *
 * ```
 *
 * @param GetContactReachabilityStatusCommandInput - {@link GetContactReachabilityStatusCommandInput}
 * @returns {@link GetContactReachabilityStatusCommandOutput}
 * @see {@link GetContactReachabilityStatusCommandInput} for command's `input` shape.
 * @see {@link GetContactReachabilityStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link OperationLimitExceeded} (client fault)
 *  <p>The number of operations or jobs running exceeded the allowed threshold for the
 * 			account.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 */
export class GetContactReachabilityStatusCommand extends $Command<
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput,
  Route53DomainsClientResolvedConfig
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
  constructor(readonly input: GetContactReachabilityStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContactReachabilityStatusCommandInput, GetContactReachabilityStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContactReachabilityStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetContactReachabilityStatusCommand";
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
  private serialize(input: GetContactReachabilityStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetContactReachabilityStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContactReachabilityStatusCommandOutput> {
    return de_GetContactReachabilityStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
