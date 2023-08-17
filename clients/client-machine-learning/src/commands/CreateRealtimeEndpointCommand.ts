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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput } from "../models/models_0";
import { de_CreateRealtimeEndpointCommand, se_CreateRealtimeEndpointCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRealtimeEndpointCommand}.
 */
export interface CreateRealtimeEndpointCommandInput extends CreateRealtimeEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreateRealtimeEndpointCommand}.
 */
export interface CreateRealtimeEndpointCommandOutput extends CreateRealtimeEndpointOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // CreateRealtimeEndpointInput
 *   MLModelId: "STRING_VALUE", // required
 * };
 * const command = new CreateRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateRealtimeEndpointOutput
 * //   MLModelId: "STRING_VALUE",
 * //   RealtimeEndpointInfo: { // RealtimeEndpointInfo
 * //     PeakRequestsPerSecond: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     EndpointUrl: "STRING_VALUE",
 * //     EndpointStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRealtimeEndpointCommandInput - {@link CreateRealtimeEndpointCommandInput}
 * @returns {@link CreateRealtimeEndpointCommandOutput}
 * @see {@link CreateRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateRealtimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 */
export class CreateRealtimeEndpointCommand extends $Command<
  CreateRealtimeEndpointCommandInput,
  CreateRealtimeEndpointCommandOutput,
  MachineLearningClientResolvedConfig
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
  constructor(readonly input: CreateRealtimeEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRealtimeEndpointCommandInput, CreateRealtimeEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRealtimeEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "CreateRealtimeEndpointCommand";
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
  private serialize(input: CreateRealtimeEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRealtimeEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRealtimeEndpointCommandOutput> {
    return de_CreateRealtimeEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
