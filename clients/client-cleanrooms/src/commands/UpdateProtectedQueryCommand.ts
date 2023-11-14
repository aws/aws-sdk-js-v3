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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import {
  UpdateProtectedQueryInput,
  UpdateProtectedQueryOutput,
  UpdateProtectedQueryOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateProtectedQueryCommand, se_UpdateProtectedQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProtectedQueryCommand}.
 */
export interface UpdateProtectedQueryCommandInput extends UpdateProtectedQueryInput {}
/**
 * @public
 *
 * The output of {@link UpdateProtectedQueryCommand}.
 */
export interface UpdateProtectedQueryCommandOutput extends UpdateProtectedQueryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the processing of a currently running query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateProtectedQueryCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateProtectedQueryCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateProtectedQueryInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   protectedQueryIdentifier: "STRING_VALUE", // required
 *   targetStatus: "STRING_VALUE", // required
 * };
 * const command = new UpdateProtectedQueryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProtectedQueryOutput
 * //   protectedQuery: { // ProtectedQuery
 * //     id: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     sqlParameters: { // ProtectedQuerySQLParameters
 * //       queryString: "STRING_VALUE",
 * //       analysisTemplateArn: "STRING_VALUE",
 * //       parameters: { // ParameterMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     status: "STRING_VALUE", // required
 * //     resultConfiguration: { // ProtectedQueryResultConfiguration
 * //       outputConfiguration: { // ProtectedQueryOutputConfiguration Union: only one key present
 * //         s3: { // ProtectedQueryS3OutputConfiguration
 * //           resultFormat: "STRING_VALUE", // required
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     statistics: { // ProtectedQueryStatistics
 * //       totalDurationInMillis: Number("long"),
 * //     },
 * //     result: { // ProtectedQueryResult
 * //       output: { // ProtectedQueryOutput Union: only one key present
 * //         s3: { // ProtectedQueryS3Output
 * //           location: "STRING_VALUE", // required
 * //         },
 * //         memberList: [ // ProtectedQueryMemberOutputList
 * //           { // ProtectedQuerySingleMemberOutput
 * //             accountId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     error: { // ProtectedQueryError
 * //       message: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProtectedQueryCommandInput - {@link UpdateProtectedQueryCommandInput}
 * @returns {@link UpdateProtectedQueryCommandOutput}
 * @see {@link UpdateProtectedQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateProtectedQueryCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 */
export class UpdateProtectedQueryCommand extends $Command<
  UpdateProtectedQueryCommandInput,
  UpdateProtectedQueryCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: UpdateProtectedQueryCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProtectedQueryCommandInput, UpdateProtectedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateProtectedQueryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "UpdateProtectedQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateProtectedQueryOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBastionControlPlaneServiceLambda",
        operation: "UpdateProtectedQuery",
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
  private serialize(input: UpdateProtectedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProtectedQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProtectedQueryCommandOutput> {
    return de_UpdateProtectedQueryCommand(output, context);
  }
}
