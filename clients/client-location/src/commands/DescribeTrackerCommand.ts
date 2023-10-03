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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeTrackerRequest, DescribeTrackerResponse } from "../models/models_0";
import { de_DescribeTrackerCommand, se_DescribeTrackerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrackerCommand}.
 */
export interface DescribeTrackerCommandInput extends DescribeTrackerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrackerCommand}.
 */
export interface DescribeTrackerCommandOutput extends DescribeTrackerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the tracker resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // DescribeTrackerRequest
 *   TrackerName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrackerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrackerResponse
 * //   TrackerName: "STRING_VALUE", // required
 * //   TrackerArn: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   PricingPlan: "STRING_VALUE",
 * //   PricingPlanDataSource: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   PositionFiltering: "STRING_VALUE",
 * //   EventBridgeEnabled: true || false,
 * //   KmsKeyEnableGeospatialQueries: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeTrackerCommandInput - {@link DescribeTrackerCommandInput}
 * @returns {@link DescribeTrackerCommandOutput}
 * @see {@link DescribeTrackerCommandInput} for command's `input` shape.
 * @see {@link DescribeTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class DescribeTrackerCommand extends $Command<
  DescribeTrackerCommandInput,
  DescribeTrackerCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: DescribeTrackerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrackerCommandInput, DescribeTrackerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrackerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "DescribeTrackerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "DescribeTracker",
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
  private serialize(input: DescribeTrackerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTrackerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrackerCommandOutput> {
    return de_DescribeTrackerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
