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

import { CreateResolverRuleRequest, CreateResolverRuleResponse } from "../models/models_0";
import { de_CreateResolverRuleCommand, se_CreateResolverRuleCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateResolverRuleCommand}.
 */
export interface CreateResolverRuleCommandInput extends CreateResolverRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateResolverRuleCommand}.
 */
export interface CreateResolverRuleCommandOutput extends CreateResolverRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through,
 * 			one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // CreateResolverRuleRequest
 *   CreatorRequestId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   RuleType: "FORWARD" || "SYSTEM" || "RECURSIVE", // required
 *   DomainName: "STRING_VALUE", // required
 *   TargetIps: [ // TargetList
 *     { // TargetAddress
 *       Ip: "STRING_VALUE",
 *       Port: Number("int"),
 *       Ipv6: "STRING_VALUE",
 *     },
 *   ],
 *   ResolverEndpointId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateResolverRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateResolverRuleResponse
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
 * @param CreateResolverRuleCommandInput - {@link CreateResolverRuleCommandInput}
 * @returns {@link CreateResolverRuleCommandOutput}
 * @see {@link CreateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link CreateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource that you tried to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource isn't available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 */
export class CreateResolverRuleCommand extends $Command<
  CreateResolverRuleCommandInput,
  CreateResolverRuleCommandOutput,
  Route53ResolverClientResolvedConfig
> {
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
  constructor(readonly input: CreateResolverRuleCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResolverRuleCommandInput, CreateResolverRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResolverRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "CreateResolverRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "CreateResolverRule",
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
  private serialize(input: CreateResolverRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateResolverRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResolverRuleCommandOutput> {
    return de_CreateResolverRuleCommand(output, context);
  }
}
