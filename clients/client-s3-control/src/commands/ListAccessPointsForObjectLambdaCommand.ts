// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import { ListAccessPointsForObjectLambdaRequest, ListAccessPointsForObjectLambdaResult } from "../models/models_0";
import {
  de_ListAccessPointsForObjectLambdaCommand,
  se_ListAccessPointsForObjectLambdaCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAccessPointsForObjectLambdaCommand}.
 */
export interface ListAccessPointsForObjectLambdaCommandInput extends ListAccessPointsForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPointsForObjectLambdaCommand}.
 */
export interface ListAccessPointsForObjectLambdaCommandOutput
  extends ListAccessPointsForObjectLambdaResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there
 *          are more access points than what can be returned in one call, the response will include a
 *          continuation token that you can use to list the additional access points.</p>
 *          <p>The following actions are related to
 *          <code>ListAccessPointsForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessPointsForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessPointsForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // ListAccessPointsForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccessPointsForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPointsForObjectLambdaResult
 * //   ObjectLambdaAccessPointList: [ // ObjectLambdaAccessPointList
 * //     { // ObjectLambdaAccessPoint
 * //       Name: "STRING_VALUE", // required
 * //       ObjectLambdaAccessPointArn: "STRING_VALUE",
 * //       Alias: { // ObjectLambdaAccessPointAlias
 * //         Value: "STRING_VALUE",
 * //         Status: "PROVISIONING" || "READY",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessPointsForObjectLambdaCommandInput - {@link ListAccessPointsForObjectLambdaCommandInput}
 * @returns {@link ListAccessPointsForObjectLambdaCommandOutput}
 * @see {@link ListAccessPointsForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link ListAccessPointsForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class ListAccessPointsForObjectLambdaCommand extends $Command<
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListAccessPointsForObjectLambdaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccessPointsForObjectLambdaCommandInput, ListAccessPointsForObjectLambdaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccessPointsForObjectLambdaCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListAccessPointsForObjectLambdaCommand";
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
  private serialize(
    input: ListAccessPointsForObjectLambdaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAccessPointsForObjectLambdaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAccessPointsForObjectLambdaCommandOutput> {
    return de_ListAccessPointsForObjectLambdaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
