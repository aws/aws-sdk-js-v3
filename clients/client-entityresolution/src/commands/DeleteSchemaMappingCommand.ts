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

import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { DeleteSchemaMappingInput, DeleteSchemaMappingOutput } from "../models/models_0";
import { de_DeleteSchemaMappingCommand, se_DeleteSchemaMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSchemaMappingCommand}.
 */
export interface DeleteSchemaMappingCommandInput extends DeleteSchemaMappingInput {}
/**
 * @public
 *
 * The output of {@link DeleteSchemaMappingCommand}.
 */
export interface DeleteSchemaMappingCommandOutput extends DeleteSchemaMappingOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the <code>SchemaMapping</code> with a given name. This operation will succeed even if a schema
 *          with the given name does not exist. This operation will fail if there is a <code>DataIntegrationWorkflow</code>
 *          object that references the <code>SchemaMapping</code> in the workflow's <code>InputSourceConfig</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, DeleteSchemaMappingCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, DeleteSchemaMappingCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // DeleteSchemaMappingInput
 *   schemaName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSchemaMappingCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSchemaMappingOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteSchemaMappingCommandInput - {@link DeleteSchemaMappingCommandInput}
 * @returns {@link DeleteSchemaMappingCommandOutput}
 * @see {@link DeleteSchemaMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaMappingCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code: 403</code>
 *          </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. Example: Workflow already exists,
 *       Schema already exists, Workflow is currently running, etc.  <code>HTTP Status Code: 400</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the AWS Entity Resolution service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. <code>HTTP Status Code: 429</code>
 *          </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by AWS Entity Resolution. <code>HTTP Status Code: 400</code>
 *          </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 */
export class DeleteSchemaMappingCommand extends $Command<
  DeleteSchemaMappingCommandInput,
  DeleteSchemaMappingCommandOutput,
  EntityResolutionClientResolvedConfig
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
  constructor(readonly input: DeleteSchemaMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EntityResolutionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSchemaMappingCommandInput, DeleteSchemaMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSchemaMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EntityResolutionClient";
    const commandName = "DeleteSchemaMappingCommand";
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
  private serialize(input: DeleteSchemaMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSchemaMappingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSchemaMappingCommandOutput> {
    return de_DeleteSchemaMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
