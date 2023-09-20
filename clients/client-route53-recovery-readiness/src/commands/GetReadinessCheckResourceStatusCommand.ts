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

import { GetReadinessCheckResourceStatusRequest, GetReadinessCheckResourceStatusResponse } from "../models/models_0";
import {
  de_GetReadinessCheckResourceStatusCommand,
  se_GetReadinessCheckResourceStatusCommand,
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
 * The input for {@link GetReadinessCheckResourceStatusCommand}.
 */
export interface GetReadinessCheckResourceStatusCommandInput extends GetReadinessCheckResourceStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetReadinessCheckResourceStatusCommand}.
 */
export interface GetReadinessCheckResourceStatusCommandOutput
  extends GetReadinessCheckResourceStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets individual readiness status for a readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in the recovery group, use GetRecoveryGroupReadinessSummary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetReadinessCheckResourceStatusCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetReadinessCheckResourceStatusCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetReadinessCheckResourceStatusRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ReadinessCheckName: "STRING_VALUE", // required
 *   ResourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetReadinessCheckResourceStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetReadinessCheckResourceStatusResponse
 * //   NextToken: "STRING_VALUE",
 * //   Readiness: "READY" || "NOT_READY" || "UNKNOWN" || "NOT_AUTHORIZED",
 * //   Rules: [ // __listOfRuleResult
 * //     { // RuleResult
 * //       LastCheckedTimestamp: new Date("TIMESTAMP"), // required
 * //       Messages: [ // __listOfMessage // required
 * //         { // Message
 * //           MessageText: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Readiness: "READY" || "NOT_READY" || "UNKNOWN" || "NOT_AUTHORIZED", // required
 * //       RuleId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReadinessCheckResourceStatusCommandInput - {@link GetReadinessCheckResourceStatusCommandInput}
 * @returns {@link GetReadinessCheckResourceStatusCommandOutput}
 * @see {@link GetReadinessCheckResourceStatusCommandInput} for command's `input` shape.
 * @see {@link GetReadinessCheckResourceStatusCommandOutput} for command's `response` shape.
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
export class GetReadinessCheckResourceStatusCommand extends $Command<
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput,
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
  constructor(readonly input: GetReadinessCheckResourceStatusCommandInput) {
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
  ): Handler<GetReadinessCheckResourceStatusCommandInput, GetReadinessCheckResourceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReadinessCheckResourceStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "GetReadinessCheckResourceStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53RecoveryReadiness",
        operation: "GetReadinessCheckResourceStatus",
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
    input: GetReadinessCheckResourceStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetReadinessCheckResourceStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetReadinessCheckResourceStatusCommandOutput> {
    return de_GetReadinessCheckResourceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
