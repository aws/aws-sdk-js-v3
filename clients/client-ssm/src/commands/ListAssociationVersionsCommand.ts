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

import {
  ListAssociationVersionsRequest,
  ListAssociationVersionsResult,
  ListAssociationVersionsResultFilterSensitiveLog,
} from "../models/models_1";
import { de_ListAssociationVersionsCommand, se_ListAssociationVersionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssociationVersionsCommand}.
 */
export interface ListAssociationVersionsCommandInput extends ListAssociationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociationVersionsCommand}.
 */
export interface ListAssociationVersionsCommandOutput extends ListAssociationVersionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all versions of an association for a specific association ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListAssociationVersionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListAssociationVersionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // ListAssociationVersionsRequest
 *   AssociationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociationVersionsResult
 * //   AssociationVersions: [ // AssociationVersionList
 * //     { // AssociationVersionInfo
 * //       AssociationId: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       DocumentVersion: "STRING_VALUE",
 * //       Parameters: { // Parameters
 * //         "<keys>": [ // ParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Targets: [ // Targets
 * //         { // Target
 * //           Key: "STRING_VALUE",
 * //           Values: [ // TargetValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ScheduleExpression: "STRING_VALUE",
 * //       OutputLocation: { // InstanceAssociationOutputLocation
 * //         S3Location: { // S3OutputLocation
 * //           OutputS3Region: "STRING_VALUE",
 * //           OutputS3BucketName: "STRING_VALUE",
 * //           OutputS3KeyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       AssociationName: "STRING_VALUE",
 * //       MaxErrors: "STRING_VALUE",
 * //       MaxConcurrency: "STRING_VALUE",
 * //       ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 * //       SyncCompliance: "AUTO" || "MANUAL",
 * //       ApplyOnlyAtCronInterval: true || false,
 * //       CalendarNames: [ // CalendarNameOrARNList
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetLocations: [ // TargetLocations
 * //         { // TargetLocation
 * //           Accounts: [ // Accounts
 * //             "STRING_VALUE",
 * //           ],
 * //           Regions: [ // Regions
 * //             "STRING_VALUE",
 * //           ],
 * //           TargetLocationMaxConcurrency: "STRING_VALUE",
 * //           TargetLocationMaxErrors: "STRING_VALUE",
 * //           ExecutionRoleName: "STRING_VALUE",
 * //           TargetLocationAlarmConfiguration: { // AlarmConfiguration
 * //             IgnorePollAlarmFailure: true || false,
 * //             Alarms: [ // AlarmList // required
 * //               { // Alarm
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       ScheduleOffset: Number("int"),
 * //       TargetMaps: [ // TargetMaps
 * //         { // TargetMap
 * //           "<keys>": [ // TargetMapValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociationVersionsCommandInput - {@link ListAssociationVersionsCommandInput}
 * @returns {@link ListAssociationVersionsCommandOutput}
 * @see {@link ListAssociationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAssociationVersionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class ListAssociationVersionsCommand extends $Command<
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: ListAssociationVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssociationVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListAssociationVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListAssociationVersionsResultFilterSensitiveLog,
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
  private serialize(input: ListAssociationVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssociationVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssociationVersionsCommandOutput> {
    return de_ListAssociationVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
