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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DescribeSchedulingPoliciesRequest, DescribeSchedulingPoliciesResponse } from "../models/models_0";
import { de_DescribeSchedulingPoliciesCommand, se_DescribeSchedulingPoliciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSchedulingPoliciesCommand}.
 */
export interface DescribeSchedulingPoliciesCommandInput extends DescribeSchedulingPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSchedulingPoliciesCommand}.
 */
export interface DescribeSchedulingPoliciesCommandOutput extends DescribeSchedulingPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your scheduling policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeSchedulingPoliciesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeSchedulingPoliciesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DescribeSchedulingPoliciesRequest
 *   arns: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSchedulingPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSchedulingPoliciesResponse
 * //   schedulingPolicies: [ // SchedulingPolicyDetailList
 * //     { // SchedulingPolicyDetail
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       fairsharePolicy: { // FairsharePolicy
 * //         shareDecaySeconds: Number("int"),
 * //         computeReservation: Number("int"),
 * //         shareDistribution: [ // ShareAttributesList
 * //           { // ShareAttributes
 * //             shareIdentifier: "STRING_VALUE", // required
 * //             weightFactor: Number("float"),
 * //           },
 * //         ],
 * //       },
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSchedulingPoliciesCommandInput - {@link DescribeSchedulingPoliciesCommandInput}
 * @returns {@link DescribeSchedulingPoliciesCommandOutput}
 * @see {@link DescribeSchedulingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeSchedulingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 */
export class DescribeSchedulingPoliciesCommand extends $Command<
  DescribeSchedulingPoliciesCommandInput,
  DescribeSchedulingPoliciesCommandOutput,
  BatchClientResolvedConfig
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
  constructor(readonly input: DescribeSchedulingPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSchedulingPoliciesCommandInput, DescribeSchedulingPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSchedulingPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeSchedulingPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBatchV20160810",
        operation: "DescribeSchedulingPolicies",
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
  private serialize(input: DescribeSchedulingPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSchedulingPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSchedulingPoliciesCommandOutput> {
    return de_DescribeSchedulingPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
