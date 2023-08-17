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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { GetDataViewRequest, GetDataViewResponse } from "../models/models_0";
import { de_GetDataViewCommand, se_GetDataViewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataViewCommand}.
 */
export interface GetDataViewCommandInput extends GetDataViewRequest {}
/**
 * @public
 *
 * The output of {@link GetDataViewCommand}.
 */
export interface GetDataViewCommandOutput extends GetDataViewResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a Dataview.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetDataViewCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetDataViewCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // GetDataViewRequest
 *   dataViewId: "STRING_VALUE", // required
 *   datasetId: "STRING_VALUE", // required
 * };
 * const command = new GetDataViewCommand(input);
 * const response = await client.send(command);
 * // { // GetDataViewResponse
 * //   autoUpdate: true || false,
 * //   partitionColumns: [ // PartitionColumnList
 * //     "STRING_VALUE",
 * //   ],
 * //   datasetId: "STRING_VALUE",
 * //   asOfTimestamp: Number("long"),
 * //   errorInfo: { // DataViewErrorInfo
 * //     errorMessage: "STRING_VALUE",
 * //     errorCategory: "STRING_VALUE",
 * //   },
 * //   lastModifiedTime: Number("long"),
 * //   createTime: Number("long"),
 * //   sortColumns: [ // SortColumnList
 * //     "STRING_VALUE",
 * //   ],
 * //   dataViewId: "STRING_VALUE",
 * //   dataViewArn: "STRING_VALUE",
 * //   destinationTypeParams: { // DataViewDestinationTypeParams
 * //     destinationType: "STRING_VALUE", // required
 * //     s3DestinationExportFileFormat: "STRING_VALUE",
 * //     s3DestinationExportFileFormatOptions: { // S3DestinationFormatOptions
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataViewCommandInput - {@link GetDataViewCommandInput}
 * @returns {@link GetDataViewCommandOutput}
 * @see {@link GetDataViewCommandInput} for command's `input` shape.
 * @see {@link GetDataViewCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
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
export class GetDataViewCommand extends $Command<
  GetDataViewCommandInput,
  GetDataViewCommandOutput,
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
  constructor(readonly input: GetDataViewCommandInput) {
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
  ): Handler<GetDataViewCommandInput, GetDataViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDataViewCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetDataViewCommand";
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
  private serialize(input: GetDataViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataViewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataViewCommandOutput> {
    return de_GetDataViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
