import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { TagResourceInput, TagResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagResourceCommandInput = TagResourceInput;
export declare type TagResourceCommandOutput = TagResourceOutput & __MetadataBearer;
export declare class TagResourceCommand extends $Command<TagResourceCommandInput, TagResourceCommandOutput, SFNClientResolvedConfig> {
    readonly input: TagResourceCommandInput;
    constructor(input: TagResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
