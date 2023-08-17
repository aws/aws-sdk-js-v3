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

import { GetSolutionMetricsRequest, GetSolutionMetricsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_GetSolutionMetricsCommand, se_GetSolutionMetricsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSolutionMetricsCommand}.
 */
export interface GetSolutionMetricsCommandInput extends GetSolutionMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetSolutionMetricsCommand}.
 */
export interface GetSolutionMetricsCommandOutput extends GetSolutionMetricsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the metrics for the specified solution version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, GetSolutionMetricsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, GetSolutionMetricsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // GetSolutionMetricsRequest
 *   solutionVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetSolutionMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetSolutionMetricsResponse
 * //   solutionVersionArn: "STRING_VALUE",
 * //   metrics: { // Metrics
 * //     "<keys>": Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSolutionMetricsCommandInput - {@link GetSolutionMetricsCommandInput}
 * @returns {@link GetSolutionMetricsCommandOutput}
 * @see {@link GetSolutionMetricsCommandInput} for command's `input` shape.
 * @see {@link GetSolutionMetricsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class GetSolutionMetricsCommand extends $Command<
  GetSolutionMetricsCommandInput,
  GetSolutionMetricsCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: GetSolutionMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolutionMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "GetSolutionMetricsCommand";
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
  private serialize(input: GetSolutionMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSolutionMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSolutionMetricsCommandOutput> {
    return de_GetSolutionMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
