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
import { SendDataSetNotificationRequest, SendDataSetNotificationResponse } from "../models/models_0";
import { de_SendDataSetNotificationCommand, se_SendDataSetNotificationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendDataSetNotificationCommand}.
 */
export interface SendDataSetNotificationCommandInput extends SendDataSetNotificationRequest {}
/**
 * @public
 *
 * The output of {@link SendDataSetNotificationCommand}.
 */
export interface SendDataSetNotificationCommandOutput extends SendDataSetNotificationResponse, __MetadataBearer {}

/**
 * @public
 * <p>The type of event associated with the data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, SendDataSetNotificationCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, SendDataSetNotificationCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // SendDataSetNotificationRequest
 *   Scope: { // ScopeDetails
 *     LakeFormationTagPolicies: [ // ListOfLakeFormationTagPolicies
 *       { // LakeFormationTagPolicyDetails
 *         Database: "STRING_VALUE",
 *         Table: "STRING_VALUE",
 *       },
 *     ],
 *     RedshiftDataShares: [ // ListOfRedshiftDataShares
 *       { // RedshiftDataShareDetails
 *         Arn: "STRING_VALUE", // required
 *         Database: "STRING_VALUE", // required
 *         Function: "STRING_VALUE",
 *         Table: "STRING_VALUE",
 *         Schema: "STRING_VALUE",
 *         View: "STRING_VALUE",
 *       },
 *     ],
 *     S3DataAccesses: [ // ListOfS3DataAccesses
 *       { // S3DataAccessDetails
 *         KeyPrefixes: [ // ListOf__string
 *           "STRING_VALUE",
 *         ],
 *         Keys: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Comment: "STRING_VALUE",
 *   DataSetId: "STRING_VALUE", // required
 *   Details: { // NotificationDetails
 *     DataUpdate: { // DataUpdateRequestDetails
 *       DataUpdatedAt: new Date("TIMESTAMP"),
 *     },
 *     Deprecation: { // DeprecationRequestDetails
 *       DeprecationAt: new Date("TIMESTAMP"), // required
 *     },
 *     SchemaChange: { // SchemaChangeRequestDetails
 *       Changes: [ // ListOfSchemaChangeDetails
 *         { // SchemaChangeDetails
 *           Name: "STRING_VALUE", // required
 *           Type: "STRING_VALUE", // required
 *           Description: "STRING_VALUE",
 *         },
 *       ],
 *       SchemaChangeAt: new Date("TIMESTAMP"), // required
 *     },
 *   },
 *   Type: "STRING_VALUE", // required
 * };
 * const command = new SendDataSetNotificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendDataSetNotificationCommandInput - {@link SendDataSetNotificationCommandInput}
 * @returns {@link SendDataSetNotificationCommandOutput}
 * @see {@link SendDataSetNotificationCommandInput} for command's `input` shape.
 * @see {@link SendDataSetNotificationCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
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
export class SendDataSetNotificationCommand extends $Command<
  SendDataSetNotificationCommandInput,
  SendDataSetNotificationCommandOutput,
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
  constructor(readonly input: SendDataSetNotificationCommandInput) {
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
  ): Handler<SendDataSetNotificationCommandInput, SendDataSetNotificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendDataSetNotificationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "SendDataSetNotificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataExchange",
        operation: "SendDataSetNotification",
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
  private serialize(input: SendDataSetNotificationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendDataSetNotificationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendDataSetNotificationCommandOutput> {
    return de_SendDataSetNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
