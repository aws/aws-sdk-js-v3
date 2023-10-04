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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import {
  ListNotificationsInput,
  ListNotificationsOutput,
  ListNotificationsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListNotificationsCommand, se_ListNotificationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationsCommand}.
 */
export interface ListNotificationsCommandInput extends ListNotificationsInput {}
/**
 * @public
 *
 * The output of {@link ListNotificationsCommand}.
 */
export interface ListNotificationsCommandOutput extends ListNotificationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all Amazon DataZone notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListNotificationsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListNotificationsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListNotificationsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   type: "TASK" || "EVENT", // required
 *   afterTimestamp: new Date("TIMESTAMP"),
 *   beforeTimestamp: new Date("TIMESTAMP"),
 *   subjects: [ // NotificationSubjects
 *     "STRING_VALUE",
 *   ],
 *   taskStatus: "ACTIVE" || "INACTIVE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationsOutput
 * //   notifications: [ // NotificationsList
 * //     { // NotificationOutput
 * //       identifier: "STRING_VALUE", // required
 * //       domainIdentifier: "STRING_VALUE", // required
 * //       type: "TASK" || "EVENT", // required
 * //       topic: { // Topic
 * //         subject: "STRING_VALUE", // required
 * //         resource: { // NotificationResource
 * //           type: "PROJECT", // required
 * //           id: "STRING_VALUE", // required
 * //           name: "STRING_VALUE",
 * //         },
 * //         role: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR" || "PROJECT_VIEWER" || "DOMAIN_OWNER" || "PROJECT_SUBSCRIBER", // required
 * //       },
 * //       title: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "INACTIVE",
 * //       actionLink: "STRING_VALUE", // required
 * //       creationTimestamp: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * //       metadata: { // MetadataMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotificationsCommandInput - {@link ListNotificationsCommandInput}
 * @returns {@link ListNotificationsCommandOutput}
 * @see {@link ListNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class ListNotificationsCommand extends $Command<
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListNotificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotificationsCommandInput, ListNotificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNotificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "ListNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListNotificationsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "ListNotifications",
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
  private serialize(input: ListNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListNotificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotificationsCommandOutput> {
    return de_ListNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
