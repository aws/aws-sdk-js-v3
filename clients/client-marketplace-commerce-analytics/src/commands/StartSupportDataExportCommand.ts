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

import {
  MarketplaceCommerceAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCommerceAnalyticsClient";
import { StartSupportDataExportRequest, StartSupportDataExportResult } from "../models/models_0";
import { de_StartSupportDataExportCommand, se_StartSupportDataExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSupportDataExportCommand}.
 */
export interface StartSupportDataExportCommandInput extends StartSupportDataExportRequest {}
/**
 * @public
 *
 * The output of {@link StartSupportDataExportCommand}.
 */
export interface StartSupportDataExportCommandOutput extends StartSupportDataExportResult, __MetadataBearer {}

/**
 * @public
 * Given a data set type and a from date, asynchronously publishes the requested customer support data
 *         to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request
 *         identifier that can be used to correlate requests with notifications from the SNS topic.
 *         Data sets will be published in comma-separated values (CSV) format with the file name \{data_set_type\}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv.
 *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 *         be overwritten by the new file.
 *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCommerceAnalyticsClient, StartSupportDataExportCommand } from "@aws-sdk/client-marketplace-commerce-analytics"; // ES Modules import
 * // const { MarketplaceCommerceAnalyticsClient, StartSupportDataExportCommand } = require("@aws-sdk/client-marketplace-commerce-analytics"); // CommonJS import
 * const client = new MarketplaceCommerceAnalyticsClient(config);
 * const input = { // StartSupportDataExportRequest
 *   dataSetType: "customer_support_contacts_data" || "test_customer_support_contacts_data", // required
 *   fromDate: new Date("TIMESTAMP"), // required
 *   roleNameArn: "STRING_VALUE", // required
 *   destinationS3BucketName: "STRING_VALUE", // required
 *   destinationS3Prefix: "STRING_VALUE",
 *   snsTopicArn: "STRING_VALUE", // required
 *   customerDefinedValues: { // CustomerDefinedValues
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartSupportDataExportCommand(input);
 * const response = await client.send(command);
 * // { // StartSupportDataExportResult
 * //   dataSetRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSupportDataExportCommandInput - {@link StartSupportDataExportCommandInput}
 * @returns {@link StartSupportDataExportCommandOutput}
 * @see {@link StartSupportDataExportCommandInput} for command's `input` shape.
 * @see {@link StartSupportDataExportCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCommerceAnalyticsClientResolvedConfig | config} for MarketplaceCommerceAnalyticsClient's `config` shape.
 *
 * @throws {@link MarketplaceCommerceAnalyticsException} (server fault)
 *  This exception is thrown when an internal service error occurs.
 *
 * @throws {@link MarketplaceCommerceAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCommerceAnalytics service.</p>
 *
 */
export class StartSupportDataExportCommand extends $Command<
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput,
  MarketplaceCommerceAnalyticsClientResolvedConfig
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
  constructor(readonly input: StartSupportDataExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCommerceAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSupportDataExportCommandInput, StartSupportDataExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSupportDataExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCommerceAnalyticsClient";
    const commandName = "StartSupportDataExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MarketplaceCommerceAnalytics20150701",
        operation: "StartSupportDataExport",
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
  private serialize(input: StartSupportDataExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSupportDataExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSupportDataExportCommandOutput> {
    return de_StartSupportDataExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
