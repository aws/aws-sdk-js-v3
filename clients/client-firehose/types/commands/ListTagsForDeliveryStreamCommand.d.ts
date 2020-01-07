import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { ListTagsForDeliveryStreamInput, ListTagsForDeliveryStreamOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForDeliveryStreamCommandInput = ListTagsForDeliveryStreamInput;
export declare type ListTagsForDeliveryStreamCommandOutput = ListTagsForDeliveryStreamOutput & __MetadataBearer;
export declare class ListTagsForDeliveryStreamCommand extends $Command<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: ListTagsForDeliveryStreamCommandInput;
    constructor(input: ListTagsForDeliveryStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
