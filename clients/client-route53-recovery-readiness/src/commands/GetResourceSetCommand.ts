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

import { GetResourceSetRequest, GetResourceSetResponse } from "../models/models_0";
import { de_GetResourceSetCommand, se_GetResourceSetCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link GetResourceSetCommand}.
 */
export interface GetResourceSetCommandInput extends GetResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceSetCommand}.
 */
export interface GetResourceSetCommandOutput extends GetResourceSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays the details about a resource set, including a list of the resources in the set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetResourceSetCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetResourceSetCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetResourceSetRequest
 *   ResourceSetName: "STRING_VALUE", // required
 * };
 * const command = new GetResourceSetCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceSetResponse
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
 * @param GetResourceSetCommandInput - {@link GetResourceSetCommandInput}
 * @returns {@link GetResourceSetCommandOutput}
 * @see {@link GetResourceSetCommandInput} for command's `input` shape.
 * @see {@link GetResourceSetCommandOutput} for command's `response` shape.
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
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 */
export class GetResourceSetCommand extends $Command<
  GetResourceSetCommandInput,
  GetResourceSetCommandOutput,
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
  constructor(readonly input: GetResourceSetCommandInput) {
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
  ): Handler<GetResourceSetCommandInput, GetResourceSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "GetResourceSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53RecoveryReadiness",
        operation: "GetResourceSet",
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
  private serialize(input: GetResourceSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceSetCommandOutput> {
    return de_GetResourceSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
