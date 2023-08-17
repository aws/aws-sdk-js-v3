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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { CreateSchedulingPolicyRequest, CreateSchedulingPolicyResponse } from "../models/models_0";
import { de_CreateSchedulingPolicyCommand, se_CreateSchedulingPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSchedulingPolicyCommand}.
 */
export interface CreateSchedulingPolicyCommandInput extends CreateSchedulingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateSchedulingPolicyCommand}.
 */
export interface CreateSchedulingPolicyCommandOutput extends CreateSchedulingPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Batch scheduling policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateSchedulingPolicyCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateSchedulingPolicyCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // CreateSchedulingPolicyRequest
 *   name: "STRING_VALUE", // required
 *   fairsharePolicy: { // FairsharePolicy
 *     shareDecaySeconds: Number("int"),
 *     computeReservation: Number("int"),
 *     shareDistribution: [ // ShareAttributesList
 *       { // ShareAttributes
 *         shareIdentifier: "STRING_VALUE", // required
 *         weightFactor: Number("float"),
 *       },
 *     ],
 *   },
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSchedulingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateSchedulingPolicyResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSchedulingPolicyCommandInput - {@link CreateSchedulingPolicyCommandInput}
 * @returns {@link CreateSchedulingPolicyCommandOutput}
 * @see {@link CreateSchedulingPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateSchedulingPolicyCommandOutput} for command's `response` shape.
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
export class CreateSchedulingPolicyCommand extends $Command<
  CreateSchedulingPolicyCommandInput,
  CreateSchedulingPolicyCommandOutput,
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
  constructor(readonly input: CreateSchedulingPolicyCommandInput) {
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
  ): Handler<CreateSchedulingPolicyCommandInput, CreateSchedulingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSchedulingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "CreateSchedulingPolicyCommand";
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
  private serialize(input: CreateSchedulingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSchedulingPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSchedulingPolicyCommandOutput> {
    return de_CreateSchedulingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
