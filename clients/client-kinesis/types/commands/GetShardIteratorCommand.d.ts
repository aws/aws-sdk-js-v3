import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { GetShardIteratorInput, GetShardIteratorOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetShardIteratorCommandInput = GetShardIteratorInput;
export declare type GetShardIteratorCommandOutput = GetShardIteratorOutput & __MetadataBearer;
export declare class GetShardIteratorCommand extends $Command<GetShardIteratorCommandInput, GetShardIteratorCommandOutput, KinesisClientResolvedConfig> {
    readonly input: GetShardIteratorCommandInput;
    constructor(input: GetShardIteratorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetShardIteratorCommandInput, GetShardIteratorCommandOutput>;
    private serialize;
    private deserialize;
}
