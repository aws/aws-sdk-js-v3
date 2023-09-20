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

import { GetArchitectureRecommendationsRequest, GetArchitectureRecommendationsResponse } from "../models/models_0";
import {
  de_GetArchitectureRecommendationsCommand,
  se_GetArchitectureRecommendationsCommand,
} from "../protocols/Aws_restJson1";
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
 * The input for {@link GetArchitectureRecommendationsCommand}.
 */
export interface GetArchitectureRecommendationsCommandInput extends GetArchitectureRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetArchitectureRecommendationsCommand}.
 */
export interface GetArchitectureRecommendationsCommandOutput
  extends GetArchitectureRecommendationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets recommendations about architecture designs for improving resiliency for an application, based on a recovery group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetArchitectureRecommendationsCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetArchitectureRecommendationsCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetArchitectureRecommendationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RecoveryGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetArchitectureRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetArchitectureRecommendationsResponse
 * //   LastAuditTimestamp: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * //   Recommendations: [ // __listOfRecommendation
 * //     { // Recommendation
 * //       RecommendationText: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetArchitectureRecommendationsCommandInput - {@link GetArchitectureRecommendationsCommandInput}
 * @returns {@link GetArchitectureRecommendationsCommandOutput}
 * @see {@link GetArchitectureRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetArchitectureRecommendationsCommandOutput} for command's `response` shape.
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
export class GetArchitectureRecommendationsCommand extends $Command<
  GetArchitectureRecommendationsCommandInput,
  GetArchitectureRecommendationsCommandOutput,
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
  constructor(readonly input: GetArchitectureRecommendationsCommandInput) {
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
  ): Handler<GetArchitectureRecommendationsCommandInput, GetArchitectureRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetArchitectureRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "GetArchitectureRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53RecoveryReadiness",
        operation: "GetArchitectureRecommendations",
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
    input: GetArchitectureRecommendationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetArchitectureRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetArchitectureRecommendationsCommandOutput> {
    return de_GetArchitectureRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
