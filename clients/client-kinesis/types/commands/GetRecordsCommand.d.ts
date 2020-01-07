import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { GetRecordsInput, GetRecordsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRecordsCommandInput = GetRecordsInput;
export declare type GetRecordsCommandOutput = GetRecordsOutput & __MetadataBearer;
export declare class GetRecordsCommand extends $Command<GetRecordsCommandInput, GetRecordsCommandOutput, KinesisClientResolvedConfig> {
    readonly input: GetRecordsCommandInput;
    constructor(input: GetRecordsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRecordsCommandInput, GetRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
