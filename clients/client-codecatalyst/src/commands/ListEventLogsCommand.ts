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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { ListEventLogsRequest, ListEventLogsResponse } from "../models/models_0";
import { de_ListEventLogsCommand, se_ListEventLogsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEventLogsCommand}.
 */
export interface ListEventLogsCommandInput extends ListEventLogsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventLogsCommand}.
 */
export interface ListEventLogsCommandOutput extends ListEventLogsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of events that occurred during a specified time period in a space. You can use these events to audit user and system activity in a space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListEventLogsCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListEventLogsCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // ListEventLogsRequest
 *   spaceName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   eventName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEventLogsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventLogsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // EventLogEntries // required
 * //     { // EventLogEntry
 * //       id: "STRING_VALUE", // required
 * //       eventName: "STRING_VALUE", // required
 * //       eventType: "STRING_VALUE", // required
 * //       eventCategory: "STRING_VALUE", // required
 * //       eventSource: "STRING_VALUE", // required
 * //       eventTime: new Date("TIMESTAMP"), // required
 * //       operationType: "STRING_VALUE", // required
 * //       userIdentity: { // UserIdentity
 * //         userType: "STRING_VALUE", // required
 * //         principalId: "STRING_VALUE", // required
 * //         userName: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //       },
 * //       projectInformation: { // ProjectInformation
 * //         name: "STRING_VALUE",
 * //         projectId: "STRING_VALUE",
 * //       },
 * //       requestId: "STRING_VALUE",
 * //       requestPayload: { // EventPayload
 * //         contentType: "STRING_VALUE",
 * //         data: "STRING_VALUE",
 * //       },
 * //       responsePayload: {
 * //         contentType: "STRING_VALUE",
 * //         data: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE",
 * //       sourceIpAddress: "STRING_VALUE",
 * //       userAgent: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEventLogsCommandInput - {@link ListEventLogsCommandInput}
 * @returns {@link ListEventLogsCommandOutput}
 * @see {@link ListEventLogsCommandInput} for command's `input` shape.
 * @see {@link ListEventLogsCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 */
export class ListEventLogsCommand extends $Command<
  ListEventLogsCommandInput,
  ListEventLogsCommandOutput,
  CodeCatalystClientResolvedConfig
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
  constructor(readonly input: ListEventLogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventLogsCommandInput, ListEventLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListEventLogsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "ListEventLogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCatalyst",
        operation: "ListEventLogs",
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
  private serialize(input: ListEventLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEventLogsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventLogsCommandOutput> {
    return de_ListEventLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
