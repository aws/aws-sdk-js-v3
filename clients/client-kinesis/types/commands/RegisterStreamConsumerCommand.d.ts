import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { RegisterStreamConsumerInput, RegisterStreamConsumerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterStreamConsumerCommandInput = RegisterStreamConsumerInput;
export declare type RegisterStreamConsumerCommandOutput = RegisterStreamConsumerOutput & __MetadataBearer;
export declare class RegisterStreamConsumerCommand extends $Command<RegisterStreamConsumerCommandInput, RegisterStreamConsumerCommandOutput, KinesisClientResolvedConfig> {
    readonly input: RegisterStreamConsumerCommandInput;
    constructor(input: RegisterStreamConsumerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterStreamConsumerCommandInput, RegisterStreamConsumerCommandOutput>;
    private serialize;
    private deserialize;
}
