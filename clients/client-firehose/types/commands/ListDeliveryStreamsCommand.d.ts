import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { ListDeliveryStreamsInput, ListDeliveryStreamsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeliveryStreamsCommandInput = ListDeliveryStreamsInput;
export declare type ListDeliveryStreamsCommandOutput = ListDeliveryStreamsOutput & __MetadataBearer;
export declare class ListDeliveryStreamsCommand extends $Command<ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: ListDeliveryStreamsCommandInput;
    constructor(input: ListDeliveryStreamsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
