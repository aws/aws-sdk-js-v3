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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { CreateDataViewRequest, CreateDataViewResponse } from "../models/models_0";
import { de_CreateDataViewCommand, se_CreateDataViewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDataViewCommand}.
 */
export interface CreateDataViewCommandInput extends CreateDataViewRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataViewCommand}.
 */
export interface CreateDataViewCommandOutput extends CreateDataViewResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Dataview for a Dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, CreateDataViewCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, CreateDataViewCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // CreateDataViewRequest
 *   clientToken: "STRING_VALUE",
 *   datasetId: "STRING_VALUE", // required
 *   autoUpdate: true || false,
 *   sortColumns: [ // SortColumnList
 *     "STRING_VALUE",
 *   ],
 *   partitionColumns: [ // PartitionColumnList
 *     "STRING_VALUE",
 *   ],
 *   asOfTimestamp: Number("long"),
 *   destinationTypeParams: { // DataViewDestinationTypeParams
 *     destinationType: "STRING_VALUE", // required
 *     s3DestinationExportFileFormat: "PARQUET" || "DELIMITED_TEXT",
 *     s3DestinationExportFileFormatOptions: { // S3DestinationFormatOptions
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateDataViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataViewResponse
 * //   datasetId: "STRING_VALUE",
 * //   dataViewId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataViewCommandInput - {@link CreateDataViewCommandInput}
 * @returns {@link CreateDataViewCommandOutput}
 * @see {@link CreateDataViewCommandInput} for command's `input` shape.
 * @see {@link CreateDataViewCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 */
export class CreateDataViewCommand extends $Command<
  CreateDataViewCommandInput,
  CreateDataViewCommandOutput,
  FinspaceDataClientResolvedConfig
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
  constructor(readonly input: CreateDataViewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataViewCommandInput, CreateDataViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataViewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "CreateDataViewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroPublicAPI",
        operation: "CreateDataView",
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
  private serialize(input: CreateDataViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataViewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataViewCommandOutput> {
    return de_CreateDataViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
