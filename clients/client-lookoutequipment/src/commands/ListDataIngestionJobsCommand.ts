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
import { ListDataIngestionJobsRequest, ListDataIngestionJobsResponse } from "../models/models_0";
import { de_ListDataIngestionJobsCommand, se_ListDataIngestionJobsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataIngestionJobsCommand}.
 */
export interface ListDataIngestionJobsCommandInput extends ListDataIngestionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataIngestionJobsCommand}.
 */
export interface ListDataIngestionJobsCommandOutput extends ListDataIngestionJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location
 *          of the input data, status, and so on. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListDataIngestionJobsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListDataIngestionJobsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // ListDataIngestionJobsRequest
 *   DatasetName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "IN_PROGRESS" || "SUCCESS" || "FAILED",
 * };
 * const command = new ListDataIngestionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataIngestionJobsResponse
 * //   NextToken: "STRING_VALUE",
 * //   DataIngestionJobSummaries: [ // DataIngestionJobSummaries
 * //     { // DataIngestionJobSummary
 * //       JobId: "STRING_VALUE",
 * //       DatasetName: "STRING_VALUE",
 * //       DatasetArn: "STRING_VALUE",
 * //       IngestionInputConfiguration: { // IngestionInputConfiguration
 * //         S3InputConfiguration: { // IngestionS3InputConfiguration
 * //           Bucket: "STRING_VALUE", // required
 * //           Prefix: "STRING_VALUE",
 * //           KeyPattern: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "IN_PROGRESS" || "SUCCESS" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataIngestionJobsCommandInput - {@link ListDataIngestionJobsCommandInput}
 * @returns {@link ListDataIngestionJobsCommandOutput}
 * @see {@link ListDataIngestionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataIngestionJobsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a
 *          related AWS service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 */
export class ListDataIngestionJobsCommand extends $Command<
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
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
  constructor(readonly input: ListDataIngestionJobsCommandInput) {
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
  ): Handler<ListDataIngestionJobsCommandInput, ListDataIngestionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataIngestionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "ListDataIngestionJobsCommand";
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
  private serialize(input: ListDataIngestionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataIngestionJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataIngestionJobsCommandOutput> {
    return de_ListDataIngestionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
