// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { CreateCollaborationInput, CreateCollaborationOutput } from "../models/models_0";
import { de_CreateCollaborationCommand, se_CreateCollaborationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateCollaborationCommand}.
 */
export interface CreateCollaborationCommandInput extends CreateCollaborationInput {}
/**
 * @public
 *
 * The output of {@link CreateCollaborationCommand}.
 */
export interface CreateCollaborationCommandOutput extends CreateCollaborationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateCollaborationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateCollaborationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateCollaborationInput
 *   members: [ // MemberList // required
 *     { // MemberSpecification
 *       accountId: "STRING_VALUE", // required
 *       memberAbilities: [ // MemberAbilities // required
 *         "STRING_VALUE",
 *       ],
 *       displayName: "STRING_VALUE", // required
 *     },
 *   ],
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   creatorMemberAbilities: [ // required
 *     "STRING_VALUE",
 *   ],
 *   creatorDisplayName: "STRING_VALUE", // required
 *   dataEncryptionMetadata: { // DataEncryptionMetadata
 *     allowCleartext: true || false, // required
 *     allowDuplicates: true || false, // required
 *     allowJoinsOnColumnsWithDifferentNames: true || false, // required
 *     preserveNulls: true || false, // required
 *   },
 *   queryLogStatus: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCollaborationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateCollaborationCommandInput - {@link CreateCollaborationCommandInput}
 * @returns {@link CreateCollaborationCommandOutput}
 * @see {@link CreateCollaborationCommandInput} for command's `input` shape.
 * @see {@link CreateCollaborationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 *
 */
export class CreateCollaborationCommand extends $Command<
  CreateCollaborationCommandInput,
  CreateCollaborationCommandOutput,
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
  constructor(readonly input: CreateCollaborationCommandInput) {
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
  ): Handler<CreateCollaborationCommandInput, CreateCollaborationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCollaborationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "CreateCollaborationCommand";
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
  private serialize(input: CreateCollaborationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCollaborationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCollaborationCommandOutput> {
    return de_CreateCollaborationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
