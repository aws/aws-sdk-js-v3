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
import { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/models_0";
import { de_DescribeDatasetCommand, se_DescribeDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatasetCommand}.
 */
export interface DescribeDatasetCommandInput extends DescribeDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetCommand}.
 */
export interface DescribeDatasetCommandOutput extends DescribeDatasetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each
 *          identity has access only to its own data. Thus, the credentials used to make this API call
 *          need to have access to the identity data.</p>
 *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, DescribeDatasetCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, DescribeDatasetCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // DescribeDatasetRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetResponse
 * //   Dataset: { // Dataset
 * //     IdentityId: "STRING_VALUE",
 * //     DatasetName: "STRING_VALUE",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     LastModifiedBy: "STRING_VALUE",
 * //     DataStorage: Number("long"),
 * //     NumRecords: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatasetCommandInput - {@link DescribeDatasetCommandInput}
 * @returns {@link DescribeDatasetCommandOutput}
 * @see {@link DescribeDatasetCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetCommandOutput} for command's `response` shape.
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
export class DescribeDatasetCommand extends $Command<
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
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
  constructor(readonly input: DescribeDatasetCommandInput) {
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
  ): Handler<DescribeDatasetCommandInput, DescribeDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDatasetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "DescribeDatasetCommand";
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
  private serialize(input: DescribeDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDatasetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatasetCommandOutput> {
    return de_DescribeDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
