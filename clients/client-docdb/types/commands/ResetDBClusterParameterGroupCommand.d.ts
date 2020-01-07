import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetDBClusterParameterGroupCommandInput = ResetDBClusterParameterGroupMessage;
export declare type ResetDBClusterParameterGroupCommandOutput = DBClusterParameterGroupNameMessage & __MetadataBearer;
export declare class ResetDBClusterParameterGroupCommand extends $Command<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput, DocDBClientResolvedConfig> {
    readonly input: ResetDBClusterParameterGroupCommandInput;
    constructor(input: ResetDBClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
