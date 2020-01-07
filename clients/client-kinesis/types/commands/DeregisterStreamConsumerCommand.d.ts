import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DeregisterStreamConsumerInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterStreamConsumerCommandInput = DeregisterStreamConsumerInput;
export declare type DeregisterStreamConsumerCommandOutput = __MetadataBearer;
export declare class DeregisterStreamConsumerCommand extends $Command<DeregisterStreamConsumerCommandInput, DeregisterStreamConsumerCommandOutput, KinesisClientResolvedConfig> {
    readonly input: DeregisterStreamConsumerCommandInput;
    constructor(input: DeregisterStreamConsumerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterStreamConsumerCommandInput, DeregisterStreamConsumerCommandOutput>;
    private serialize;
    private deserialize;
}
