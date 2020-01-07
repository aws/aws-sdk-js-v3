import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { RemoveTagsFromStreamInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsFromStreamCommandInput = RemoveTagsFromStreamInput;
export declare type RemoveTagsFromStreamCommandOutput = __MetadataBearer;
export declare class RemoveTagsFromStreamCommand extends $Command<RemoveTagsFromStreamCommandInput, RemoveTagsFromStreamCommandOutput, KinesisClientResolvedConfig> {
    readonly input: RemoveTagsFromStreamCommandInput;
    constructor(input: RemoveTagsFromStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromStreamCommandInput, RemoveTagsFromStreamCommandOutput>;
    private serialize;
    private deserialize;
}
