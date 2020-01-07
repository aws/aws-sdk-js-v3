import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetDBClusterParameterGroupCommandInput = ResetDBClusterParameterGroupMessage;
export declare type ResetDBClusterParameterGroupCommandOutput = DBClusterParameterGroupNameMessage & __MetadataBearer;
export declare class ResetDBClusterParameterGroupCommand extends $Command<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ResetDBClusterParameterGroupCommandInput;
    constructor(input: ResetDBClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
