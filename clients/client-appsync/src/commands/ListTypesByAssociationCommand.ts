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
import { ListTypesByAssociationRequest, ListTypesByAssociationResponse } from "../models/models_0";
import { de_ListTypesByAssociationCommand, se_ListTypesByAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTypesByAssociationCommand}.
 */
export interface ListTypesByAssociationCommandInput extends ListTypesByAssociationRequest {}
/**
 * @public
 *
 * The output of {@link ListTypesByAssociationCommand}.
 */
export interface ListTypesByAssociationCommandOutput extends ListTypesByAssociationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists <code>Type</code> objects by the source API association ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListTypesByAssociationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListTypesByAssociationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // ListTypesByAssociationRequest
 *   mergedApiIdentifier: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 *   format: "SDL" || "JSON", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTypesByAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ListTypesByAssociationResponse
 * //   types: [ // TypeList
 * //     { // Type
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       definition: "STRING_VALUE",
 * //       format: "SDL" || "JSON",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTypesByAssociationCommandInput - {@link ListTypesByAssociationCommandInput}
 * @returns {@link ListTypesByAssociationCommandOutput}
 * @see {@link ListTypesByAssociationCommandInput} for command's `input` shape.
 * @see {@link ListTypesByAssociationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
export class ListTypesByAssociationCommand extends $Command<
  ListTypesByAssociationCommandInput,
  ListTypesByAssociationCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: ListTypesByAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTypesByAssociationCommandInput, ListTypesByAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTypesByAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListTypesByAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "ListTypesByAssociation",
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
  private serialize(input: ListTypesByAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTypesByAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTypesByAssociationCommandOutput> {
    return de_ListTypesByAssociationCommand(output, context);
  }
}
