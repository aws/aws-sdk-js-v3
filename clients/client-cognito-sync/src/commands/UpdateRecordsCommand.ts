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
import { UpdateRecordsRequest, UpdateRecordsResponse } from "../models/models_0";
import { de_UpdateRecordsCommand, se_UpdateRecordsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecordsCommand}.
 */
export interface UpdateRecordsCommandInput extends UpdateRecordsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecordsCommand}.
 */
export interface UpdateRecordsCommandOutput extends UpdateRecordsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Posts updates to records and adds and deletes records for a dataset and user.</p>
 *       <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p>
 *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, UpdateRecordsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, UpdateRecordsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // UpdateRecordsRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE",
 *   RecordPatches: [ // RecordPatchList
 *     { // RecordPatch
 *       Op: "replace" || "remove", // required
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *       SyncCount: Number("long"), // required
 *       DeviceLastModifiedDate: new Date("TIMESTAMP"),
 *     },
 *   ],
 *   SyncSessionToken: "STRING_VALUE", // required
 *   ClientContext: "STRING_VALUE",
 * };
 * const command = new UpdateRecordsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecordsResponse
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
 * // };
 *
 * ```
 *
 * @param UpdateRecordsCommandInput - {@link UpdateRecordsCommandInput}
 * @returns {@link UpdateRecordsCommandOutput}
 * @see {@link UpdateRecordsCommandInput} for command's `input` shape.
 * @see {@link UpdateRecordsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  Indicates an internal service
 *       error.
 *
 * @throws {@link InvalidLambdaFunctionOutputException} (client fault)
 *  <p>The AWS Lambda function returned invalid output or an exception.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Thrown when a request parameter does not comply
 *       with the associated constraints.
 *
 * @throws {@link LambdaThrottledException} (client fault)
 *  <p>AWS Lambda throttled your account, please contact AWS Support</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  Thrown when the limit on the number of objects or
 *       operations has been exceeded.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  Thrown when a user is not authorized to access the
 *       requested resource.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  Thrown if an update can't be applied because
 *       the resource was changed by another call and this would result in a conflict.
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
export class UpdateRecordsCommand extends $Command<
  UpdateRecordsCommandInput,
  UpdateRecordsCommandOutput,
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
  constructor(readonly input: UpdateRecordsCommandInput) {
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
  ): Handler<UpdateRecordsCommandInput, UpdateRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateRecordsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "UpdateRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoSyncService",
        operation: "UpdateRecords",
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
  private serialize(input: UpdateRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRecordsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRecordsCommandOutput> {
    return de_UpdateRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
