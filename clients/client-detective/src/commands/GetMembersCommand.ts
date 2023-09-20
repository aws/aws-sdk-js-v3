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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { GetMembersRequest, GetMembersResponse, GetMembersResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetMembersCommand, se_GetMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMembersCommand}.
 */
export interface GetMembersCommandInput extends GetMembersRequest {}
/**
 * @public
 *
 * The output of {@link GetMembersCommand}.
 */
export interface GetMembersCommandOutput extends GetMembersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the membership details for specified member accounts for a behavior
 *          graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, GetMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, GetMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // GetMembersRequest
 *   GraphArn: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetMembersCommand(input);
 * const response = await client.send(command);
 * // { // GetMembersResponse
 * //   MemberDetails: [ // MemberDetailList
 * //     { // MemberDetail
 * //       AccountId: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       GraphArn: "STRING_VALUE",
 * //       MasterId: "STRING_VALUE",
 * //       AdministratorId: "STRING_VALUE",
 * //       Status: "INVITED" || "VERIFICATION_IN_PROGRESS" || "VERIFICATION_FAILED" || "ENABLED" || "ACCEPTED_BUT_DISABLED",
 * //       DisabledReason: "VOLUME_TOO_HIGH" || "VOLUME_UNKNOWN",
 * //       InvitedTime: new Date("TIMESTAMP"),
 * //       UpdatedTime: new Date("TIMESTAMP"),
 * //       VolumeUsageInBytes: Number("long"),
 * //       VolumeUsageUpdatedTime: new Date("TIMESTAMP"),
 * //       PercentOfGraphUtilization: Number("double"),
 * //       PercentOfGraphUtilizationUpdatedTime: new Date("TIMESTAMP"),
 * //       InvitationType: "INVITATION" || "ORGANIZATION",
 * //       VolumeUsageByDatasourcePackage: { // VolumeUsageByDatasourcePackage
 * //         "<keys>": { // DatasourcePackageUsageInfo
 * //           VolumeUsageInBytes: Number("long"),
 * //           VolumeUsageUpdateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       DatasourcePackageIngestStates: { // DatasourcePackageIngestStates
 * //         "<keys>": "STARTED" || "STOPPED" || "DISABLED",
 * //       },
 * //     },
 * //   ],
 * //   UnprocessedAccounts: [ // UnprocessedAccountList
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMembersCommandInput - {@link GetMembersCommandInput}
 * @returns {@link GetMembersCommandOutput}
 * @see {@link GetMembersCommandInput} for command's `input` shape.
 * @see {@link GetMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class GetMembersCommand extends $Command<
  GetMembersCommandInput,
  GetMembersCommandOutput,
  DetectiveClientResolvedConfig
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
  constructor(readonly input: GetMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMembersCommandInput, GetMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMembersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "GetMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMembersResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDetective",
        operation: "GetMembers",
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
  private serialize(input: GetMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMembersCommandOutput> {
    return de_GetMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
