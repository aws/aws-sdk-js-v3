import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetReservationCoverageRequest, GetReservationCoverageResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetReservationCoverageCommand,
  serializeAws_json1_1GetReservationCoverageCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetReservationCoverageCommandInput = GetReservationCoverageRequest;
export type GetReservationCoverageCommandOutput = GetReservationCoverageResponse & __MetadataBearer;

/**
 * <p>Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or
 * 		  Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions.
 * 			For any time period, you can filter data about reservation usage by the following dimensions:</p>
 * 		       <ul>
 *             <li>
 *                <p>AZ</p>
 *             </li>
 *             <li>
 *                <p>CACHE_ENGINE</p>
 *             </li>
 *             <li>
 *                <p>DATABASE_ENGINE</p>
 *             </li>
 *             <li>
 *                <p>DEPLOYMENT_OPTION</p>
 *             </li>
 *             <li>
 *                <p>INSTANCE_TYPE</p>
 *             </li>
 *             <li>
 *                <p>LINKED_ACCOUNT</p>
 *             </li>
 *             <li>
 *                <p>OPERATING_SYSTEM</p>
 *             </li>
 *             <li>
 *                <p>PLATFORM</p>
 *             </li>
 *             <li>
 *                <p>REGION</p>
 *             </li>
 *             <li>
 *                <p>SERVICE</p>
 *             </li>
 *             <li>
 *                <p>TAG</p>
 *             </li>
 *             <li>
 *                <p>TENANCY</p>
 *             </li>
 *          </ul>
 * 		       <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
 */
export class GetReservationCoverageCommand extends $Command<
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetReservationCoverageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReservationCoverageCommandInput, GetReservationCoverageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetReservationCoverageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReservationCoverageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetReservationCoverageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReservationCoverageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReservationCoverageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReservationCoverageCommandOutput> {
    return deserializeAws_json1_1GetReservationCoverageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
