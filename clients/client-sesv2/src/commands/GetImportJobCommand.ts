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

import { GetImportJobRequest, GetImportJobResponse } from "../models/models_0";
import { de_GetImportJobCommand, se_GetImportJobCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetImportJobCommand}.
 */
export interface GetImportJobCommandInput extends GetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetImportJobCommand}.
 */
export interface GetImportJobCommandOutput extends GetImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about an import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetImportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetImportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetImportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetImportJobResponse
 * //   JobId: "STRING_VALUE",
 * //   ImportDestination: { // ImportDestination
 * //     SuppressionListDestination: { // SuppressionListDestination
 * //       SuppressionListImportAction: "DELETE" || "PUT", // required
 * //     },
 * //     ContactListDestination: { // ContactListDestination
 * //       ContactListName: "STRING_VALUE", // required
 * //       ContactListImportAction: "DELETE" || "PUT", // required
 * //     },
 * //   },
 * //   ImportDataSource: { // ImportDataSource
 * //     S3Url: "STRING_VALUE", // required
 * //     DataFormat: "CSV" || "JSON", // required
 * //   },
 * //   FailureInfo: { // FailureInfo
 * //     FailedRecordsS3Url: "STRING_VALUE",
 * //     ErrorMessage: "STRING_VALUE",
 * //   },
 * //   JobStatus: "CREATED" || "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   CompletedTimestamp: new Date("TIMESTAMP"),
 * //   ProcessedRecordsCount: Number("int"),
 * //   FailedRecordsCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetImportJobCommandInput - {@link GetImportJobCommandInput}
 * @returns {@link GetImportJobCommandOutput}
 * @see {@link GetImportJobCommandInput} for command's `input` shape.
 * @see {@link GetImportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class GetImportJobCommand extends $Command<
  GetImportJobCommandInput,
  GetImportJobCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: GetImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImportJobCommandInput, GetImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetImportJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "GetImportJob",
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
  private serialize(input: GetImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImportJobCommandOutput> {
    return de_GetImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
