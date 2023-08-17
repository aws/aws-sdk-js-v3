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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListIntegrationAssociationsRequest, ListIntegrationAssociationsResponse } from "../models/models_1";
import {
  de_ListIntegrationAssociationsCommand,
  se_ListIntegrationAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIntegrationAssociationsCommand}.
 */
export interface ListIntegrationAssociationsCommandInput extends ListIntegrationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListIntegrationAssociationsCommand}.
 */
export interface ListIntegrationAssociationsCommandOutput
  extends ListIntegrationAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides summary information about the Amazon Web Services resource associations for the
 *    specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListIntegrationAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListIntegrationAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListIntegrationAssociationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IntegrationType: "EVENT" || "VOICE_ID" || "PINPOINT_APP" || "WISDOM_ASSISTANT" || "WISDOM_KNOWLEDGE_BASE" || "CASES_DOMAIN",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegrationAssociationsResponse
 * //   IntegrationAssociationSummaryList: [ // IntegrationAssociationSummaryList
 * //     { // IntegrationAssociationSummary
 * //       IntegrationAssociationId: "STRING_VALUE",
 * //       IntegrationAssociationArn: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       IntegrationType: "EVENT" || "VOICE_ID" || "PINPOINT_APP" || "WISDOM_ASSISTANT" || "WISDOM_KNOWLEDGE_BASE" || "CASES_DOMAIN",
 * //       IntegrationArn: "STRING_VALUE",
 * //       SourceApplicationUrl: "STRING_VALUE",
 * //       SourceApplicationName: "STRING_VALUE",
 * //       SourceType: "SALESFORCE" || "ZENDESK",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntegrationAssociationsCommandInput - {@link ListIntegrationAssociationsCommandInput}
 * @returns {@link ListIntegrationAssociationsCommandOutput}
 * @see {@link ListIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListIntegrationAssociationsCommand extends $Command<
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListIntegrationAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIntegrationAssociationsCommandInput, ListIntegrationAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIntegrationAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListIntegrationAssociationsCommand";
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
  private serialize(input: ListIntegrationAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIntegrationAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIntegrationAssociationsCommandOutput> {
    return de_ListIntegrationAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
