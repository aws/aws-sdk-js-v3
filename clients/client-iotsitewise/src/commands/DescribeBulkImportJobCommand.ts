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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeBulkImportJobRequest, DescribeBulkImportJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBulkImportJobCommand,
  serializeAws_restJson1DescribeBulkImportJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeBulkImportJobCommand}.
 */
export interface DescribeBulkImportJobCommandInput extends DescribeBulkImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBulkImportJobCommand}.
 */
export interface DescribeBulkImportJobCommandOutput extends DescribeBulkImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe
 *         a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeBulkImportJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeBulkImportJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeBulkImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeBulkImportJobCommandInput - {@link DescribeBulkImportJobCommandInput}
 * @returns {@link DescribeBulkImportJobCommandOutput}
 * @see {@link DescribeBulkImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBulkImportJobCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 *
 */
export class DescribeBulkImportJobCommand extends $Command<
  DescribeBulkImportJobCommandInput,
  DescribeBulkImportJobCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: DescribeBulkImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBulkImportJobCommandInput, DescribeBulkImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBulkImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeBulkImportJobCommand";
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
  private serialize(input: DescribeBulkImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBulkImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBulkImportJobCommandOutput> {
    return deserializeAws_restJson1DescribeBulkImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
