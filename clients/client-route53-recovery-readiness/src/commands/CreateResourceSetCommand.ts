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

import { CreateResourceSetRequest, CreateResourceSetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateResourceSetCommand,
  serializeAws_restJson1CreateResourceSetCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

/**
 * @public
 *
 * The input for {@link CreateResourceSetCommand}.
 */
export interface CreateResourceSetCommandInput extends CreateResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceSetCommand}.
 */
export interface CreateResourceSetCommandOutput extends CreateResourceSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a resource set. A resource set is a set of resources of one type that span multiple cells. You can associate a resource set with a readiness check to monitor the resources for failover readiness.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateResourceSetCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, CreateResourceSetCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = {
 *   ResourceSetName: "STRING_VALUE", // required
 *   ResourceSetType: "STRING_VALUE", // required
 *   Resources: [ // required
 *     {
 *       ComponentId: "STRING_VALUE",
 *       DnsTargetResource: {
 *         DomainName: "STRING_VALUE",
 *         HostedZoneArn: "STRING_VALUE",
 *         RecordSetId: "STRING_VALUE",
 *         RecordType: "STRING_VALUE",
 *         TargetResource: {
 *           NLBResource: {
 *             Arn: "STRING_VALUE",
 *           },
 *           R53Resource: {
 *             DomainName: "STRING_VALUE",
 *             RecordSetId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       ReadinessScopes: [
 *         "STRING_VALUE",
 *       ],
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResourceSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateResourceSetCommandInput - {@link CreateResourceSetCommandInput}
 * @returns {@link CreateResourceSetCommandOutput}
 * @see {@link CreateResourceSetCommandInput} for command's `input` shape.
 * @see {@link CreateResourceSetCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 *
 */
export class CreateResourceSetCommand extends $Command<
  CreateResourceSetCommandInput,
  CreateResourceSetCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
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
  constructor(readonly input: CreateResourceSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResourceSetCommandInput, CreateResourceSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResourceSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "CreateResourceSetCommand";
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
  private serialize(input: CreateResourceSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateResourceSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceSetCommandOutput> {
    return deserializeAws_restJson1CreateResourceSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
