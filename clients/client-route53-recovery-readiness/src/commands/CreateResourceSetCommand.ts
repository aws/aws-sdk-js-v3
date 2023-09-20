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

import { CreateResourceSetRequest, CreateResourceSetResponse } from "../models/models_0";
import { de_CreateResourceSetCommand, se_CreateResourceSetCommand } from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * const input = { // CreateResourceSetRequest
 *   ResourceSetName: "STRING_VALUE", // required
 *   ResourceSetType: "STRING_VALUE", // required
 *   Resources: [ // __listOfResource // required
 *     { // Resource
 *       ComponentId: "STRING_VALUE",
 *       DnsTargetResource: { // DNSTargetResource
 *         DomainName: "STRING_VALUE",
 *         HostedZoneArn: "STRING_VALUE",
 *         RecordSetId: "STRING_VALUE",
 *         RecordType: "STRING_VALUE",
 *         TargetResource: { // TargetResource
 *           NLBResource: { // NLBResource
 *             Arn: "STRING_VALUE",
 *           },
 *           R53Resource: { // R53ResourceRecord
 *             DomainName: "STRING_VALUE",
 *             RecordSetId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       ReadinessScopes: [ // __listOf__string
 *         "STRING_VALUE",
 *       ],
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResourceSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceSetResponse
 * //   ResourceSetArn: "STRING_VALUE",
 * //   ResourceSetName: "STRING_VALUE",
 * //   ResourceSetType: "STRING_VALUE",
 * //   Resources: [ // __listOfResource
 * //     { // Resource
 * //       ComponentId: "STRING_VALUE",
 * //       DnsTargetResource: { // DNSTargetResource
 * //         DomainName: "STRING_VALUE",
 * //         HostedZoneArn: "STRING_VALUE",
 * //         RecordSetId: "STRING_VALUE",
 * //         RecordType: "STRING_VALUE",
 * //         TargetResource: { // TargetResource
 * //           NLBResource: { // NLBResource
 * //             Arn: "STRING_VALUE",
 * //           },
 * //           R53Resource: { // R53ResourceRecord
 * //             DomainName: "STRING_VALUE",
 * //             RecordSetId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       ReadinessScopes: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
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
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
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
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53RecoveryReadiness",
        operation: "CreateResourceSet",
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
  private serialize(input: CreateResourceSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateResourceSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceSetCommandOutput> {
    return de_CreateResourceSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
