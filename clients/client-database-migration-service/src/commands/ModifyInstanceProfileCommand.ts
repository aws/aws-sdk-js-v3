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
import { ModifyInstanceProfileMessage, ModifyInstanceProfileResponse } from "../models/models_1";
import { de_ModifyInstanceProfileCommand, se_ModifyInstanceProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceProfileCommand}.
 */
export interface ModifyInstanceProfileCommandInput extends ModifyInstanceProfileMessage {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceProfileCommand}.
 */
export interface ModifyInstanceProfileCommandOutput extends ModifyInstanceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified instance profile using the provided parameters.</p>
 *          <note>
 *             <p>All migration projects associated with the instance profile must be deleted
 *             or modified before you can modify the instance profile.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyInstanceProfileCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyInstanceProfileCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyInstanceProfileMessage
 *   InstanceProfileIdentifier: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   KmsKeyArn: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   NetworkType: "STRING_VALUE",
 *   InstanceProfileName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SubnetGroupIdentifier: "STRING_VALUE",
 *   VpcSecurityGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceProfileResponse
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
 * @param ModifyInstanceProfileCommandInput - {@link ModifyInstanceProfileCommandInput}
 * @returns {@link ModifyInstanceProfileCommandOutput}
 * @see {@link ModifyInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *  <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 *
 * @throws {@link S3ResourceNotFoundFault} (client fault)
 *  <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Modify Instance Profile
 * ```javascript
 * // Modifies the specified instance profile using the provided parameters.
 * const input = {
 *   "AvailabilityZone": "",
 *   "Description": "",
 *   "InstanceProfileIdentifier": "",
 *   "InstanceProfileName": "",
 *   "KmsKeyArn": "",
 *   "NetworkType": "",
 *   "PubliclyAccessible": true,
 *   "SubnetGroupIdentifier": "",
 *   "VpcSecurityGroups": []
 * };
 * const command = new ModifyInstanceProfileCommand(input);
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
 * // example id: modify-instance-profile-1689724223329
 * ```
 *
 */
export class ModifyInstanceProfileCommand extends $Command<
  ModifyInstanceProfileCommandInput,
  ModifyInstanceProfileCommandOutput,
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
  constructor(readonly input: ModifyInstanceProfileCommandInput) {
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
  ): Handler<ModifyInstanceProfileCommandInput, ModifyInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstanceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "ModifyInstanceProfile",
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
  private serialize(input: ModifyInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyInstanceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyInstanceProfileCommandOutput> {
    return de_ModifyInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
