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
import { DescribeInstanceProfilesMessage, DescribeInstanceProfilesResponse } from "../models/models_0";
import { de_DescribeInstanceProfilesCommand, se_DescribeInstanceProfilesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceProfilesCommand}.
 */
export interface DescribeInstanceProfilesCommandInput extends DescribeInstanceProfilesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceProfilesCommand}.
 */
export interface DescribeInstanceProfilesCommandOutput extends DescribeInstanceProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of instance profiles for your account in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeInstanceProfilesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeInstanceProfilesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeInstanceProfilesMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceProfilesResponse
 * //   Marker: "STRING_VALUE",
 * //   InstanceProfiles: [ // InstanceProfileList
 * //     { // InstanceProfile
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       KmsKeyArn: "STRING_VALUE",
 * //       PubliclyAccessible: true || false,
 * //       NetworkType: "STRING_VALUE",
 * //       InstanceProfileName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       InstanceProfileCreationTime: new Date("TIMESTAMP"),
 * //       SubnetGroupIdentifier: "STRING_VALUE",
 * //       VpcSecurityGroups: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInstanceProfilesCommandInput - {@link DescribeInstanceProfilesCommandInput}
 * @returns {@link DescribeInstanceProfilesCommandOutput}
 * @see {@link DescribeInstanceProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceProfilesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe Instance Profiles
 * ```javascript
 * // Returns a paginated list of instance profiles for your account in the current region.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "instance-profile-identifier",
 *       "Values": [
 *         "arn:aws:dms:us-east-1:012345678901:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 *       ]
 *     }
 *   ],
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "MaxRecords": 20
 * };
 * const command = new DescribeInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceProfiles": [
 *     {
 *       "InstanceProfileArn": "arn:aws:dms:us-east-1:012345678901:instance-profile:my-instance-profile",
 *       "InstanceProfileCreationTime": "2022-12-16T09:44:43.543246Z",
 *       "InstanceProfileName": "my-instance-profile",
 *       "KmsKeyArn": "arn:aws:kms:us-east-1:012345678901:key/01234567-89ab-cdef-0123-456789abcdef",
 *       "PubliclyAccessible": true,
 *       "SubnetGroupIdentifier": "public-subnets",
 *       "VpcIdentifier": "vpc-0a1b2c3d4e5f6g7h8"
 *     }
 *   ],
 *   "Marker": "0123456789abcdefghijklmnopqrs"
 * }
 * *\/
 * // example id: describe-instance-profiles-1689718406840
 * ```
 *
 */
export class DescribeInstanceProfilesCommand extends $Command<
  DescribeInstanceProfilesCommandInput,
  DescribeInstanceProfilesCommandOutput,
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
  constructor(readonly input: DescribeInstanceProfilesCommandInput) {
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
  ): Handler<DescribeInstanceProfilesCommandInput, DescribeInstanceProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeInstanceProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeInstanceProfiles",
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
  private serialize(input: DescribeInstanceProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstanceProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstanceProfilesCommandOutput> {
    return de_DescribeInstanceProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
