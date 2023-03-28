// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeDataIngestionJobRequest, DescribeDataIngestionJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeDataIngestionJobCommand,
  serializeAws_json1_0DescribeDataIngestionJobCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DescribeDataIngestionJobCommand}.
 */
export interface DescribeDataIngestionJobCommandInput extends DescribeDataIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataIngestionJobCommand}.
 */
export interface DescribeDataIngestionJobCommandOutput extends DescribeDataIngestionJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information on a specific data ingestion job such as creation time, dataset
 *          ARN, and status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeDataIngestionJobCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeDataIngestionJobCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeDataIngestionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataIngestionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeDataIngestionJobCommandInput - {@link DescribeDataIngestionJobCommandInput}
 * @returns {@link DescribeDataIngestionJobCommandOutput}
 * @see {@link DescribeDataIngestionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDataIngestionJobCommandOutput} for command's `response` shape.
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
 *          related AWS service that's being utilized. </p>
 *
 *
 */
export class DescribeDataIngestionJobCommand extends $Command<
  DescribeDataIngestionJobCommandInput,
  DescribeDataIngestionJobCommandOutput,
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
  constructor(readonly input: DescribeDataIngestionJobCommandInput) {
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
  ): Handler<DescribeDataIngestionJobCommandInput, DescribeDataIngestionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataIngestionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DescribeDataIngestionJobCommand";
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
  private serialize(input: DescribeDataIngestionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeDataIngestionJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDataIngestionJobCommandOutput> {
    return deserializeAws_json1_0DescribeDataIngestionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
