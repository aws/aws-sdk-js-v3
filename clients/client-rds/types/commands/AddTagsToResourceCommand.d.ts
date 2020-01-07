import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { AddTagsToResourceMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddTagsToResourceCommandInput = AddTagsToResourceMessage;
export declare type AddTagsToResourceCommandOutput = __MetadataBearer;
export declare class AddTagsToResourceCommand extends $Command<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput, RDSClientResolvedConfig> {
    readonly input: AddTagsToResourceCommandInput;
    constructor(input: AddTagsToResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput>;
    private serialize;
    private deserialize;
}
