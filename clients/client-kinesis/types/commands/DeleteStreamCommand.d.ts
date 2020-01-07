import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DeleteStreamInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteStreamCommandInput = DeleteStreamInput;
export declare type DeleteStreamCommandOutput = __MetadataBearer;
export declare class DeleteStreamCommand extends $Command<DeleteStreamCommandInput, DeleteStreamCommandOutput, KinesisClientResolvedConfig> {
    readonly input: DeleteStreamCommandInput;
    constructor(input: DeleteStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStreamCommandInput, DeleteStreamCommandOutput>;
    private serialize;
    private deserialize;
}
