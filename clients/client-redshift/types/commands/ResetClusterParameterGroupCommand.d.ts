import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupNameMessage, ResetClusterParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetClusterParameterGroupCommandInput = ResetClusterParameterGroupMessage;
export declare type ResetClusterParameterGroupCommandOutput = ClusterParameterGroupNameMessage & __MetadataBearer;
export declare class ResetClusterParameterGroupCommand extends $Command<ResetClusterParameterGroupCommandInput, ResetClusterParameterGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ResetClusterParameterGroupCommandInput;
    constructor(input: ResetClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetClusterParameterGroupCommandInput, ResetClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
