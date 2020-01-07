import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterParameterGroupNameMessage, ModifyClusterParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterParameterGroupCommandInput = ModifyClusterParameterGroupMessage;
export declare type ModifyClusterParameterGroupCommandOutput = ClusterParameterGroupNameMessage & __MetadataBearer;
export declare class ModifyClusterParameterGroupCommand extends $Command<ModifyClusterParameterGroupCommandInput, ModifyClusterParameterGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterParameterGroupCommandInput;
    constructor(input: ModifyClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterParameterGroupCommandInput, ModifyClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
