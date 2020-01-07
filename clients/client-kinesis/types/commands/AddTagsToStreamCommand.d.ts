import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { AddTagsToStreamInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddTagsToStreamCommandInput = AddTagsToStreamInput;
export declare type AddTagsToStreamCommandOutput = __MetadataBearer;
export declare class AddTagsToStreamCommand extends $Command<AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput, KinesisClientResolvedConfig> {
    readonly input: AddTagsToStreamCommandInput;
    constructor(input: AddTagsToStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput>;
    private serialize;
    private deserialize;
}
