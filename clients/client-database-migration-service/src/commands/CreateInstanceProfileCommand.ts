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
import { CreateInstanceProfileMessage, CreateInstanceProfileResponse } from "../models/models_0";
import { de_CreateInstanceProfileCommand, se_CreateInstanceProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandInput extends CreateInstanceProfileMessage {}
/**
 * @public
 *
 * The output of {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandOutput extends CreateInstanceProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates the instance profile using the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateInstanceProfileCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateInstanceProfileCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateInstanceProfileMessage
 *   AvailabilityZone: "STRING_VALUE",
 *   KmsKeyArn: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   NetworkType: "STRING_VALUE",
 *   InstanceProfileName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SubnetGroupIdentifier: "STRING_VALUE",
 *   VpcSecurityGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceProfileResponse
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
 * @param CreateInstanceProfileCommandInput - {@link CreateInstanceProfileCommandInput}
 * @returns {@link CreateInstanceProfileCommandOutput}
 * @see {@link CreateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
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
 * @example Create Instance Profile
 * ```javascript
 * // Creates the instance profile using the specified parameters.
 * const input = {
 *   "Description": "Description",
 *   "InstanceProfileName": "my-instance-profile",
 *   "KmsKeyArn": "arn:aws:kms:us-east-1:012345678901:key/01234567-89ab-cdef-0123-456789abcdef",
 *   "NetworkType": "DUAL",
 *   "PubliclyAccessible": true,
 *   "SubnetGroupIdentifier": "my-subnet-group",
 *   "Tags": [
 *     {
 *       "Key": "access",
 *       "Value": "authorizedusers"
 *     }
 *   ]
 * };
 * const command = new CreateInstanceProfileCommand(input);
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
 * // example id: create-instance-profile-1689716070633
 * ```
 *
 */
export class CreateInstanceProfileCommand extends $Command<
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
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
  constructor(readonly input: CreateInstanceProfileCommandInput) {
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
  ): Handler<CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInstanceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "CreateInstanceProfile",
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
  private serialize(input: CreateInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateInstanceProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceProfileCommandOutput> {
    return de_CreateInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
