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

import {
  UpdateResiliencyPolicyRequest,
  UpdateResiliencyPolicyResponse,
  UpdateResiliencyPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateResiliencyPolicyCommand, se_UpdateResiliencyPolicyCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateResiliencyPolicyCommand}.
 */
export interface UpdateResiliencyPolicyCommandInput extends UpdateResiliencyPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResiliencyPolicyCommand}.
 */
export interface UpdateResiliencyPolicyCommandOutput extends UpdateResiliencyPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a resiliency policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, UpdateResiliencyPolicyCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, UpdateResiliencyPolicyCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // UpdateResiliencyPolicyRequest
 *   policyArn: "STRING_VALUE", // required
 *   policyName: "STRING_VALUE",
 *   policyDescription: "STRING_VALUE",
 *   dataLocationConstraint: "STRING_VALUE",
 *   tier: "STRING_VALUE",
 *   policy: { // DisruptionPolicy
 *     "<keys>": { // FailurePolicy
 *       rtoInSecs: Number("int"), // required
 *       rpoInSecs: Number("int"), // required
 *     },
 *   },
 * };
 * const command = new UpdateResiliencyPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResiliencyPolicyResponse
 * //   policy: { // ResiliencyPolicy
 * //     policyArn: "STRING_VALUE",
 * //     policyName: "STRING_VALUE",
 * //     policyDescription: "STRING_VALUE",
 * //     dataLocationConstraint: "STRING_VALUE",
 * //     tier: "STRING_VALUE",
 * //     estimatedCostTier: "STRING_VALUE",
 * //     policy: { // DisruptionPolicy
 * //       "<keys>": { // FailurePolicy
 * //         rtoInSecs: Number("int"), // required
 * //         rpoInSecs: Number("int"), // required
 * //       },
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateResiliencyPolicyCommandInput - {@link UpdateResiliencyPolicyCommandInput}
 * @returns {@link UpdateResiliencyPolicyCommandOutput}
 * @see {@link UpdateResiliencyPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateResiliencyPolicyCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class UpdateResiliencyPolicyCommand extends $Command<
  UpdateResiliencyPolicyCommandInput,
  UpdateResiliencyPolicyCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: UpdateResiliencyPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResiliencyPolicyCommandInput, UpdateResiliencyPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResiliencyPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "UpdateResiliencyPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateResiliencyPolicyResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "UpdateResiliencyPolicy",
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
  private serialize(input: UpdateResiliencyPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateResiliencyPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResiliencyPolicyCommandOutput> {
    return de_UpdateResiliencyPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
