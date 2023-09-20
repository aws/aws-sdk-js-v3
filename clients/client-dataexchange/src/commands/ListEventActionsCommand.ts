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

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { ListEventActionsRequest, ListEventActionsResponse } from "../models/models_0";
import { de_ListEventActionsCommand, se_ListEventActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEventActionsCommand}.
 */
export interface ListEventActionsCommandInput extends ListEventActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventActionsCommand}.
 */
export interface ListEventActionsCommandOutput extends ListEventActionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation lists your event actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListEventActionsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListEventActionsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // ListEventActionsRequest
 *   EventSourceId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEventActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventActionsResponse
 * //   EventActions: [ // ListOfEventActionEntry
 * //     { // EventActionEntry
 * //       Action: { // Action
 * //         ExportRevisionToS3: { // AutoExportRevisionToS3RequestDetails
 * //           Encryption: { // ExportServerSideEncryption
 * //             KmsKeyArn: "STRING_VALUE",
 * //             Type: "STRING_VALUE", // required
 * //           },
 * //           RevisionDestination: { // AutoExportRevisionDestinationEntry
 * //             Bucket: "STRING_VALUE", // required
 * //             KeyPattern: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       Event: { // Event
 * //         RevisionPublished: { // RevisionPublished
 * //           DataSetId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Id: "STRING_VALUE", // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventActionsCommandInput - {@link ListEventActionsCommandInput}
 * @returns {@link ListEventActionsCommandOutput}
 * @see {@link ListEventActionsCommandInput} for command's `input` shape.
 * @see {@link ListEventActionsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 */
export class ListEventActionsCommand extends $Command<
  ListEventActionsCommandInput,
  ListEventActionsCommandOutput,
  DataExchangeClientResolvedConfig
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
  constructor(readonly input: ListEventActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventActionsCommandInput, ListEventActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEventActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "ListEventActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataExchange",
        operation: "ListEventActions",
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
  private serialize(input: ListEventActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEventActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventActionsCommandOutput> {
    return de_ListEventActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
