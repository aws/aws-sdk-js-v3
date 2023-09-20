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

import { CreateImportJobRequest, CreateImportJobResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_CreateImportJobCommand, se_CreateImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateImportJobCommand}.
 */
export interface CreateImportJobCommandInput extends CreateImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateImportJobCommand}.
 */
export interface CreateImportJobCommandOutput extends CreateImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an import job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateImportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateImportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // CreateImportJobRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ImportJobRequest: { // ImportJobRequest
 *     DefineSegment: true || false,
 *     ExternalId: "STRING_VALUE",
 *     Format: "CSV" || "JSON", // required
 *     RegisterEndpoints: true || false,
 *     RoleArn: "STRING_VALUE", // required
 *     S3Url: "STRING_VALUE", // required
 *     SegmentId: "STRING_VALUE",
 *     SegmentName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateImportJobResponse
 * //   ImportJobResponse: { // ImportJobResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     CompletedPieces: Number("int"),
 * //     CompletionDate: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE", // required
 * //     Definition: { // ImportJobResource
 * //       DefineSegment: true || false,
 * //       ExternalId: "STRING_VALUE",
 * //       Format: "CSV" || "JSON", // required
 * //       RegisterEndpoints: true || false,
 * //       RoleArn: "STRING_VALUE", // required
 * //       S3Url: "STRING_VALUE", // required
 * //       SegmentId: "STRING_VALUE",
 * //       SegmentName: "STRING_VALUE",
 * //     },
 * //     FailedPieces: Number("int"),
 * //     Failures: [ // ListOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Id: "STRING_VALUE", // required
 * //     JobStatus: "CREATED" || "PREPARING_FOR_INITIALIZATION" || "INITIALIZING" || "PROCESSING" || "PENDING_JOB" || "COMPLETING" || "COMPLETED" || "FAILING" || "FAILED", // required
 * //     TotalFailures: Number("int"),
 * //     TotalPieces: Number("int"),
 * //     TotalProcessed: Number("int"),
 * //     Type: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateImportJobCommandInput - {@link CreateImportJobCommandInput}
 * @returns {@link CreateImportJobCommandOutput}
 * @see {@link CreateImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateImportJobCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class CreateImportJobCommand extends $Command<
  CreateImportJobCommandInput,
  CreateImportJobCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: CreateImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateImportJobCommandInput, CreateImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "CreateImportJob",
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
  private serialize(input: CreateImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImportJobCommandOutput> {
    return de_CreateImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
