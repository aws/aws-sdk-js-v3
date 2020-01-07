import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { ListStreamConsumersInput, ListStreamConsumersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStreamConsumersCommandInput = ListStreamConsumersInput;
export declare type ListStreamConsumersCommandOutput = ListStreamConsumersOutput & __MetadataBearer;
export declare class ListStreamConsumersCommand extends $Command<ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput, KinesisClientResolvedConfig> {
    readonly input: ListStreamConsumersCommandInput;
    constructor(input: ListStreamConsumersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput>;
    private serialize;
    private deserialize;
}
