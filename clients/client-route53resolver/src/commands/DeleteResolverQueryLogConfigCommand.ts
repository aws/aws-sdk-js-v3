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

import { DeleteResolverQueryLogConfigRequest, DeleteResolverQueryLogConfigResponse } from "../models/models_0";
import {
  de_DeleteResolverQueryLogConfigCommand,
  se_DeleteResolverQueryLogConfigCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteResolverQueryLogConfigCommand}.
 */
export interface DeleteResolverQueryLogConfigCommandInput extends DeleteResolverQueryLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResolverQueryLogConfigCommand}.
 */
export interface DeleteResolverQueryLogConfigCommandOutput
  extends DeleteResolverQueryLogConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are
 * 			associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and
 * 			the other accounts have associated VPCs with the shared configuration.</p>
 *          <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p>
 *          <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing
 * 			the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs
 * 			that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically
 * 			disassociated from the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // DeleteResolverQueryLogConfigRequest
 *   ResolverQueryLogConfigId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResolverQueryLogConfigResponse
 * //   ResolverQueryLogConfig: { // ResolverQueryLogConfig
 * //     Id: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Status: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //     ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //     AssociationCount: Number("int"),
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     DestinationArn: "STRING_VALUE",
 * //     CreatorRequestId: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteResolverQueryLogConfigCommandInput - {@link DeleteResolverQueryLogConfigCommandInput}
 * @returns {@link DeleteResolverQueryLogConfigCommandOutput}
 * @see {@link DeleteResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteResolverQueryLogConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
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
export class DeleteResolverQueryLogConfigCommand extends $Command<
  DeleteResolverQueryLogConfigCommandInput,
  DeleteResolverQueryLogConfigCommandOutput,
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
  constructor(readonly input: DeleteResolverQueryLogConfigCommandInput) {
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
  ): Handler<DeleteResolverQueryLogConfigCommandInput, DeleteResolverQueryLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResolverQueryLogConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DeleteResolverQueryLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Resolver",
        operation: "DeleteResolverQueryLogConfig",
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
  private serialize(input: DeleteResolverQueryLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteResolverQueryLogConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteResolverQueryLogConfigCommandOutput> {
    return de_DeleteResolverQueryLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
