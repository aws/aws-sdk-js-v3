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

import { UpdateResourceSetRequest, UpdateResourceSetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateResourceSetCommand,
  serializeAws_restJson1UpdateResourceSetCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

/**
 * @public
 *
 * The input for {@link UpdateResourceSetCommand}.
 */
export interface UpdateResourceSetCommandInput extends UpdateResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceSetCommand}.
 */
export interface UpdateResourceSetCommandOutput extends UpdateResourceSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, UpdateResourceSetCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, UpdateResourceSetCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
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
 * };
 * const command = new UpdateResourceSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateResourceSetCommandInput - {@link UpdateResourceSetCommandInput}
 * @returns {@link UpdateResourceSetCommandOutput}
 * @see {@link UpdateResourceSetCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceSetCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 *
 */
export class UpdateResourceSetCommand extends $Command<
  UpdateResourceSetCommandInput,
  UpdateResourceSetCommandOutput,
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
  constructor(readonly input: UpdateResourceSetCommandInput) {
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
  ): Handler<UpdateResourceSetCommandInput, UpdateResourceSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "UpdateResourceSetCommand";
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
  private serialize(input: UpdateResourceSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateResourceSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceSetCommandOutput> {
    return deserializeAws_restJson1UpdateResourceSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
