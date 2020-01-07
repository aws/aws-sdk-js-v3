import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { RemoveTagsFromResourceRequest, RemoveTagsFromResourceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsFromResourceCommandInput = RemoveTagsFromResourceRequest;
export declare type RemoveTagsFromResourceCommandOutput = RemoveTagsFromResourceResult & __MetadataBearer;
export declare class RemoveTagsFromResourceCommand extends $Command<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput, SSMClientResolvedConfig> {
    readonly input: RemoveTagsFromResourceCommandInput;
    constructor(input: RemoveTagsFromResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
