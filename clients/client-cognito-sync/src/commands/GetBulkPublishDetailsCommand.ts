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
import { GetBulkPublishDetailsRequest, GetBulkPublishDetailsResponse } from "../models/models_0";
import { de_GetBulkPublishDetailsCommand, se_GetBulkPublishDetailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBulkPublishDetailsCommand}.
 */
export interface GetBulkPublishDetailsCommandInput extends GetBulkPublishDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetBulkPublishDetailsCommand}.
 */
export interface GetBulkPublishDetailsCommandOutput extends GetBulkPublishDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetBulkPublishDetailsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetBulkPublishDetailsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // GetBulkPublishDetailsRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetBulkPublishDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetBulkPublishDetailsResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   BulkPublishStartTime: new Date("TIMESTAMP"),
 * //   BulkPublishCompleteTime: new Date("TIMESTAMP"),
 * //   BulkPublishStatus: "NOT_STARTED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //   FailureMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBulkPublishDetailsCommandInput - {@link GetBulkPublishDetailsCommandInput}
 * @returns {@link GetBulkPublishDetailsCommandOutput}
 * @see {@link GetBulkPublishDetailsCommandInput} for command's `input` shape.
 * @see {@link GetBulkPublishDetailsCommandOutput} for command's `response` shape.
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
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 */
export class GetBulkPublishDetailsCommand extends $Command<
  GetBulkPublishDetailsCommandInput,
  GetBulkPublishDetailsCommandOutput,
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
  constructor(readonly input: GetBulkPublishDetailsCommandInput) {
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
  ): Handler<GetBulkPublishDetailsCommandInput, GetBulkPublishDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBulkPublishDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "GetBulkPublishDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoSyncService",
        operation: "GetBulkPublishDetails",
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
  private serialize(input: GetBulkPublishDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBulkPublishDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBulkPublishDetailsCommandOutput> {
    return de_GetBulkPublishDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
