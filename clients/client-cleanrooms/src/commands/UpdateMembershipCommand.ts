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
import { UpdateMembershipInput, UpdateMembershipOutput } from "../models/models_0";
import { de_UpdateMembershipCommand, se_UpdateMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMembershipCommand}.
 */
export interface UpdateMembershipCommandInput extends UpdateMembershipInput {}
/**
 * @public
 *
 * The output of {@link UpdateMembershipCommand}.
 */
export interface UpdateMembershipCommandOutput extends UpdateMembershipOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateMembershipCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateMembershipCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateMembershipInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   queryLogStatus: "STRING_VALUE",
 *   defaultResultConfiguration: { // MembershipProtectedQueryResultConfiguration
 *     outputConfiguration: { // MembershipProtectedQueryOutputConfiguration Union: only one key present
 *       s3: { // ProtectedQueryS3OutputConfiguration
 *         resultFormat: "STRING_VALUE", // required
 *         bucket: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *       },
 *     },
 *     roleArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateMembershipCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMembershipOutput
 * //   membership: { // Membership
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationCreatorAccountId: "STRING_VALUE", // required
 * //     collaborationCreatorDisplayName: "STRING_VALUE", // required
 * //     collaborationName: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     memberAbilities: [ // MemberAbilities // required
 * //       "STRING_VALUE",
 * //     ],
 * //     queryLogStatus: "STRING_VALUE", // required
 * //     defaultResultConfiguration: { // MembershipProtectedQueryResultConfiguration
 * //       outputConfiguration: { // MembershipProtectedQueryOutputConfiguration Union: only one key present
 * //         s3: { // ProtectedQueryS3OutputConfiguration
 * //           resultFormat: "STRING_VALUE", // required
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMembershipCommandInput - {@link UpdateMembershipCommandInput}
 * @returns {@link UpdateMembershipCommandOutput}
 * @see {@link UpdateMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateMembershipCommandOutput} for command's `response` shape.
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
export class UpdateMembershipCommand extends $Command<
  UpdateMembershipCommandInput,
  UpdateMembershipCommandOutput,
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
  constructor(readonly input: UpdateMembershipCommandInput) {
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
  ): Handler<UpdateMembershipCommandInput, UpdateMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "UpdateMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBastionControlPlaneServiceLambda",
        operation: "UpdateMembership",
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
  private serialize(input: UpdateMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMembershipCommandOutput> {
    return de_UpdateMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
