import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { CreateStreamInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStreamCommandInput = CreateStreamInput;
export declare type CreateStreamCommandOutput = __MetadataBearer;
export declare class CreateStreamCommand extends $Command<CreateStreamCommandInput, CreateStreamCommandOutput, KinesisClientResolvedConfig> {
    readonly input: CreateStreamCommandInput;
    constructor(input: CreateStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamCommandInput, CreateStreamCommandOutput>;
    private serialize;
    private deserialize;
}
