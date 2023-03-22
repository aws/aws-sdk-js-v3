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

import {
  MarketplaceCommerceAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCommerceAnalyticsClient";
import {
  StartSupportDataExportRequest,
  StartSupportDataExportRequestFilterSensitiveLog,
  StartSupportDataExportResult,
  StartSupportDataExportResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartSupportDataExportCommand,
  serializeAws_json1_1StartSupportDataExportCommand,
} from "../protocols/Aws_json1_1";

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
 * const command = new StartSupportDataExportCommand(input);
 * const response = await client.send(command);
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
      inputFilterSensitiveLog: StartSupportDataExportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSupportDataExportResultFilterSensitiveLog,
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
    return serializeAws_json1_1StartSupportDataExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSupportDataExportCommandOutput> {
    return deserializeAws_json1_1StartSupportDataExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
