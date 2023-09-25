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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DeleteInstanceProfileMessage, DeleteInstanceProfileResponse } from "../models/models_0";
import { de_DeleteInstanceProfileCommand, se_DeleteInstanceProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstanceProfileCommand}.
 */
export interface DeleteInstanceProfileCommandInput extends DeleteInstanceProfileMessage {}
/**
 * @public
 *
 * The output of {@link DeleteInstanceProfileCommand}.
 */
export interface DeleteInstanceProfileCommandOutput extends DeleteInstanceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified instance profile.</p>
 *          <note>
 *             <p>All migration projects associated with the instance profile must be deleted or modified
 *             before you can delete the instance profile.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteInstanceProfileCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteInstanceProfileCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteInstanceProfileMessage
 *   InstanceProfileIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInstanceProfileResponse
 * //   InstanceProfile: { // InstanceProfile
 * //     InstanceProfileArn: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //     PubliclyAccessible: true || false,
 * //     NetworkType: "STRING_VALUE",
 * //     InstanceProfileName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     InstanceProfileCreationTime: new Date("TIMESTAMP"),
 * //     SubnetGroupIdentifier: "STRING_VALUE",
 * //     VpcSecurityGroups: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInstanceProfileCommandInput - {@link DeleteInstanceProfileCommandInput}
 * @returns {@link DeleteInstanceProfileCommandOutput}
 * @see {@link DeleteInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Delete Instance Profile
 * ```javascript
 * // Deletes the specified instance profile.
 * const input = {
 *   "InstanceProfileIdentifier": "arn:aws:dms:us-east-1:012345678901:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 * };
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceProfile": {
 *     "InstanceProfileArn": "arn:aws:dms:us-east-1:012345678901:instance-profile:my-instance-profile",
 *     "InstanceProfileCreationTime": "2022-12-16T09:44:43.543246Z",
 *     "InstanceProfileName": "my-instance-profile",
 *     "KmsKeyArn": "arn:aws:kms:us-east-1:012345678901:key/01234567-89ab-cdef-0123-456789abcdef",
 *     "PubliclyAccessible": true,
 *     "SubnetGroupIdentifier": "public-subnets",
 *     "VpcIdentifier": "vpc-0a1b2c3d4e5f6g7h8",
 *     "VpcSecurityGroups": [
 *       "sg-0123456"
 *     ]
 *   }
 * }
 * *\/
 * // example id: delete-instance-profile-1689716924105
 * ```
 *
 */
export class DeleteInstanceProfileCommand extends $Command<
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: DeleteInstanceProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteInstanceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DeleteInstanceProfile",
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
  private serialize(input: DeleteInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteInstanceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInstanceProfileCommandOutput> {
    return de_DeleteInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
