import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ResizeClusterMessage, ResizeClusterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResizeClusterCommandInput = ResizeClusterMessage;
export declare type ResizeClusterCommandOutput = ResizeClusterResult & __MetadataBearer;
export declare class ResizeClusterCommand extends $Command<ResizeClusterCommandInput, ResizeClusterCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ResizeClusterCommandInput;
    constructor(input: ResizeClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResizeClusterCommandInput, ResizeClusterCommandOutput>;
    private serialize;
    private deserialize;
}
