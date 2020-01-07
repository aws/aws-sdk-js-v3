import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { PostAgentProfileRequest, PostAgentProfileResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PostAgentProfileCommandInput = PostAgentProfileRequest;
export declare type PostAgentProfileCommandOutput = PostAgentProfileResponse & __MetadataBearer;
export declare class PostAgentProfileCommand extends $Command<PostAgentProfileCommandInput, PostAgentProfileCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: PostAgentProfileCommandInput;
    constructor(input: PostAgentProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostAgentProfileCommandInput, PostAgentProfileCommandOutput>;
    private serialize;
    private deserialize;
}
