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

import { GetReplicationSetInput, GetReplicationSetOutput } from "../models/models_0";
import { de_GetReplicationSetCommand, se_GetReplicationSetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReplicationSetCommand}.
 */
export interface GetReplicationSetCommandInput extends GetReplicationSetInput {}
/**
 * @public
 *
 * The output of {@link GetReplicationSetCommand}.
 */
export interface GetReplicationSetCommandOutput extends GetReplicationSetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve your Incident Manager replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // GetReplicationSetInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetReplicationSetCommand(input);
 * const response = await client.send(command);
 * // { // GetReplicationSetOutput
 * //   replicationSet: { // ReplicationSet
 * //     arn: "STRING_VALUE",
 * //     regionMap: { // RegionInfoMap // required
 * //       "<keys>": { // RegionInfo
 * //         sseKmsKeyId: "STRING_VALUE",
 * //         status: "STRING_VALUE", // required
 * //         statusMessage: "STRING_VALUE",
 * //         statusUpdateDateTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //     status: "STRING_VALUE", // required
 * //     deletionProtected: true || false, // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     createdBy: "STRING_VALUE", // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedBy: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetReplicationSetCommandInput - {@link GetReplicationSetCommandInput}
 * @returns {@link GetReplicationSetCommandOutput}
 * @see {@link GetReplicationSetCommandInput} for command's `input` shape.
 * @see {@link GetReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 */
export class GetReplicationSetCommand extends $Command<
  GetReplicationSetCommandInput,
  GetReplicationSetCommandOutput,
  SSMIncidentsClientResolvedConfig
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
  constructor(readonly input: GetReplicationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReplicationSetCommandInput, GetReplicationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReplicationSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "GetReplicationSetCommand";
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
  private serialize(input: GetReplicationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetReplicationSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReplicationSetCommandOutput> {
    return de_GetReplicationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
