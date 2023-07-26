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
import { CreateSchemaMappingInput, CreateSchemaMappingOutput } from "../models/models_0";
import { de_CreateSchemaMappingCommand, se_CreateSchemaMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSchemaMappingCommand}.
 */
export interface CreateSchemaMappingCommandInput extends CreateSchemaMappingInput {}
/**
 * @public
 *
 * The output of {@link CreateSchemaMappingCommand}.
 */
export interface CreateSchemaMappingCommandOutput extends CreateSchemaMappingOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a schema mapping, which defines the schema of the input customer records table.
 *          The <code>SchemaMapping</code> also provides Entity Resolution with some metadata about the
 *          table, such as the attribute types of the columns and which columns to match on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, CreateSchemaMappingCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, CreateSchemaMappingCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // CreateSchemaMappingInput
 *   schemaName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   mappedInputFields: [ // SchemaInputAttributes
 *     { // SchemaInputAttribute
 *       fieldName: "STRING_VALUE", // required
 *       type: "NAME" || "NAME_FIRST" || "NAME_MIDDLE" || "NAME_LAST" || "ADDRESS" || "ADDRESS_STREET1" || "ADDRESS_STREET2" || "ADDRESS_STREET3" || "ADDRESS_CITY" || "ADDRESS_STATE" || "ADDRESS_COUNTRY" || "ADDRESS_POSTALCODE" || "PHONE" || "PHONE_NUMBER" || "PHONE_COUNTRYCODE" || "EMAIL_ADDRESS" || "UNIQUE_ID" || "DATE" || "STRING", // required
 *       groupName: "STRING_VALUE",
 *       matchKey: "STRING_VALUE",
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSchemaMappingCommand(input);
 * const response = await client.send(command);
 * // { // CreateSchemaMappingOutput
 * //   schemaName: "STRING_VALUE", // required
 * //   schemaArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   mappedInputFields: [ // SchemaInputAttributes // required
 * //     { // SchemaInputAttribute
 * //       fieldName: "STRING_VALUE", // required
 * //       type: "NAME" || "NAME_FIRST" || "NAME_MIDDLE" || "NAME_LAST" || "ADDRESS" || "ADDRESS_STREET1" || "ADDRESS_STREET2" || "ADDRESS_STREET3" || "ADDRESS_CITY" || "ADDRESS_STATE" || "ADDRESS_COUNTRY" || "ADDRESS_POSTALCODE" || "PHONE" || "PHONE_NUMBER" || "PHONE_COUNTRYCODE" || "EMAIL_ADDRESS" || "UNIQUE_ID" || "DATE" || "STRING", // required
 * //       groupName: "STRING_VALUE",
 * //       matchKey: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateSchemaMappingCommandInput - {@link CreateSchemaMappingCommandInput}
 * @returns {@link CreateSchemaMappingCommandOutput}
 * @see {@link CreateSchemaMappingCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaMappingCommandOutput} for command's `response` shape.
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
 * @throws {@link ExceedsLimitException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current AWS Entity Resolution account limits.
 *       The error message describes the limit exceeded. <code>HTTP Status Code: 402</code>
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
export class CreateSchemaMappingCommand extends $Command<
  CreateSchemaMappingCommandInput,
  CreateSchemaMappingCommandOutput,
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
  constructor(readonly input: CreateSchemaMappingCommandInput) {
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
  ): Handler<CreateSchemaMappingCommandInput, CreateSchemaMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSchemaMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EntityResolutionClient";
    const commandName = "CreateSchemaMappingCommand";
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
  private serialize(input: CreateSchemaMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSchemaMappingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSchemaMappingCommandOutput> {
    return de_CreateSchemaMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
