import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { PutRecordsInput, PutRecordsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRecordsCommandInput = PutRecordsInput;
export declare type PutRecordsCommandOutput = PutRecordsOutput & __MetadataBearer;
export declare class PutRecordsCommand extends $Command<PutRecordsCommandInput, PutRecordsCommandOutput, KinesisClientResolvedConfig> {
    readonly input: PutRecordsCommandInput;
    constructor(input: PutRecordsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRecordsCommandInput, PutRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
