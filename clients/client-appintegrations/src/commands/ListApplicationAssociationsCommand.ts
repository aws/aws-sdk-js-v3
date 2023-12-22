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

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { ListApplicationAssociationsRequest, ListApplicationAssociationsResponse } from "../models/models_0";
import {
  de_ListApplicationAssociationsCommand,
  se_ListApplicationAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationAssociationsCommand}.
 */
export interface ListApplicationAssociationsCommandInput extends ListApplicationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAssociationsCommand}.
 */
export interface ListApplicationAssociationsCommandOutput
  extends ListApplicationAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of application associations for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListApplicationAssociationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListApplicationAssociationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const input = { // ListApplicationAssociationsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListApplicationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAssociationsResponse
 * //   ApplicationAssociations: [ // ApplicationAssociationsList
 * //     { // ApplicationAssociationSummary
 * //       ApplicationAssociationArn: "STRING_VALUE",
 * //       ApplicationArn: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAssociationsCommandInput - {@link ListApplicationAssociationsCommandInput}
 * @returns {@link ListApplicationAssociationsCommandOutput}
 * @see {@link ListApplicationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 * @example To list application associations of an application
 * ```javascript
 * // The following retrives application associations of an application
 * const input = {
 *   "ApplicationId": "98542c53-e8ac-4570-9c85-c6552c8d9c5e"
 * };
 * const command = new ListApplicationAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationAssociations": [
 *     {
 *       "ApplicationArn": "arn:aws:app-integrations:us-west-2:0123456789012:application/98542c53-e8ac-4570-9c85-c6552c8d9c5e",
 *       "ApplicationAssociationArn": "arn:aws:app-integrations:us-west-2:0123456789012:application-association/98542c53-e8ac-4570-9c85-c6552c8d9c5e/461dfb57-320a-454d-9bba-bb560845ff38",
 *       "ClientId": "connect.amazonaws.com"
 *     }
 *   ],
 *   "NextToken": "abc"
 * }
 * *\/
 * // example id: list-application-associations
 * ```
 *
 */
export class ListApplicationAssociationsCommand extends $Command<
  ListApplicationAssociationsCommandInput,
  ListApplicationAssociationsCommandOutput,
  AppIntegrationsClientResolvedConfig
> {
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
  constructor(readonly input: ListApplicationAssociationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppIntegrationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationAssociationsCommandInput, ListApplicationAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "ListApplicationAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAppIntegrationService",
        operation: "ListApplicationAssociations",
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
  private serialize(input: ListApplicationAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListApplicationAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApplicationAssociationsCommandOutput> {
    return de_ListApplicationAssociationsCommand(output, context);
  }
}
