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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { CreateCampaignRequest, CreateCampaignResponse } from "../models/models_0";
import { de_CreateCampaignCommand, se_CreateCampaignCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandInput extends CreateCampaignRequest {}
/**
 * @public
 *
 * The output of {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandOutput extends CreateCampaignResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an orchestration of data collection rules. The Amazon Web Services IoT FleetWise Edge Agent software
 *             running in vehicles uses campaigns to decide how to collect and transfer data to the
 *             cloud. You create campaigns in the cloud. After you or your team approve campaigns,
 *             Amazon Web Services IoT FleetWise automatically deploys them to vehicles. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html">Collect and transfer data
 *                 with campaigns</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateCampaignCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateCampaignCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // CreateCampaignRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   signalCatalogArn: "STRING_VALUE", // required
 *   targetArn: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   expiryTime: new Date("TIMESTAMP"),
 *   postTriggerCollectionDuration: Number("long"),
 *   diagnosticsMode: "STRING_VALUE",
 *   spoolingMode: "STRING_VALUE",
 *   compression: "STRING_VALUE",
 *   priority: Number("int"),
 *   signalsToCollect: [ // SignalInformationList
 *     { // SignalInformation
 *       name: "STRING_VALUE", // required
 *       maxSampleCount: Number("long"),
 *       minimumSamplingIntervalMs: Number("long"),
 *     },
 *   ],
 *   collectionScheme: { // CollectionScheme Union: only one key present
 *     timeBasedCollectionScheme: { // TimeBasedCollectionScheme
 *       periodMs: Number("long"), // required
 *     },
 *     conditionBasedCollectionScheme: { // ConditionBasedCollectionScheme
 *       expression: "STRING_VALUE", // required
 *       minimumTriggerIntervalMs: Number("long"),
 *       triggerMode: "STRING_VALUE",
 *       conditionLanguageVersion: Number("int"),
 *     },
 *   },
 *   dataExtraDimensions: [ // DataExtraDimensionNodePathList
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   dataDestinationConfigs: [ // DataDestinationConfigs
 *     { // DataDestinationConfig Union: only one key present
 *       s3Config: { // S3Config
 *         bucketArn: "STRING_VALUE", // required
 *         dataFormat: "STRING_VALUE",
 *         storageCompressionFormat: "STRING_VALUE",
 *         prefix: "STRING_VALUE",
 *       },
 *       timestreamConfig: { // TimestreamConfig
 *         timestreamTableArn: "STRING_VALUE", // required
 *         executionRoleArn: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * // { // CreateCampaignResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCampaignCommandInput - {@link CreateCampaignCommandInput}
 * @returns {@link CreateCampaignCommandOutput}
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class CreateCampaignCommand extends $Command<
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: CreateCampaignCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCampaignCommandInput, CreateCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCampaignCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "CreateCampaignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTAutobahnControlPlane",
        operation: "CreateCampaign",
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
  private serialize(input: CreateCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCampaignCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCampaignCommandOutput> {
    return de_CreateCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
