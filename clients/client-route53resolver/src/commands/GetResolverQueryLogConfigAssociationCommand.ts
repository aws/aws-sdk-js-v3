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
  GetResolverQueryLogConfigAssociationRequest,
  GetResolverQueryLogConfigAssociationResponse,
} from "../models/models_0";
import {
  de_GetResolverQueryLogConfigAssociationCommand,
  se_GetResolverQueryLogConfigAssociationCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResolverQueryLogConfigAssociationCommand}.
 */
export interface GetResolverQueryLogConfigAssociationCommandInput extends GetResolverQueryLogConfigAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetResolverQueryLogConfigAssociationCommand}.
 */
export interface GetResolverQueryLogConfigAssociationCommandOutput
  extends GetResolverQueryLogConfigAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC
 * 			with a query logging configuration, Resolver logs DNS queries that originate in that VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetResolverQueryLogConfigAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetResolverQueryLogConfigAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // GetResolverQueryLogConfigAssociationRequest
 *   ResolverQueryLogConfigAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetResolverQueryLogConfigAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetResolverQueryLogConfigAssociationResponse
 * //   ResolverQueryLogConfigAssociation: { // ResolverQueryLogConfigAssociation
 * //     Id: "STRING_VALUE",
 * //     ResolverQueryLogConfigId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "ACTION_NEEDED" || "DELETING" || "FAILED",
 * //     Error: "NONE" || "DESTINATION_NOT_FOUND" || "ACCESS_DENIED" || "INTERNAL_SERVICE_ERROR",
 * //     ErrorMessage: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResolverQueryLogConfigAssociationCommandInput - {@link GetResolverQueryLogConfigAssociationCommandInput}
 * @returns {@link GetResolverQueryLogConfigAssociationCommandOutput}
 * @see {@link GetResolverQueryLogConfigAssociationCommandInput} for command's `input` shape.
 * @see {@link GetResolverQueryLogConfigAssociationCommandOutput} for command's `response` shape.
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
export class GetResolverQueryLogConfigAssociationCommand extends $Command<
  GetResolverQueryLogConfigAssociationCommandInput,
  GetResolverQueryLogConfigAssociationCommandOutput,
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
  constructor(readonly input: GetResolverQueryLogConfigAssociationCommandInput) {
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
  ): Handler<GetResolverQueryLogConfigAssociationCommandInput, GetResolverQueryLogConfigAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResolverQueryLogConfigAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverQueryLogConfigAssociationCommand";
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
    input: GetResolverQueryLogConfigAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetResolverQueryLogConfigAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResolverQueryLogConfigAssociationCommandOutput> {
    return de_GetResolverQueryLogConfigAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
