import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { RemoveTagsFromResourceRequest, RemoveTagsFromResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsFromResourceCommandInput = RemoveTagsFromResourceRequest;
export declare type RemoveTagsFromResourceCommandOutput = RemoveTagsFromResourceResponse & __MetadataBearer;
export declare class RemoveTagsFromResourceCommand extends $Command<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: RemoveTagsFromResourceCommandInput;
    constructor(input: RemoveTagsFromResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
