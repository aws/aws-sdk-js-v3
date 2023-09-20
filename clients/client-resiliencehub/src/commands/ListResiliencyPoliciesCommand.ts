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
  ListResiliencyPoliciesRequest,
  ListResiliencyPoliciesResponse,
  ListResiliencyPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListResiliencyPoliciesCommand, se_ListResiliencyPoliciesCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResiliencyPoliciesCommand}.
 */
export interface ListResiliencyPoliciesCommandInput extends ListResiliencyPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListResiliencyPoliciesCommand}.
 */
export interface ListResiliencyPoliciesCommandOutput extends ListResiliencyPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the resiliency policies for the Resilience Hub applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListResiliencyPoliciesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListResiliencyPoliciesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListResiliencyPoliciesRequest
 *   policyName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListResiliencyPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListResiliencyPoliciesResponse
 * //   resiliencyPolicies: [ // ResiliencyPolicies // required
 * //     { // ResiliencyPolicy
 * //       policyArn: "STRING_VALUE",
 * //       policyName: "STRING_VALUE",
 * //       policyDescription: "STRING_VALUE",
 * //       dataLocationConstraint: "STRING_VALUE",
 * //       tier: "STRING_VALUE",
 * //       estimatedCostTier: "STRING_VALUE",
 * //       policy: { // DisruptionPolicy
 * //         "<keys>": { // FailurePolicy
 * //           rtoInSecs: Number("int"), // required
 * //           rpoInSecs: Number("int"), // required
 * //         },
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResiliencyPoliciesCommandInput - {@link ListResiliencyPoliciesCommandInput}
 * @returns {@link ListResiliencyPoliciesCommandOutput}
 * @see {@link ListResiliencyPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResiliencyPoliciesCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
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
export class ListResiliencyPoliciesCommand extends $Command<
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
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
  constructor(readonly input: ListResiliencyPoliciesCommandInput) {
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
  ): Handler<ListResiliencyPoliciesCommandInput, ListResiliencyPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResiliencyPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListResiliencyPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListResiliencyPoliciesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsResilienceHub",
        operation: "ListResiliencyPolicies",
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
  private serialize(input: ListResiliencyPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResiliencyPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResiliencyPoliciesCommandOutput> {
    return de_ListResiliencyPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
