import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { UntagProjectRequest, UntagProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagProjectCommandInput = UntagProjectRequest;
export declare type UntagProjectCommandOutput = UntagProjectResult & __MetadataBearer;
export declare class UntagProjectCommand extends $Command<UntagProjectCommandInput, UntagProjectCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: UntagProjectCommandInput;
    constructor(input: UntagProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagProjectCommandInput, UntagProjectCommandOutput>;
    private serialize;
    private deserialize;
}
