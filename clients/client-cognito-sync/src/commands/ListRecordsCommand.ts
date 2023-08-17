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

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { ListRecordsRequest, ListRecordsResponse } from "../models/models_0";
import { de_ListRecordsCommand, se_ListRecordsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecordsCommand}.
 */
export interface ListRecordsCommandInput extends ListRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecordsCommand}.
 */
export interface ListRecordsCommandOutput extends ListRecordsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets paginated records, optionally changed after a particular sync count for a dataset and
 *          identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus,
 *          the credentials used to make this API call need to have access to the identity data.</p>
 *       <p>ListRecords can be called with temporary user credentials provided by Cognito
 *          Identity or with developer credentials. You should use Cognito Identity credentials to make
 *          this API call.</p>
 *       <examples>
 *          <example>
 *             <name>ListRecords</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListRecords
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T183230Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#ListRecords",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "IdentityPoolId": "IDENTITY_POOL_ID",
 *         "IdentityId": "IDENTITY_ID",
 *         "DatasetName": "newDataSet"
 *     \}
 * \}
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
 * content-type: application/json
 * content-length: 623
 * date: Tue, 11 Nov 2014 18:32:30 GMT
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#ListRecordsResponse",
 *         "Count": 0,
 *         "DatasetDeletedAfterRequestedSyncCount": false,
 *         "DatasetExists": false,
 *         "DatasetSyncCount": 0,
 *         "LastModifiedBy": null,
 *         "MergedDatasetNames": null,
 *         "NextToken": null,
 *         "Records": [],
 *         "SyncSessionToken": "SYNC_SESSION_TOKEN"
 *     \},
 *     "Version": "1.0"
 * \}
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, ListRecordsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, ListRecordsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // ListRecordsRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE", // required
 *   LastSyncCount: Number("long"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SyncSessionToken: "STRING_VALUE",
 * };
 * const command = new ListRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecordsResponse
 * //   Records: [ // RecordList
 * //     { // Record
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       SyncCount: Number("long"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       DeviceLastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Count: Number("int"),
 * //   DatasetSyncCount: Number("long"),
 * //   LastModifiedBy: "STRING_VALUE",
 * //   MergedDatasetNames: [ // MergedDatasetNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   DatasetExists: true || false,
 * //   DatasetDeletedAfterRequestedSyncCount: true || false,
 * //   SyncSessionToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecordsCommandInput - {@link ListRecordsCommandInput}
 * @returns {@link ListRecordsCommandOutput}
 * @see {@link ListRecordsCommandInput} for command's `input` shape.
 * @see {@link ListRecordsCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Thrown if the request is
 *       throttled.
 *
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 */
export class ListRecordsCommand extends $Command<
  ListRecordsCommandInput,
  ListRecordsCommandOutput,
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
  constructor(readonly input: ListRecordsCommandInput) {
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
  ): Handler<ListRecordsCommandInput, ListRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRecordsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "ListRecordsCommand";
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
  private serialize(input: ListRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecordsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecordsCommandOutput> {
    return de_ListRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
