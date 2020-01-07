import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { RemoveTagsInput, RemoveTagsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsCommandInput = RemoveTagsInput;
export declare type RemoveTagsCommandOutput = RemoveTagsOutput & __MetadataBearer;
export declare class RemoveTagsCommand extends $Command<RemoveTagsCommandInput, RemoveTagsCommandOutput, EMRClientResolvedConfig> {
    readonly input: RemoveTagsCommandInput;
    constructor(input: RemoveTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsCommandInput, RemoveTagsCommandOutput>;
    private serialize;
    private deserialize;
}
