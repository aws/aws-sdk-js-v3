// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { GetDatalakeRequest, GetDatalakeResponse } from "../models/models_0";
import { de_GetDatalakeCommand, se_GetDatalakeCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDatalakeCommand}.
 */
export interface GetDatalakeCommandInput extends GetDatalakeRequest {}
/**
 * @public
 *
 * The output of {@link GetDatalakeCommand}.
 */
export interface GetDatalakeCommandOutput extends GetDatalakeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services account ID. You can use the <code>GetDatalake</code> API to know whether
 *          Security Lake is enabled for the current Region. This API does not take input parameters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, GetDatalakeCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, GetDatalakeCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = {};
 * const command = new GetDatalakeCommand(input);
 * const response = await client.send(command);
 * // { // GetDatalakeResponse
 * //   configurations: { // LakeConfigurationResponseMap // required
 * //     "<keys>": { // LakeConfigurationResponse
 * //       encryptionKey: "STRING_VALUE",
 * //       retentionSettings: [ // RetentionSettingList
 * //         { // RetentionSetting
 * //           storageClass: "STRING_VALUE",
 * //           retentionPeriod: Number("int"),
 * //         },
 * //       ],
 * //       tagsMap: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       replicationDestinationRegions: [ // RegionSet
 * //         "STRING_VALUE",
 * //       ],
 * //       replicationRoleArn: "STRING_VALUE",
 * //       s3BucketArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       updateStatus: { // UpdateStatus
 * //         lastUpdateRequestId: "STRING_VALUE",
 * //         lastUpdateStatus: "STRING_VALUE",
 * //         lastUpdateFailure: { // LastUpdateFailure
 * //           reason: "STRING_VALUE",
 * //           code: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDatalakeCommandInput - {@link GetDatalakeCommandInput}
 * @returns {@link GetDatalakeCommandOutput}
 * @see {@link GetDatalakeCommandInput} for command's `input` shape.
 * @see {@link GetDatalakeCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *  <p>Amazon Security Lake cannot find an Amazon Web Services account with the accountID that you
 *          specified, or the account whose credentials you used to make this request isn't a member of
 *          an organization.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class GetDatalakeCommand extends $Command<
  GetDatalakeCommandInput,
  GetDatalakeCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: GetDatalakeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDatalakeCommandInput, GetDatalakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDatalakeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "GetDatalakeCommand";
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
  private serialize(input: GetDatalakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDatalakeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDatalakeCommandOutput> {
    return de_GetDatalakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
