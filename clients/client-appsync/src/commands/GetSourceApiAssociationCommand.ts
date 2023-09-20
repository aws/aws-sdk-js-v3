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
import { GetSourceApiAssociationRequest, GetSourceApiAssociationResponse } from "../models/models_0";
import { de_GetSourceApiAssociationCommand, se_GetSourceApiAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSourceApiAssociationCommand}.
 */
export interface GetSourceApiAssociationCommandInput extends GetSourceApiAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetSourceApiAssociationCommand}.
 */
export interface GetSourceApiAssociationCommandOutput extends GetSourceApiAssociationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a <code>SourceApiAssociation</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetSourceApiAssociationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetSourceApiAssociationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // GetSourceApiAssociationRequest
 *   mergedApiIdentifier: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new GetSourceApiAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetSourceApiAssociationResponse
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
 * @param GetSourceApiAssociationCommandInput - {@link GetSourceApiAssociationCommandInput}
 * @returns {@link GetSourceApiAssociationCommandOutput}
 * @see {@link GetSourceApiAssociationCommandInput} for command's `input` shape.
 * @see {@link GetSourceApiAssociationCommandOutput} for command's `response` shape.
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
export class GetSourceApiAssociationCommand extends $Command<
  GetSourceApiAssociationCommandInput,
  GetSourceApiAssociationCommandOutput,
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
  constructor(readonly input: GetSourceApiAssociationCommandInput) {
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
  ): Handler<GetSourceApiAssociationCommandInput, GetSourceApiAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSourceApiAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetSourceApiAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "GetSourceApiAssociation",
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
  private serialize(input: GetSourceApiAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSourceApiAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSourceApiAssociationCommandOutput> {
    return de_GetSourceApiAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
