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

import { CopyDBClusterParameterGroupMessage, CopyDBClusterParameterGroupResult } from "../models/models_0";
import { de_CopyDBClusterParameterGroupCommand, se_CopyDBClusterParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyDBClusterParameterGroupCommand}.
 */
export interface CopyDBClusterParameterGroupCommandInput extends CopyDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBClusterParameterGroupCommand}.
 */
export interface CopyDBClusterParameterGroupCommandOutput extends CopyDBClusterParameterGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Copies the specified DB cluster parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CopyDBClusterParameterGroupMessage
 *   SourceDBClusterParameterGroupIdentifier: "STRING_VALUE", // required
 *   TargetDBClusterParameterGroupIdentifier: "STRING_VALUE", // required
 *   TargetDBClusterParameterGroupDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CopyDBClusterParameterGroupResult
 * //   DBClusterParameterGroup: { // DBClusterParameterGroup
 * //     DBClusterParameterGroupName: "STRING_VALUE",
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DBClusterParameterGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyDBClusterParameterGroupCommandInput - {@link CopyDBClusterParameterGroupCommandInput}
 * @returns {@link CopyDBClusterParameterGroupCommandOutput}
 * @see {@link CopyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A DB parameter group with the same name exists.</p>
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB parameter
 *             groups.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To copy a DB cluster parameter group
 * ```javascript
 * // This example copies a DB cluster parameter group.
 * const input = {
 *   "SourceDBClusterParameterGroupIdentifier": "mydbclusterparametergroup",
 *   "TargetDBClusterParameterGroupDescription": "My DB cluster parameter group copy",
 *   "TargetDBClusterParameterGroupIdentifier": "mydbclusterparametergroup-copy"
 * };
 * const command = new CopyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterParameterGroup": {
 *     "DBClusterParameterGroupArn": "arn:aws:rds:us-east-1:123456789012:cluster-pg:mydbclusterparametergroup-copy",
 *     "DBClusterParameterGroupName": "mydbclusterparametergroup-copy",
 *     "DBParameterGroupFamily": "aurora-mysql5.7",
 *     "Description": "My DB cluster parameter group copy"
 *   }
 * }
 * *\/
 * // example id: copy-db-cluster-parameter-group-6fefaffe-cde9-4dba-9f0b-d3f593572fe4
 * ```
 *
 */
export class CopyDBClusterParameterGroupCommand extends $Command<
  CopyDBClusterParameterGroupCommandInput,
  CopyDBClusterParameterGroupCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: CopyDBClusterParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyDBClusterParameterGroupCommandInput, CopyDBClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyDBClusterParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CopyDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CopyDBClusterParameterGroup",
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
  private serialize(input: CopyDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopyDBClusterParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CopyDBClusterParameterGroupCommandOutput> {
    return de_CopyDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
