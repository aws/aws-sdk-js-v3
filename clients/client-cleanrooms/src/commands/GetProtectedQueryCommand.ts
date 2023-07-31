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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import {
  GetProtectedQueryInput,
  GetProtectedQueryOutput,
  GetProtectedQueryOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetProtectedQueryCommand, se_GetProtectedQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProtectedQueryCommand}.
 */
export interface GetProtectedQueryCommandInput extends GetProtectedQueryInput {}
/**
 * @public
 *
 * The output of {@link GetProtectedQueryCommand}.
 */
export interface GetProtectedQueryCommandOutput extends GetProtectedQueryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns query processing metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetProtectedQueryCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetProtectedQueryCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetProtectedQueryInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   protectedQueryIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetProtectedQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetProtectedQueryOutput
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
 * @param GetProtectedQueryCommandInput - {@link GetProtectedQueryCommandInput}
 * @returns {@link GetProtectedQueryCommandOutput}
 * @see {@link GetProtectedQueryCommandInput} for command's `input` shape.
 * @see {@link GetProtectedQueryCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
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
export class GetProtectedQueryCommand extends $Command<
  GetProtectedQueryCommandInput,
  GetProtectedQueryCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: GetProtectedQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProtectedQueryCommandInput, GetProtectedQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProtectedQueryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "GetProtectedQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetProtectedQueryOutputFilterSensitiveLog,
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
  private serialize(input: GetProtectedQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProtectedQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProtectedQueryCommandOutput> {
    return de_GetProtectedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
