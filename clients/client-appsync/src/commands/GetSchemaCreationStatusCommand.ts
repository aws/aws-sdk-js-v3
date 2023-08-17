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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { GetSchemaCreationStatusRequest, GetSchemaCreationStatusResponse } from "../models/models_0";
import { de_GetSchemaCreationStatusCommand, se_GetSchemaCreationStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaCreationStatusCommand}.
 */
export interface GetSchemaCreationStatusCommandInput extends GetSchemaCreationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetSchemaCreationStatusCommand}.
 */
export interface GetSchemaCreationStatusCommandOutput extends GetSchemaCreationStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the current status of a schema creation operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetSchemaCreationStatusCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetSchemaCreationStatusCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // GetSchemaCreationStatusRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new GetSchemaCreationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaCreationStatusResponse
 * //   status: "PROCESSING" || "ACTIVE" || "DELETING" || "FAILED" || "SUCCESS" || "NOT_APPLICABLE",
 * //   details: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaCreationStatusCommandInput - {@link GetSchemaCreationStatusCommandInput}
 * @returns {@link GetSchemaCreationStatusCommandOutput}
 * @see {@link GetSchemaCreationStatusCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCreationStatusCommandOutput} for command's `response` shape.
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
export class GetSchemaCreationStatusCommand extends $Command<
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
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
  constructor(readonly input: GetSchemaCreationStatusCommandInput) {
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
  ): Handler<GetSchemaCreationStatusCommandInput, GetSchemaCreationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSchemaCreationStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetSchemaCreationStatusCommand";
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
  private serialize(input: GetSchemaCreationStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSchemaCreationStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSchemaCreationStatusCommandOutput> {
    return de_GetSchemaCreationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
