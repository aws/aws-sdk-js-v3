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

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { DescribeIdentityPoolUsageRequest, DescribeIdentityPoolUsageResponse } from "../models/models_0";
import { de_DescribeIdentityPoolUsageCommand, se_DescribeIdentityPoolUsageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityPoolUsageCommand}.
 */
export interface DescribeIdentityPoolUsageCommandInput extends DescribeIdentityPoolUsageRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityPoolUsageCommand}.
 */
export interface DescribeIdentityPoolUsageCommandOutput extends DescribeIdentityPoolUsageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets usage details (for example, data storage) about a particular identity pool.</p>
 *       <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 *
 *       <examples>
 *          <example>
 *             <name>DescribeIdentityPoolUsage</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 8dc0e749-c8cd-48bd-8520-da6be00d528b
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.DescribeIdentityPoolUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T205737Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#DescribeIdentityPoolUsage",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "IdentityPoolId": "IDENTITY_POOL_ID"
 *     \}
 * \}
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 8dc0e749-c8cd-48bd-8520-da6be00d528b
 * content-type: application/json
 * content-length: 271
 * date: Tue, 11 Nov 2014 20:57:37 GMT
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#DescribeIdentityPoolUsageResponse",
 *         "IdentityPoolUsage":
 *         \{
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.413231134115E9,
 *             "SyncSessionsCount": null
 *         \}
 *     \},
 *     "Version": "1.0"
 * \}
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, DescribeIdentityPoolUsageCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, DescribeIdentityPoolUsageCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // DescribeIdentityPoolUsageRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new DescribeIdentityPoolUsageCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdentityPoolUsageResponse
 * //   IdentityPoolUsage: { // IdentityPoolUsage
 * //     IdentityPoolId: "STRING_VALUE",
 * //     SyncSessionsCount: Number("long"),
 * //     DataStorage: Number("long"),
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeIdentityPoolUsageCommandInput - {@link DescribeIdentityPoolUsageCommandInput}
 * @returns {@link DescribeIdentityPoolUsageCommandOutput}
 * @see {@link DescribeIdentityPoolUsageCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityPoolUsageCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  Indicates an internal service
 *       error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Thrown when a request parameter does not comply
 *       with the associated constraints.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  Thrown when a user is not authorized to access the
 *       requested resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Thrown if the resource doesn't
 *       exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Thrown if the request is
 *       throttled.
 *
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 */
export class DescribeIdentityPoolUsageCommand extends $Command<
  DescribeIdentityPoolUsageCommandInput,
  DescribeIdentityPoolUsageCommandOutput,
  CognitoSyncClientResolvedConfig
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
  constructor(readonly input: DescribeIdentityPoolUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIdentityPoolUsageCommandInput, DescribeIdentityPoolUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIdentityPoolUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "DescribeIdentityPoolUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoSyncService",
        operation: "DescribeIdentityPoolUsage",
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
  private serialize(input: DescribeIdentityPoolUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeIdentityPoolUsageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIdentityPoolUsageCommandOutput> {
    return de_DescribeIdentityPoolUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
