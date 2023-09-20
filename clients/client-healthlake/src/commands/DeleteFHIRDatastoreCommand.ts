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

import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DeleteFHIRDatastoreRequest, DeleteFHIRDatastoreResponse } from "../models/models_0";
import { de_DeleteFHIRDatastoreCommand, se_DeleteFHIRDatastoreCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFHIRDatastoreCommand}.
 */
export interface DeleteFHIRDatastoreCommandInput extends DeleteFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFHIRDatastoreCommand}.
 */
export interface DeleteFHIRDatastoreCommandOutput extends DeleteFHIRDatastoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a data store. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DeleteFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DeleteFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // DeleteFHIRDatastoreRequest
 *   DatastoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFHIRDatastoreResponse
 * //   DatastoreId: "STRING_VALUE", // required
 * //   DatastoreArn: "STRING_VALUE", // required
 * //   DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED", // required
 * //   DatastoreEndpoint: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteFHIRDatastoreCommandInput - {@link DeleteFHIRDatastoreCommandInput}
 * @returns {@link DeleteFHIRDatastoreCommandOutput}
 * @see {@link DeleteFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link DeleteFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The data store is in a transition state and the user requested action can not be performed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unknown error occurs in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 */
export class DeleteFHIRDatastoreCommand extends $Command<
  DeleteFHIRDatastoreCommandInput,
  DeleteFHIRDatastoreCommandOutput,
  HealthLakeClientResolvedConfig
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
  constructor(readonly input: DeleteFHIRDatastoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFHIRDatastoreCommandInput, DeleteFHIRDatastoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFHIRDatastoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "DeleteFHIRDatastoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "HealthLake",
        operation: "DeleteFHIRDatastore",
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
  private serialize(input: DeleteFHIRDatastoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFHIRDatastoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFHIRDatastoreCommandOutput> {
    return de_DeleteFHIRDatastoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
