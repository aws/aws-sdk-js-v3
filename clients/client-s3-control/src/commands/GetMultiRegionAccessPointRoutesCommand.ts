// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
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

import { GetMultiRegionAccessPointRoutesRequest, GetMultiRegionAccessPointRoutesResult } from "../models/models_0";
import {
  de_GetMultiRegionAccessPointRoutesCommand,
  se_GetMultiRegionAccessPointRoutesCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMultiRegionAccessPointRoutesCommand}.
 */
export interface GetMultiRegionAccessPointRoutesCommandInput extends GetMultiRegionAccessPointRoutesRequest {}
/**
 * @public
 *
 * The output of {@link GetMultiRegionAccessPointRoutesCommand}.
 */
export interface GetMultiRegionAccessPointRoutesCommandOutput
  extends GetMultiRegionAccessPointRoutesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or
 *          passive.</p>
 *          <p>To obtain routing control changes and failover requests, use the Amazon S3 failover control
 *          infrastructure endpoints in these five Amazon Web Services Regions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>us-east-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>us-west-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ap-southeast-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ap-northeast-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>eu-west-1</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Your Amazon S3 bucket does not need to be in these five Regions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetMultiRegionAccessPointRoutesCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointRoutesCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetMultiRegionAccessPointRoutesRequest
 *   AccountId: "STRING_VALUE",
 *   Mrap: "STRING_VALUE", // required
 * };
 * const command = new GetMultiRegionAccessPointRoutesCommand(input);
 * const response = await client.send(command);
 * // { // GetMultiRegionAccessPointRoutesResult
 * //   Mrap: "STRING_VALUE",
 * //   Routes: [ // RouteList
 * //     { // MultiRegionAccessPointRoute
 * //       Bucket: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       TrafficDialPercentage: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMultiRegionAccessPointRoutesCommandInput - {@link GetMultiRegionAccessPointRoutesCommandInput}
 * @returns {@link GetMultiRegionAccessPointRoutesCommandOutput}
 * @see {@link GetMultiRegionAccessPointRoutesCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointRoutesCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class GetMultiRegionAccessPointRoutesCommand extends $Command<
  GetMultiRegionAccessPointRoutesCommandInput,
  GetMultiRegionAccessPointRoutesCommandOutput,
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
  constructor(readonly input: GetMultiRegionAccessPointRoutesCommandInput) {
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
  ): Handler<GetMultiRegionAccessPointRoutesCommandInput, GetMultiRegionAccessPointRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMultiRegionAccessPointRoutesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetMultiRegionAccessPointRoutesCommand";
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
    input: GetMultiRegionAccessPointRoutesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetMultiRegionAccessPointRoutesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMultiRegionAccessPointRoutesCommandOutput> {
    return de_GetMultiRegionAccessPointRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
