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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { ListSourceApiAssociationsRequest, ListSourceApiAssociationsResponse } from "../models/models_0";
import { de_ListSourceApiAssociationsCommand, se_ListSourceApiAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSourceApiAssociationsCommand}.
 */
export interface ListSourceApiAssociationsCommandInput extends ListSourceApiAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceApiAssociationsCommand}.
 */
export interface ListSourceApiAssociationsCommandOutput extends ListSourceApiAssociationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the <code>SourceApiAssociationSummary</code> data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListSourceApiAssociationsCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListSourceApiAssociationsCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // ListSourceApiAssociationsRequest
 *   apiId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSourceApiAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceApiAssociationsResponse
 * //   sourceApiAssociationSummaries: [ // SourceApiAssociationSummaryList
 * //     { // SourceApiAssociationSummary
 * //       associationId: "STRING_VALUE",
 * //       associationArn: "STRING_VALUE",
 * //       sourceApiId: "STRING_VALUE",
 * //       sourceApiArn: "STRING_VALUE",
 * //       mergedApiId: "STRING_VALUE",
 * //       mergedApiArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourceApiAssociationsCommandInput - {@link ListSourceApiAssociationsCommandInput}
 * @returns {@link ListSourceApiAssociationsCommandOutput}
 * @see {@link ListSourceApiAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListSourceApiAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 */
export class ListSourceApiAssociationsCommand extends $Command<
  ListSourceApiAssociationsCommandInput,
  ListSourceApiAssociationsCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: ListSourceApiAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSourceApiAssociationsCommandInput, ListSourceApiAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSourceApiAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListSourceApiAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "ListSourceApiAssociations",
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
  private serialize(input: ListSourceApiAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSourceApiAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSourceApiAssociationsCommandOutput> {
    return de_ListSourceApiAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
