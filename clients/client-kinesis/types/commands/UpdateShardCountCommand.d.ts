import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { UpdateShardCountInput, UpdateShardCountOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateShardCountCommandInput = UpdateShardCountInput;
export declare type UpdateShardCountCommandOutput = UpdateShardCountOutput & __MetadataBearer;
export declare class UpdateShardCountCommand extends $Command<UpdateShardCountCommandInput, UpdateShardCountCommandOutput, KinesisClientResolvedConfig> {
    readonly input: UpdateShardCountCommandInput;
    constructor(input: UpdateShardCountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateShardCountCommandInput, UpdateShardCountCommandOutput>;
    private serialize;
    private deserialize;
}
