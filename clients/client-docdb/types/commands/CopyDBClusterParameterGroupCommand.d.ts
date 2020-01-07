import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CopyDBClusterParameterGroupMessage, CopyDBClusterParameterGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyDBClusterParameterGroupCommandInput = CopyDBClusterParameterGroupMessage;
export declare type CopyDBClusterParameterGroupCommandOutput = CopyDBClusterParameterGroupResult & __MetadataBearer;
export declare class CopyDBClusterParameterGroupCommand extends $Command<CopyDBClusterParameterGroupCommandInput, CopyDBClusterParameterGroupCommandOutput, DocDBClientResolvedConfig> {
    readonly input: CopyDBClusterParameterGroupCommandInput;
    constructor(input: CopyDBClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyDBClusterParameterGroupCommandInput, CopyDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
