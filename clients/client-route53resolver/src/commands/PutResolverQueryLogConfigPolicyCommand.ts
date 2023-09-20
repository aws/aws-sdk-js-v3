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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { PutResolverQueryLogConfigPolicyRequest, PutResolverQueryLogConfigPolicyResponse } from "../models/models_0";
import {
  de_PutResolverQueryLogConfigPolicyCommand,
  se_PutResolverQueryLogConfigPolicyCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutResolverQueryLogConfigPolicyCommand}.
 */
export interface PutResolverQueryLogConfigPolicyCommandInput extends PutResolverQueryLogConfigPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResolverQueryLogConfigPolicyCommand}.
 */
export interface PutResolverQueryLogConfigPolicyCommandOutput
  extends PutResolverQueryLogConfigPolicyResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share,
 * 			and the operations that you want the account to be able to perform on the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutResolverQueryLogConfigPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // PutResolverQueryLogConfigPolicyRequest
 *   Arn: "STRING_VALUE", // required
 *   ResolverQueryLogConfigPolicy: "STRING_VALUE", // required
 * };
 * const command = new PutResolverQueryLogConfigPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResolverQueryLogConfigPolicyResponse
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param PutResolverQueryLogConfigPolicyCommandInput - {@link PutResolverQueryLogConfigPolicyCommandInput}
 * @returns {@link PutResolverQueryLogConfigPolicyCommandOutput}
 * @see {@link PutResolverQueryLogConfigPolicyCommandInput} for command's `input` shape.
 * @see {@link PutResolverQueryLogConfigPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidPolicyDocument} (client fault)
 *  <p>The specified Resolver rule policy is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class PutResolverQueryLogConfigPolicyCommand extends $Command<
  PutResolverQueryLogConfigPolicyCommandInput,
  PutResolverQueryLogConfigPolicyCommandOutput,
  Route53ResolverClientResolvedConfig
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
  constructor(readonly input: PutResolverQueryLogConfigPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResolverQueryLogConfigPolicyCommandInput, PutResolverQueryLogConfigPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutResolverQueryLogConfigPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "PutResolverQueryLogConfigPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "PutResolverQueryLogConfigPolicy",
      },
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
    input: PutResolverQueryLogConfigPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutResolverQueryLogConfigPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutResolverQueryLogConfigPolicyCommandOutput> {
    return de_PutResolverQueryLogConfigPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
