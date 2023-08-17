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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  GetBehaviorModelTrainingSummariesRequest,
  GetBehaviorModelTrainingSummariesResponse,
} from "../models/models_1";
import {
  de_GetBehaviorModelTrainingSummariesCommand,
  se_GetBehaviorModelTrainingSummariesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBehaviorModelTrainingSummariesCommand}.
 */
export interface GetBehaviorModelTrainingSummariesCommandInput extends GetBehaviorModelTrainingSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetBehaviorModelTrainingSummariesCommand}.
 */
export interface GetBehaviorModelTrainingSummariesCommandOutput
  extends GetBehaviorModelTrainingSummariesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Returns a Device Defender's ML Detect Security Profile training model's status.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBehaviorModelTrainingSummariesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBehaviorModelTrainingSummariesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // GetBehaviorModelTrainingSummariesRequest
 *   securityProfileName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetBehaviorModelTrainingSummariesCommand(input);
 * const response = await client.send(command);
 * // { // GetBehaviorModelTrainingSummariesResponse
 * //   summaries: [ // BehaviorModelTrainingSummaries
 * //     { // BehaviorModelTrainingSummary
 * //       securityProfileName: "STRING_VALUE",
 * //       behaviorName: "STRING_VALUE",
 * //       trainingDataCollectionStartDate: new Date("TIMESTAMP"),
 * //       modelStatus: "PENDING_BUILD" || "ACTIVE" || "EXPIRED",
 * //       datapointsCollectionPercentage: Number("double"),
 * //       lastModelRefreshDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBehaviorModelTrainingSummariesCommandInput - {@link GetBehaviorModelTrainingSummariesCommandInput}
 * @returns {@link GetBehaviorModelTrainingSummariesCommandOutput}
 * @see {@link GetBehaviorModelTrainingSummariesCommandInput} for command's `input` shape.
 * @see {@link GetBehaviorModelTrainingSummariesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class GetBehaviorModelTrainingSummariesCommand extends $Command<
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: GetBehaviorModelTrainingSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBehaviorModelTrainingSummariesCommandInput, GetBehaviorModelTrainingSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBehaviorModelTrainingSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetBehaviorModelTrainingSummariesCommand";
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
  private serialize(
    input: GetBehaviorModelTrainingSummariesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetBehaviorModelTrainingSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBehaviorModelTrainingSummariesCommandOutput> {
    return de_GetBehaviorModelTrainingSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
