import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { InvalidateProjectCacheInput, InvalidateProjectCacheOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InvalidateProjectCacheCommandInput = InvalidateProjectCacheInput;
export declare type InvalidateProjectCacheCommandOutput = InvalidateProjectCacheOutput & __MetadataBearer;
export declare class InvalidateProjectCacheCommand extends $Command<InvalidateProjectCacheCommandInput, InvalidateProjectCacheCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: InvalidateProjectCacheCommandInput;
    constructor(input: InvalidateProjectCacheCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InvalidateProjectCacheCommandInput, InvalidateProjectCacheCommandOutput>;
    private serialize;
    private deserialize;
}
