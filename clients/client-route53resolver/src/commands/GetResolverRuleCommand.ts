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

import { GetResolverRuleRequest, GetResolverRuleResponse } from "../models/models_0";
import { de_GetResolverRuleCommand, se_GetResolverRuleCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResolverRuleCommand}.
 */
export interface GetResolverRuleCommandInput extends GetResolverRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverRuleCommand}.
 */
export interface GetResolverRuleCommandOutput extends GetResolverRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the
 * 			outbound Resolver endpoint that the rule is associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverRuleRequest
 *   ResolverRuleId: "STRING_VALUE", // required
 * };
 * const command = new GetResolverRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverRuleResponse
 * //   ResolverRule: { // ResolverRule
 * //     Id: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE",
 * //     Status: "COMPLETE" || "DELETING" || "UPDATING" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     RuleType: "FORWARD" || "SYSTEM" || "RECURSIVE",
 * //     Name: "STRING_VALUE",
 * //     TargetIps: [ // TargetList
 * //       { // TargetAddress
 * //         Ip: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         Ipv6: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ResolverEndpointId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //     CreationTime: "STRING_VALUE",
 * //     ModificationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResolverRuleCommandInput - {@link GetResolverRuleCommandInput}
 * @returns {@link GetResolverRuleCommandOutput}
 * @see {@link GetResolverRuleCommandInput} for command's `input` shape.
 * @see {@link GetResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class GetResolverRuleCommand extends $Command<
  GetResolverRuleCommandInput,
  GetResolverRuleCommandOutput,
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
  constructor(readonly input: GetResolverRuleCommandInput) {
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
  ): Handler<GetResolverRuleCommandInput, GetResolverRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResolverRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "GetResolverRule",
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
  private serialize(input: GetResolverRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResolverRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResolverRuleCommandOutput> {
    return de_GetResolverRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
