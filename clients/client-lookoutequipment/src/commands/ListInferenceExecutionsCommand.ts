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

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListInferenceExecutionsRequest, ListInferenceExecutionsResponse } from "../models/models_0";
import { de_ListInferenceExecutionsCommand, se_ListInferenceExecutionsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceExecutionsCommand}.
 */
export interface ListInferenceExecutionsCommandInput extends ListInferenceExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListInferenceExecutionsCommand}.
 */
export interface ListInferenceExecutionsCommandOutput extends ListInferenceExecutionsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Lists all inference executions that have been performed by the specified inference
 *          scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListInferenceExecutionsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListInferenceExecutionsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListInferenceExecutionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InferenceSchedulerName: "STRING_VALUE", // required
 *   DataStartTimeAfter: new Date("TIMESTAMP"),
 *   DataEndTimeBefore: new Date("TIMESTAMP"),
 *   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED",
 * };
 * const command = new ListInferenceExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceExecutionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   InferenceExecutionSummaries: [ // InferenceExecutionSummaries
 * //     { // InferenceExecutionSummary
 * //       ModelName: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       InferenceSchedulerName: "STRING_VALUE",
 * //       InferenceSchedulerArn: "STRING_VALUE",
 * //       ScheduledStartTime: new Date("TIMESTAMP"),
 * //       DataStartTime: new Date("TIMESTAMP"),
 * //       DataEndTime: new Date("TIMESTAMP"),
 * //       DataInputConfiguration: { // InferenceInputConfiguration
 * //         S3InputConfiguration: { // InferenceS3InputConfiguration
 * //           Bucket: "STRING_VALUE", // required
 * //           Prefix: "STRING_VALUE",
 * //         },
 * //         InputTimeZoneOffset: "STRING_VALUE",
 * //         InferenceInputNameConfiguration: { // InferenceInputNameConfiguration
 * //           TimestampFormat: "STRING_VALUE",
 * //           ComponentTimestampDelimiter: "STRING_VALUE",
 * //         },
 * //       },
 * //       DataOutputConfiguration: { // InferenceOutputConfiguration
 * //         S3OutputConfiguration: { // InferenceS3OutputConfiguration
 * //           Bucket: "STRING_VALUE", // required
 * //           Prefix: "STRING_VALUE",
 * //         },
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       CustomerResultObject: { // S3Object
 * //         Bucket: "STRING_VALUE", // required
 * //         Key: "STRING_VALUE", // required
 * //       },
 * //       Status: "IN_PROGRESS" || "SUCCESS" || "FAILED",
 * //       FailedReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListInferenceExecutionsCommandInput - {@link ListInferenceExecutionsCommandInput}
 * @returns {@link ListInferenceExecutionsCommandOutput}
 * @see {@link ListInferenceExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListInferenceExecutionsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a
 *          related Amazon Web Services service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class ListInferenceExecutionsCommand extends $Command<
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
  LookoutEquipmentClientResolvedConfig
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
  constructor(readonly input: ListInferenceExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInferenceExecutionsCommandInput, ListInferenceExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInferenceExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "ListInferenceExecutionsCommand";
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
  private serialize(input: ListInferenceExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInferenceExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInferenceExecutionsCommandOutput> {
    return de_ListInferenceExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
