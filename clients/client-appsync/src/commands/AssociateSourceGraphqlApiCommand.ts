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
import { AssociateSourceGraphqlApiRequest, AssociateSourceGraphqlApiResponse } from "../models/models_0";
import { de_AssociateSourceGraphqlApiCommand, se_AssociateSourceGraphqlApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateSourceGraphqlApiCommand}.
 */
export interface AssociateSourceGraphqlApiCommandInput extends AssociateSourceGraphqlApiRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSourceGraphqlApiCommand}.
 */
export interface AssociateSourceGraphqlApiCommandOutput extends AssociateSourceGraphqlApiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an association between a Merged API and source API using the Merged API's identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, AssociateSourceGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, AssociateSourceGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // AssociateSourceGraphqlApiRequest
 *   mergedApiIdentifier: "STRING_VALUE", // required
 *   sourceApiIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sourceApiAssociationConfig: { // SourceApiAssociationConfig
 *     mergeType: "MANUAL_MERGE" || "AUTO_MERGE",
 *   },
 * };
 * const command = new AssociateSourceGraphqlApiCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSourceGraphqlApiResponse
 * //   sourceApiAssociation: { // SourceApiAssociation
 * //     associationId: "STRING_VALUE",
 * //     associationArn: "STRING_VALUE",
 * //     sourceApiId: "STRING_VALUE",
 * //     sourceApiArn: "STRING_VALUE",
 * //     mergedApiArn: "STRING_VALUE",
 * //     mergedApiId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     sourceApiAssociationConfig: { // SourceApiAssociationConfig
 * //       mergeType: "MANUAL_MERGE" || "AUTO_MERGE",
 * //     },
 * //     sourceApiAssociationStatus: "MERGE_SCHEDULED" || "MERGE_FAILED" || "MERGE_SUCCESS" || "MERGE_IN_PROGRESS" || "AUTO_MERGE_SCHEDULE_FAILED" || "DELETION_SCHEDULED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED",
 * //     sourceApiAssociationStatusDetail: "STRING_VALUE",
 * //     lastSuccessfulMergeDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateSourceGraphqlApiCommandInput - {@link AssociateSourceGraphqlApiCommandInput}
 * @returns {@link AssociateSourceGraphqlApiCommandOutput}
 * @see {@link AssociateSourceGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link AssociateSourceGraphqlApiCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
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
export class AssociateSourceGraphqlApiCommand extends $Command<
  AssociateSourceGraphqlApiCommandInput,
  AssociateSourceGraphqlApiCommandOutput,
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
  constructor(readonly input: AssociateSourceGraphqlApiCommandInput) {
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
  ): Handler<AssociateSourceGraphqlApiCommandInput, AssociateSourceGraphqlApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateSourceGraphqlApiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "AssociateSourceGraphqlApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "AssociateSourceGraphqlApi",
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
  private serialize(input: AssociateSourceGraphqlApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateSourceGraphqlApiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateSourceGraphqlApiCommandOutput> {
    return de_AssociateSourceGraphqlApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
