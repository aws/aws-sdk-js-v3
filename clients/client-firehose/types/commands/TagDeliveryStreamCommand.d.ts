import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { TagDeliveryStreamInput, TagDeliveryStreamOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagDeliveryStreamCommandInput = TagDeliveryStreamInput;
export declare type TagDeliveryStreamCommandOutput = TagDeliveryStreamOutput & __MetadataBearer;
export declare class TagDeliveryStreamCommand extends $Command<TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: TagDeliveryStreamCommandInput;
    constructor(input: TagDeliveryStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
