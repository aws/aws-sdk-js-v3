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
import { DescribeJobTemplateRequest, DescribeJobTemplateResponse } from "../models/models_1";
import { de_DescribeJobTemplateCommand, se_DescribeJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobTemplateCommand}.
 */
export interface DescribeJobTemplateCommandInput extends DescribeJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobTemplateCommand}.
 */
export interface DescribeJobTemplateCommandOutput extends DescribeJobTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a job template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeJobTemplateRequest
 *   jobTemplateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobTemplateResponse
 * //   jobTemplateArn: "STRING_VALUE",
 * //   jobTemplateId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   documentSource: "STRING_VALUE",
 * //   document: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   presignedUrlConfig: { // PresignedUrlConfig
 * //     roleArn: "STRING_VALUE",
 * //     expiresInSec: Number("long"),
 * //   },
 * //   jobExecutionsRolloutConfig: { // JobExecutionsRolloutConfig
 * //     maximumPerMinute: Number("int"),
 * //     exponentialRate: { // ExponentialRolloutRate
 * //       baseRatePerMinute: Number("int"), // required
 * //       incrementFactor: Number("double"), // required
 * //       rateIncreaseCriteria: { // RateIncreaseCriteria
 * //         numberOfNotifiedThings: Number("int"),
 * //         numberOfSucceededThings: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   abortConfig: { // AbortConfig
 * //     criteriaList: [ // AbortCriteriaList // required
 * //       { // AbortCriteria
 * //         failureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL", // required
 * //         action: "CANCEL", // required
 * //         thresholdPercentage: Number("double"), // required
 * //         minNumberOfExecutedThings: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   timeoutConfig: { // TimeoutConfig
 * //     inProgressTimeoutInMinutes: Number("long"),
 * //   },
 * //   jobExecutionsRetryConfig: { // JobExecutionsRetryConfig
 * //     criteriaList: [ // RetryCriteriaList // required
 * //       { // RetryCriteria
 * //         failureType: "FAILED" || "TIMED_OUT" || "ALL", // required
 * //         numberOfRetries: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   maintenanceWindows: [ // MaintenanceWindows
 * //     { // MaintenanceWindow
 * //       startTime: "STRING_VALUE", // required
 * //       durationInMinutes: Number("int"), // required
 * //     },
 * //   ],
 * //   destinationPackageVersions: [ // DestinationPackageVersions
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeJobTemplateCommandInput - {@link DescribeJobTemplateCommandInput}
 * @returns {@link DescribeJobTemplateCommandOutput}
 * @see {@link DescribeJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeJobTemplateCommandOutput} for command's `response` shape.
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
export class DescribeJobTemplateCommand extends $Command<
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
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
  constructor(readonly input: DescribeJobTemplateCommandInput) {
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
  ): Handler<DescribeJobTemplateCommandInput, DescribeJobTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeJobTemplateCommand";
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
  private serialize(input: DescribeJobTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobTemplateCommandOutput> {
    return de_DescribeJobTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
