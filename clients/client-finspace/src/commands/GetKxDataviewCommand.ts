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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { GetKxDataviewRequest, GetKxDataviewResponse } from "../models/models_0";
import { de_GetKxDataviewCommand, se_GetKxDataviewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetKxDataviewCommand}.
 */
export interface GetKxDataviewCommandInput extends GetKxDataviewRequest {}
/**
 * @public
 *
 * The output of {@link GetKxDataviewCommand}.
 */
export interface GetKxDataviewCommandOutput extends GetKxDataviewResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 * Retrieves details of the dataview.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxDataviewCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxDataviewCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // GetKxDataviewRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   dataviewName: "STRING_VALUE", // required
 * };
 * const command = new GetKxDataviewCommand(input);
 * const response = await client.send(command);
 * // { // GetKxDataviewResponse
 * //   databaseName: "STRING_VALUE",
 * //   dataviewName: "STRING_VALUE",
 * //   azMode: "SINGLE" || "MULTI",
 * //   availabilityZoneId: "STRING_VALUE",
 * //   changesetId: "STRING_VALUE",
 * //   segmentConfigurations: [ // KxDataviewSegmentConfigurationList
 * //     { // KxDataviewSegmentConfiguration
 * //       dbPaths: [ // SegmentConfigurationDbPathList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       volumeName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   activeVersions: [ // KxDataviewActiveVersionList
 * //     { // KxDataviewActiveVersion
 * //       changesetId: "STRING_VALUE",
 * //       segmentConfigurations: [
 * //         {
 * //           dbPaths: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           volumeName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       attachedClusters: [ // AttachedClusterList
 * //         "STRING_VALUE",
 * //       ],
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //       versionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   description: "STRING_VALUE",
 * //   autoUpdate: true || false,
 * //   environmentId: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED" || "DELETING",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKxDataviewCommandInput - {@link GetKxDataviewCommandInput}
 * @returns {@link GetKxDataviewCommandOutput}
 * @see {@link GetKxDataviewCommandInput} for command's `input` shape.
 * @see {@link GetKxDataviewCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class GetKxDataviewCommand extends $Command<
  GetKxDataviewCommandInput,
  GetKxDataviewCommandOutput,
  FinspaceClientResolvedConfig
> {
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
  constructor(readonly input: GetKxDataviewCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKxDataviewCommandInput, GetKxDataviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetKxDataviewCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "GetKxDataviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroManagementService",
        operation: "GetKxDataview",
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
  private serialize(input: GetKxDataviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetKxDataviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKxDataviewCommandOutput> {
    return de_GetKxDataviewCommand(output, context);
  }
}
