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

import { CreateReturnShippingLabelRequest, CreateReturnShippingLabelResult } from "../models/models_0";
import { de_CreateReturnShippingLabelCommand, se_CreateReturnShippingLabelCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReturnShippingLabelCommand}.
 */
export interface CreateReturnShippingLabelCommandInput extends CreateReturnShippingLabelRequest {}
/**
 * @public
 *
 * The output of {@link CreateReturnShippingLabelCommand}.
 */
export interface CreateReturnShippingLabelCommandOutput extends CreateReturnShippingLabelResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a shipping label that will be used to return the Snow device to Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // CreateReturnShippingLabelRequest
 *   JobId: "STRING_VALUE", // required
 *   ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 * };
 * const command = new CreateReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * // { // CreateReturnShippingLabelResult
 * //   Status: "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * // };
 *
 * ```
 *
 * @param CreateReturnShippingLabelCommandInput - {@link CreateReturnShippingLabelCommandInput}
 * @returns {@link CreateReturnShippingLabelCommandOutput}
 * @see {@link CreateReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link CreateReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You get this exception when you call <code>CreateReturnShippingLabel</code> more than once
 *       when other requests are not completed.</p>
 *
 * @throws {@link InvalidInputCombinationException} (client fault)
 *  <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link ReturnShippingLabelAlreadyExistsException} (client fault)
 *  <p>You get this exception if you call <code>CreateReturnShippingLabel</code> and a valid
 *       return shipping label already exists. In this case, use
 *         <code>DescribeReturnShippingLabel</code> to get the URL.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 */
export class CreateReturnShippingLabelCommand extends $Command<
  CreateReturnShippingLabelCommandInput,
  CreateReturnShippingLabelCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: CreateReturnShippingLabelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReturnShippingLabelCommandInput, CreateReturnShippingLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReturnShippingLabelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateReturnShippingLabelCommand";
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
  private serialize(input: CreateReturnShippingLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReturnShippingLabelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReturnShippingLabelCommandOutput> {
    return de_CreateReturnShippingLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
