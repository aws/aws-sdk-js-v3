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

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { CreateEventActionRequest, CreateEventActionResponse } from "../models/models_0";
import { de_CreateEventActionCommand, se_CreateEventActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEventActionCommand}.
 */
export interface CreateEventActionCommandInput extends CreateEventActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventActionCommand}.
 */
export interface CreateEventActionCommandOutput extends CreateEventActionResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation creates an event action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateEventActionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateEventActionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // CreateEventActionRequest
 *   Action: { // Action
 *     ExportRevisionToS3: { // AutoExportRevisionToS3RequestDetails
 *       Encryption: { // ExportServerSideEncryption
 *         KmsKeyArn: "STRING_VALUE",
 *         Type: "STRING_VALUE", // required
 *       },
 *       RevisionDestination: { // AutoExportRevisionDestinationEntry
 *         Bucket: "STRING_VALUE", // required
 *         KeyPattern: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Event: { // Event
 *     RevisionPublished: { // RevisionPublished
 *       DataSetId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateEventActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventActionResponse
 * //   Action: { // Action
 * //     ExportRevisionToS3: { // AutoExportRevisionToS3RequestDetails
 * //       Encryption: { // ExportServerSideEncryption
 * //         KmsKeyArn: "STRING_VALUE",
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //       RevisionDestination: { // AutoExportRevisionDestinationEntry
 * //         Bucket: "STRING_VALUE", // required
 * //         KeyPattern: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Event: { // Event
 * //     RevisionPublished: { // RevisionPublished
 * //       DataSetId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Id: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateEventActionCommandInput - {@link CreateEventActionCommandInput}
 * @returns {@link CreateEventActionCommandOutput}
 * @see {@link CreateEventActionCommandInput} for command's `input` shape.
 * @see {@link CreateEventActionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The request has exceeded the quotas imposed by the service.</p>
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
export class CreateEventActionCommand extends $Command<
  CreateEventActionCommandInput,
  CreateEventActionCommandOutput,
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
  constructor(readonly input: CreateEventActionCommandInput) {
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
  ): Handler<CreateEventActionCommandInput, CreateEventActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEventActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "CreateEventActionCommand";
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
  private serialize(input: CreateEventActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEventActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventActionCommandOutput> {
    return de_CreateEventActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
