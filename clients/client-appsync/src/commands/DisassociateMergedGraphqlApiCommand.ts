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
import { DisassociateMergedGraphqlApiRequest, DisassociateMergedGraphqlApiResponse } from "../models/models_0";
import {
  de_DisassociateMergedGraphqlApiCommand,
  se_DisassociateMergedGraphqlApiCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMergedGraphqlApiCommand}.
 */
export interface DisassociateMergedGraphqlApiCommandInput extends DisassociateMergedGraphqlApiRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMergedGraphqlApiCommand}.
 */
export interface DisassociateMergedGraphqlApiCommandOutput
  extends DisassociateMergedGraphqlApiResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes an association between a Merged API and source API using the source API's identifier and the
 *          association ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DisassociateMergedGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DisassociateMergedGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // DisassociateMergedGraphqlApiRequest
 *   sourceApiIdentifier: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMergedGraphqlApiCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateMergedGraphqlApiResponse
 * //   sourceApiAssociationStatus: "MERGE_SCHEDULED" || "MERGE_FAILED" || "MERGE_SUCCESS" || "MERGE_IN_PROGRESS" || "AUTO_MERGE_SCHEDULE_FAILED" || "DELETION_SCHEDULED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED",
 * // };
 *
 * ```
 *
 * @param DisassociateMergedGraphqlApiCommandInput - {@link DisassociateMergedGraphqlApiCommandInput}
 * @returns {@link DisassociateMergedGraphqlApiCommandOutput}
 * @see {@link DisassociateMergedGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link DisassociateMergedGraphqlApiCommandOutput} for command's `response` shape.
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
export class DisassociateMergedGraphqlApiCommand extends $Command<
  DisassociateMergedGraphqlApiCommandInput,
  DisassociateMergedGraphqlApiCommandOutput,
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
  constructor(readonly input: DisassociateMergedGraphqlApiCommandInput) {
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
  ): Handler<DisassociateMergedGraphqlApiCommandInput, DisassociateMergedGraphqlApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateMergedGraphqlApiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "DisassociateMergedGraphqlApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "DisassociateMergedGraphqlApi",
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
  private serialize(input: DisassociateMergedGraphqlApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateMergedGraphqlApiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateMergedGraphqlApiCommandOutput> {
    return de_DisassociateMergedGraphqlApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
